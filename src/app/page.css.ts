import { breakpoints, vars } from "@/styles/styles.css";
import { keyframes, style } from "@vanilla-extract/css";

export const header = style({
  position: "relative",
  height: 0,
});

export const main = style({
  position: "relative",
  zIndex: 50,
});

export const nameMainVisual = style({
  fontSize: "clamp(7.6rem, 14.4vw + 3.2rem, 26.4rem)",
  fontWeight: 500,
  color: "#130059",
  letterSpacing: "-0.04em",
  lineHeight: "0.76em",
  textAlign: "center",
  margin: "24vh auto",
  "@media": {
    [breakpoints["sm"]]: {
      margin: "33.3vh auto",
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
  margin: "0 auto 76px",
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
  },
});

export const sectionHeading = style({
  fontSize: "1.6rem",
  fontWeight: 300,
  color: vars.color.text,
  letterSpacing: "-0.02em",
  textAlign: "center",
  marginBottom: 16,
  "@media": {
    [breakpoints["xl"]]: {
      fontSize: "1.4rem",
      marginBottom: 12,
    },
  },
});
export const sectionHeadingContact = style({
  fontSize: "1.6rem",
  fontWeight: 300,
  color: vars.color.text,
  letterSpacing: "-0.02em",
  textAlign: "center",
  marginBottom: 72,
  "@media": {
    [breakpoints["xl"]]: {
      fontSize: "1.4rem",
      marginBottom: 68,
    },
  },
});

export const aboutSection = style({
  paddingBottom: 120,
});

export const description = style({
  fontSize: "clamp(1.8rem, 0.72vw + 1.12rem, 2.24rem)",
  color: vars.color.text,
  lineHeight: 1.8,
  letterSpacing: "-0.04em",
  textAlign: "center",
  marginBottom: 60,
  padding: "0 4vw",
  transformOrigin: "right bottom",
});

export const profileSection = style({
  display: "flex",
  flexDirection: "row-reverse",
  placeItems: "end",
  justifyContent: "center",
  gap: 52,
  backgroundColor: "rgba(255, 255, 255, .12)",
  margin: "0 auto",
  padding: "52px 12vw",
  maxWidth: 920,
  borderRadius: 36,
  backdropFilter: "blur(8px)",
  "@media": {
    [breakpoints["2xl"]]: {
      gap: 48,
      maxWidth: 880,
    },
    [breakpoints["xl"]]: {
      gap: 46,
      maxWidth: 800,
    },
    [breakpoints["lg"]]: {
      gap: 40,
      maxWidth: 640,
    },
    [breakpoints["md"]]: {
      gap: 36,
      maxWidth: 580,
    },
    [breakpoints["sm"]]: {
      gap: 20,
      maxWidth: 580,
      padding: "48px 2vw",
      margin: "0 2vw",
    },
  },
});
export const profileContent = style({
  paddingBottom: 48,
  "@media": {
    [breakpoints["xl"]]: {
      paddingBottom: 32,
    },
    [breakpoints["sm"]]: {
      paddingBottom: 16,
    },
  },
});
export const profileTextBox = style({
  display: "flex",
  flexDirection: "column-reverse",
  gap: 8,
  marginBottom: 32,
  "@media": {
    [breakpoints["sm"]]: {
      gap: 6,
      marginBottom: 20,
    },
  },
});
export const profileName = style({
  fontSize: "2.6rem",
  fontWeight: 300,
  color: vars.color.text,
  letterSpacing: "-0.02em",
  "@media": {
    [breakpoints["2xl"]]: {
      fontSize: "2.5rem",
    },
    [breakpoints["xl"]]: {
      fontSize: "2.25rem",
    },
    [breakpoints["lg"]]: {
      fontSize: "2.15rem",
    },
    [breakpoints["sm"]]: {
      fontSize: "1.85rem",
    },
  },
});
export const profileOccupation = style({
  fontSize: "1.4rem",
  fontWeight: 300,
  color: vars.color.text,
  letterSpacing: "-0.02em",
  "@media": {
    [breakpoints["2xl"]]: {
      fontSize: "1.3rem",
    },
    [breakpoints["sm"]]: {
      fontSize: "1.0rem",
    },
  },
});
export const profileLinkBox = style({
  display: "flex",
  gap: 16,
  marginBottom: 52,
  "@media": {
    [breakpoints["sm"]]: {
      marginBottom: 36,
    },
  },
});
export const profileLink = style({
  display: "block",
  lineHeight: "100%",
});
export const profileLinkIcon = style({
  width: 28,
  height: 28,
  color: vars.color.text,
  transition: "scale 0.2s ease",
  ":hover": {
    scale: 1.2,
  },
  "@media": {
    [breakpoints["sm"]]: {
      width: 22,
      height: 22,
    },
  },
});
export const profileMore = style({
  position: "relative",
  fontSize: "1.6rem",
  fontWeight: 300,
  color: vars.color.text,
  letterSpacing: "0.04em",
  textDecoration: "none",
  ":before": {
    content: "",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "1px",
    backgroundColor: vars.color.text,
    transition: "width 0.2s ease",
  },
  selectors: {
    "&:hover:before": {
      width: 0,
    },
  },
  "@media": {
    [breakpoints["2xl"]]: {
      fontSize: "1.4rem",
    },
    [breakpoints["sm"]]: {
      fontSize: "1.2rem",
    },
  },
});
export const profileImageWrapper = style({
  position: "relative",
  width: 200,
  height: 300,
  marginLeft: -132,
  overflow: "hidden",
  "@media": {
    [breakpoints["xl"]]: {
      width: 180,
      height: 270,
    },
    [breakpoints["lg"]]: {
      marginLeft: -80,
    },
    [breakpoints["md"]]: {
      marginLeft: -64,
    },
    [breakpoints["sm"]]: {
      width: 120,
      height: 180,
      marginLeft: -20,
    },
  },
});
export const profileImageContainer = style({
  position: "relative",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  borderRadius: 24,
  aspectRatio: 3 / 2,
});
export const motionDiv = style({
  position: "absolute",
  inset: 0,
});
export const profileImage = style({
  width: "100%",
  height: "auto",
  objectFit: "cover",
  borderRadius: 24,
  userSelect: "none",
  pointerEvents: "none",
});

export const worksSection = style({
  paddingBottom: 160,
});
export const worksBox = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "1vw",
  margin: "0 auto",
  maxWidth: 920,
  "@media": {
    [breakpoints["2xl"]]: {
      maxWidth: 880,
    },
    [breakpoints["xl"]]: {
      maxWidth: 800,
    },
    [breakpoints["lg"]]: {
      maxWidth: 640,
    },
    [breakpoints["md"]]: {
      maxWidth: 580,
    },
    [breakpoints["sm"]]: {
      gridTemplateColumns: "repeat(2, 1fr)",
      margin: "0 2vw",
      gap: 1,
      backgroundColor: "rgba(255, 255, 255, .12)",
      borderRadius: 36,
      backdropFilter: "blur(8px)",
      paddingBottom: 48,
    },
  },
});
export const worksItem = style({
  display: "flex",
  flexDirection: "column-reverse",
  alignItems: "center",
  justifyContent: "start",
  gap: 20,
  padding: "52px 2vw",
  backgroundColor: "rgba(255, 255, 255, 0.12)",
  borderRadius: 36,
  backdropFilter: "blur(8px)",
  "@media": {
    [breakpoints["xl"]]: {
      gap: 12,
    },
    [breakpoints["sm"]]: {
      padding: "48px 2vw 0px",
      backgroundColor: "transparent",
      backdropFilter: "none",
    },
  },
});
export const worksTextBox = style({
  display: "flex",
  flexDirection: "column-reverse",
  gap: 4,
  alignItems: "center",
  "@media": {
    [breakpoints["xl"]]: {
      gap: 2,
    },
  },
});
export const worksName = style({
  fontSize: "1.6rem",
  fontWeight: 300,
  color: vars.color.text,
  letterSpacing: "-0.06em",
  lineHeight: "1.4em",
  textAlign: "center",
  "@media": {
    [breakpoints["sm"]]: {
      fontSize: "1.4rem",
    },
  },
});
export const worksNameSpan = style({
  display: "inline-block",
});
export const worksCategory = style({
  fontSize: "1.0rem",
  fontWeight: 300,
  color: vars.color.text,
  letterSpacing: "-0.06em",
  "@media": {
    [breakpoints["sm"]]: {
      fontSize: "0.9rem",
    },
  },
});
export const worksLink = style({
  width: 160,
  height: 160,
  transition: "scale 0.2s ease",
  ":hover": {
    scale: 1.05,
  },
  "@media": {
    [breakpoints["2xl"]]: {
      width: 150,
      height: 150,
    },
    [breakpoints["xl"]]: {
      width: 120,
      height: 120,
    },
    [breakpoints["sm"]]: {
      width: 100,
      height: 100,
    },
  },
});
export const worksIcon = style({
  width: "100%",
  height: "100%",
  userSelect: "none",
  pointerEvents: "none",
});

