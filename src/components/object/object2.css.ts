import { breakpoints } from "@/styles/styles.css";
import { keyframes, style } from "@vanilla-extract/css";

export const animateObject2 = keyframes({
  "0%": { transform: "translateY(-8%)" },
  "100%": { transform: "translateY(8%)" },
});
export const object2 = style({
  position: "fixed",
  top: "40%",
  right: "4%",
  background: `radial-gradient(rgba(83, 227, 124, .6), rgba(234, 234, 234, 1))`,
  width: "clamp(240px,24vw,400px)",
  height: "clamp(240px,24vw,400px)",
  borderRadius: "100%",
  filter: "blur(3px)",
  zIndex: -50,
  animationName: animateObject2,
  animationDuration: "16s",
  animationTimingFunction: "ease-in-out",
  animationIterationCount: "infinite",
  animationDirection: "alternate-reverse",
  "@media": {
    [breakpoints["md"]]: {
      right: "-4%",
    },
    [breakpoints["sm"]]: {
      display: "none",
    },
  },
});
