import { breakpoints, vars } from "@/styles/styles.css";
import { keyframes, style } from "@vanilla-extract/css";

export const audioInteract = keyframes({
  "0%": { borderWidth: "2px" },
  "50%": { borderWidth: "8px" },
  "100%": { borderWidth: "2px" },
});
export const audioButtonBox = style({
  position: "fixed",
  bottom: "2vw",
  right: "2vw",
  background: "transparent",
  border: "none",
  ":hover": {
    cursor: "pointer",
  },
  "@media": {
    [breakpoints["xl"]]: {
      bottom: "6vw",
      right: "6vw",
    },
  },
});
export const audioButton = style({
  width: "20px",
  height: "20px",
  border: `solid 2px ${vars.color.text}`,
  borderRadius: "100%",
  zIndex: 100,
  animationName: audioInteract,
  animationDuration: "2s",
  animationTimingFunction: "ease",
  animationIterationCount: "infinite",
  animationPlayState: "paused",
});
export const animationPaused = style({
  animationPlayState: "paused",
});
export const animationRunning = style({
  animationPlayState: "running",
});
