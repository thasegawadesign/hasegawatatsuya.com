import { breakpoints } from "@/styles/styles.css";
import { keyframes, style } from "@vanilla-extract/css";

export const animateObject1 = keyframes({
  "0%": { transform: "translateY(-4%)" },
  "100%": { transform: "translateY(4%)" },
});
export const object1 = style({
  position: "fixed",
  top: "4%",
  left: "40%",
  background: `radial-gradient(rgba(83, 158, 227, .5), rgba(234, 234, 234, 1))`,
  width: 440,
  height: 440,
  borderRadius: "100%",
  filter: "blur(4px)",
  zIndex: -50,
  animationName: animateObject1,
  animationDuration: "10s",
  animationTimingFunction: "ease-in-out",
  animationIterationCount: "infinite",
  animationDirection: "alternate-reverse",
  "@media": {
    [breakpoints["lg"]]: {
      width: 320,
      height: 320,
    },
    [breakpoints["md"]]: {
      width: 280,
      height: 280,
    },
    [breakpoints["sm"]]: {
      top: "0%",
      left: "32%",
      width: 180,
      height: 180,
    },
  },
});
