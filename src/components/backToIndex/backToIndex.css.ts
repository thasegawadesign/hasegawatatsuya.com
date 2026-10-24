import { CUBIC_BEZIER, DURATION_M } from "@/constants/constants";
import { edgeMedia, SITE_EDGE } from "@/styles/siteEdge";
import { vars } from "@/styles/styles.css";
import { style } from "@vanilla-extract/css";

export const backToIndexBox = style({
  position: "absolute",
  zIndex: 2,
  bottom: 120,
  // nav のロゴと左端を揃える
  left: SITE_EDGE.base.side,
  "@media": edgeMedia(["2xl", "xl", "md", "sm"], (edge) => ({ left: edge.side })),
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
