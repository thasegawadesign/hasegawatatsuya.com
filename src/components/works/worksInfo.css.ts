import { breakpoints, vars } from "@/styles/styles.css";
import { style } from "@vanilla-extract/css";

export const worksImage = style({
  height: "auto",
  borderRadius: "20px 20px 0 0",
});

export const hgroupHeading = style({
  marginTop: "-4vw",
  marginLeft: "6vw",
  "@media": {
    [breakpoints["md"]]: {
      marginTop: "16vw",
    },
  },
});
export const hgroupHeadingEn = style({
  fontSize: "clamp(5.6rem, 12vw, 20rem)",
  color: vars.color.text,
});
export const hgroupHeadingJa = style({
  fontSize: "clamp(1.6rem, 1.6vw, 2.8rem)",
  fontWeight: 300,
  color: vars.color.text,
  marginLeft: "3.6vw",
});

export const worksDl = style({
  display: "flex",
  flexDirection: "column",
  gap: "5.2vw",
  marginTop: "7.6vw",
  marginBottom: "16.4vw",
  padding: "0 4.8vw",
  "@media": {
    [breakpoints["xl"]]: {
      marginBottom: "20vw",
    },
    [breakpoints["md"]]: {
      marginTop: "11.2vw",
    },
    [breakpoints["sm"]]: {
      marginBottom: "42.8vw",
    },
  },
});
export const worksDlItem = style({
  display: "flex",
  justifyContent: "center",
  gap: "2.4vw",
});
export const worksDt = style({
  fontSize: "1.2rem",
  fontWeight: 300,
  color: vars.color.text,
  width: 48,
  marginTop: "clamp(0.2rem, 0.6vw, 1.2rem)",
  textAlign: "right",
  "@media": {
    [breakpoints["xl"]]: {
      width: 36,
    },
  },
});
export const worksDd = style({
  fontSize: "clamp(1.6rem, 1.4vw, 2.4rem)",
  fontWeight: 300,
  color: vars.color.text,
  width: "48vw",
  lineHeight: "1.8em",
  "@media": {
    [breakpoints["2xl"]]: {
      width: "60vw",
    },
    [breakpoints["xl"]]: {
      width: "72vw",
    },
  },
});
export const worksRole = style({
  fontSize: "clamp(2.8rem, 3vw, 4.8rem)",
  color: vars.color.text,
  lineHeight: "1.28em",
  width: "48vw",
  "@media": {
    [breakpoints["2xl"]]: {
      width: "60vw",
    },
    [breakpoints["xl"]]: {
      width: "72vw",
    },
  },
});
export const worksLink = style({
  position: "relative",
  fontWeight: 100,
  color: vars.color.text,
  textDecoration: "none",
  transition: "height 0.3s ease",
  selectors: {
    "&::before": {
      content: "",
      position: "absolute",
      top: "clamp(2.12rem, 1.88vw, 3rem)",
      display: "block",
      width: "100%",
      height: 20,
      backgroundColor: vars.color.text,
      transition: "height 0.3s ease",
    },
    "&:hover": {
      paddingBottom: 20,
    },
    "&:hover::before": {
      height: 1,
    },
  },
});
