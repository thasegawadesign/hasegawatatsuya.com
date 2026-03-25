import { breakpoints } from "@/styles/styles.css";
import { style } from "@vanilla-extract/css";

export const blackHoleContainer = style({
  position: "fixed",
  zIndex: -100,
  right: "2vw",
  bottom: "-2vw",
  alignItems: "center",
  justifyContent: "center",
  background: "transparent",
  overflow: "hidden",
  "@media": {
    [breakpoints["2xl"]]: {
      bottom: 0,
    },
    [breakpoints["sm"]]: {
      display: "none",
    },
  },
});

export const svgStyles = style({
  filter: "contrast(1.2) brightness(1.1)",
  width: "clamp(160px, 12vw, 320px)",
  height: "clamp(160px, 12vw, 320px)",
});
