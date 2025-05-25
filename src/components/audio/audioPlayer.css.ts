import { breakpoints, vars } from "@/styles/styles.css";
import { keyframes, style } from "@vanilla-extract/css";

export const audioInteract = keyframes({
  "0%": { borderWidth: "2px" },
  "50%": { borderWidth: "8px" },
  "100%": { borderWidth: "2px" },
});
export const audioButtonBox = style({
  border: "none",
});
export const audioButton = style({
  position: "fixed",
  bottom: "2vw",
  right: "2vw",
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
      bottom: "4vw",
      right: "4vw",
    },
    [breakpoints["xl"]]: {
      bottom: "6vw",
      right: "6vw",
    },
  },
});
export const animationPaused = style({
  animationPlayState: "paused",
});
export const animationRunning = style({
  animationPlayState: "running",
});
