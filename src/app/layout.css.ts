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
  "::selection": {
    backgroundColor: "#faf1e8",
    color: "#130059",
  },
});

/** シェーダー準備前の白フラッシュ防止。表示上の「単色演出」ではなく下地。 */
export const backgroundGradient = style({
  backgroundAttachment: "fixed",
  backgroundColor: LIQUID_BACKGROUND_FALLBACK_COLOR,
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
});

/** HTML 最初の paint 前に同期スクリプトが描く canvas（ojpp 方式） */
export const liquidBootCanvas = style({
  position: "fixed",
  zIndex: -201,
  inset: 0,
  display: "block",
  width: "100vw",
  height: "100vh",
  pointerEvents: "none",
});
