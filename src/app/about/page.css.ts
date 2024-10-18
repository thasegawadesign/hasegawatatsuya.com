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
    [breakpoints["lg"]]: {
      top: 140,
    },
    [breakpoints["sm"]]: {
      top: 160,
    },
  },
});
export const nameJa = style({
  position: "relative",
  fontSize: "12.4rem",
  color: vars.color.text,
  letterSpacing: -4.8,
  marginBottom: -68,
  zIndex: 50,
  "@media": {
    [breakpoints["2xl"]]: {
      fontSize: "10.6rem",
      marginBottom: -60,
    },
    [breakpoints["xl"]]: {
      fontSize: "9.0rem",
      marginBottom: -48,
    },
    [breakpoints["lg"]]: {
      fontSize: "6.6rem",
      letterSpacing: -3,
      marginBottom: -40,
    },
    [breakpoints["md"]]: {
      fontSize: "6.0rem",
      marginBottom: -32,
    },
    [breakpoints["sm"]]: {
      fontSize: "4.0rem",
      marginBottom: -24,
    },
  },
});
export const nameEn = style({
  position: "relative",
  fontSize: "15rem",
  fontWeight: 400,
  letterSpacing: -3.6,
  height: "1.2em",
  background: `linear-gradient(180deg, #34312f 0%, #aea091 38%, ${vars.color.text} 50%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  zIndex: 0,
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
      fontSize: "5.0rem",
      letterSpacing: -2.8,
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
  contain: "paint",
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
  letterSpacing: -2.8,
  textAlign: "center",
  marginBottom: 160,
  "@media": {
    [breakpoints["2xl"]]: {
      fontSize: "7.4rem",
    },
    [breakpoints["xl"]]: {
      fontSize: "6.0rem",
      letterSpacing: -1.6,
      marginBottom: 120,
    },
    [breakpoints["lg"]]: {
      fontSize: "5.2rem",
    },
    [breakpoints["md"]]: {
      fontSize: "4.6rem",
    },
    [breakpoints["sm"]]: {
      fontSize: "3.6rem",
      letterSpacing: -1.2,
    },
  },
});

export const description = style({
  fontSize: "2.4rem",
  fontWeight: 300,
  color: vars.color.text,
  letterSpacing: 1,
  lineHeight: 1.8,
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
      fontSize: "1.9rem",
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
  fontWeight: 300,
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
      fontSize: "1.9rem",
    },
    [breakpoints["sm"]]: {
      fontSize: "1.7rem",
    },
  },
});

export const backToIndexBox = style({
  position: "absolute",
  left: "clamp(40px, 15.2%, 300px)",
  bottom: 100,
  "@media": {
    [breakpoints["2xl"]]: {
      left: "clamp(40px, 10%, 240px)",
    },
  },
});
export const backToIndex = style({
  position: "relative",
  fontSize: "2.0rem",
  fontWeight: 100,
  color: vars.color.text,
  letterSpacing: 0.8,
  textDecoration: "none",
  selectors: {
    "&::before": {
      content: "",
      position: "absolute",
      top: 24,
      display: "block",
      width: "100%",
      height: 24,
      backgroundColor: vars.color.text,
      transition: "height 0.3s ease",
    },
    "&:hover": {
      paddingBottom: 24,
    },
    "&:hover::before": {
      height: 1,
    },
  },
});
