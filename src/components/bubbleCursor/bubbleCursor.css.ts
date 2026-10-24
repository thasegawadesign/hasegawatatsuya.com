import { SITE_CURSOR_TRANSITION_NAME } from "@/lib/viewTransitionNames";
import { LAYER } from "@/styles/layers";
import { style } from "@vanilla-extract/css";

export const container = style({
  position: "fixed",
  zIndex: LAYER.chrome,
  inset: 0,
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  viewTransitionName: SITE_CURSOR_TRANSITION_NAME,
});
