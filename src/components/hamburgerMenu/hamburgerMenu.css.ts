import { breakpoints, vars } from "@/styles/styles.css";
import { style } from "@vanilla-extract/css";

export const hamburgerMenu = style({
  position: "fixed",
  display: "none",
  flexDirection: "column",
  gap: 1,
  border: "none",
  backgroundColor: "transparent",
  zIndex: 100,
  ":hover": {
    cursor: "pointer",
  },
  "@media": {
    [breakpoints["sm"]]: {
      display: "flex",
      top: "9vw",
      right: "9vw",
    },
  },
});
export const hamburgerMenuLine = style({
  width: 36,
  height: 10,
  backgroundColor: vars.color.text,
  borderRadius: "0 0 2px 2px",
});
