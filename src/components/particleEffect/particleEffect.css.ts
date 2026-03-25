import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  position: "fixed",
  zIndex: 100,
  inset: 0,
  pointerEvents: "none",
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
});

export const canvasContainerStyle = style({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
});
