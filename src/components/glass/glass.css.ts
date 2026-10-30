import { breakpoints } from "@/styles/styles.css";
import { liquidGlassOptions } from "@/components/glass/glass.constants";
import { style } from "@vanilla-extract/css";

const { cornerRadius, backdropBlurPx, backdropBlurPxSm, saturation } = liquidGlassOptions;

// --glass-refraction は Chromium だけ url() に差し替わる。既定は何もしない関数にして宣言全体を有効に保つ
const backdrop = (blurPx: number) =>
  `blur(${blurPx}px) saturate(${saturation}%) var(--glass-refraction)`;

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

export const glassCard = style({
  position: "relative",
  width: "100%",
  borderRadius: cornerRadius,
  boxShadow: "0px 12px 40px rgba(0, 0, 0, 0.25)",
  vars: {
    "--glass-refraction": "brightness(1)",
    "--glass-rim-background":
      "linear-gradient(135deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.12) 33%, rgba(255, 255, 255, 0.4) 66%, rgba(255, 255, 255, 0) 100%)",
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
  // mix-blend-mode: screen にすると View Transition の後に描き直されず、カードのスタイルが次に変わるまで輪が消える。
  // 白の光は screen でも通常の重ね方でも同じ色になり、黒い外側の影は mask で切り落とされるので、合成モードは使わない
  opacity: 0.5,
  borderRadius: "inherit",
  padding: "1.5px",
  pointerEvents: "none",
  background: "var(--glass-rim-background)",
  WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  WebkitMaskComposite: "xor",
  maskComposite: "exclude",
  boxShadow:
    "0 0 0 0.5px rgba(255, 255, 255, 0.5) inset, 0 1px 3px rgba(255, 255, 255, 0.25) inset, 0 1px 4px rgba(0, 0, 0, 0.35)",
});

export const glassContent = style({
  position: "relative",
  zIndex: 1,
  display: "flow-root",
});
