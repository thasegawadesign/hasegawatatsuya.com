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
  filter: "blur(4px)",
  borderRadius: "100%",
  background: `radial-gradient(rgba(185, 79, 202, 1), rgba(234, 234, 234, 1))`,
  width: "clamp(300px,28vw,460px)",
  height: "clamp(300px,28vw,460px)",
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
