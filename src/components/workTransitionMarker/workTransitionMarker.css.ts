import { style } from "@vanilla-extract/css";

export const marker = style({
  position: "fixed",
  top: 0,
  left: 0,
  opacity: 0,
  width: 1,
  height: 1,
  pointerEvents: "none",
});
