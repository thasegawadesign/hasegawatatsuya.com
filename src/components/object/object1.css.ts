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
  isolation: "isolate",
  borderRadius: "100%",
  width: "clamp(200px,20vw,360px)",
  height: "clamp(200px,20vw,360px)",
  overflow: "hidden",
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
export const object1Orb = style({
  position: "absolute",
  inset: 0,
  filter: "blur(2px)",
  borderRadius: "inherit",
  background: `radial-gradient(rgba(60, 130, 228, 0.9), rgba(234, 234, 234, 1))`,
});
