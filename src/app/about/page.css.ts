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
  fontSize: "clamp(4.0rem, 5.2vw + 2.6rem, 12.4rem)",
  color: vars.color.text,
  letterSpacing: "-0.09em",
  marginBottom: "-0.6em",
  zIndex: 50,
});
export const nameEn = style({
  position: "relative",
  fontSize: "clamp(5.2rem, 6.4vw + 2.8rem, 14.8rem)",
  fontWeight: 400,
  letterSpacing: "-0.05em",
  height: "1.2em",
  background: `linear-gradient(180deg, #34312f 0%, #aea091 38%, ${vars.color.text} 50%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  zIndex: 0,
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
  borderRadius: 12,
  animationName: animatePhoto,
  animationDuration: "8s",
  animationTimingFunction: "linear",
  animationIterationCount: "infinite",
  "@media": {
    [breakpoints["2xl"]]: {
      width: 280,
      height: 420,
    },
    [breakpoints["sm"]]: {
      borderRadius: 8,
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
  transition: "scale 0.2s ease",
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
  fontSize: "clamp(3.6rem, 2.0vw + 3.0rem, 7.6rem)",
  fontWeight: 300,
  color: vars.color.text,
  lineHeight: 1.2,
  letterSpacing: "-0.036em",
  textAlign: "center",
  marginBottom: 160,
  "@media": {
    [breakpoints["xl"]]: {
      marginBottom: 120,
    },
  },
});

export const description = style({
  fontSize: "clamp(1.8rem, 0.72vw + 1.2rem, 2.4rem)",
  fontWeight: 300,
  color: vars.color.text,
  letterSpacing: 1,
  lineHeight: 1.8,
  textAlign: "center",
  marginBottom: 160,
  padding: "0 4vw",
  "@media": {
    [breakpoints["xl"]]: {
      marginBottom: 120,
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
      marginBottom: 240,
    },
  },
});
export const year = style({
  fontSize: "clamp(1.6rem, 0.72vw + 1.0rem, 2.0rem)",
  letterSpacing: 2,
});
export const event = style({
  fontSize: "clamp(1.7rem, 0.72vw + 1.2rem, 2.4rem)",
  letterSpacing: 1,
});
