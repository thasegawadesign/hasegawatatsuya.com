import { LIQUID_BACKGROUND_FALLBACK_COLOR } from "@/constants/constants";
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

/** WebGL 不可時のみ。単色＋bg.avif */
export const fallbackLayer = style({
  position: "absolute",
  inset: 0,
  backgroundColor: LIQUID_BACKGROUND_FALLBACK_COLOR,
});

export const fallbackImageAsset = style({
  objectFit: "cover",
  objectPosition: "center center",
});

/**
 * 最初の Three 描画までは非表示。
 * その間は layout の #liquid-boot-canvas が見える。
 */
export const canvasElement = style({
  position: "absolute",
  inset: 0,
  display: "block",
  width: "100%",
  height: "100%",
  visibility: "hidden",
});

export const canvasReady = style({
  visibility: "visible",
});

export const canvasHidden = style({
  visibility: "hidden",
});
