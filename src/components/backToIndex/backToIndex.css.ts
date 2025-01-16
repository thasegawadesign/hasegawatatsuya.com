import { breakpoints, vars } from "@/styles/styles.css";
import { style } from "@vanilla-extract/css";

export const backToIndexBox = style({
  position: "absolute",
  left: "clamp(40px, 15.2%, 300px)",
  bottom: 100,
  "@media": {
    [breakpoints["2xl"]]: {
      left: "clamp(40px, 10%, 240px)",
    },
  },
});
export const backToIndex = style({
  position: "relative",
  fontSize: "2.0rem",
  fontWeight: 100,
  color: vars.color.text,
  letterSpacing: 0.8,
  textDecoration: "none",
  selectors: {
    "&::before": {
      content: "",
      position: "absolute",
      top: 24,
      display: "block",
      width: "100%",
      height: 24,
      backgroundColor: vars.color.text,
      transition: "height 0.3s ease",
    },
    "&:hover": {
      paddingBottom: 24,
    },
    "&:hover::before": {
      height: 1,
    },
  },
});
