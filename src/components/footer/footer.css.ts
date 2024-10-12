import { breakpoints, vars } from "@/styles/styles.css";
import { style } from "@vanilla-extract/css";

export const footer = style({
  textAlign: "center",
  paddingBottom: 24,
  "@media": {
    [breakpoints["md"]]: {
      paddingBottom: 12,
    },
  },
});
export const copyRight = style({
  fontWeight: 300,
  letterSpacing: 2,
  color: vars.color.text,
});
