import { CUBIC_BEZIER, DURATION_M } from "@/constants/constants";
import { vars } from "@/styles/styles.css";
import { style } from "@vanilla-extract/css";

export const mobileNav = style({
  position: "fixed",
  zIndex: 100,
  top: -5,
  left: -5,
  backgroundColor: "#0a405b",
  padding: "9vw",
  width: "calc(100vw + 10px)",
  height: "calc(100vh + 10px)",
});
export const mobileNavCrossBox = style({
  display: "flex",
  justifyContent: "flex-end",
  listStyleType: "none",
});
export const mobileNavCross = style({
  position: "relative",
  display: "block",
  marginBottom: 20,
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  width: 40,
  height: 40,
  ":before": {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%) rotate(45deg)",
    backgroundColor: vars.color.text,
    width: 2,
    height: 40,
    content: "",
  },
  ":after": {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%) rotate(-45deg)",
    backgroundColor: vars.color.text,
    width: 2,
    height: 40,
    content: "",
  },
});
export const mobileNavLinkBox = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: 20,
  listStyleType: "none",
});
export const mobileNavLink = style({
  position: "relative",
  transition: `height ${DURATION_M}s ${CUBIC_BEZIER}`,
  textDecoration: "none",
  letterSpacing: "0.02em",
  color: vars.color.text,
  fontSize: "5.6rem",
  fontWeight: 100,
  selectors: {
    "&::before": {
      position: "absolute",
      top: "5.4rem",
      display: "block",
      transition: `height ${DURATION_M}s ${CUBIC_BEZIER}`,
      borderRadius: "0 0 12px 12px",
      backgroundColor: vars.color.text,
      width: "100%",
      height: 40,
      content: "",
    },
    "&:focus-visible": {
      paddingBottom: 40,
    },
    "&:focus-visible::before": {
      height: 1,
    },
    "&:hover": {
      paddingBottom: 40,
    },
    "&:hover::before": {
      height: 1,
    },
  },
});
