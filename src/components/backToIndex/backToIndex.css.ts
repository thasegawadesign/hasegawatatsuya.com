import { CUBIC_BEZIER, DURATION_M } from "@/constants/constants";
import { breakpoints, vars } from "@/styles/styles.css";
import { style } from "@vanilla-extract/css";

export const backToIndexBox = style({
  position: "absolute",
  left: "clamp(40px, 15.2vw, 300px)",
  bottom: 120,
  "@media": {
    [breakpoints["2xl"]]: {
      left: "clamp(40px, 9vw, 240px)",
    },
  },
});
export const backToIndex = style({
  position: "relative",
  fontSize: "2.0rem",
  fontWeight: 200,
  color: vars.color.text,
  letterSpacing: "0.04em",
  textDecoration: "none",
  selectors: {
    "&::before": {
      content: "",
      position: "absolute",
      top: 20,
      display: "block",
      width: "100%",
      height: 34,
      backgroundColor: vars.color.text,
      borderRadius: "0 0 8px 8px",
      transition: `height ${DURATION_M}s ${CUBIC_BEZIER}`,
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
