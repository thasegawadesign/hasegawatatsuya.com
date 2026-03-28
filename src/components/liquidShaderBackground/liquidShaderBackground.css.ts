import {
  LIQUID_REVEAL_DURATION_S,
  LIQUID_REVEAL_EASING,
} from "@/constants/constants";
import { style } from "@vanilla-extract/css";

export const canvasRoot = style({
  position: "fixed",
  zIndex: -200,
  inset: 0,
  transition: `opacity ${LIQUID_REVEAL_DURATION_S}s ${LIQUID_REVEAL_EASING}`,
  opacity: 0,
  pointerEvents: "none",
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transitionDuration: "0.01s",
    },
  },
});

export const canvasRootReady = style({
  opacity: 1,
});
