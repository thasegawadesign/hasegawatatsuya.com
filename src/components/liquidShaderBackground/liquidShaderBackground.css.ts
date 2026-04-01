import {
  LIQUID_BACKGROUND_FALLBACK_COLOR,
  LIQUID_REVEAL_DURATION_S,
  LIQUID_REVEAL_EASING,
} from "@/constants/constants";
import { style } from "@vanilla-extract/css";

export const backgroundRoot = style({
  position: "fixed",
  zIndex: -200,
  inset: 0,
  pointerEvents: "none",
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
});

export const fallbackImage = style({
  position: "absolute",
  inset: 0,
  transition: `opacity ${LIQUID_REVEAL_DURATION_S}s ${LIQUID_REVEAL_EASING}`,
  opacity: 1,
  backgroundColor: LIQUID_BACKGROUND_FALLBACK_COLOR,
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transitionDuration: "0.01s",
    },
  },
});

export const fallbackImageHidden = style({
  opacity: 0,
});

export const fallbackImageAsset = style({
  objectFit: "cover",
  objectPosition: "center center",
});

export const canvasRoot = style({
  position: "absolute",
  inset: 0,
  transition: `opacity ${LIQUID_REVEAL_DURATION_S}s ${LIQUID_REVEAL_EASING}`,
  opacity: 0,
  width: "100%",
  height: "100%",
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
