import { createGlobalTheme, globalStyle, style } from "@vanilla-extract/css";

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
globalStyle("::view-transition-group(profile-photo)", {
  animationTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)",
});
globalStyle("::view-transition-old(root), ::view-transition-old(about-name)", {
  animationDuration: "0.4s",
  animationTimingFunction: "ease-out",
});
globalStyle("::view-transition-group(*), ::view-transition-old(*), ::view-transition-new(*)", {
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animation: "none",
    },
  },
});

export const desktopBr = style({
  "@media": {
    [breakpoints["lg"]]: {
      display: "none",
    },
  },
});
export const mobileBr = style({
  display: "none",
  "@media": {
    [breakpoints["lg"]]: {
      display: "block",
    },
  },
});
