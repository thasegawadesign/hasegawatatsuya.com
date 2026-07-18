import { CUBIC_BEZIER, DURATION_M } from "@/constants/constants";
import { breakpoints, vars } from "@/styles/styles.css";
import { style } from "@vanilla-extract/css";

export const nav = style({
  position: "fixed",
  zIndex: 100,
  top: "6.5vw",
  // Glass 左端から 36px（幅は glass.css と同期）
  left: "calc(max(6vw, (100vw - 1400px) / 2) + 36px)",
  display: "flex",
  flexDirection: "column",
  gap: 12,
  "@media": {
    [breakpoints["2xl"]]: {
      left: "calc(7vw + 36px)",
    },
    [breakpoints["xl"]]: {
      left: "calc(4vw + 36px)",
    },
    [breakpoints["md"]]: {
      left: "calc(2vw + 36px)",
    },
    [breakpoints["sm"]]: {
      top: "6vw",
      left: "9vw",
    },
  },
});
export const navLogoBox = style({
  listStyleType: "none",
});
export const navLinkBox = style({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  listStyleType: "none",
  "@media": {
    [breakpoints["sm"]]: {
      display: "none",
    },
  },
});
export const navLink = style({
  position: "relative",
  transition: `height ${DURATION_M}s ${CUBIC_BEZIER}`,
  textDecoration: "none",
  letterSpacing: "0.04em",
  color: vars.color.text,
  fontSize: "2rem",
  fontWeight: 100,
  selectors: {
    "&::before": {
      position: "absolute",
      top: 20,
      display: "block",
      transition: `height ${DURATION_M}s ${CUBIC_BEZIER}`,
      borderRadius: "0 0 8px 8px",
      backgroundColor: vars.color.text,
      width: "100%",
      height: 20,
      content: "",
    },
    "&:focus-visible": {
      paddingBottom: 20,
    },
    "&:focus-visible::before": {
      height: 1,
    },
    "&:hover": {
      paddingBottom: 20,
    },
    "&:hover::before": {
      height: 1,
    },
  },
});

export const logo = style({
  textDecoration: "none",
  color: vars.color.text,
  fontSize: "3.6rem",
  fontWeight: 400,
});
