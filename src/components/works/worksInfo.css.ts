import { breakpoints, vars } from "@/styles/styles.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  position: "relative",
  overflow: "hidden",
  borderRadius: "36px 36px 0 0",
  aspectRatio: "auto",
});

export const worksImage = style({
  width: "100%",
  height: "auto",
  borderRadius: "36px 36px 0 0",
  objectFit: "cover",
  userSelect: "none",
  pointerEvents: "none",
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
  fontSize: "clamp(5.6rem, 12vw, 19rem)",
  fontWeight: 600,
  color: vars.color.text,
  paddingRight: "6vw",
  letterSpacing: "-0.02em",
  lineHeight: "0.8em",
});
export const hgroupHeadingJa = style({
  fontSize: "clamp(1.6rem, 1.6vw, 2.8rem)",
  fontWeight: 300,
  color: vars.color.text,
  letterSpacing: "-0.04em",
  marginTop: "4.8vw",
  marginLeft: "3.6vw",
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
  fontSize: "1.4rem",
  color: vars.color.text,
  width: 48,
  letterSpacing: "-0.04em",
  marginTop: "clamp(0.48rem, 0.5vw, 1.2rem)",
  textAlign: "right",
  "@media": {
    [breakpoints["xl"]]: {
      width: 36,
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
  fontSize: "clamp(1.6rem, 1.4vw, 2.3rem)",
  color: vars.color.text,
  width: "40vw",
  letterSpacing: "-0.04em",
  lineHeight: 1.8,
  "@media": {
    [breakpoints["2xl"]]: {
      width: "48vw",
    },
    [breakpoints["lg"]]: {
      width: "60vw",
    },
    [breakpoints["sm"]]: {
      width: "76vw",
      lineHeight: 1.7,
    },
  },
});
export const worksRole = style({
  fontSize: "clamp(2.8rem, 3.2vw, 5.2rem)",
  color: vars.color.text,
  fontWeight: 300,
  lineHeight: 1.28,
  letterSpacing: "-0.08em",
  width: "40vw",
  "@media": {
    [breakpoints["2xl"]]: {
      width: "48vw",
    },
    [breakpoints["lg"]]: {
      width: "60vw",
    },
    [breakpoints["sm"]]: {
      width: "72vw",
      lineHeight: 1.2,
    },
  },
});
export const worksLink = style({
  position: "relative",
  fontWeight: 100,
  color: vars.color.text,
  letterSpacing: "-0.04em",
  textDecoration: "none",
  transition: "height 0.2s ease",
  selectors: {
    "&::before": {
      content: "",
      position: "absolute",
      top: "clamp(1.6rem, 1.36vw, 3rem)",
      display: "block",
      width: "100%",
      height: 40,
      backgroundColor: vars.color.text,
      borderRadius: "0 0 8px 8px",
      transition: "height 0.2s ease",
    },
    "&:hover": {
      paddingBottom: 40,
    },
    "&:hover::before": {
      height: 1,
    },
  },
});
