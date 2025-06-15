import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  position: "fixed",
  inset: 0,
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  pointerEvents: "none",
  zIndex: 100,
});

export const canvasContainerStyle = style({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
});
