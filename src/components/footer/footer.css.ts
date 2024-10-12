import { breakpoints, vars } from "@/styles/styles.css";
import { style } from "@vanilla-extract/css";

export const footer = style({
  position: "relative",
  textAlign: "center",
  paddingBottom: 24,
  zIndex: 50,
  "@media": {
    [breakpoints["md"]]: {
      paddingBottom: 12,
    },
  },
});
export const copyRight = style({
  fontWeight: 300,
  letterSpacing: 0.8,
  color: vars.color.text,
});
