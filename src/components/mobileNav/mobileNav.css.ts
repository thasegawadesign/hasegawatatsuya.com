import { vars } from "@/styles/styles.css";
import { style } from "@vanilla-extract/css";

export const mobileNav = style({
  position: "fixed",
  top: -10,
  left: -10,
  width: "calc(100vw + 10px)",
  height: "calc(100vh + 10px)",
  backgroundColor: "#130059",
  padding: "40px 48px",
  zIndex: 100,
});
export const mobileNavCrossBox = style({
  display: "flex",
  justifyContent: "flex-end",
});
export const mobileNavCross = style({
  position: "relative",
  display: "block",
  width: "40px",
  height: "40px",
  backgroundColor: "transparent",
  border: "none",
  marginBottom: 40,
  cursor: "pointer",
  ":before": {
    content: "",
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 2,
    height: "40px",
    backgroundColor: vars.color.text,
    transform: "translate(-50%,-50%) rotate(45deg)",
  },
  ":after": {
    content: "",
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 2,
    height: "40px",
    backgroundColor: vars.color.text,
    transform: "translate(-50%,-50%) rotate(-45deg)",
  },
});
export const mobileNavLinkBox = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: 16,
});
export const mobileNavLink = style({
  position: "relative",
  fontSize: "3.6rem",
  fontWeight: 100,
  color: vars.color.text,
  textDecoration: "none",
  transition: "height 0.3s ease",
  selectors: {
    "&::before": {
      content: "",
      position: "absolute",
      top: 36,
      display: "block",
      width: "100%",
      height: 20,
      backgroundColor: vars.color.text,
      transition: "height 0.3s ease",
    },
    "&:hover::before": {
      height: 1,
    },
  },
});
