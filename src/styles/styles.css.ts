import { WORK_PHOTO_TRANSITION_NAME } from "@/lib/workTitleTransition";
import { createGlobalTheme, globalStyle, keyframes, style } from "@vanilla-extract/css";

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
globalStyle("::view-transition-group(profile-photo), ::view-transition-group(*.work-title)", {
  animationTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)",
});
globalStyle("::view-transition-old(root), ::view-transition-old(about-name)", {
  animationDuration: "0.4s",
  animationTimingFunction: "ease-out",
});

const workPhotoFadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});
const workPhotoFadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});
globalStyle(`::view-transition-group(${WORK_PHOTO_TRANSITION_NAME})`, {
  animation: "none",
});
globalStyle(`::view-transition-old(${WORK_PHOTO_TRANSITION_NAME})`, {
  animationName: workPhotoFadeOut,
  animationDuration: "0.7s",
  animationTimingFunction: "ease-out",
  animationFillMode: "both",
});
globalStyle(`::view-transition-new(${WORK_PHOTO_TRANSITION_NAME})`, {
  animationName: workPhotoFadeIn,
  animationDuration: "0.7s",
  animationTimingFunction: "ease-out",
  animationFillMode: "both",
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
