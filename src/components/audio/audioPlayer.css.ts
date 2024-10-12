import { breakpoints, vars } from "@/styles/styles.css";
import { keyframes, style } from "@vanilla-extract/css";

export const audioInteract = keyframes({
  "0%": { borderWidth: "2px" },
  "50%": { borderWidth: "10px" },
  "100%": { borderWidth: "2px" },
});
export const audioButton = style({
  position: "fixed",
  bottom: 40,
  right: "clamp(40px, 15.2%, 300px)",
  width: "20px",
  height: "20px",
  background: "transparent",
  border: `solid 2px ${vars.color.text}`,
  borderRadius: "100%",
  zIndex: 100,
  animationName: audioInteract,
  animationDuration: "2s",
  animationTimingFunction: "ease",
  animationIterationCount: "infinite",
  animationPlayState: "paused",
  ":hover": {
    cursor: "pointer",
  },
  "@media": {
    [breakpoints["2xl"]]: {
      right: "clamp(40px, 10%, 240px)",
    },
  },
});
export const animationPaused = style({
  animationPlayState: "paused",
});
export const animationRunning = style({
  animationPlayState: "running",
});
