import { SITE_CURSOR_TRANSITION_NAME } from "@/lib/viewTransitionNames";
import { style } from "@vanilla-extract/css";

export const container = style({
  position: "fixed",
  zIndex: 100,
  inset: 0,
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  viewTransitionName: SITE_CURSOR_TRANSITION_NAME,
});
