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
  width: "clamp(300px,28vw,460px)",
  height: "clamp(300px,28vw,460px)",
  borderRadius: "100%",
  filter: "blur(4px)",
  zIndex: -50,
  animationName: animateObject3,
  animationDuration: "20s",
  animationTimingFunction: "ease-in-out",
  animationIterationCount: "infinite",
  animationDirection: "alternate-reverse",
  "@media": {
    [breakpoints["md"]]: {
      bottom: "0%",
      left: "-4%",
    },
    [breakpoints["sm"]]: {
      display: "none",
    },
  },
});
