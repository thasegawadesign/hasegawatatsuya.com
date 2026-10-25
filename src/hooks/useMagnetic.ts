import { createSpring, type Spring, type SpringConfig } from "@/lib/spring";
import { useCallback, useEffect, useRef, type PointerEvent } from "react";

interface MagneticOptions {
  readonly strength?: number;
  readonly scale?: number;
  readonly spring?: SpringConfig;
}

const DEFAULT_SPRING: SpringConfig = { tension: 300, friction: 20 };

export const useMagnetic = <T extends HTMLElement>({
  strength = 0.6,
  scale = 1.28,
  spring = DEFAULT_SPRING,
}: MagneticOptions = {}) => {
  const ref = useRef<T>(null);
  const springRef = useRef<Spring<"x" | "y" | "scale"> | null>(null);
  const { tension, friction, mass, precision } = spring;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const magnet = createSpring(
      el,
      { x: 0, y: 0, scale: 1 },
      { tension, friction, mass, precision },
    );
    springRef.current = magnet;
    return () => {
      magnet.stop();
      springRef.current = null;
    };
  }, [tension, friction, mass, precision]);

  // タップでは leave が来ず拡大したまま残るので、吸い付きはマウス操作だけに反応させる
  const onPointerMove = useCallback(
    (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      springRef.current?.start({ x: dx * strength, y: dy * strength, scale });
    },
    [strength, scale],
  );

  const onPointerLeave = useCallback(() => {
    springRef.current?.start({ x: 0, y: 0, scale: 1 });
  }, []);

  return { ref, onPointerMove, onPointerLeave };
};
