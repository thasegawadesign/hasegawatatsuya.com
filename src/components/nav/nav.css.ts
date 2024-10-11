import { breakpoints } from "@/styles/styles.css";
import { style } from "@vanilla-extract/css";

export const nav = style({
  position: "fixed",
  top: 160,
  left: "clamp(40px, 15.2%, 300px)",
  display: "flex",
  flexDirection: "column",
  gap: 12,
  zIndex: 100,
  "@media": {
    [breakpoints["2xl"]]: {
      left: "clamp(40px, 10%, 240px)",
    },
    [breakpoints["sm"]]: {
      top: 36,
    },
  },
});
export const navLinkBox = style({
  display: "flex",
  flexDirection: "column",
  gap: 16,
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
  color: "#fff",
  letterSpacing: 1.2,
  textDecoration: "none",
  transition: "height 0.3s ease",
  selectors: {
    "&::before": {
      content: "",
      position: "absolute",
      top: 20,
      display: "block",
      width: "100%",
      height: 20,
      backgroundColor: "#fff",
      transition: "height 0.3s ease",
    },
    "&:hover::before": {
      height: 1,
    },
  },
});

export const logo = style({
  fontSize: "3.6rem",
  fontWeight: 400,
  color: "#fff",
  textDecoration: "none",
  "@media": {
    [breakpoints["sm"]]: {
      fontSize: "3.0rem",
    },
  },
});
