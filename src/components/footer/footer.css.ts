import { breakpoints, vars } from "@/styles/styles.css";
import { style } from "@vanilla-extract/css";

export const footer = style({
  position: "relative",
  zIndex: 50,
  paddingBottom: 24,
  textAlign: "center",
  "@media": {
    [breakpoints["md"]]: {
      paddingBottom: 12,
    },
  },
});
export const copyRight = style({
  letterSpacing: "-0.02em",
  color: vars.color.text,
  fontWeight: 300,
});
