import { breakpoints } from "@/styles/styles.css";
import { keyframes, style } from "@vanilla-extract/css";

export const animateObject3 = keyframes({
  "0%": { transform: "translateY(-16%)" },
  "100%": { transform: "translateY(16%)" },
});
export const object3 = style({
  position: "fixed",
  bottom: "-24%",
  left: "4%",
  background: `radial-gradient(rgba(185, 79, 202, 1), rgba(234, 234, 234, 1))`,
  width: 560,
  height: 560,
  borderRadius: "100%",
  filter: "blur(16px)",
  zIndex: -50,
  animationName: animateObject3,
  animationDuration: "20s",
  animationTimingFunction: "ease-in-out",
  animationIterationCount: "infinite",
  animationDirection: "alternate-reverse",
  "@media": {
    [breakpoints["lg"]]: {
      width: 480,
      height: 480,
    },
    [breakpoints["md"]]: {
      bottom: "4%",
      left: "-4%",
      width: 400,
      height: 400,
    },
    [breakpoints["sm"]]: {
      bottom: "-8%",
      left: "-12%",
      width: 300,
      height: 300,
    },
  },
});
