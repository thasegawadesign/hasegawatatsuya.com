import { CUBIC_BEZIER, DURATION_M } from "@/constants/constants";
import { breakpoints, vars } from "@/styles/styles.css";
import { style } from "@vanilla-extract/css";

export const nav = style({
  position: "fixed",
  zIndex: 100,
  top: "7vw",
  left: "clamp(40px, 15.2vw, 300px)",
  display: "flex",
  flexDirection: "column",
  gap: 12,
  "@media": {
    [breakpoints["2xl"]]: {
      left: "clamp(40px, 9vw, 240px)",
    },
    [breakpoints["xl"]]: {
      left: "8vw",
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
