import { breakpoints, vars } from "@/styles/styles.css";
import { keyframes, style } from "@vanilla-extract/css";

export const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(-360deg)" },
});
export const circle = style({
  position: "absolute",
  zIndex: 100,
  top: "-48px",
  right: "-48px",
  width: 120,
  height: 120,
  animationName: rotate,
  animationDuration: "28s",
  animationTimingFunction: "linear",
  animationIterationCount: "infinite",
  fontSize: "12px",
  selectors: {
    "&:hover": {
      animationPlayState: "paused",
    },
  },
  "@media": {
    [breakpoints["2xl"]]: {
      top: "-42px",
      right: "-42px",
      width: 110,
      height: 110,
    },
    [breakpoints["xl"]]: {
      display: "none",
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
