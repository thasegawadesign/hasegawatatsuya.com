import { SITE_BASE_COLOR } from "@/constants/constants";
import { LAYER } from "@/styles/layers";
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
  fontFamily: "var(--font-yakuhan-jp), var(--font-noto-sans-jp), sans-serif",
  fontWeight: 200,
  backgroundColor: SITE_BASE_COLOR,
  "::selection": {
    backgroundColor: "#faf1e8",
    color: "#130059",
  },
});

export const liquidBootCanvas = style({
  position: "fixed",
  // オブジェクト（LAYER.orb）より手前に置くと、Three に切り替わって boot が消えるまでオブジェクトが隠れる。
  // Three の背景（liquidShaderBackground.css）と同じ高さに置き、DOM 順で Three が上に来るようにする
  zIndex: LAYER.background,
  inset: 0,
  display: "block",
  width: "100vw",
  height: "100vh",
  pointerEvents: "none",
});
