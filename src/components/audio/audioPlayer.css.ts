import { breakpoints, vars } from "@/styles/styles.css";
import { keyframes, style } from "@vanilla-extract/css";

export const audioInteract = keyframes({
  "0%": { borderWidth: "2px" },
  "50%": { borderWidth: "8px" },
  "100%": { borderWidth: "2px" },
});
export const audioButtonBox = style({
  position: "fixed",
  zIndex: 100,
  right: "2vw",
  bottom: "2vw",
  "@media": {
    [breakpoints["xl"]]: {
      right: "6vw",
      bottom: "6vw",
    },
  },
});
export const audioButton = style({
  display: "block",
  border: `solid 2px ${vars.color.text}`,
  borderRadius: "100%",
  background: "transparent",
  width: "20px",
  height: "20px",
  animationName: audioInteract,
  animationDuration: "2s",
  animationTimingFunction: "ease",
  animationIterationCount: "infinite",
  animationPlayState: "paused",
  ":hover": {
    cursor: "pointer",
  },
});
export const animationPaused = style({
  animationPlayState: "paused",
});
export const animationRunning = style({
  animationPlayState: "running",
});
