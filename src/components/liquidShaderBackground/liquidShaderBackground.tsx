"use client";

import { canvasRoot } from "@/components/liquidShaderBackground/liquidShaderBackground.css";
import {
  LIQUID_FRAGMENT_SHADER,
  LIQUID_VERTEX_SHADER,
} from "@/components/liquidShaderBackground/liquidShaderGlsl";
import {
  LIQUID_WGSL_DOMAIN_WARP,
  LIQUID_WGSL_FBM,
  LIQUID_WGSL_FBM_RIDGED,
  LIQUID_WGSL_HASH,
  LIQUID_WGSL_HASH3,
  LIQUID_WGSL_HEIGHT_AT,
  LIQUID_WGSL_LIQUID_COLOR,
  LIQUID_WGSL_NOISE,
  LIQUID_WGSL_VORTEX_TWIST,
} from "@/components/liquidShaderBackground/liquidShaderWgsl";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { uniform, uv, wgslFn } from "three/tsl";
import { MeshBasicNodeMaterial, WebGPURenderer } from "three/webgpu";

const CLEAR = 0x0613d1;

/** `wgslFn` の戻り値に実行時は `functionNode` があるが型定義に無いため、includes 用に寄せる */
type WgslFnInclude = NonNullable<Parameters<typeof wgslFn>[1]>[number];

export default function LiquidShaderBackground() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let disposed = false;
    let teardown: (() => void) | undefined;

    const runWebGl = () => {
      let renderer: THREE.WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({
          antialias: false,
          alpha: false,
          powerPreference: "high-performance",
        });
      } catch {
        return;
      }

      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

      const geometry = new THREE.PlaneGeometry(2, 2);
      const uTime = { value: 0 };
      const uResolution = { value: new THREE.Vector2(1, 1) };
      const uMotion = { value: 1 };

      const material = new THREE.RawShaderMaterial({
        vertexShader: LIQUID_VERTEX_SHADER,
        fragmentShader: LIQUID_FRAGMENT_SHADER,
        uniforms: { uTime, uResolution, uMotion },
        depthTest: false,
        depthWrite: false,
      });

      scene.add(new THREE.Mesh(geometry, material));

      const setSize = () => {
        const w = mount.clientWidth;
        const h = mount.clientHeight;
        const pr = Math.min(window.devicePixelRatio, 2);
        uResolution.value.set(w * pr, h * pr);
        renderer.setPixelRatio(pr);
        renderer.setSize(w, h, false);
      };

      renderer.setClearColor(CLEAR, 1);
      mount.appendChild(renderer.domElement);
      setSize();

      const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
      const syncMotion = () => {
        uMotion.value = mqReduce.matches ? 0 : 1;
      };
      syncMotion();
      mqReduce.addEventListener("change", syncMotion);

      let frame = 0;
      const clock = new THREE.Clock();
      const loop = () => {
        frame = requestAnimationFrame(loop);
        uTime.value += clock.getDelta() * (mqReduce.matches ? 0 : 1);
        renderer.render(scene, camera);
      };
      loop();

      const onResize = () => setSize();
      window.addEventListener("resize", onResize);

      teardown = () => {
        cancelAnimationFrame(frame);
        mqReduce.removeEventListener("change", syncMotion);
        window.removeEventListener("resize", onResize);
        geometry.dispose();
        material.dispose();
        renderer.dispose();
        if (renderer.domElement.parentNode === mount) {
          mount.removeChild(renderer.domElement);
        }
      };
    };

    void (async () => {
      let r: WebGPURenderer;
      try {
        r = new WebGPURenderer({
          antialias: false,
          alpha: false,
          powerPreference: "high-performance",
        });
        await r.init();
      } catch {
        if (!disposed) runWebGl();
        return;
      }
      if (disposed) {
        r.dispose();
        return;
      }

      try {
        const uTime = uniform(0);
        const uResolution = uniform(new THREE.Vector2(1, 1));
        const uMotion = uniform(1);

        const hashFn = wgslFn(LIQUID_WGSL_HASH);
        const hash3Fn = wgslFn(LIQUID_WGSL_HASH3);
        const noiseFn = wgslFn(LIQUID_WGSL_NOISE, [
          hashFn as unknown as WgslFnInclude,
        ]);
        const fbmFn = wgslFn(LIQUID_WGSL_FBM, [
          noiseFn as unknown as WgslFnInclude,
        ]);
        const fbmRidgedFn = wgslFn(LIQUID_WGSL_FBM_RIDGED, [
          noiseFn as unknown as WgslFnInclude,
        ]);
        const domainWarpFn = wgslFn(LIQUID_WGSL_DOMAIN_WARP, [
          fbmFn as unknown as WgslFnInclude,
        ]);
        const vortexTwistFn = wgslFn(LIQUID_WGSL_VORTEX_TWIST);
        const heightAtFn = wgslFn(LIQUID_WGSL_HEIGHT_AT, [
          fbmFn as unknown as WgslFnInclude,
          fbmRidgedFn as unknown as WgslFnInclude,
        ]);

        const liquid = wgslFn(LIQUID_WGSL_LIQUID_COLOR, [
          hash3Fn as unknown as WgslFnInclude,
          fbmFn as unknown as WgslFnInclude,
          fbmRidgedFn as unknown as WgslFnInclude,
          domainWarpFn as unknown as WgslFnInclude,
          vortexTwistFn as unknown as WgslFnInclude,
          heightAtFn as unknown as WgslFnInclude,
        ]);
        const colorNode = liquid({
          vUv: uv(),
          uTime,
          uResolution,
          uMotion,
        });

        const material = new MeshBasicNodeMaterial({ colorNode });
        material.depthTest = false;
        material.depthWrite = false;

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const geometry = new THREE.PlaneGeometry(2, 2);
        scene.add(new THREE.Mesh(geometry, material));

        const setSize = () => {
          const w = mount.clientWidth;
          const h = mount.clientHeight;
          const pr = Math.min(window.devicePixelRatio, 2);
          uResolution.value.set(w * pr, h * pr);
          r.setPixelRatio(pr);
          r.setSize(w, h, false);
        };

        r.setClearColor(CLEAR, 1);
        if (disposed) {
          r.setAnimationLoop(null);
          geometry.dispose();
          material.dispose();
          r.dispose();
          return;
        }
        mount.appendChild(r.domElement);
        setSize();

        const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
        const syncMotion = () => {
          uMotion.value = mqReduce.matches ? 0 : 1;
        };
        syncMotion();
        mqReduce.addEventListener("change", syncMotion);

        const clock = new THREE.Clock();

        r.setAnimationLoop(() => {
          uTime.value += clock.getDelta() * (mqReduce.matches ? 0 : 1);
          r.render(scene, camera);
        });

        const onResize = () => setSize();
        window.addEventListener("resize", onResize);

        teardown = () => {
          mqReduce.removeEventListener("change", syncMotion);
          window.removeEventListener("resize", onResize);
          r.setAnimationLoop(null);
          geometry.dispose();
          material.dispose();
          r.dispose();
          if (r.domElement.parentNode === mount) {
            mount.removeChild(r.domElement);
          }
        };
      } catch {
        r.dispose();
        if (!disposed) runWebGl();
      }
    })();

    return () => {
      disposed = true;
      teardown?.();
    };
  }, []);

  return <div ref={mountRef} className={canvasRoot} aria-hidden />;
}
