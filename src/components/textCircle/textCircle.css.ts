import { breakpoints, vars } from "@/styles/styles.css";
import { keyframes, style } from "@vanilla-extract/css";

export const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(-360deg)" },
});
export const circle = style({
  position: "absolute",
  top: "-50px",
  right: "-50px",
  width: 125,
  height: 125,
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
      top: "-46px",
      right: "-46px",
      width: 120,
      height: 120,
    },
    [breakpoints["xl"]]: {
      top: "-40px",
      right: "-40px",
      width: 110,
      height: 110,
    },
    [breakpoints["lg"]]: {
      top: "-38px",
      right: "-38px",
      width: 100,
      height: 100,
    },
    [breakpoints["sm"]]: {
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
