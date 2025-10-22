import { CUBIC_BEZIER, DURATION_M } from "@/constants/constants";
import { breakpoints, vars } from "@/styles/styles.css";
import { style } from "@vanilla-extract/css";

export const nav = style({
  position: "fixed",
  top: "7vw",
  left: "clamp(40px, 15.2vw, 300px)",
  display: "flex",
  flexDirection: "column",
  gap: 12,
  zIndex: 100,
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
  fontSize: "2.0rem",
  fontWeight: 100,
  color: vars.color.text,
  letterSpacing: "0.04em",
  textDecoration: "none",
  transition: "height 0.2s ease",
  selectors: {
    "&::before": {
      content: "",
      position: "absolute",
      top: 20,
      display: "block",
      width: "100%",
      height: 20,
      backgroundColor: vars.color.text,
      borderRadius: "0 0 8px 8px",
      transition: `height ${DURATION_M}s ${CUBIC_BEZIER}`,
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
  fontSize: "3.6rem",
  fontWeight: 400,
  color: vars.color.text,
  textDecoration: "none",
});
