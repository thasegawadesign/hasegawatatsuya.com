import { CUBIC_BEZIER, DURATION_M } from "@/constants/constants";
import { breakpoints, vars } from "@/styles/styles.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  aspectRatio: "auto",
  position: "relative",
  borderRadius: "36px 36px 0 0",
  overflow: "hidden",
});

export const worksImage = style({
  display: "block",
  borderRadius: "36px 36px 0 0",
  objectFit: "cover",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  userSelect: "none",
  "@media": {
    [breakpoints["sm"]]: {
      borderRadius: "20px 20px 0 0",
    },
  },
});

export const worksVideo = style({
  display: "block",
  borderRadius: "36px 36px 0 0",
  objectFit: "cover",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
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
  fontWeight: 300,
});

export const worksDl = style({
  display: "flex",
  flexDirection: "column",
  gap: "3.6vw",
  marginTop: "clamp(40px, 9.6vw, 120px)",
  marginBottom: "clamp(200px, 15.6vw, 260px)",
  padding: "0 4.8vw",
});
export const worksDlItem = style({
  display: "flex",
  justifyContent: "center",
  gap: "2.4vw",
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
      width: "76vw",
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
      width: "76vw",
      lineHeight: 1.12,
    },
  },
});
export const worksLink = style({
  position: "relative",
  transition: `height ${DURATION_M}s ${CUBIC_BEZIER}`,
  overflow: "hidden",
  textDecoration: "none",
  letterSpacing: "-0.04em",
  color: vars.color.text,
  fontWeight: 200,
  selectors: {
    "&::before": {
      position: "absolute",
      top: "var(--link-underline-top, clamp(1.6rem, 1.36vw, 3rem))",
      display: "block",
      transition: `height ${DURATION_M}s ${CUBIC_BEZIER}`,
      borderRadius: "0 0 8px 8px",
      backgroundColor: vars.color.text,
      width: "100%",
      height: 40,
      content: "",
    },
    "&:focus-visible": {
      paddingBottom: 40,
    },
    "&:focus-visible::before": {
      height: 1,
    },
    "&:hover": {
      paddingBottom: 40,
    },
    "&:hover::before": {
      height: 1,
    },
  },
});
