import { SITE_PARTICLES_TRANSITION_NAME } from "@/lib/viewTransitionNames";
import { LAYER } from "@/styles/layers";
import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  position: "fixed",
  zIndex: LAYER.chrome,
  inset: 0,
  pointerEvents: "none",
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  viewTransitionName: SITE_PARTICLES_TRANSITION_NAME,
});

export const canvasContainerStyle = style({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
});
