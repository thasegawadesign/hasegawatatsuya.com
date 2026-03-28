"use client";

import {
  canvasRoot,
  canvasRootReady,
} from "@/components/liquidShaderBackground/liquidShaderBackground.css";
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
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { uniform, uv, wgslFn } from "three/tsl";
import { MeshBasicNodeMaterial, WebGPURenderer } from "three/webgpu";

const CLEAR = 0x0613d1;

function bindLiquidPointer(
  mount: HTMLElement,
  pointerTarget: THREE.Vector2,
  uPointerStrength: { value: number }
) {
  const syncFromEvent = (ev: PointerEvent) => {
    const rect = mount.getBoundingClientRect();
    if (rect.width < 1 || rect.height < 1) return;
    const x = (ev.clientX - rect.left) / rect.width;
    const y = 1 - (ev.clientY - rect.top) / rect.height;
    pointerTarget.set(
      THREE.MathUtils.clamp(x, 0, 1),
      THREE.MathUtils.clamp(y, 0, 1)
    );
    uPointerStrength.value = Math.min(0.33, uPointerStrength.value + 0.052);
  };

  window.addEventListener("pointermove", syncFromEvent, { passive: true });
  window.addEventListener("pointerdown", syncFromEvent, { passive: true });

  return () => {
    window.removeEventListener("pointermove", syncFromEvent);
    window.removeEventListener("pointerdown", syncFromEvent);
  };
}

function smoothPointerToward(
  current: THREE.Vector2,
  target: THREE.Vector2,
  delta: number
) {
  const k = 1 - Math.exp(-delta * 3.0);
  current.lerp(target, k);
}

function decayPointerStrength(
  uPointerStrength: { value: number },
  delta: number
) {
  uPointerStrength.value *= Math.exp(-delta * 2.05);
}

type WgslFnInclude = NonNullable<Parameters<typeof wgslFn>[1]>[number];

function scheduleRevealAfterNextFrame(
  onReveal: () => void,
  getDisposed: () => boolean
) {
  requestAnimationFrame(() => {
    if (!getDisposed()) onReveal();
  });
}

export default function LiquidShaderBackground() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [canvasReady, setCanvasReady] = useState(false);

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
      const uPointer = { value: new THREE.Vector2(0.5, 0.5) };
      const pointerTarget = new THREE.Vector2(0.5, 0.5);
      const uPointerStrength = { value: 0 };

      const material = new THREE.RawShaderMaterial({
        vertexShader: LIQUID_VERTEX_SHADER,
        fragmentShader: LIQUID_FRAGMENT_SHADER,
        uniforms: { uTime, uResolution, uMotion, uPointer, uPointerStrength },
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
      scheduleRevealAfterNextFrame(
        () => setCanvasReady(true),
        () => disposed
      );

      const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
      const syncMotion = () => {
        uMotion.value = mqReduce.matches ? 0 : 1;
      };
      syncMotion();
      mqReduce.addEventListener("change", syncMotion);

      const removePointer = bindLiquidPointer(
        mount,
        pointerTarget,
        uPointerStrength
      );

      let frame = 0;
      const clock = new THREE.Clock();
      const loop = () => {
        frame = requestAnimationFrame(loop);
        const delta = clock.getDelta();
        uTime.value += delta * (mqReduce.matches ? 0 : 1);
        smoothPointerToward(uPointer.value, pointerTarget, delta);
        decayPointerStrength(uPointerStrength, delta);
        renderer.render(scene, camera);
      };
      loop();

      const onResize = () => setSize();
      window.addEventListener("resize", onResize);

      teardown = () => {
        cancelAnimationFrame(frame);
        removePointer();
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
        const uPointer = uniform(new THREE.Vector2(0.5, 0.5));
        const pointerTarget = new THREE.Vector2(0.5, 0.5);
        const uPointerStrength = uniform(0);

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
          uPointer,
          uPointerStrength,
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
        scheduleRevealAfterNextFrame(
          () => setCanvasReady(true),
          () => disposed
        );

        const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
        const syncMotion = () => {
          uMotion.value = mqReduce.matches ? 0 : 1;
        };
        syncMotion();
        mqReduce.addEventListener("change", syncMotion);

        const removePointer = bindLiquidPointer(
          mount,
          pointerTarget,
          uPointerStrength
        );

        const clock = new THREE.Clock();

        r.setAnimationLoop(() => {
          const delta = clock.getDelta();
          uTime.value += delta * (mqReduce.matches ? 0 : 1);
          smoothPointerToward(uPointer.value, pointerTarget, delta);
          decayPointerStrength(uPointerStrength, delta);
          r.render(scene, camera);
        });

        const onResize = () => setSize();
        window.addEventListener("resize", onResize);

        teardown = () => {
          removePointer();
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
      setCanvasReady(false);
      teardown?.();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={clsx(canvasRoot, canvasReady && canvasRootReady)}
      aria-hidden
    />
  );
}
