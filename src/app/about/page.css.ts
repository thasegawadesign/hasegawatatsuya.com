import { breakpoints, vars } from "@/styles/styles.css";
import { keyframes, style } from "@vanilla-extract/css";

export const glassBox = style({
  position: "relative",
});

export const header = style({
  position: "relative",
});

export const main = style({
  position: "relative",
  zIndex: 50,
});

export const aboutHero = style({
  position: "relative",
  margin: "120px auto 40px",
  height: 480,
  "@media": {
    [breakpoints["2xl"]]: {
      height: 420,
    },
  },
});
export const nameBox = style({
  position: "absolute",
  top: 120,
  left: 0,
  right: 0,
  zIndex: 50,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  pointerEvents: "none",
  "@media": {
    [breakpoints["sm"]]: {
      top: 160,
    },
  },
});
export const nameJa = style({
  fontSize: "12.8rem",
  color: vars.color.text,
  marginBottom: -36,
  "@media": {
    [breakpoints["2xl"]]: {
      fontSize: "10.4rem",
    },
    [breakpoints["xl"]]: {
      fontSize: "8.4rem",
    },
    [breakpoints["lg"]]: {
      fontSize: "6.6rem",
    },
    [breakpoints["md"]]: {
      fontSize: "6.0rem",
    },
    [breakpoints["sm"]]: {
      fontSize: "4.0rem",
      marginBottom: -16,
    },
  },
});
export const nameEn = style({
  fontSize: "14rem",
  fontWeight: 400,
  color: vars.color.text,
  "@media": {
    [breakpoints["2xl"]]: {
      fontSize: "12.8rem",
    },
    [breakpoints["xl"]]: {
      fontSize: "10.8rem",
    },
    [breakpoints["lg"]]: {
      fontSize: "8.0rem",
    },
    [breakpoints["md"]]: {
      fontSize: "7.2rem",
    },
    [breakpoints["sm"]]: {
      fontSize: "4.6rem",
    },
  },
});
export const photoBox = style({
  position: "relative",
  width: "100%",
  height: "480px",
  "@media": {
    [breakpoints["2xl"]]: {
      height: 420,
    },
  },
});
export const animatePhoto = keyframes({
  "0%": { transform: "rotate(0)" },
  "25%": { transform: "rotate(6deg)" },
  "50%": { transform: "rotate(0)" },
  "75%": { transform: "rotate(-6deg)" },
  "100%": { transform: "rotate(0)" },
});
export const photo = style({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  margin: "0 auto",
  animationName: animatePhoto,
  animationDuration: "8s",
  animationTimingFunction: "linear",
  animationIterationCount: "infinite",
  "@media": {
    [breakpoints["2xl"]]: {
      width: 280,
      height: 420,
    },
  },
});

export const profileLinkBox = style({
  display: "flex",
  gap: 24,
  justifyContent: "center",
  marginBottom: 80,
});
export const profileLinkIcon = style({
  width: 28,
  height: 28,
  color: vars.color.text,
  transition: "scale 0.3s ease",
  ":hover": {
    scale: 1.3,
  },
  "@media": {
    [breakpoints["2xl"]]: {
      width: 24,
      height: 24,
    },
  },
});

export const animateLine = keyframes({
  "0%": { transform: "translateY(-100%)" },
  "100%": { transform: "translateY(100%)" },
});
export const line = style({
  position: "relative",
  width: 1,
  height: 60,
  margin: "0 auto 120px",
  backgroundColor: "rgba(19, 0, 89, .3)",
  overflow: "hidden",
  ":before": {
    content: "",
    position: "absolute",
    width: 1,
    height: 60,
    backgroundColor: vars.color.text,
    animationName: animateLine,
    animationDuration: "1.6s",
    animationTimingFunction: "ease",
    animationIterationCount: "infinite",
  },
  "@media": {
    [breakpoints["2xl"]]: {
      height: 40,
      ":before": {
        height: 40,
      },
    },
    [breakpoints["xl"]]: {
      marginBottom: 80,
    },
  },
});

export const occupation = style({
  fontSize: "7.6rem",
  fontWeight: 300,
  color: vars.color.text,
  lineHeight: 1.2,
  textAlign: "center",
  marginBottom: 160,
  "@media": {
    [breakpoints["2xl"]]: {
      fontSize: "7.4rem",
    },
    [breakpoints["xl"]]: {
      fontSize: "6.0rem",
      marginBottom: 120,
    },
    [breakpoints["lg"]]: {
      fontSize: "4.8rem",
    },
    [breakpoints["md"]]: {
      fontSize: "4.0rem",
    },
    [breakpoints["sm"]]: {
      fontSize: "3.0rem",
    },
  },
});

export const description = style({
  fontSize: "2.4rem",
  fontWeight: 200,
  color: vars.color.text,
  letterSpacing: 1,
  lineHeight: 1.6,
  textAlign: "center",
  marginBottom: 160,
  padding: "0 100px",
  "@media": {
    [breakpoints["2xl"]]: {
      fontSize: "2.2rem",
    },
    [breakpoints["xl"]]: {
      fontSize: "2.0rem",
      marginBottom: 120,
    },
    [breakpoints["md"]]: {
      fontSize: "1.8rem",
      padding: "0 80px",
    },
    [breakpoints["sm"]]: {
      fontSize: "1.7rem",
      padding: "0 20px",
    },
  },
});

export const history = style({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  fontWeight: 200,
  color: vars.color.text,
  textAlign: "center",
  marginBottom: 280,
  "@media": {
    [breakpoints["xl"]]: {
      marginBottom: 200,
    },
  },
});
export const year = style({
  fontSize: "2.0rem",
  letterSpacing: 2,
  "@media": {
    [breakpoints["2xl"]]: {
      fontSize: "1.9rem",
    },
    [breakpoints["xl"]]: {
      fontSize: "1.8rem",
    },
    [breakpoints["md"]]: {
      fontSize: "1.6rem",
    },
  },
});
export const event = style({
  fontSize: "2.4rem",
  letterSpacing: 1,
  "@media": {
    [breakpoints["2xl"]]: {
      fontSize: "2.2rem",
    },
    [breakpoints["xl"]]: {
      fontSize: "2.0rem",
    },
    [breakpoints["md"]]: {
      fontSize: "1.8rem",
    },
    [breakpoints["sm"]]: {
      fontSize: "1.6rem",
    },
  },
});

export const backToIndex = style({
  position: "absolute",
  bottom: 100,
  left: "clamp(40px, 15.2%, 300px)",
  fontSize: "1.6rem",
  fontWeight: 100,
  color: vars.color.text,
  letterSpacing: 0.8,
  textDecoration: "none",
  selectors: {
    "&::before": {
      content: "",
      position: "absolute",
      top: 20,
      display: "block",
      width: "100%",
      height: 20,
      backgroundColor: vars.color.text,
      transition: "height 0.3s ease",
    },
    "&:hover::before": {
      height: 1,
    },
  },
  "@media": {
    [breakpoints["2xl"]]: {
      left: "clamp(40px, 10%, 240px)",
    },
  },
});