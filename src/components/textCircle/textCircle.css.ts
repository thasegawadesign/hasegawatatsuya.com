import { SITE_TEXT_CIRCLE_TRANSITION_NAME } from "@/lib/viewTransitionNames";
import { LAYER } from "@/styles/layers";
import { breakpoints, vars } from "@/styles/styles.css";
import { keyframes, style } from "@vanilla-extract/css";

// 円周外へはみ出す文字まで箱に収める余白。Safari はスナップショットをはみ出し分を含めずに置くため、遷移の瞬間に位置がずれる
const INK_PADDING = 16;

export const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(-360deg)" },
});
// view-transition-name を回転しない外枠に置く。回転中の要素に付けると Safari が回転込みの位置で遷移を組み立ててずれる
export const circle = style({
  position: "absolute",
  zIndex: LAYER.chrome,
  // Glass 右上の外側（幅・余白は glass.css と同期）
  top: `calc(5vw - 48px - ${INK_PADDING}px)`,
  right: `calc((100% - min(88vw, 1400px)) / 2 - 48px - ${INK_PADDING}px)`,
  padding: INK_PADDING,
  fontSize: "12px",
  viewTransitionName: SITE_TEXT_CIRCLE_TRANSITION_NAME,
  "@media": {
    [breakpoints["2xl"]]: {
      top: `calc(5vw - 42px - ${INK_PADDING}px)`,
      right: `calc((100% - 86vw) / 2 - 42px - ${INK_PADDING}px)`,
    },
    [breakpoints["xl"]]: {
      display: "none",
    },
  },
});
export const circleRotor = style({
  width: 120,
  height: 120,
  animationName: rotate,
  animationDuration: "28s",
  animationTimingFunction: "linear",
  animationIterationCount: "infinite",
  selectors: {
    [`${circle}:hover &`]: {
      animationPlayState: "paused",
    },
  },
  "@media": {
    [breakpoints["2xl"]]: {
      width: 110,
      height: 110,
    },
  },
});
export const circleSvg = style({
  overflow: "visible",
});
export const circlePath = style({
  fill: "none",
});
export const circleText = style({
  letterSpacing: 1.8,
  fontWeight: 300,
  fill: vars.color.text,
});
