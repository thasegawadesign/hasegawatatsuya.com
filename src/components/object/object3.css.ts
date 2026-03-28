import { breakpoints } from "@/styles/styles.css";
import { keyframes, style } from "@vanilla-extract/css";

export const animateObject3 = keyframes({
  "0%": { transform: "translateY(-5%)" },
  "100%": { transform: "translateY(5%)" },
});
export const object3 = style({
  position: "fixed",
  zIndex: -150,
  bottom: "-20%",
  left: "4%",
  isolation: "isolate",
  borderRadius: "100%",
  width: "clamp(300px,28vw,460px)",
  height: "clamp(300px,28vw,460px)",
  overflow: "hidden",
  animationName: animateObject3,
  animationDuration: "24s",
  animationTimingFunction: "ease-in-out",
  animationIterationCount: "infinite",
  animationDirection: "alternate-reverse",
  "@media": {
    [breakpoints["2xl"]]: {
      left: "2%",
    },
    [breakpoints["md"]]: {
      bottom: "0",
      left: "0",
    },
    [breakpoints["sm"]]: {
      display: "none",
    },
  },
});
export const object3Orb = style({
  position: "absolute",
  inset: 0,
  filter: "blur(4px)",
  borderRadius: "inherit",
  background: `radial-gradient(rgba(182, 53, 202, 0.9), rgba(234, 234, 234, 1))`,
});
