import { CUBIC_BEZIER, DURATION_M, DURATION_S } from "@/constants/constants";
import { breakpoints, vars } from "@/styles/styles.css";
import { keyframes, style } from "@vanilla-extract/css";

export const main = style({
  position: "relative",
  zIndex: 50,
});

export const nameMainVisual = style({
  fontSize: "clamp(7.6rem, 16.8vw + 2.4rem, 29.6rem)",
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

export const aboutSection = style({
  paddingBottom: 120,
  "@media": {
    [breakpoints["sm"]]: {
      paddingBottom: 60,
    },
  },
});

export const description = style({
  fontSize: "clamp(1.8rem, 0.72vw + 1.12rem, 2.24rem)",
  fontWeight: 300,
  color: vars.color.text,
  lineHeight: 1.7,
  letterSpacing: "-0.04em",
  textAlign: "center",
  marginBottom: 60,
  padding: "0 4vw",
  transformOrigin: "right bottom",
  "@media": {
    [breakpoints["sm"]]: {
      lineHeight: 1.6,
      marginBottom: 28,
    },
  },
});

export const profileSection = style({
  display: "flex",
  flexDirection: "row-reverse",
  placeItems: "end",
  justifyContent: "center",
  gap: 56,
  backgroundColor: "rgba(255, 255, 255, .12)",
  margin: "0 auto",
  padding: "66px 12vw",
  maxWidth: 920,
  borderRadius: 36,
  backdropFilter: "blur(8px)",
  "@media": {
    [breakpoints["2xl"]]: {
      gap: 52,
      maxWidth: 880,
    },
    [breakpoints["xl"]]: {
      gap: 48,
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
      padding: "30px 2vw",
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
      paddingBottom: 24,
    },
  },
});
export const profileTextBox = style({
  display: "flex",
  flexDirection: "column-reverse",
  gap: 8,
  marginBottom: 20,
  "@media": {
    [breakpoints["sm"]]: {
      gap: 6,
      marginBottom: 12,
    },
  },
});
export const profileName = style({
  fontSize: "3.0rem",
  fontWeight: 300,
  color: vars.color.text,
  letterSpacing: "-0.02em",
  whiteSpace: "nowrap",
  "@media": {
    [breakpoints["2xl"]]: {
      fontSize: "2.9rem",
    },
    [breakpoints["xl"]]: {
      fontSize: "2.7rem",
    },
    [breakpoints["lg"]]: {
      fontSize: "2.5rem",
    },
    [breakpoints["sm"]]: {
      fontSize: "1.9rem",
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
  marginBottom: 56,
  "@media": {
    [breakpoints["sm"]]: {
      gap: 12,
      marginBottom: 28,
    },
  },
});
export const profileLink = style({
  display: "block",
  lineHeight: "100%",
  transition: `scale ${DURATION_M}s ${CUBIC_BEZIER}`,
  ":hover": {
    scale: 1.28,
  },
  ":focus-visible": {
    scale: 1.28,
  },
});
export const profileLinkIcon = style({
  width: 28,
  height: 28,
  color: vars.color.text,
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
    transition: `width ${DURATION_M}s ${CUBIC_BEZIER}`,
  },
  selectors: {
    "&:focus-visible:before": {
      width: 0,
    },
    "&:hover:before": {
      width: 0,
    },
  },
  "@media": {
    [breakpoints["2xl"]]: {
      fontSize: "1.5rem",
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
  marginLeft: -140,
  overflow: "hidden",
  "@media": {
    [breakpoints["2xl"]]: {
      marginLeft: -120,
    },
    [breakpoints["xl"]]: {
      width: 180,
      height: 270,
      marginLeft: -96,
    },
    [breakpoints["lg"]]: {
      marginLeft: -72,
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
  "@media": {
    [breakpoints["sm"]]: {
      borderRadius: 20,
    },
  },
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
  "@media": {
    [breakpoints["sm"]]: {
      borderRadius: 20,
    },
  },
});

export const worksSection = style({
  paddingBottom: 120,
  "@media": {
    [breakpoints["sm"]]: {
      paddingBottom: 60,
    },
  },
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
      margin: "0 2vw",
      gap: 0,
      backgroundColor: "rgba(255, 255, 255, .12)",
      borderRadius: 36,
      backdropFilter: "blur(8px)",
      padding: "0 2vw 48px",
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
    [breakpoints["lg"]]: {
      padding: "40px 2vw",
    },
    [breakpoints["md"]]: {
      padding: "36px 2vw",
    },
    [breakpoints["sm"]]: {
      padding: "30px 2vw 0px",
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
  fontSize: "1.7rem",
  fontWeight: 300,
  color: vars.color.text,
  letterSpacing: "-0.06em",
  lineHeight: "1.4em",
  textAlign: "center",
  "@media": {
    [breakpoints["lg"]]: {
      fontSize: "1.6rem",
    },
    [breakpoints["md"]]: {
      fontSize: "1.5rem",
    },
    [breakpoints["sm"]]: {
      fontSize: "1.2rem",
    },
  },
});
export const worksNameSpan = style({
  display: "block",
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
  transition: `scale ${DURATION_S}s cubic-bezier(0.4, 0, 1, 1)`,
  ":hover": {
    scale: 1.05,
  },
  ":focus-visible": {
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
      width: 80,
      height: 80,
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
  paddingBottom: "clamp(60px, 8vw, 160px)",
});

export const address = style({
  maxWidth: 920,
  margin: "0 auto",
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
      margin: "0 2vw",
    },
  },
});
export const emailLink = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 24,
  padding: "200px 8vw",
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
      gap: 20,
    },
    [breakpoints["xl"]]: {
      fontSize: "2.5rem",
      padding: "180px 8vw",
      gap: 18,
    },
    [breakpoints["lg"]]: {
      fontSize: "2.3rem",
      gap: 16,
    },
    [breakpoints["md"]]: {
      fontSize: "1.8rem",
      gap: 14,
    },
    [breakpoints["sm"]]: {
      fontSize: "1.6rem",
      padding: "144px 2vw",
      gap: 12,
    },
  },
});
export const emailIcon = style({
  width: 34,
  height: 34,
  flexShrink: 0,
  "@media": {
    [breakpoints["2xl"]]: {
      width: 32,
      height: 32,
    },
    [breakpoints["xl"]]: {
      width: 30,
      height: 30,
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
  width: "13.2em",
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
  transition: `transform ${DURATION_M}s cubic-bezier(0.86, 0.37, 0.97, 0.46)`,
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
  transition: `transform ${DURATION_M}s cubic-bezier(0.86, 0.37, 0.97, 0.46)`,
  selectors: {
    [`${emailLink}:hover &`]: {
      transform: "rotateX(0deg) translateZ(0px)",
    },
  },
});
