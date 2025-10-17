import { breakpoints, vars } from "@/styles/styles.css";
import { keyframes, style } from "@vanilla-extract/css";

export const main = style({
  position: "relative",
  zIndex: 50,
});

export const aboutHero = style({
  position: "relative",
  margin: "120px auto 96px",
  height: 480,
  "@media": {
    [breakpoints["xl"]]: {
      height: 420,
      margin: "96px auto 60px",
    },
    [breakpoints["sm"]]: {
      margin: "96px auto 40px",
    },
  },
});
export const nameBox = style({
  position: "absolute",
  top: 300,
  left: 0,
  right: 0,
  zIndex: 50,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  pointerEvents: "none",
  "@media": {
    [breakpoints["sm"]]: {
      top: 320,
    },
  },
});
export const nameJa = style({
  position: "relative",
  fontSize: "clamp(4.0rem, 7.5vw + 2.5rem, 15.4rem)",
  color: vars.color.text,
  letterSpacing: "-0.16em",
  marginBottom: "-0.6em",
  zIndex: 50,
});
export const nameEn = style({
  position: "relative",
  fontSize: "clamp(5.2rem, 8.8vw + 2.6rem, 17.6rem)",
  fontWeight: 400,
  letterSpacing: "-0.09em",
  width: "fit-content",
  height: "1.2em",
  padding: "0 16px",
  background: `linear-gradient(180deg, #111010 0%, #978a7d 38%, ${vars.color.text} 50%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  zIndex: 30,
});
export const tilt = style({
  position: "relative",
  width: "100%",
  height: "176vh",
  paddingTop: 120,
  margin: "-120px auto",
  zIndex: 10,
  "@media": {
    [breakpoints["xl"]]: {
      marginTop: -96,
    },
  },
});
export const photoBox = style({
  position: "relative",
  width: 320,
  height: 480,
  margin: "0 auto",
  "@media": {
    [breakpoints["xl"]]: {
      width: 280,
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
export const photoContainer = style({
  position: "relative",
  aspectRatio: 2 / 3,
  borderRadius: 24,
});
export const motionDiv = style({
  position: "absolute",
  inset: 0,
});
export const photo = style({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  margin: "0 auto",
  contain: "paint",
  borderRadius: 24,
  objectFit: "cover",
  animationName: animatePhoto,
  animationDuration: "20s",
  animationTimingFunction: "ease",
  animationIterationCount: "infinite",
  userSelect: "none",
  pointerEvents: "none",
  "@media": {
    [breakpoints["xl"]]: {
      width: 280,
      height: 420,
    },
  },
});

export const profileLinkBox = style({
  position: "relative",
  display: "flex",
  gap: 16,
  justifyContent: "center",
  width: "fit-content",
  marginTop: 220,
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: "clamp(60px, 5vw, 80px)",
  zIndex: 20,
  "@media": {
    [breakpoints["lg"]]: {
      marginTop: 200,
    },
  },
});
export const profileLinkIcon = style({
  width: 28,
  height: 28,
  color: vars.color.text,
  transition: "scale 0.2s ease",
  ":hover": {
    scale: 1.28,
  },
  "@media": {
    [breakpoints["sm"]]: {
      width: 26,
      height: 26,
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
  margin: "0 auto clamp(60px, 5vw, 80px)",
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
      height: 56,
      ":before": {
        height: 56,
      },
    },
    [breakpoints["xl"]]: {
      height: 48,
      ":before": {
        height: 48,
      },
    },
    [breakpoints["lg"]]: {
      height: 40,
      ":before": {
        height: 40,
      },
    },
  },
});

export const occupation = style({
  position: "relative",
  fontSize: "clamp(3.6rem, 3.2vw + 3.0rem, 8.0rem)",
  fontWeight: 300,
  color: vars.color.text,
  letterSpacing: "-0.08em",
  lineHeight: 1.2,
  textAlign: "center",
  marginBottom: "clamp(60px, 5vw, 80px)",
  zIndex: 20,
  "@media": {
    [breakpoints["sm"]]: {
      lineHeight: 1.1,
    },
  },
});

export const description = style({
  position: "relative",
  fontSize: "clamp(1.8rem, 0.72vw + 1.2rem, 2.4rem)",
  fontWeight: 300,
  color: vars.color.text,
  letterSpacing: "-0.04em",
  lineHeight: 1.8,
  textAlign: "center",
  marginBottom: "clamp(60px, 5vw, 80px)",
  padding: "0 4vw",
  zIndex: 20,
  "@media": {
    [breakpoints["sm"]]: {
      lineHeight: 1.7,
    },
  },
});

export const history = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: 16,
  fontWeight: 300,
  color: vars.color.text,
  textAlign: "center",
  marginBottom: "clamp(200px, 15.6vw, 260px)",
  zIndex: 20,
  "@media": {
    [breakpoints["sm"]]: {
      gap: 12,
    },
  },
});
export const year = style({
  fontSize: "clamp(1.6rem, 0.72vw + 1.0rem, 2.0rem)",
  letterSpacing: "-0.02em",
});
export const event = style({
  fontSize: "clamp(1.8rem, 0.72vw + 1.2rem, 2.4rem)",
  letterSpacing: "-0.04em",
});
