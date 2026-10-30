"use client";

import { createBezelMap } from "@/components/glass/bezelMap";
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

type BezelMap = {
  url: string;
  width: number;
  height: number;
};

// 読み込み中は画像やフォントで高さが何度も変わるので、落ち着いてからマップを作り直す
const MAP_REBUILD_DELAY_MS = 160;

// backdrop-filter に SVG フィルターを渡せるのは Chromium だけ。Safari と Firefox は url() を含む宣言ごと捨ててぼかしまで消える
function supportsBackdropUrlFilter() {
  const { userAgentData } = navigator as Navigator & {
    userAgentData?: { brands: { brand: string }[] };
  };
  return userAgentData?.brands.some(({ brand }) => brand === "Chromium") ?? false;
}

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
  const [bezelMap, setBezelMap] = useState<BezelMap | null>(null);

  const { cornerRadius, bezelWidth, refractionPx, aberration } = liquidGlassOptions;

  useEffect(() => {
    const element = cardRef.current;
    if (!element || !supportsBackdropUrlFilter()) {
      return;
    }

    let timer: number | undefined;
    let builtSize = "";
    const rebuild = (width: number, height: number) => {
      const size = `${width}x${height}`;
      if (width === 0 || height === 0 || size === builtSize) {
        return;
      }
      const url = createBezelMap(width, height, cornerRadius, bezelWidth);
      if (url) {
        builtSize = size;
        setBezelMap({ url, width, height });
      }
    };

    // offsetWidth は整数に丸められ、88vw などの端数の幅だとフィルター範囲の外に 1px 未満の列が残って縁が素通しになる。
    // getBoundingClientRect は View Transition 中の transform を含むので、端数を保つレイアウト寸法の borderBoxSize を使う
    const observer = new ResizeObserver(([entry]) => {
      const [box] = entry.borderBoxSize;
      window.clearTimeout(timer);
      if (!builtSize) {
        rebuild(box.inlineSize, box.blockSize);
        return;
      }
      timer = window.setTimeout(() => rebuild(box.inlineSize, box.blockSize), MAP_REBUILD_DELAY_MS);
    });
    observer.observe(element);

    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
    };
  }, [cornerRadius, bezelWidth]);

  useLayoutEffect(() => {
    const element = cardRef.current;
    if (!element) {
      return;
    }

    if (bezelMap) {
      element.style.setProperty("--glass-refraction", `url(#${filterId})`);
    } else {
      element.style.removeProperty("--glass-refraction");
    }
  }, [bezelMap, filterId]);

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
      {bezelMap ? (
        <LiquidGlassFilter
          id={filterId}
          width={bezelMap.width}
          height={bezelMap.height}
          mapUrl={bezelMap.url}
          refractionPx={refractionPx}
          aberration={aberration}
        />
      ) : null}
      <span className={glassBackdrop} />
      <span className={glassRim} />
      <div className={glassContent}>{children}</div>
    </div>
  );
}
