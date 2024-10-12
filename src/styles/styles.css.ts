import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";

export const breakpoints = {
  "2xl": "screen and (max-width: 1535px)",
  xl: "screen and (max-width: 1279px)",
  lg: "screen and (max-width: 1023px)",
  md: "screen and (max-width: 767px)",
  sm: "screen and (max-width: 639px)",
} as const;

export const vars = createGlobalTheme(":root", {
  color: {
    text: "#faf1e8",
  },
});

globalStyle("::view-transition-group(*)", {
  animationDuration: "0.8s",
});
