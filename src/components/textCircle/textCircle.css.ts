import { breakpoints, vars } from "@/styles/styles.css";
import { keyframes, style } from "@vanilla-extract/css";

export const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(-360deg)" },
});
export const circle = style({
  position: "absolute",
  top: "-48px",
  right: "-48px",
  width: 120,
  height: 120,
  fontSize: "12px",
  zIndex: 100,
  animationName: rotate,
  animationDuration: "20s",
  animationTimingFunction: "linear",
  animationIterationCount: "infinite",
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
  fill: vars.color.text,
  fontWeight: 300,
  letterSpacing: 1.8,
});
