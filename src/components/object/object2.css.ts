import { breakpoints } from "@/styles/styles.css";
import { keyframes, style } from "@vanilla-extract/css";

export const animateObject2 = keyframes({
  "0%": { transform: "translateY(-3%)" },
  "100%": { transform: "translateY(3%)" },
});
export const object2 = style({
  position: "fixed",
  zIndex: -50,
  top: "43%",
  right: "4%",
  filter: "blur(3px)",
  borderRadius: "100%",
  background: `radial-gradient(rgba(83, 227, 124, .6), rgba(234, 234, 234, 1))`,
  width: "clamp(240px,24vw,400px)",
  height: "clamp(240px,24vw,400px)",
  animationName: animateObject2,
  animationDuration: "20s",
  animationTimingFunction: "ease-in-out",
  animationIterationCount: "infinite",
  animationDirection: "alternate-reverse",
  "@media": {
    [breakpoints["2xl"]]: {
      right: "2%",
    },
    [breakpoints["md"]]: {
      right: "0",
    },
    [breakpoints["sm"]]: {
      display: "none",
    },
  },
});
