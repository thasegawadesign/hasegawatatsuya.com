import { LIQUID_BACKGROUND_FALLBACK_COLOR } from "@/constants/constants";
import { globalStyle, style } from "@vanilla-extract/css";

globalStyle("::selection", {
  backgroundColor: "#faf1e8",
  color: "#130059",
});
globalStyle("::-webkit-selection", {
  backgroundColor: "#faf1e8",
  color: "#130059",
});
globalStyle("::-moz-selection", {
  backgroundColor: "#faf1e8",
  color: "#130059",
});

export const html = style({
  overflowX: "hidden",
  scrollPaddingTop: 40,
});

export const smoothScroll = style({
  "@media": {
    "(prefers-reduced-motion: no-preference)": {
      ":focus-within": {
        scrollBehavior: "smooth",
      },
    },
  },
});

export const body = style({
  fontFamily: "YakuHanJP, var(--font-noto-sans-jp), sans-serif",
  fontWeight: 200,
  /** シェーダー準備前の白フラッシュ防止用の下地 */
  backgroundColor: LIQUID_BACKGROUND_FALLBACK_COLOR,
  "::selection": {
    backgroundColor: "#faf1e8",
    color: "#130059",
  },
});

/** HTML 最初の paint 前に同期スクリプトが描くcanvas */
export const liquidBootCanvas = style({
  position: "fixed",
  zIndex: -100,
  inset: 0,
  display: "block",
  width: "100vw",
  height: "100vh",
  pointerEvents: "none",
});
