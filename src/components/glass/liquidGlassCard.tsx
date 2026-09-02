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

export function LiquidGlassCard({ children, className, containerRef }: LiquidGlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rawFilterId = useId();
  const filterId = `liquid-glass-${rawFilterId.replace(/:/g, "")}`;
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [filterReady, setFilterReady] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const { displacementScale, aberrationIntensity, mode } = liquidGlassOptions;

  const isFirefox =
    typeof navigator !== "undefined" && navigator.userAgent.toLowerCase().includes("firefox");

  const updateSize = useCallback(() => {
    const element = cardRef.current;
    if (!element) {
      return;
    }

    const rect = element.getBoundingClientRect();
    const width = Math.round(rect.width);
    const height = Math.round(rect.height);

    setSize({ width, height });
    setFilterReady(width > 0 && height > 0);
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

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      const container = containerRef?.current ?? cardRef.current;
      if (!container) {
        return;
      }

      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      setMouseOffset({
        x: ((event.clientX - centerX) / rect.width) * 100,
        y: ((event.clientY - centerY) / rect.height) * 100,
      });
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

  const rimBackground = `linear-gradient(
    ${135 + mouseOffset.x * 1.2}deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, ${0.12 + Math.abs(mouseOffset.x) * 0.008}) ${Math.max(10, 33 + mouseOffset.y * 0.3)}%,
    rgba(255, 255, 255, ${0.4 + Math.abs(mouseOffset.x) * 0.012}) ${Math.min(90, 66 + mouseOffset.y * 0.4)}%,
    rgba(255, 255, 255, 0) 100%
  )`;

  const displacementFilter = !isFirefox && filterReady ? `url(#${filterId})` : undefined;

  return (
    <div ref={cardRef} className={clsx(glassCard, className)}>
      {filterReady ? (
        <LiquidGlassFilter
          id={filterId}
          width={size.width}
          height={size.height}
          displacementScale={displacementScale}
          aberrationIntensity={aberrationIntensity}
          mode={mode}
        />
      ) : null}
      <span
        className={glassBackdrop}
        style={{
          filter: displacementFilter,
        }}
      />
      <span className={glassRim} style={{ background: rimBackground }} />
      <div className={glassContent}>{children}</div>
    </div>
  );
}
