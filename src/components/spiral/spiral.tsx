"use client";

import { circle, circleBox } from "@/components/spiral/spiral.css";
import clsx from "clsx";
import { useEffect, useMemo, useState } from "react";

export default function Spiral() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const circles = useMemo(() => {
    const length =
      width <= 767
        ? 6
        : width <= 1023
          ? 12
          : width <= 1535
            ? 14
            : width >= 1920
              ? 22
              : 18;
    return Array.from({ length: length }, (_, i) => ({
      size: 20 + i * 144,
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
