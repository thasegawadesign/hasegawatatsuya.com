import { vars } from "@/styles/styles.css";
import { style } from "@vanilla-extract/css";

export const mobileNav = style({
  position: "fixed",
  top: -5,
  left: -5,
  width: "calc(100vw + 10px)",
  height: "calc(100vh + 10px)",
  backgroundColor: "#130059",
  padding: "9vw",
  zIndex: 100,
});
export const mobileNavCrossBox = style({
  display: "flex",
  justifyContent: "flex-end",
  listStyleType: "none",
});
export const mobileNavCross = style({
  position: "relative",
  display: "block",
  width: 40,
  height: 40,
  backgroundColor: "transparent",
  border: "none",
  marginBottom: 20,
  cursor: "pointer",
  ":before": {
    content: "",
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 2,
    height: 40,
    backgroundColor: vars.color.text,
    transform: "translate(-50%,-50%) rotate(45deg)",
  },
  ":after": {
    content: "",
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 2,
    height: 40,
    backgroundColor: vars.color.text,
    transform: "translate(-50%,-50%) rotate(-45deg)",
  },
});
export const mobileNavLinkBox = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: 16,
  listStyleType: "none",
});
export const mobileNavLink = style({
  position: "relative",
  fontSize: "5.6rem",
  fontWeight: 100,
  color: vars.color.text,
  textDecoration: "none",
  transition: "height 0.2s ease",
  selectors: {
    "&::before": {
      content: "",
      position: "absolute",
      top: "5.4rem",
      display: "block",
      width: "100%",
      height: 32,
      backgroundColor: vars.color.text,
      borderRadius: "0 0 12px 12px",
      transition: "height 0.2s ease",
    },
    "&:hover": {
      paddingBottom: 32,
    },
    "&:hover::before": {
      height: 1,
    },
  },
});
