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
  fontFamily: "YakuHanJP, Noto Sans JP, sans-serif",
  fontWeight: 200,
  "::selection": {
    backgroundColor: "#faf1e8",
    color: "#130059",
  },
});

export const backgroundGradient = style({
  backgroundAttachment: "fixed",
  backgroundColor: LIQUID_BACKGROUND_FALLBACK_COLOR,
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
});
