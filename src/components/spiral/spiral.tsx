import { circle, circleBox } from "@/components/spiral/spiral.css";
import clsx from "clsx";
import { useMemo } from "react";

export default function Spiral() {
  const circles = useMemo(() => {
    return Array.from({ length: 28 }, (_, i) => ({
      size: 20 + i * 20,
      delay: i * 0.2,
    }));
  }, []);

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
