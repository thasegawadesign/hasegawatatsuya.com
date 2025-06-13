import { breakpoints } from "@/styles/styles.css";
import { keyframes, style } from "@vanilla-extract/css";

export const animateObject1 = keyframes({
  "0%": { transform: "translateY(-4%)" },
  "100%": { transform: "translateY(4%)" },
});
export const object1 = style({
  position: "fixed",
  top: "3%",
  left: "42%",
  background: `radial-gradient(rgba(83, 158, 227, .5), rgba(234, 234, 234, 1))`,
  width: "clamp(200px,20vw,360px)",
  height: "clamp(200px,20vw,360px)",
  borderRadius: "100%",
  filter: "blur(2px)",
  zIndex: -50,
  animationName: animateObject1,
  animationDuration: "10s",
  animationTimingFunction: "ease-in-out",
  animationIterationCount: "infinite",
  animationDirection: "alternate-reverse",
  "@media": {
    [breakpoints["md"]]: {
      top: "-3%",
    },
    [breakpoints["sm"]]: {
      display: "none",
    },
  },
});
