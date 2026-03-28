import { style } from "@vanilla-extract/css";

export const canvasRoot = style({
  position: "fixed",
  zIndex: -200,
  inset: 0,
  transition: "opacity 0.75s cubic-bezier(0.33, 1, 0.68, 1)",
  opacity: 0,
  pointerEvents: "none",
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transitionDuration: "0.01s",
    },
  },
});

export const canvasRootReady = style({
  opacity: 1,
});
