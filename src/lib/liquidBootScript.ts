import { LIQUID_FRAGMENT_SHADER } from "@/components/liquidShaderBackground/liquidShaderGlsl";
import { MAX_CANVAS_PIXEL_RATIO } from "@/lib/canvasPixelRatio";
import { LIQUID_BOOT_CANVAS_ID } from "@/lib/liquidBootCanvasId";
import { minifyShader } from "@/lib/minifyShader";
import { transformSync } from "esbuild";

export { LIQUID_BOOT_CANVAS_ID };

const BOOT_VERTEX_SHADER = minifyShader(`
precision highp float;
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`);

function minifyBootScript(code: string): string {
  if (process.env.NODE_ENV !== "production") {
    return code;
  }

  const result = transformSync(code, {
    loader: "js",
    minify: true,
    target: "es2018",
  });
  return result.code.trim();
}

const LIQUID_CORE = `function createLiquid(gl,vs,fs){
  function compile(type,src){
    var s=gl.createShader(type);
    if(!s)return null;
    gl.shaderSource(s,src);
    gl.compileShader(s);
    if(!gl.getShaderParameter(s,gl.COMPILE_STATUS)){gl.deleteShader(s);return null;}
    return s;
  }
  var vsh=compile(gl.VERTEX_SHADER,vs);
  var fsh=compile(gl.FRAGMENT_SHADER,fs);
  if(!vsh||!fsh)return null;
  var prog=gl.createProgram();
  if(!prog)return null;
  gl.attachShader(prog,vsh);
  gl.attachShader(prog,fsh);
  gl.linkProgram(prog);
  if(!gl.getProgramParameter(prog,gl.LINK_STATUS))return null;
  gl.useProgram(prog);

  var buf=gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER,buf);
  gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([
    -1,-1,0,0, 1,-1,1,0, -1,1,0,1,
    -1,1,0,1, 1,-1,1,0, 1,1,1,1
  ]),gl.STATIC_DRAW);

  var aPos=gl.getAttribLocation(prog,"position");
  var aUv=gl.getAttribLocation(prog,"uv");
  gl.enableVertexAttribArray(aPos);
  gl.enableVertexAttribArray(aUv);
  gl.vertexAttribPointer(aPos,2,gl.FLOAT,false,16,0);
  gl.vertexAttribPointer(aUv,2,gl.FLOAT,false,16,8);

  var uTime=gl.getUniformLocation(prog,"uTime");
  var uRes=gl.getUniformLocation(prog,"uResolution");
  var uMotion=gl.getUniformLocation(prog,"uMotion");
  var uPointer=gl.getUniformLocation(prog,"uPointer");
  var uPointerStrength=gl.getUniformLocation(prog,"uPointerStrength");
  gl.clearColor(0.0235,0.0745,0.8196,1);

  return {
    resize:function(w,h){
      if(w<1||h<1)return false;
      var c=gl.canvas;
      if(c.width!==w||c.height!==h){c.width=w;c.height=h;}
      gl.viewport(0,0,w,h);
      gl.uniform2f(uRes,w,h);
      return true;
    },
    draw:function(t,reduced){
      gl.uniform1f(uTime,t);
      gl.uniform1f(uMotion,reduced?0:1);
      gl.uniform2f(uPointer,0.5,0.5);
      gl.uniform1f(uPointerStrength,0);
      gl.drawArrays(gl.TRIANGLES,0,6);
    }
  };
}`;

const LIQUID_WORKER = `${LIQUID_CORE}
var liquid=null,w=1,h=1,timeOffset=0,epoch=0,reduced=false;
var nextFrame=self.requestAnimationFrame?function(f){self.requestAnimationFrame(f);}:function(f){setTimeout(f,16);};
function loop(){
  if(liquid.resize(w,h))liquid.draw(timeOffset+(performance.timeOrigin+performance.now()-epoch)/1000,reduced);
  nextFrame(loop);
}
self.onmessage=function(e){
  var d=e.data;
  if(d.type==="init"){
    var gl=d.canvas.getContext("webgl",{antialias:false,alpha:false});
    liquid=gl&&createLiquid(gl,d.vs,d.fs);
    if(!liquid){self.postMessage("fail");return;}
    timeOffset=d.timeOffset;epoch=d.epoch;reduced=d.reduced;w=d.w;h=d.h;
    loop();
    self.postMessage("ready");
  }else if(d.type==="resize"){
    w=d.w;h=d.h;
  }
};`;

