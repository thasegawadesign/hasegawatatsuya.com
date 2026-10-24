import { breakpoints } from "@/styles/styles.css";

// ロゴ・ハンバーガー・モバイルナビの余白の基準。ガラスのカードの外周（glass.css の margin と width）から 28px 内側に置く
const INSET = "28px";

export type SiteEdge = { top: string; side: string };

export const SITE_EDGE = {
  base: {
    top: `calc(5vw + ${INSET})`,
    side: `calc(max(6vw, (100vw - 1400px) / 2) + ${INSET})`,
  },
  "2xl": { top: `calc(5vw + ${INSET})`, side: `calc(7vw + ${INSET})` },
  xl: { top: `calc(4vw + ${INSET})`, side: `calc(4vw + ${INSET})` },
  md: { top: `calc(2vw + ${INSET})`, side: `calc(2vw + ${INSET})` },
  // 狭い画面ではロゴの文字の箱の上にある行間の空きが目立つので、上だけ詰める
  sm: { top: "calc(1vw + 16px)", side: `calc(1vw + ${INSET})` },
} as const satisfies Record<string, SiteEdge>;

type EdgeKey = Exclude<keyof typeof SITE_EDGE, "base">;

// xl 以下はファーストビューの名前や本文の左端がナビの縦並びにかかるので、ナビのリンクをハンバーガーメニューに移す
export const HAMBURGER_BREAKPOINT = breakpoints.xl;
export const HAMBURGER_EDGE_KEYS = ["xl", "md", "sm"] as const satisfies readonly EdgeKey[];

// ロゴの文字の箱はハンバーガーより背が高いので、上端を揃えると高く見える。少し下げて左上のロゴと並びを合わせる
const HAMBURGER_TOP_OFFSET = "14px";
// 開くボタンとモバイルナビの閉じるボタンは必ずこの位置に重ねる（.css.ts は関数を export できないのでここに置く）
export const hamburgerSlotInset = (edge: SiteEdge) => ({
  top: `calc(${edge.top} + ${HAMBURGER_TOP_OFFSET})`,
  right: edge.side,
});

export const edgeMedia = <T>(keys: readonly EdgeKey[], place: (edge: SiteEdge) => T) =>
  Object.fromEntries(keys.map((key) => [breakpoints[key], place(SITE_EDGE[key])]));
