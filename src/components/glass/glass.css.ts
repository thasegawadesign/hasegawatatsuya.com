import { breakpoints } from "@/styles/styles.css";
import { liquidGlassOptions } from "@/components/glass/glass.constants";
import {
  squircleMaskBoxImage,
  squircleOutsideMaskBoxImage,
  squircleReach,
  squircleRingMaskBoxImage,
} from "@/styles/squircle";
import { style } from "@vanilla-extract/css";

const { cornerRadius, backdropBlurPx, backdropBlurPxSm, saturation } = liquidGlassOptions;

// --glass-refraction は Chromium だけ url() に差し替わる。既定は何もしない関数にして宣言全体を有効に保つ
const backdrop = (blurPx: number) =>
  `blur(${blurPx}px) saturate(${saturation}%) var(--glass-refraction)`;

export const rimBase =
  "linear-gradient(135deg, rgba(255, 255, 255, 0.26) 0%, rgba(255, 255, 255, 0.05) 28%, rgba(255, 255, 255, 0.02) 62%, rgba(255, 255, 255, 0.12) 100%)";

export const glassShell = style({
  position: "relative",
  margin: "5vw auto",
  width: "88vw",
  maxWidth: 1400,
  "@media": {
    [breakpoints["2xl"]]: {
      width: "86vw",
    },
    [breakpoints["xl"]]: {
      marginTop: "4vw",
      marginBottom: "4vw",
      width: "92vw",
    },
    [breakpoints["md"]]: {
      marginTop: "2vw",
      marginBottom: "2vw",
      width: "96vw",
    },
    [breakpoints["sm"]]: {
      marginTop: "1vw",
      marginBottom: "1vw",
      width: "98vw",
    },
  },
});

const CARD_SHADOW = "0px 12px 40px rgba(0, 0, 0, 0.25)";
const SHADOW_MARGIN = 64;
const SUPPORTS_MASK_BOX = "(-webkit-mask-box-image: none)";

export const glassCard = style({
  position: "relative",
  width: "100%",
  borderRadius: cornerRadius,
  boxShadow: CARD_SHADOW,
  vars: {
    "--glass-refraction": "brightness(1)",
    "--glass-rim-background": rimBase,
  },
  "@supports": {
    [SUPPORTS_MASK_BOX]: {
      boxShadow: "none",
    },
  },
});

// box-shadow は border-radius の円の角でしか抜けず、スーパー楕円との間に影のない隙間ができる。
// 層の箱を広げるとページに横スクロールが出るので、箱はカードと同じにしてマスクだけ outset で外へ広げる
export const glassShadow = style({
  position: "absolute",
  zIndex: 0,
  inset: 0,
  display: "none",
  pointerEvents: "none",
  "@supports": {
    [SUPPORTS_MASK_BOX]: {
      display: "block",
      WebkitMaskBoxImage: squircleOutsideMaskBoxImage(cornerRadius, SHADOW_MARGIN),
    },
  },
  selectors: {
    "&::before": {
      position: "absolute",
      inset: 0,
      borderRadius: squircleReach(cornerRadius),
      boxShadow: CARD_SHADOW,
      content: '""',
    },
  },
});

export const glassFilter = style({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  pointerEvents: "none",
});

export const glassBackdrop = style({
  position: "absolute",
  zIndex: 0,
  inset: 0,
  display: "block",
  borderRadius: "inherit",
  backdropFilter: backdrop(backdropBlurPx),
  WebkitMaskBoxImage: squircleMaskBoxImage(cornerRadius),
  pointerEvents: "none",
  "@media": {
    [breakpoints["sm"]]: {
      backdropFilter: backdrop(backdropBlurPxSm),
    },
  },
});

export const glassRim = style({
  position: "absolute",
  zIndex: 0,
  inset: 0,
  display: "block",
  mixBlendMode: "screen",
  borderRadius: "inherit",
  padding: "1px",
  pointerEvents: "none",
  background: "var(--glass-rim-background)",
  WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  WebkitMaskComposite: "xor",
  maskComposite: "exclude",
  "@supports": {
    [SUPPORTS_MASK_BOX]: {
      WebkitMask: "none",
      WebkitMaskBoxImage: squircleRingMaskBoxImage(cornerRadius, 1),
    },
  },
});

export const glassContent = style({
  position: "relative",
  zIndex: 1,
  display: "flow-root",
});
