"use client";

import {
  backgroundRoot,
  canvasElement,
  canvasHidden,
  canvasReady,
  fallbackImageAsset,
  fallbackLayer,
} from "@/components/liquidShaderBackground/liquidShaderBackground.css";
import {
  LIQUID_FRAGMENT_SHADER,
  LIQUID_VERTEX_SHADER,
} from "@/components/liquidShaderBackground/liquidShaderGlsl";
import { notifyLiquidBackgroundReveal } from "@/lib/liquidBackgroundReveal";
import { LIQUID_BOOT_CANVAS_ID } from "@/lib/liquidBootScript";
import clsx from "clsx";
import Image from "next/image";
import { startTransition, useLayoutEffect, useRef, useState } from "react";
import * as THREE from "three";

const CLEAR = 0x0613d1;
const MAX_FRAME_DELTA = 1 / 30;

function stopLiquidBoot() {
  window.__liquidBoot?.stop();
  const boot = document.getElementById(LIQUID_BOOT_CANVAS_ID);
  // React 管理ノードは remove せず非表示に留める（再レンダーで空 canvas が復活するのを防ぐ）
  if (boot instanceof HTMLElement) boot.style.display = "none";
  delete window.__liquidBoot;
}

function bindLiquidPointer(
  mount: HTMLElement,
  pointerTarget: THREE.Vector2,
  uPointerStrength: { value: number },
) {
  const syncFromEvent = (ev: PointerEvent) => {
    const rect = mount.getBoundingClientRect();
    if (rect.width < 1 || rect.height < 1) return;
    const x = (ev.clientX - rect.left) / rect.width;
    const y = 1 - (ev.clientY - rect.top) / rect.height;
    pointerTarget.set(THREE.MathUtils.clamp(x, 0, 1), THREE.MathUtils.clamp(y, 0, 1));
    uPointerStrength.value = Math.min(0.33, uPointerStrength.value + 0.052);
  };

  window.addEventListener("pointermove", syncFromEvent, { passive: true });
  window.addEventListener("pointerdown", syncFromEvent, { passive: true });

  return () => {
    window.removeEventListener("pointermove", syncFromEvent);
    window.removeEventListener("pointerdown", syncFromEvent);
  };
}

function smoothPointerToward(current: THREE.Vector2, target: THREE.Vector2, delta: number) {
  const k = 1 - Math.exp(-delta * 3.0);
  current.lerp(target, k);
}

function decayPointerStrength(uPointerStrength: { value: number }, delta: number) {
  uPointerStrength.value *= Math.exp(-delta * 2.05);
}

function hasDrawableSize(el: HTMLElement) {
  return el.clientWidth >= 1 && el.clientHeight >= 1;
}

function advanceClock(clock: THREE.Clock, uTime: { value: number }, motion: number) {
  if (!clock.running) {
    clock.start();
    const delta = 1 / 60;
    uTime.value += delta * motion;
    return delta;
  }
  const delta = Math.min(clock.getDelta(), MAX_FRAME_DELTA);
  uTime.value += delta * motion;
  return delta;
}

function canCreateWebGl() {
  try {
    const probe = document.createElement("canvas");
    return !!(probe.getContext("webgl2") || probe.getContext("webgl"));
  } catch {
    return false;
  }
}

/**
 * 最初の paint は layout の同期 boot スクリプトが担当。
 * このコンポーネントは takeover 後のループ・ポインタを担う。
 */
export default function LiquidShaderBackground() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [useStaticFallback, setUseStaticFallback] = useState(false);
  const [threeReady, setThreeReady] = useState(false);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    if (!root || !canvas) return;

    let disposed = false;
    let frame = 0;
    let loopStarted = false;

    const showStaticFallback = () => {
      if (disposed) return;
      stopLiquidBoot();
      document.body.style.backgroundColor = "transparent";
      startTransition(() => setUseStaticFallback(true));
      notifyLiquidBackgroundReveal();
    };

    if (!canCreateWebGl()) {
      showStaticFallback();
      return;
    }

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: false,
        alpha: false,
        powerPreference: "high-performance",
        preserveDrawingBuffer: true,
      });
    } catch {
      showStaticFallback();
      return;
    }
    if (!renderer.getContext()) {
      renderer.dispose();
      showStaticFallback();
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
    renderer.setClearColor(CLEAR, 1);

    const setSize = () => {
      if (!hasDrawableSize(root)) return false;
      const w = root.clientWidth;
      const h = root.clientHeight;
      const pr = Math.min(window.devicePixelRatio, 2);
      uResolution.value.set(w * pr, h * pr);
      renderer.setPixelRatio(pr);
      renderer.setSize(w, h, false);
      return true;
    };

    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => {
      uMotion.value = mqReduce.matches ? 0 : 1;
    };
    syncMotion();
    mqReduce.addEventListener("change", syncMotion);

    const removePointer = bindLiquidPointer(root, pointerTarget, uPointerStrength);
    const clock = new THREE.Clock(false);

    const paint = () => {
      if (!hasDrawableSize(root)) return false;
      const motion = mqReduce.matches ? 0 : 1;
      const delta = advanceClock(clock, uTime, motion);
      smoothPointerToward(uPointer.value, pointerTarget, delta);
      decayPointerStrength(uPointerStrength, delta);
      renderer.render(scene, camera);
      return true;
    };

    const startLoop = () => {
      if (loopStarted || disposed) return;
      loopStarted = true;
      const tick = () => {
        frame = requestAnimationFrame(tick);
        paint();
      };
      frame = requestAnimationFrame(tick);
    };

    const takeOver = () => {
      if (disposed) return false;
      if (!setSize() || !paint()) return false;
      // boot を消す前に Three canvas を見せる（間に body 単色が挟まないように）
      canvas.classList.add(canvasReady);
      setThreeReady(true);
      stopLiquidBoot();
      notifyLiquidBackgroundReveal();
      startLoop();
      return true;
    };

    if (!takeOver()) {
      const bootObserver = new ResizeObserver(() => {
        if (takeOver()) bootObserver.disconnect();
      });
      bootObserver.observe(root);
      return () => {
        disposed = true;
        bootObserver.disconnect();
        cancelAnimationFrame(frame);
        removePointer();
        mqReduce.removeEventListener("change", syncMotion);
        setUseStaticFallback(false);
        geometry.dispose();
        material.dispose();
        renderer.dispose();
      };
    }

    const onResize = () => {
      setSize();
      paint();
    };
    window.addEventListener("resize", onResize);
    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(root);

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      removePointer();
      mqReduce.removeEventListener("change", syncMotion);
      window.removeEventListener("resize", onResize);
      resizeObserver.disconnect();
      setUseStaticFallback(false);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={rootRef} className={backgroundRoot} aria-hidden>
      {useStaticFallback && (
        <div className={fallbackLayer}>
          <Image
            src="/images/bg.avif"
            alt=""
            fill
            priority
            sizes="100vw"
            className={fallbackImageAsset}
          />
        </div>
      )}
      <canvas
        ref={canvasRef}
        className={clsx(
          canvasElement,
          threeReady && canvasReady,
          useStaticFallback && canvasHidden,
        )}
      />
    </div>
  );
}
