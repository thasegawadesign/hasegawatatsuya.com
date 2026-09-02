"use client";

import { liquidGlassOptions } from "@/components/glass/glass.constants";
import { glassBackdrop, glassCard, glassContent, glassRim } from "@/components/glass/glass.css";
import { LiquidGlassFilter } from "@/components/glass/liquidGlassFilter";
import clsx from "clsx";
import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type RefObject,
} from "react";

type LiquidGlassCardProps = {
  children: React.ReactNode;
  className?: string;
  containerRef?: RefObject<HTMLElement | null>;
};

function rimGradient(x: number, y: number) {
  return `linear-gradient(
    ${135 + x * 1.2}deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, ${0.12 + Math.abs(x) * 0.008}) ${Math.max(10, 33 + y * 0.3)}%,
    rgba(255, 255, 255, ${0.4 + Math.abs(x) * 0.012}) ${Math.min(90, 66 + y * 0.4)}%,
    rgba(255, 255, 255, 0) 100%
  )`;
}

export function LiquidGlassCard({ children, className, containerRef }: LiquidGlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rawFilterId = useId();
  const filterId = `liquid-glass-${rawFilterId.replace(/:/g, "")}`;
  const [filterReady, setFilterReady] = useState(false);

  const { displacementScale, aberrationIntensity, mode } = liquidGlassOptions;

  const isFirefox =
    typeof navigator !== "undefined" && navigator.userAgent.toLowerCase().includes("firefox");

  const updateSize = useCallback(() => {
    const element = cardRef.current;
    if (!element) {
      return;
    }

    const rect = element.getBoundingClientRect();
    setFilterReady(rect.width > 0 && rect.height > 0);
  }, []);

  useLayoutEffect(() => {
    updateSize();
  }, [updateSize]);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) {
      return;
    }

    const observer = new ResizeObserver(updateSize);
    observer.observe(element);

    return () => observer.disconnect();
  }, [updateSize]);

  useLayoutEffect(() => {
    const element = cardRef.current;
    if (!element) {
      return;
    }

    element.style.setProperty(
      "--glass-displacement-filter",
      !isFirefox && filterReady ? `url(#${filterId})` : "none",
    );
  }, [filterId, filterReady, isFirefox]);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      const container = containerRef?.current ?? cardRef.current;
      const card = cardRef.current;
      if (!container || !card) {
        return;
      }

      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - (rect.left + rect.width / 2)) / rect.width) * 100;
      const y = ((event.clientY - (rect.top + rect.height / 2)) / rect.height) * 100;

      card.style.setProperty("--glass-rim-background", rimGradient(x, y));
    },
    [containerRef],
  );

  useEffect(() => {
    const container = containerRef?.current ?? cardRef.current;
    if (!container) {
      return;
    }

    container.addEventListener("mousemove", handleMouseMove);

    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [containerRef, handleMouseMove]);

  return (
    <div ref={cardRef} className={clsx(glassCard, className)}>
      {filterReady ? (
        <LiquidGlassFilter
          id={filterId}
          displacementScale={displacementScale}
          aberrationIntensity={aberrationIntensity}
          mode={mode}
        />
      ) : null}
      <span className={glassBackdrop} />
      <span className={glassRim} />
      <div className={glassContent}>{children}</div>
    </div>
  );
}
