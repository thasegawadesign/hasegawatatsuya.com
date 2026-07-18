import { CUBIC_BEZIER, DURATION_M } from "@/constants/constants";
import { breakpoints, vars } from "@/styles/styles.css";
import { style } from "@vanilla-extract/css";

export const backToIndexBox = style({
  position: "absolute",
  bottom: 120,
  // nav 左端と同期（nav.css の left と同じ）
  left: "calc(max(6vw, (100vw - 1400px) / 2) + 36px)",
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
      left: "9vw",
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
