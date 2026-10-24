import { LAYER } from "@/styles/layers";
import { style } from "@vanilla-extract/css";

export const main = style({
  position: "relative",
  zIndex: LAYER.content,
});
