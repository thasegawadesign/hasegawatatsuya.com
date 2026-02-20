"use client";

import { circle, circleBox } from "@/components/spiral/spiral.css";
import { useWindowWidth } from "@react-hook/window-size";
import clsx from "clsx";
import { useMemo } from "react";

export default function Spiral() {
  const width = useWindowWidth();

  const circles = useMemo(() => {
    const length =
      width <= 767
        ? 12
        : width <= 1023
          ? 16
          : width <= 1535
            ? 20
            : width >= 1920
              ? 28
              : 24;
    return Array.from({ length: length }, (_, i) => ({
      size: 20 + i * 96,
      delay: i * 0.2,
    }));
  }, [width]);

  return (
    <div className={clsx(circleBox)}>
      {circles.map(({ size, delay }, i) => (
        <div
          key={i}
          className={clsx(circle)}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            animationDelay: `${delay}s`,
          }}
        />
      ))}
    </div>
  );
}
