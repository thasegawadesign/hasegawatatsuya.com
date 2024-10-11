import { breakpoints } from "@/styles/styles.css";
import { keyframes, style } from "@vanilla-extract/css";

export const animateObject2 = keyframes({
  "0%": { transform: "translateY(-8%)" },
  "100%": { transform: "translateY(8%)" },
});
export const object2 = style({
  position: "fixed",
  top: "36%",
  right: "2%",
  background: `radial-gradient(rgba(83, 227, 124, .6), rgba(234, 234, 234, 1))`,
  width: 500,
  height: 500,
  borderRadius: "100%",
  filter: "blur(12px)",
  zIndex: -50,
  animationName: animateObject2,
  animationDuration: "16s",
  animationTimingFunction: "ease-in-out",
  animationIterationCount: "infinite",
  animationDirection: "alternate-reverse",
  "@media": {
    [breakpoints["md"]]: {
      right: "-6%",
      width: 360,
      height: 360,
    },
    [breakpoints["sm"]]: {
      top: "40%",
      right: "-28%",
      width: 280,
      height: 280,
    },
  },
});
