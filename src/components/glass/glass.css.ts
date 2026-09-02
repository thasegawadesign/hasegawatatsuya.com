import { breakpoints } from "@/styles/styles.css";
import { liquidGlassOptions } from "@/components/glass/glass.constants";
import { style } from "@vanilla-extract/css";

const { backdropBlurPx, backdropBlurPxSm, saturation } = liquidGlassOptions;

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
  borderRadius: 40,
  boxShadow: "0px 12px 40px rgba(0, 0, 0, 0.25)",
});

export const glassBackdrop = style({
  position: "absolute",
  zIndex: 0,
  inset: 0,
  display: "block",
  borderRadius: "inherit",
  backdropFilter: `blur(${backdropBlurPx}px) saturate(${saturation}%)`,
  WebkitBackdropFilter: `blur(${backdropBlurPx}px) saturate(${saturation}%)`,
  pointerEvents: "none",
  "@media": {
    [breakpoints["sm"]]: {
      backdropFilter: `blur(${backdropBlurPxSm}px) saturate(${saturation}%)`,
      WebkitBackdropFilter: `blur(${backdropBlurPxSm}px) saturate(${saturation}%)`,
    },
  },
});

export const glassRim = style({
  position: "absolute",
  zIndex: 0,
  inset: 0,
  display: "block",
  opacity: 0.2,
  mixBlendMode: "screen",
  borderRadius: "inherit",
  padding: "1.5px",
  pointerEvents: "none",
  WebkitMask:
    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
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
