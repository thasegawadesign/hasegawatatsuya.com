import { breakpoints } from "@/styles/styles.css";
import { keyframes, style } from "@vanilla-extract/css";

const pulse = keyframes({
  "0%": { transform: "scale(1) translate(0, 0)", opacity: 0.3 },
  "50%": { transform: "scale(1.05) translate(5px, 5px)", opacity: 1 },
  "100%": { transform: "scale(1) translate(0, 0)", opacity: 0.3 },
});

export const circleBox = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  contain: "layout style paint",
  pointerEvents: "none",
  zIndex: -100,
  "@media": {
    [breakpoints["lg"]]: {
      display: "none",
    },
  },
});
export const circle = style({
  position: "absolute",
  top: "-2vw",
  left: "-2vw",
  border: "2px solid rgba(233, 129, 255, 0.08)",
  borderRadius: "50%",
  animation: `${pulse} 8s ease-in-out infinite`,
  transformOrigin: "top left",
  willChange: "transform, opacity",
  contain: "strict",
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animation: "none",
    },
  },
});
