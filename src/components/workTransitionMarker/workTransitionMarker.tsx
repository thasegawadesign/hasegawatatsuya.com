import { marker } from "@/components/workTransitionMarker/workTransitionMarker.css";
import { getWorkTransitionName } from "@/lib/viewTransitionNames";
import { ViewTransition } from "react";

interface Props {
  readonly href: string;
}

// 作品一覧と作品ページで共有される見えない目印。
// React は共有要素がないと View Transition を開始しないため、これで作品写真のフェードを発火させる
export default function WorkTransitionMarker({ href }: Props) {
  return (
    <ViewTransition name={getWorkTransitionName(href)} share="auto" default="none">
      <span aria-hidden className={marker} />
    </ViewTransition>
  );
}