/**
 * React / Three より前に同期実行し、最初の paint 前にシェーダーを描く。
 * timeOffset はリロードごとに位相を少しずらす（0〜約60秒）。
 * 最初の paint 直後はハイドレーションでメインスレッドが 1 秒近く塞がり、メインスレッドの rAF だけでは静止画に見えるため、
 * 以降の描画は Worker（OffscreenCanvas）に任せる。最初の 1 枚をメインスレッドで描くのは、
 * transfer した canvas が Worker の最初のフレームまで透明で、それだけだと一瞬背景色が見えるから。
 */
export function getLiquidBootScript(): string {
  const canvasId = JSON.stringify(LIQUID_BOOT_CANVAS_ID);
  const vs = JSON.stringify(BOOT_VERTEX_SHADER);
  const fs = JSON.stringify(LIQUID_FRAGMENT_SHADER);
  const workerSource = JSON.stringify(minifyBootScript(LIQUID_WORKER));

  const code = `(function(){
  var canvas=document.getElementById(${canvasId});
  if(!canvas)return;

  function showStaticFallback(){
    canvas.style.backgroundImage="url(/images/bg.avif)";
    canvas.style.backgroundSize="cover";
    canvas.style.backgroundPosition="center";
    canvas.style.backgroundRepeat="no-repeat";
    try{document.body.style.backgroundColor="transparent";}catch(e){}
  }

  ${LIQUID_CORE}

  // Worker とメインスレッドで performance.timeOrigin が異なるので、絶対時刻（ms）で起点を共有する
  var epoch=performance.timeOrigin+performance.now();
  var timeOffset=Math.random()*60;
  var reduced=false;
  try{reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;}catch(e){}
  var raf=0;
  var stopped=false;
  var worker=null;
  var workerCanvas=null;

  function currentTime(){
    return timeOffset+(performance.timeOrigin+performance.now()-epoch)/1000;
  }

  function pixelSize(){
    var dpr=Math.min(window.devicePixelRatio||1,${MAX_CANVAS_PIXEL_RATIO});
    return {w:Math.floor((window.innerWidth|0)*dpr),h:Math.floor((window.innerHeight|0)*dpr)};
  }

  function frame(){
    if(stopped)return;
    var s=pixelSize();
    if(liquid.resize(s.w,s.h))liquid.draw(currentTime(),reduced);
    raf=requestAnimationFrame(frame);
  }

  function onResize(){
    if(worker){var s=pixelSize();worker.postMessage({type:"resize",w:s.w,h:s.h});}
  }

  function stopWorker(){
    window.removeEventListener("resize",onResize);
    if(worker){worker.terminate();worker=null;}
    if(workerCanvas&&workerCanvas.parentNode)workerCanvas.parentNode.removeChild(workerCanvas);
    workerCanvas=null;
  }

  function startWorker(){
    if(reduced||typeof Worker==="undefined"||!canvas.transferControlToOffscreen)return;
    try{
      var c=document.createElement("canvas");
      c.className=canvas.className;
      c.setAttribute("aria-hidden","true");
      var offscreen=c.transferControlToOffscreen();
      var url=URL.createObjectURL(new Blob([${workerSource}],{type:"text/javascript"}));
      worker=new Worker(url);
      URL.revokeObjectURL(url);
      workerCanvas=c;
      canvas.parentNode.insertBefore(c,canvas.nextSibling);
      worker.onmessage=function(e){
        if(e.data==="ready"){stopped=true;cancelAnimationFrame(raf);}
        else if(e.data==="fail")stopWorker();
      };
      worker.onerror=stopWorker;
      var s=pixelSize();
      worker.postMessage({type:"init",canvas:offscreen,vs:${vs},fs:${fs},timeOffset:timeOffset,epoch:epoch,reduced:reduced,w:s.w,h:s.h},[offscreen]);
      window.addEventListener("resize",onResize);
    }catch(e){stopWorker();}
  }

  // Worker の起動とシェーダーの準備には 100ms 以上かかるので、メインスレッドで 1 枚目を用意するより先に始めて重ねる
  startWorker();

  var gl=canvas.getContext("webgl",{antialias:false,alpha:false,preserveDrawingBuffer:true})||canvas.getContext("experimental-webgl",{antialias:false,alpha:false,preserveDrawingBuffer:true});
  var liquid=gl&&createLiquid(gl,${vs},${fs});
  if(!liquid){stopWorker();showStaticFallback();return;}

  var s0=pixelSize();
  if(liquid.resize(s0.w,s0.h))liquid.draw(currentTime(),reduced);
  raf=requestAnimationFrame(frame);

  window.__liquidBoot={
    canvas:canvas,
    time:currentTime,
    stop:function(){
      stopped=true;
      if(raf)cancelAnimationFrame(raf);
      stopWorker();
    }
  };
})();`;

  return minifyBootScript(code);
}
