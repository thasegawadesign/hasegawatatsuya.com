import { breakpoints, vars } from "@/styles/styles.css";
import { keyframes, style } from "@vanilla-extract/css";

export const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(-360deg)" },
});
export const circle = style({
  position: "absolute",
  top: "-52px",
  right: "-52px",
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
      top: "-46px",
      right: "-46px",
      width: 110,
      height: 110,
    },
    [breakpoints["xl"]]: {
      top: "-45px",
      right: "-45px",
      width: 105,
      height: 105,
    },
    [breakpoints["lg"]]: {
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
