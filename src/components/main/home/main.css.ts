import { CUBIC_BEZIER, DURATION_M, DURATION_S } from "@/constants/constants";
import { breakpoints, vars } from "@/styles/styles.css";
import { keyframes, style } from "@vanilla-extract/css";

export const main = style({
  position: "relative",
  zIndex: 50,
});

export const name = style({
  margin: "24vh auto",
  background: "linear-gradient(135deg, #130059 0%, #26003f 100%)",
  backgroundClip: "text",
  paddingBottom: "0.24em",
  textAlign: "center",
  lineHeight: "0.76em",
  letterSpacing: "-0.04em",
  fontSize: "clamp(7.6rem, 16.8vw + 2.4rem, 29.6rem)",
  fontWeight: 700,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  "@media": {
    [breakpoints["sm"]]: {
      margin: "33.3vh auto",
    },
  },
  selectors: {
    "&::selection": {
      WebkitTextFillColor: "#130059",
    },
  },
});
export const nameTightLeft = style({
  marginLeft: "-0.024em",
});
export const nameTight = style({
  letterSpacing: "-0.044em",
});
export const nameWide = style({
  letterSpacing: "-0.028em",
});
export const nameWider = style({
  letterSpacing: "-0.016em",
});

export const animateLine = keyframes({
  "0%": { transform: "translateY(-100%)" },
  "100%": { transform: "translateY(100%)" },
});
export const line = style({
  position: "relative",
  margin: "0 auto clamp(60px, 5vw, 80px)",
  backgroundColor: "rgba(19, 0, 89, .3)",
  width: 1,
  height: 60,
  overflow: "hidden",
  ":before": {
    position: "absolute",
    backgroundColor: vars.color.text,
    width: 1,
    height: 60,
    animationName: animateLine,
    animationDuration: "1.6s",
    animationTimingFunction: "ease",
    animationIterationCount: "infinite",
    content: "",
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
  marginBottom: 16,
  textAlign: "center",
  letterSpacing: "-0.02em",
  color: vars.color.text,
  fontSize: "1.6rem",
  fontWeight: 300,
  "@media": {
    [breakpoints["xl"]]: {
      marginBottom: 12,
      fontSize: "1.4rem",
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
  transformOrigin: "right bottom",
  marginBottom: 60,
  padding: "0 4vw",
  textAlign: "center",
  lineHeight: 1.7,
  letterSpacing: "-0.04em",
  color: vars.color.text,
  fontSize: "clamp(1.8rem, 0.72vw + 1.12rem, 2.24rem)",
  fontWeight: 300,
  "@media": {
    [breakpoints["sm"]]: {
      marginBottom: 28,
      lineHeight: 1.6,
    },
  },
});

export const profileSection = style({
  display: "flex",
  flexDirection: "row-reverse",
  justifyContent: "center",
  placeItems: "end",
  gap: 56,
  backdropFilter: "blur(8px)",
  margin: "0 auto",
  borderRadius: 36,
  backgroundColor: "rgba(255, 255, 255, .12)",
  padding: "66px 12vw",
  maxWidth: 920,
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
      gap: 16,
      margin: "0 2vw",
      padding: "30px 2vw",
      maxWidth: 580,
    },
  },
});
export const profileContent = style({
  paddingBottom: 44,
  "@media": {
    [breakpoints["xl"]]: {
      paddingBottom: 36,
    },
    [breakpoints["sm"]]: {
      paddingBottom: 20,
    },
  },
});
export const profileTextBox = style({
  display: "flex",
  flexDirection: "column-reverse",
  gap: 10,
  marginBottom: 20,
  "@media": {
    [breakpoints["sm"]]: {
      gap: 8,
      marginBottom: 12,
    },
  },
});
export const profileName = style({
  letterSpacing: "-0.02em",
  whiteSpace: "nowrap",
  color: vars.color.text,
  fontSize: "3.7rem",
  fontWeight: 300,
  "@media": {
    [breakpoints["2xl"]]: {
      fontSize: "3.6rem",
    },
    [breakpoints["xl"]]: {
      fontSize: "3.4rem",
    },
    [breakpoints["lg"]]: {
      fontSize: "3rem",
    },
    [breakpoints["sm"]]: {
      fontSize: "2.3rem",
    },
  },
});
export const profileOccupation = style({
  lineHeight: 1.2,
  letterSpacing: "-0.02em",
  color: vars.color.text,
  fontSize: "1.5rem",
  fontWeight: 300,
  "@media": {
    [breakpoints["xl"]]: {
      fontSize: "1.4rem",
    },
    [breakpoints["lg"]]: {
      fontSize: "1.3rem",
    },
    [breakpoints["sm"]]: {
      lineHeight: 1.25,
      fontSize: "1rem",
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
  transition: `scale ${DURATION_M}s ${CUBIC_BEZIER}`,
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  lineHeight: "100%",
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
  textDecoration: "none",
  letterSpacing: "0.04em",
  color: vars.color.text,
  fontSize: "1.6rem",
  fontWeight: 300,
  ":before": {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    transition: `width ${DURATION_M}s ${CUBIC_BEZIER}`,
    backgroundColor: vars.color.text,
    width: "100%",
    height: "1px",
    content: "",
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
  marginLeft: -140,
  width: 200,
  height: 300,
  overflow: "hidden",
  "@media": {
    [breakpoints["2xl"]]: {
      marginLeft: -120,
    },
    [breakpoints["xl"]]: {
      marginLeft: -96,
      width: 180,
      height: 270,
    },
    [breakpoints["lg"]]: {
      marginLeft: -40,
    },
    [breakpoints["md"]]: {
      marginLeft: -32,
    },
    [breakpoints["sm"]]: {
      marginLeft: -8,
      width: 120,
      height: 180,
    },
  },
});
export const profileImageContainer = style({
  aspectRatio: 3 / 2,
  position: "relative",
  borderRadius: 24,
  width: "100%",
  height: "100%",
  overflow: "hidden",
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
  borderRadius: 24,
  objectFit: "cover",
  pointerEvents: "none",
  width: "100%",
  height: "auto",
  userSelect: "none",
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
      gap: 0,
      backdropFilter: "blur(8px)",
      margin: "0 2vw",
      borderRadius: 36,
      backgroundColor: "rgba(255, 255, 255, .12)",
      padding: "0 2vw 28px",
    },
  },
});
export const worksItem = style({
  display: "flex",
  flexDirection: "column-reverse",
  alignItems: "center",
  justifyContent: "start",
  gap: 20,
  backdropFilter: "blur(8px)",
  borderRadius: 36,
  backgroundColor: "rgba(255, 255, 255, 0.12)",
  padding: "44px 2vw",
  "@media": {
    [breakpoints["xl"]]: {
      gap: 12,
      padding: "40px 2vw",
    },
    [breakpoints["lg"]]: {
      padding: "38px 2vw",
    },
    [breakpoints["md"]]: {
      padding: "36px 2vw",
    },
    [breakpoints["sm"]]: {
      backdropFilter: "none",
      backgroundColor: "transparent",
      padding: "24px 2vw 0px",
    },
  },
});
export const worksTextBox = style({
  display: "flex",
  flexDirection: "column-reverse",
  alignItems: "center",
  gap: 4,
  "@media": {
    [breakpoints["xl"]]: {
      gap: 2,
    },
  },
});
export const worksName = style({
  textAlign: "center",
  lineHeight: "1.4em",
  letterSpacing: "-0.06em",
  color: vars.color.text,
  fontSize: "1.7rem",
  fontWeight: 300,
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
  letterSpacing: "-0.06em",
  color: vars.color.text,
  fontSize: "1rem",
  fontWeight: 300,
  "@media": {
    [breakpoints["sm"]]: {
      fontSize: "0.9rem",
    },
  },
});
export const worksLink = style({
  transition: `scale ${DURATION_S}s cubic-bezier(0.4, 0, 1, 1)`,
  width: 160,
  height: 160,
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
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  userSelect: "none",
});

export const contactSection = style({
  paddingBottom: "clamp(60px, 8vw, 160px)",
});

export const address = style({
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
    },
  },
});
export const emailButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 22,
  border: "none",
  borderRadius: 36,
  backgroundColor: vars.color.text,
  cursor: "pointer",
  padding: "200px 8vw",
  width: "100%",
  textAlign: "center",
  textDecoration: "none",
  color: "#130059",
  fontSize: "2.8rem",
  fontWeight: 300,
  "@media": {
    [breakpoints["2xl"]]: {
      gap: 20,
      fontSize: "2.6rem",
    },
    [breakpoints["xl"]]: {
      gap: 18,
      padding: "180px 8vw",
      fontSize: "2.5rem",
    },
    [breakpoints["lg"]]: {
      gap: 16,
      fontSize: "2.3rem",
    },
    [breakpoints["md"]]: {
      gap: 14,
      fontSize: "1.8rem",
    },
    [breakpoints["sm"]]: {
      gap: 12,
      padding: "144px 2vw",
      fontSize: "1.6rem",
    },
  },
});
export const emailButtonHover = style({
  fontSize: "2rem",
  "@media": {
    [breakpoints["2xl"]]: {
      fontSize: "1.9rem",
    },
    [breakpoints["xl"]]: {
      fontSize: "1.8rem",
    },
    [breakpoints["lg"]]: {
      fontSize: "1.7rem",
    },
    [breakpoints["md"]]: {
      fontSize: "1.5rem",
    },
    [breakpoints["sm"]]: {
      fontSize: "1.2rem",
    },
  },
});
export const emailTextBox = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backfaceVisibility: "hidden",
  transformStyle: "preserve-3d",
  width: "12.8em",
  height: 40,
  overflowY: "hidden",
  letterSpacing: "-0.01em",
});
export const emailTextRotateTop = style({
  position: "absolute",
  top: 0,
  bottom: 0,
  display: "flex",
  placeItems: "center",
  transform: "rotateX(0deg)",
  transformOrigin: "top",
  transition: `transform ${DURATION_M}s cubic-bezier(0.78, 0.13, 0.14, 0.84)`,
  selectors: {
    [`${emailButton}:hover &`]: {
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
  transform: "rotateX(-90deg) translateZ(60px)",
  transformOrigin: "bottom",
  transition: `transform ${DURATION_M}s cubic-bezier(0.78, 0.13, 0.14, 0.84)`,
  selectors: {
    [`${emailButton}:hover &`]: {
      transform: "rotateX(0deg) translateZ(0px)",
    },
  },
});
