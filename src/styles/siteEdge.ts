import { breakpoints } from "@/styles/styles.css";

// ロゴ・ハンバーガー・モバイルナビの余白の基準。ガラスのカードの外周（glass.css の margin と width）から 28px 内側に置く
const INSET = "28px";

export type SiteEdge = { top: string; side: string; logoLift?: string };

// ロゴ「TH」の字面の上端は文字の箱の上端より約 13px 下にあり、そのままだと上の余白が左より広く見える。
// 字面の分だけ上げて上下左右を数値で揃えると窮屈に見えるので、一部だけ上げて上を少し広く残す（目で見て合わせた値。字面の上はガラスの縁から約 36px）
const LOGO_LIFT = "5px";
// 縦並びのナビがある幅では、左の余白を上の余白に近づけるため少し広げる。字面の左の空きと合わせてガラスの縁から約 30px
const NAV_SIDE_INSET = "29px";

export const SITE_EDGE = {
  base: {
    top: `calc(5vw + ${INSET})`,
    side: `calc(max(6vw, (100vw - 1400px) / 2) + ${NAV_SIDE_INSET})`,
    logoLift: LOGO_LIFT,
  },
  "2xl": {
    top: `calc(5vw + ${INSET})`,
    side: `calc(7vw + ${NAV_SIDE_INSET})`,
    logoLift: LOGO_LIFT,
  },
  // xl の logoLift はハンバーガーとの並びを目で見て合わせた値
  xl: { top: `calc(4vw + ${INSET})`, side: `calc(4vw + ${INSET})`, logoLift: "6px" },
  md: { top: `calc(2vw + ${INSET})`, side: `calc(2vw + ${INSET})` },
  // 狭い画面ではロゴの文字の箱の上にある行間の空きが目立つので、上だけ詰める
  sm: { top: "calc(1vw + 16px)", side: `calc(1vw + ${INSET})` },
} as const satisfies Record<string, SiteEdge>;

type EdgeKey = Exclude<keyof typeof SITE_EDGE, "base">;

// xl 以下はファーストビューの名前や本文の左端がナビの縦並びにかかるので、ナビのリンクをハンバーガーメニューに移す
export const HAMBURGER_BREAKPOINT = breakpoints.xl;
export const HAMBURGER_EDGE_KEYS = ["xl", "md", "sm"] as const satisfies readonly EdgeKey[];

export const logoTop = (edge: SiteEdge) =>
  edge.logoLift ? `calc(${edge.top} - ${edge.logoLift})` : edge.top;

export const LOGO_FONT_SIZE = "3.6rem";
// body の line-height 1.5 と一致させる
const LOGO_LINE_HEIGHT = `calc(${LOGO_FONT_SIZE} * 1.5)`;

export const belowLogo = (edge: SiteEdge) => `calc(${logoTop(edge)} + ${LOGO_LINE_HEIGHT})`;

// ロゴの文字の箱はハンバーガーより背が高いので、上端を揃えると高く見える。少し下げて左上のロゴと並びを合わせる
const HAMBURGER_TOP_OFFSET = "14px";
// 開くボタンとモバイルナビの閉じるボタンは必ずこの位置に重ねる（.css.ts は関数を export できないのでここに置く）
export const hamburgerSlotInset = (edge: SiteEdge) => ({
  top: `calc(${logoTop(edge)} + ${HAMBURGER_TOP_OFFSET})`,
  right: edge.side,
});

export const edgeMedia = <T>(keys: readonly EdgeKey[], place: (edge: SiteEdge) => T) =>
  Object.fromEntries(keys.map((key) => [breakpoints[key], place(SITE_EDGE[key])]));
