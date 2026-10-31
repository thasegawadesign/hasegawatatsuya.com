"use client";

import { getBezelMap } from "@/components/glass/bezelMap";
import { liquidGlassOptions } from "@/components/glass/glass.constants";
import {
  glassBackdrop,
  glassCard,
  glassContent,
  glassRim,
  rimBase,
} from "@/components/glass/glass.css";
import { LiquidGlassFilter } from "@/components/glass/liquidGlassFilter";
import clsx from "clsx";
import { useId, useLayoutEffect, useRef } from "react";

type LiquidGlassCardProps = {
  children: React.ReactNode;
  className?: string;
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

const RIM_REACH_PX = 260;
const RIM_EASE = 0.16;

let lastPointer: { clientX: number; clientY: number } | null = null;

function rimGradient(x: number, y: number, strength: number) {
  const a = (alpha: number) => (alpha * strength).toFixed(3);
  return `radial-gradient(
    circle 380px at ${x.toFixed(1)}px ${y.toFixed(1)}px,
    rgba(255, 255, 255, ${a(0.6)}) 0%,
    rgba(255, 255, 255, ${a(0.22)}) 32%,
    rgba(255, 255, 255, 0) 72%
  ), ${rimBase}`;
}

// カードの外では外周までの距離、内側では最寄りの辺までの距離。どちらの辺に寄っても同じ強さで縁が光る
function distanceToEdge(x: number, y: number, width: number, height: number) {
  const outsideX = Math.max(-x, 0, x - width);
  const outsideY = Math.max(-y, 0, y - height);
  if (outsideX > 0 || outsideY > 0) {
    return Math.hypot(outsideX, outsideY);
  }
  return Math.min(x, width - x, y, height - y);
}

export function LiquidGlassCard({ children, className }: LiquidGlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rawFilterId = useId();
  const filterId = `liquid-glass-${rawFilterId.replace(/:/g, "")}`;
  const filterRef = useRef<SVGFilterElement>(null);
  const mapImageRef = useRef<SVGFEImageElement>(null);

  const { cornerRadius, bezelWidth, refractionPx, aberration } = liquidGlassOptions;

  // React は View Transition 中の useEffect を遷移の終わりまで遅らせ、遷移先のページで屈折が出遅れるので layout effect にする
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
      // 読み込みや遷移の直後は寸法が測り直しで変わるので、書き換えるたびに id を変えて別のフィルターとして参照させる
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

  // ページを移るとカードが作り直され、マウスを動かすまで縁の光が既定の淡さに戻って縁が消えたように見えるので、
  // 最後のカーソル位置を引き継ぐ。useEffect だと遷移の終わりまで遅れるので layout effect にする
  useLayoutEffect(() => {
    const card = cardRef.current;
    if (!card) {
      return;
    }

    let frame = 0;
    let current: { x: number; y: number; strength: number } | null = null;

    const target = () => {
      if (!lastPointer) {
        return null;
      }
      const rect = card.getBoundingClientRect();
      const x = lastPointer.clientX - rect.left;
      const y = lastPointer.clientY - rect.top;
      const distance = distanceToEdge(x, y, rect.width, rect.height);
      const strength = Math.max(0, 1 - distance / RIM_REACH_PX) ** 1.5;
      return { x, y, strength };
    };

    const render = () => {
      if (current) {
        card.style.setProperty(
          "--glass-rim-background",
          rimGradient(current.x, current.y, current.strength),
        );
      }
    };

    const tick = () => {
      frame = 0;
      const next = target();
      if (!next) {
        return;
      }
      if (!current) {
        current = next;
        render();
        return;
      }
      current.x += (next.x - current.x) * RIM_EASE;
      current.y += (next.y - current.y) * RIM_EASE;
      current.strength += (next.strength - current.strength) * RIM_EASE;
      render();
      const settled =
        Math.abs(next.x - current.x) < 0.5 &&
        Math.abs(next.y - current.y) < 0.5 &&
        Math.abs(next.strength - current.strength) < 0.002;
      if (!settled) {
        frame = requestAnimationFrame(tick);
      }
    };

    current = target();
    render();

    const schedule = () => {
      if (!frame) {
        frame = requestAnimationFrame(tick);
      }
    };
    const handleMouseMove = (event: MouseEvent) => {
      lastPointer = { clientX: event.clientX, clientY: event.clientY };
      schedule();
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", schedule, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", schedule);
    };
  }, []);

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
