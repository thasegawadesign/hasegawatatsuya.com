import { CUBIC_BEZIER, DURATION_M } from "@/constants/constants";
import { SITE_NAV_TRANSITION_NAME } from "@/lib/viewTransitionNames";
import { edgeMedia, HAMBURGER_BREAKPOINT, SITE_EDGE } from "@/styles/siteEdge";
import { vars } from "@/styles/styles.css";
import { style } from "@vanilla-extract/css";

export const nav = style({
  position: "fixed",
  zIndex: 100,
  top: SITE_EDGE.base.top,
  left: SITE_EDGE.base.side,
  display: "flex",
  flexDirection: "column",
  gap: 12,
  // 遷移中も作品写真より手前に保つ（fixed の実体に名前を付ける）
  viewTransitionName: SITE_NAV_TRANSITION_NAME,
  "@media": edgeMedia(["2xl", "xl", "md", "sm"], (edge) => ({ top: edge.top, left: edge.side })),
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
    [HAMBURGER_BREAKPOINT]: {
      display: "none",
    },
  },
});
export const navLink = style({
  position: "relative",
  transition: `height ${DURATION_M}s ${CUBIC_BEZIER}`,
  textDecoration: "none",
  letterSpacing: "0.04em",
  color: vars.color.text,
  fontSize: "2rem",
  fontWeight: 100,
  selectors: {
    "&::before": {
      position: "absolute",
      top: 20,
      display: "block",
      transition: `height ${DURATION_M}s ${CUBIC_BEZIER}`,
      borderRadius: "0 0 8px 8px",
      backgroundColor: vars.color.text,
      width: "100%",
      height: 20,
      content: "",
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
  textDecoration: "none",
  color: vars.color.text,
  fontSize: "3.6rem",
  fontWeight: 400,
});
