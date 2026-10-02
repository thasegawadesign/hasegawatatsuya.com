import { SITE_HAMBURGER_TRANSITION_NAME } from "@/lib/viewTransitionNames";
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
      // display:none のデスクトップではキャプチャ対象外。モバイルだけ手前に固定する
      viewTransitionName: SITE_HAMBURGER_TRANSITION_NAME,
    },
  },
});
export const hamburgerMenuLine = style({
  borderRadius: "0 0 6px 6px",
  backgroundColor: vars.color.text,
  width: 36,
  height: 10,
});
