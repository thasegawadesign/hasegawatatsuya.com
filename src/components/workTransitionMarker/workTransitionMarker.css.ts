import { style } from "@vanilla-extract/css";

export const marker = style({
  position: "absolute",
  opacity: 0,
  width: 1,
  height: 1,
  pointerEvents: "none",
});
