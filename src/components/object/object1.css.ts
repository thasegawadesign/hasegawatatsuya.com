import { breakpoints } from "@/styles/styles.css";
import { keyframes, style } from "@vanilla-extract/css";

export const animateObject1 = keyframes({
  "0%": { transform: "translateY(-1%)" },
  "100%": { transform: "translateY(1%)" },
});
export const object1 = style({
  position: "fixed",
  zIndex: -150,
  top: "3%",
  left: "42%",
  filter: "blur(2px)",
  borderRadius: "100%",
  background: `radial-gradient(rgba(83, 158, 227, .9), rgba(234, 234, 234, 1))`,
  width: "clamp(200px,20vw,360px)",
  height: "clamp(200px,20vw,360px)",
  animationName: animateObject1,
  animationDuration: "12s",
  animationTimingFunction: "ease-in-out",
  animationIterationCount: "infinite",
  animationDirection: "alternate-reverse",
  "@media": {
    [breakpoints["2xl"]]: {
      top: "2%",
    },
    [breakpoints["md"]]: {
      top: "0",
    },
    [breakpoints["sm"]]: {
      display: "none",
    },
  },
});
