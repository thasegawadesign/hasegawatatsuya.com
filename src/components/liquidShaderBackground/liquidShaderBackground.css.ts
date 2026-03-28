import { style } from "@vanilla-extract/css";

export const canvasRoot = style({
  position: "fixed",
  zIndex: -200,
  inset: 0,
  pointerEvents: "none",
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
});
