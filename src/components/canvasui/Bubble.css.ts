import { style } from "@vanilla-extract/css";

export const globalRoot = style({
  pointerEvents: "none",
});

export const root = style({
  position: "relative",
});

export const globalCaptureSource = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: 1,
  height: 1,
  opacity: 0,
  pointerEvents: "none",
  visibility: "hidden",
  overflow: "hidden",
});

export const hidden = style({
  display: "none",
});

export const globalContentPlaceholder = style({
  position: "absolute",
  width: 0,
  height: 0,
  overflow: "hidden",
  opacity: 0,
});

export const outputCanvas = style({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  pointerEvents: "none",
});

export const sourceCanvas = style({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
});

export const content = style({
  position: "relative",
  width: "100%",
  height: "100%",
  overflow: "auto",
});
