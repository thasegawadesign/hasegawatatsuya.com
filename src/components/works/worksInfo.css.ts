import { CUBIC_BEZIER, DURATION_M } from "@/constants/constants";
import {
  WORK_HEADING_TRANSITION_NAME,
  WORK_PHOTO_TRANSITION_NAME,
} from "@/lib/viewTransitionNames";
import { squircleBottomCorners } from "@/styles/squircle";
import { breakpoints, vars } from "@/styles/styles.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  aspectRatio: "auto",
  position: "relative",
  borderRadius: "36px 36px 0 0",
  overflow: "hidden",
  viewTransitionName: WORK_PHOTO_TRANSITION_NAME,
});

export const worksImage = style({
  borderRadius: "36px 36px 0 0",
  objectFit: "cover",
  pointerEvents: "none",
  width: "100%",
  height: "auto",
  userSelect: "none",
  "@media": {
    [breakpoints["sm"]]: {
      borderRadius: "20px 20px 0 0",
    },
  },
});

export const hgroupHeading = style({
  marginTop: "-4vw",
  marginLeft: "6vw",
  // 写真に重なる見出しを、遷移中も写真より手前に描画する
  viewTransitionName: WORK_HEADING_TRANSITION_NAME,
});
export const hgroupHeadingEn = style({
  paddingRight: "6vw",
  lineHeight: "0.8em",
  letterSpacing: "-0.02em",
  color: vars.color.text,
  fontSize: "clamp(5.6rem, 12vw, 19rem)",
  fontWeight: 700,
});
export const hgroupHeadingJa = style({
  marginTop: "4vw",
  marginLeft: "3.6vw",
  letterSpacing: "-0.04em",
  color: vars.color.text,
  fontSize: "clamp(1.6rem, 1.6vw, 2.8rem)",
  fontWeight: 400,
});

export const worksDl = style({
  display: "flex",
  flexDirection: "column",
  gap: "3.6vw",
  marginTop: "clamp(40px, 9.6vw, 120px)",
  marginBottom: "clamp(200px, 13.9vw, 220px)",
  padding: "0 4.8vw",
  "@media": {
    [breakpoints["sm"]]: {
      marginBottom: 240,
      // ガラスの外側 1vw と合わせて、ロゴとハンバーガーの端（calc(1vw + 28px)）に揃える
      padding: "0 28px",
    },
  },
});
export const worksDlItem = style({
  display: "flex",
  justifyContent: "center",
  gap: "2.4vw",
  "@media": {
    [breakpoints["sm"]]: {
      flexDirection: "column",
      gap: 4,
    },
  },
});
export const worksDt = style({
  marginTop: "clamp(0.48rem, 0.5vw, 1.2rem)",
  width: 48,
  textAlign: "right",
  letterSpacing: "-0.04em",
  color: vars.color.text,
  fontSize: "1.4rem",
  fontWeight: 300,
  "@media": {
    [breakpoints["xl"]]: {
      width: 40,
    },
    [breakpoints["md"]]: {
      fontSize: "1.3rem",
    },
    [breakpoints["sm"]]: {
      marginTop: 0,
      width: "auto",
      textAlign: "left",
      fontSize: "1.2rem",
    },
  },
});
export const worksDd = style({
  width: "40vw",
  lineHeight: 1.7,
  letterSpacing: "-0.04em",
  color: vars.color.text,
  fontSize: "clamp(1.6rem, 1.4vw, 2.3rem)",
  fontWeight: 300,
  "@media": {
    [breakpoints["2xl"]]: {
      width: "48vw",
    },
    [breakpoints["lg"]]: {
      width: "60vw",
    },
    [breakpoints["sm"]]: {
      width: "auto",
      lineHeight: 1.6,
    },
  },
});
export const worksRole = style({
  width: "40vw",
  lineHeight: 1.2,
  letterSpacing: "-0.08em",
  color: vars.color.text,
  fontSize: "clamp(3.2rem, 3.2vw, 5.2rem)",
  fontWeight: 500,
  "@media": {
    [breakpoints["2xl"]]: {
      width: "48vw",
    },
    [breakpoints["lg"]]: {
      width: "60vw",
    },
    [breakpoints["sm"]]: {
      width: "auto",
      lineHeight: 1.12,
    },
  },
});
export const worksLink = style({
  position: "relative",
  transition: `height ${DURATION_M}s ${CUBIC_BEZIER}`,
  textDecoration: "none",
  letterSpacing: "-0.04em",
  color: vars.color.text,
  fontWeight: 200,
  selectors: {
    "&::before": {
      position: "absolute",
      top: "clamp(1.6rem, 1.36vw, 3rem)",
      display: "block",
      transition: `height ${DURATION_M}s ${CUBIC_BEZIER}`,
      ...squircleBottomCorners(8),
      backgroundColor: vars.color.text,
      width: "100%",
      height: "1.7em",
      content: "",
    },
    "&:focus-visible": {
      paddingBottom: "1.7em",
    },
    "&:focus-visible::before": {
      height: 1,
    },
    "&:hover": {
      paddingBottom: "1.7em",
    },
    "&:hover::before": {
      height: 1,
    },
  },
});
