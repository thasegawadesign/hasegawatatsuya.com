import { LIQUID_FRAGMENT_SHADER } from "@/components/liquidShaderBackground/liquidShaderGlsl";

const BOOT_VERTEX_SHADER = `
precision highp float;
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

/**
 * React / Three より前に同期実行し、最初の paint 前にシェーダーを描く。
 * timeOffset はリロードごとに位相を少しずらす（0〜約60秒）。
 */
export function getLiquidBootScript(): string {
  const vs = JSON.stringify(BOOT_VERTEX_SHADER);
  const fs = JSON.stringify(LIQUID_FRAGMENT_SHADER);

  return `(function(){
  var canvas=document.getElementById("liquid-boot-canvas");
  if(!canvas)return;

  function showStaticFallback(){
    canvas.style.backgroundImage="url(/images/bg.avif)";
    canvas.style.backgroundSize="cover";
    canvas.style.backgroundPosition="center";
    canvas.style.backgroundRepeat="no-repeat";
    try{document.body.style.backgroundColor="transparent";}catch(e){}
  }

  var gl=canvas.getContext("webgl",{antialias:false,alpha:false,preserveDrawingBuffer:true})||canvas.getContext("experimental-webgl",{antialias:false,alpha:false,preserveDrawingBuffer:true});
  if(!gl){showStaticFallback();return;}

  function compile(type,src){
    var s=gl.createShader(type);
    if(!s)return null;
    gl.shaderSource(s,src);
    gl.compileShader(s);
    if(!gl.getShaderParameter(s,gl.COMPILE_STATUS)){gl.deleteShader(s);return null;}
    return s;
  }

  var vsh=compile(gl.VERTEX_SHADER,${vs});
  var fsh=compile(gl.FRAGMENT_SHADER,${fs});
  if(!vsh||!fsh){showStaticFallback();return;}
  var prog=gl.createProgram();
  if(!prog){showStaticFallback();return;}
  gl.attachShader(prog,vsh);
  gl.attachShader(prog,fsh);
  gl.linkProgram(prog);
  if(!gl.getProgramParameter(prog,gl.LINK_STATUS)){showStaticFallback();return;}
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

  var start=performance.now();
  var timeOffset=Math.random()*60;
  var reduced=false;
  try{reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;}catch(e){}
  var raf=0;
  var stopped=false;

  function currentTime(){
    return timeOffset+(performance.now()-start)/1000;
  }

  function resize(){
    var dpr=Math.min(window.devicePixelRatio||1,2);
    var w=window.innerWidth|0;
    var h=window.innerHeight|0;
    if(w<1||h<1)return false;
    if(canvas.width!==w*dpr||canvas.height!==h*dpr){
      canvas.width=w*dpr;
      canvas.height=h*dpr;
    }
    gl.viewport(0,0,canvas.width,canvas.height);
    gl.uniform2f(uRes,canvas.width,canvas.height);
    return true;
  }

  function draw(t){
    gl.uniform1f(uTime,t);
    gl.uniform1f(uMotion,reduced?0:1);
    gl.uniform2f(uPointer,0.5,0.5);
    gl.uniform1f(uPointerStrength,0);
    gl.drawArrays(gl.TRIANGLES,0,6);
  }

  function frame(){
    if(stopped)return;
    if(resize())draw(currentTime());
    raf=requestAnimationFrame(frame);
  }

  gl.clearColor(0.0235,0.0745,0.8196,1);
  if(resize())draw(timeOffset+1/60);
  raf=requestAnimationFrame(frame);

  window.__liquidBoot={
    canvas:canvas,
    time:currentTime,
    stop:function(){
      stopped=true;
      if(raf)cancelAnimationFrame(raf);
    }
  };
})();`;
}

export const LIQUID_BOOT_CANVAS_ID = "liquid-boot-canvas";
