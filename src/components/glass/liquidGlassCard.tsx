"use client";

import { getBezelMap } from "@/components/glass/bezelMap";
import { liquidGlassOptions } from "@/components/glass/glass.constants";
import { glassBackdrop, glassCard, glassContent, glassRim } from "@/components/glass/glass.css";
import { LiquidGlassFilter } from "@/components/glass/liquidGlassFilter";
import clsx from "clsx";
import { useCallback, useId, useLayoutEffect, useRef, type RefObject } from "react";

type LiquidGlassCardProps = {
  children: React.ReactNode;
  className?: string;
  containerRef?: RefObject<HTMLElement | null>;
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

let lastPointer: { clientX: number; clientY: number } | null = null;

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
  const filterRef = useRef<SVGFilterElement>(null);
  const mapImageRef = useRef<SVGFEImageElement>(null);

  const { cornerRadius, bezelWidth, refractionPx, aberration } = liquidGlassOptions;

  // React は View Transition 中の useEffect を遷移の終わりまで遅らせるので、遷移先のページで屈折が出遅れないよう layout effect で寸法を測ってフィルターへ直接書き込む
  useLayoutEffect(() => {
    const element = cardRef.current;
    const filter = filterRef.current;
    const mapImage = mapImageRef.current;
    if (!element || !filter || !mapImage || !supportsBackdropUrlFilter()) {
      return;
    }

    let timer: number | undefined;
    let builtSize = "";
    let version = 0;
    const apply = (width: number, height: number) => {
      const size = `${width}x${height}`;
      if (width === 0 || height === 0 || size === builtSize) {
        return;
      }
      const url = getBezelMap(width, height, cornerRadius, bezelWidth);
      if (!url) {
        return;
      }
      builtSize = size;
      for (const target of [filter, mapImage]) {
        target.setAttribute("width", `${width}`);
        target.setAttribute("height", `${height}`);
      }
      mapImage.setAttribute("href", url);
      // Chrome は参照中のフィルターの属性を書き換えても backdrop-filter を組み直さず、古い範囲の外の縁が素通しのまま残る。
      // 遷移直後はスクロールバーなどで幅が少し変わるので、書き換えるたびに id を変えて別のフィルターとして参照させる
      version += 1;
      filter.id = `${filterId}-${version}`;
      element.style.setProperty("--glass-refraction", `url(#${filter.id})`);
    };

    // offsetWidth は整数に丸められ、88vw などの端数の幅だとフィルター範囲の外に 1px 未満の列が残って縁が素通しになる。
    // getBoundingClientRect は View Transition 中の transform を含むので、端数を保つレイアウト寸法を使う
    const computed = getComputedStyle(element);
    apply(parseFloat(computed.width), parseFloat(computed.height));

    const observer = new ResizeObserver(([entry]) => {
      const [box] = entry.borderBoxSize;
      window.clearTimeout(timer);
      timer = window.setTimeout(() => apply(box.inlineSize, box.blockSize), MAP_REBUILD_DELAY_MS);
    });
    observer.observe(element);

    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
      element.style.removeProperty("--glass-refraction");
    };
  }, [cornerRadius, bezelWidth, filterId]);

  const updateRim = useCallback(
    (clientX: number, clientY: number) => {
      const container = containerRef?.current ?? cardRef.current;
      const card = cardRef.current;
      if (!container || !card) {
        return;
      }

      const rect = container.getBoundingClientRect();
      const x = ((clientX - (rect.left + rect.width / 2)) / rect.width) * 100;
      const y = ((clientY - (rect.top + rect.height / 2)) / rect.height) * 100;

      card.style.setProperty("--glass-rim-background", rimGradient(x, y));
    },
    [containerRef],
  );

  // ページを移るとカードが作り直され、縁の光がマウスを動かすまで既定の淡い光に戻って縁が消えたように見えるので、
  // 最後のカーソル位置からすぐに描く。遷移中は useEffect が遷移の終わりまで遅れるので layout effect で始める
  useLayoutEffect(() => {
    const container = containerRef?.current ?? cardRef.current;
    if (!container) {
      return;
    }

    if (lastPointer) {
      updateRim(lastPointer.clientX, lastPointer.clientY);
    }

    const handleMouseMove = (event: MouseEvent) => {
      lastPointer = { clientX: event.clientX, clientY: event.clientY };
      updateRim(event.clientX, event.clientY);
    };
    container.addEventListener("mousemove", handleMouseMove);

    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [containerRef, updateRim]);

  return (
    <div ref={cardRef} className={clsx(glassCard, className)}>
      <LiquidGlassFilter
        id={filterId}
        filterRef={filterRef}
        mapImageRef={mapImageRef}
        refractionPx={refractionPx}
        aberration={aberration}
      />
      <span className={glassBackdrop} />
      <span className={glassRim} />
      <div className={glassContent}>{children}</div>
    </div>
  );
}
