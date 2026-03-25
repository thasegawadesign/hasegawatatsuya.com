import { CUBIC_BEZIER, DURATION_M } from "@/constants/constants";
import { breakpoints, vars } from "@/styles/styles.css";
import { style } from "@vanilla-extract/css";

export const backToIndexBox = style({
  position: "absolute",
  bottom: 120,
  left: "clamp(40px, 15.2vw, 300px)",
  "@media": {
    [breakpoints["2xl"]]: {
      left: "clamp(40px, 9vw, 240px)",
    },
  },
});
export const backToIndex = style({
  position: "relative",
  textDecoration: "none",
  letterSpacing: "0.04em",
  color: vars.color.text,
  fontSize: "2rem",
  fontWeight: 200,
  selectors: {
    "&::before": {
      position: "absolute",
      top: 20,
      display: "block",
      transition: `height ${DURATION_M}s ${CUBIC_BEZIER}`,
      borderRadius: "0 0 8px 8px",
      backgroundColor: vars.color.text,
      width: "100%",
      height: 34,
      content: "",
    },
    "&:focus-visible": {
      paddingBottom: 34,
    },
    "&:focus-visible::before": {
      height: 1,
    },
    "&:hover": {
      paddingBottom: 34,
    },
    "&:hover::before": {
      height: 1,
    },
  },
});
