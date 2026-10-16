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
  // 遷移中もページのスナップショットより手前に出すため、独立したグループにする
  viewTransitionName: SITE_CURSOR_TRANSITION_NAME,
});
