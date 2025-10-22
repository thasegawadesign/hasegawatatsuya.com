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
  zIndex: 100,
  "@media": {
    [breakpoints["xl"]]: {
      bottom: "6vw",
      right: "6vw",
    },
  },
});
export const audioButton = style({
  display: "block",
  width: "20px",
  height: "20px",
  background: "transparent",
  border: `solid 2px ${vars.color.text}`,
  borderRadius: "100%",
  animationName: audioInteract,
  animationDuration: "1.8s",
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