export const contactSection = style({
  paddingBottom: 120,
  "@media": {
    [breakpoints["sm"]]: {
      paddingBottom: 60,
    },
  },
});
export const contactWrapper = style({
  "@media": {
    [breakpoints["sm"]]: {
      margin: "0 2vw",
    },
  },
});
export const emailLink = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 32,
  margin: "0 auto",
  padding: "200px 8vw",
  maxWidth: 920,
  width: "100%",
  fontSize: "2.8rem",
  fontWeight: 300,
  color: "#130059",
  textDecoration: "none",
  backgroundColor: vars.color.text,
  borderRadius: 36,
  "@media": {
    [breakpoints["2xl"]]: {
      fontSize: "2.6rem",
      padding: "180px 8vw",
      gap: 28,
      maxWidth: 880,
    },
    [breakpoints["xl"]]: {
      fontSize: "2.5rem",
      padding: "160px 8vw",
      gap: 24,
      maxWidth: 800,
    },
    [breakpoints["lg"]]: {
      fontSize: "2.3rem",
      padding: "160px 8vw",
      gap: 20,
      maxWidth: 640,
    },
    [breakpoints["md"]]: {
      fontSize: "1.8rem",
      gap: 18,
      maxWidth: 580,
    },
    [breakpoints["sm"]]: {
      fontSize: "1.6rem",
      padding: "180px 2vw",
      gap: 16,
    },
  },
});
export const emailIcon = style({
  width: 40,
  height: 40,
  flexShrink: 0,
  "@media": {
    [breakpoints["xl"]]: {
      width: 32,
      height: 32,
    },
    [breakpoints["lg"]]: {
      width: 28,
      height: 28,
    },
    [breakpoints["sm"]]: {
      width: 24,
      height: 24,
    },
  },
});
export const emailTextBox = style({
  position: "relative",
  width: "13.6em",
  height: 40,
  letterSpacing: "-0.01em",
  overflowY: "hidden",
  transformStyle: "preserve-3d",
  backfaceVisibility: "hidden",
  "@media": {
    [breakpoints["sm"]]: {
      width: "12.8em",
    },
  },
});
export const emailTextRotateTop = style({
  position: "absolute",
  top: 0,
  bottom: 0,
  display: "flex",
  placeItems: "center",
  transformOrigin: "top",
  transform: "rotateX(0deg)",
  transition: "transform 0.2s linear",
  selectors: {
    [`${emailLink}:hover &`]: {
      transform: "rotateX(-90deg) translateZ(-60px)",
    },
  },
});
export const emailTextRotateFront = style({
  position: "absolute",
  top: 0,
  bottom: 0,
  display: "flex",
  placeItems: "center",
  transformOrigin: "bottom",
  transform: "rotateX(-90deg) translateZ(60px)",
  transition: "transform 0.2s linear",
  selectors: {
    [`${emailLink}:hover &`]: {
      transform: "rotateX(0deg) translateZ(0px)",
    },
  },
});
