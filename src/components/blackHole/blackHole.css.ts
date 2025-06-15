import { breakpoints } from "@/styles/styles.css";
import { style } from "@vanilla-extract/css";

export const blackHoleContainer = style({
  position: "fixed",
  bottom: "-2vw",
  right: "2vw",
  justifyContent: "center",
  alignItems: "center",
  background: "transparent",
  overflow: "hidden",
  zIndex: -100,
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
