import { breakpoints, vars } from "@/styles/styles.css";
import { style } from "@vanilla-extract/css";

export const hamburgerMenu = style({
  position: "fixed",
  zIndex: 100,
  display: "none",
  flexDirection: "column",
  gap: 1,
  border: "none",
  backgroundColor: "transparent",
  ":hover": {
    cursor: "pointer",
  },
  "@media": {
    [breakpoints["sm"]]: {
      top: "9vw",
      right: "9vw",
      display: "flex",
    },
  },
});
export const hamburgerMenuLine = style({
  borderRadius: "0 0 6px 6px",
  backgroundColor: vars.color.text,
  width: 36,
  height: 10,
});
