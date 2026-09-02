"use client";

import Bubble from "@/components/canvasui/Bubble";
import { container } from "@/components/bubbleCursor/bubbleCursor.css";
import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

function subscribeMediaQuery(query: string, callback: () => void) {
  const mq = window.matchMedia(query);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function useMediaQuery(query: string, fallback = false) {
  return useSyncExternalStore(
    (callback) => subscribeMediaQuery(query, callback),
    () => window.matchMedia(query).matches,
    () => fallback,
  );
}

export default function BubbleCursor() {
  const pointerFine = useMediaQuery("(pointer: fine)");
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  if (!pointerFine || reducedMotion) return null;

  return (
    <Bubble
      global
      className={container}
      size={32}
      trail={24}
      follow={0.42}
      blend={11}
      refraction={120}
      magnification={1.65}
      dispersion={1.45}
      frost={0.02}
      shine={0.5}
      rim={0.4}
      iridescence={0.9}
      intensity={1}
      tint={[0.92, 0.97, 1]}
      tintStrength={0.1}
      fallbackOpacity={1}
      fallbackFill={1}
      colorA={[0.55, 0.76, 1]}
      colorB={[0.34, 0.54, 0.86]}
    />
  );
}
