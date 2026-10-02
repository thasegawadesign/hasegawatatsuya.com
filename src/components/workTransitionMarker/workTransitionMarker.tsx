"use client";

import { marker } from "@/components/workTransitionMarker/workTransitionMarker.css";
import { getWorkTransitionName } from "@/lib/viewTransitionNames";
import { useSyncExternalStore, ViewTransition } from "react";
import { createPortal } from "react-dom";

interface Props {
  readonly href: string;
}

const subscribe = () => () => {};

// 作品一覧と作品ページで共有される見えない目印。
// React は共有要素がないと View Transition を開始しないため、これで作品写真のフェードを発火させる。
// React は画面外にある共有要素の遷移を取りやめるので、body 直下に固定して常に画面内に置く
// （スクロール位置によって Safari で遷移が始まらなかったため）
export default function WorkTransitionMarker({ href }: Props) {
  const isClient = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  if (!isClient) return null;

  return createPortal(
    <ViewTransition name={getWorkTransitionName(href)} share="auto" default="none">
      <span aria-hidden className={marker} />
    </ViewTransition>,
    document.body,
  );
}
