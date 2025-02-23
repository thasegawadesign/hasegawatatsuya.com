import { breakpoints, vars } from "@/styles/styles.css";
import { keyframes, style } from "@vanilla-extract/css";

export const header = style({
  position: "relative",
});

export const main = style({
  position: "relative",
  zIndex: 50,
});

export const nameMainVisual = style({
  fontSize: "22rem",
  fontWeight: 500,
  color: "#130059",
  lineHeight: "0.76em",
  textAlign: "center",
  margin: "180px auto 160px",
  "@media": {
    [breakpoints["2xl"]]: {
      fontSize: "21.2rem",
    },
    [breakpoints["xl"]]: {
      fontSize: "18.8rem",
    },
    [breakpoints["lg"]]: {
      fontSize: "15rem",
    },
    [breakpoints["md"]]: {
      fontSize: "13rem",
    },
    [breakpoints["sm"]]: {
      fontSize: "8.2rem",
      fontWeight: 600,
      lineHeight: "0.8em",
      marginTop: 280,
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
  letterSpacing: 2,
  textAlign: "center",
  marginBottom: 40,
  "@media": {
    [breakpoints["xl"]]: {
      fontSize: "1.4rem",
      marginBottom: 32,
    },
  },
});

export const aboutSection = style({
  paddingBottom: 120,
});

export const description = style({
  fontSize: "2.2rem",
  fontWeight: 300,
  color: vars.color.text,
  lineHeight: 1.8,
  letterSpacing: 1.5,
  textAlign: "center",
  marginBottom: 60,
  padding: "0 20px",
  transformOrigin: "right bottom",
  "@media": {
    [breakpoints["2xl"]]: {
      fontSize: "2.0rem",
    },
    [breakpoints["xl"]]: {
      fontSize: "1.9rem",
    },
    [breakpoints["lg"]]: {
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

export const profileSection = style({
  display: "flex",
  flexDirection: "row-reverse",
  placeItems: "end",
  justifyContent: "center",
  gap: 40,
  backgroundColor: "rgba(255, 255, 255, .12)",
  margin: "0 auto",
  padding: "70px 160px",
  maxWidth: 920,
  "@media": {
    [breakpoints["2xl"]]: {
      maxWidth: 880,
    },
    [breakpoints["xl"]]: {
      maxWidth: 800,
    },
    [breakpoints["lg"]]: {
      maxWidth: 600,
      padding: "70px 120px",
    },
    [breakpoints["md"]]: {
      maxWidth: 580,
      padding: "70px 80px",
    },
    [breakpoints["sm"]]: {
      gap: 20,
      maxWidth: 580,
      padding: "70px 20px",
    },
  },
});
export const profileContent = style({
  paddingBottom: 12,
});
export const profileTextBox = style({
  display: "flex",
  flexDirection: "column-reverse",
  gap: 8,
  marginBottom: 32,
  "@media": {
    [breakpoints["sm"]]: {
      gap: 2,
      marginBottom: 20,
    },
  },
});
export const profileName = style({
  fontSize: "2.6rem",
  fontWeight: 300,
  color: vars.color.text,
  letterSpacing: 1.5,
  "@media": {
    [breakpoints["2xl"]]: {
      fontSize: "2.4rem",
    },
    [breakpoints["lg"]]: {
      fontSize: "2.0rem",
    },
    [breakpoints["sm"]]: {
      fontSize: "1.6rem",
    },
  },
});
export const profileOccupation = style({
  fontSize: "1.4rem",
  fontWeight: 300,
  color: vars.color.text,
  letterSpacing: 2,
  "@media": {
    [breakpoints["2xl"]]: {
      fontSize: "1.3rem",
    },
    [breakpoints["sm"]]: {
      fontSize: "1.2rem",
      letterSpacing: 1.6,
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
export const profileLinkIcon = style({
  width: 24,
  height: 24,
  color: vars.color.text,
  transition: "scale 0.3s ease",
  ":hover": {
    scale: 1.2,
  },
  "@media": {
    [breakpoints["2xl"]]: {
      width: 20,
      height: 20,
    },
  },
});
export const profileMore = style({
  position: "relative",
  fontSize: "1.6rem",
  fontWeight: 300,
  color: vars.color.text,
  letterSpacing: 2,
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
    transition: "width 0.3s ease",
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
export const profileImage = style({
  marginLeft: -120,
  contain: "paint",
  "@media": {
    [breakpoints["xl"]]: {
      marginLeft: -100,
      width: 180,
      height: 270,
    },
    [breakpoints["lg"]]: {
      marginLeft: -80,
    },
    [breakpoints["md"]]: {
      marginLeft: -60,
    },
    [breakpoints["sm"]]: {
      width: 120,
      height: 180,
      marginLeft: -20,
    },
  },
});

export const worksSection = style({
  paddingBottom: 120,
});
export const worksBox = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 50,
  margin: "0 auto",
  maxWidth: 920,
  "@media": {
    [breakpoints["2xl"]]: {
      gap: 40,
      maxWidth: 880,
    },
    [breakpoints["xl"]]: {
      gap: 32,
      maxWidth: 800,
    },
    [breakpoints["lg"]]: {
      gap: 20,
      maxWidth: 600,
    },
    [breakpoints["md"]]: {
      gap: 16,
      maxWidth: 580,
    },
    [breakpoints["sm"]]: {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 1,
    },
  },
});
export const worksItem = style({
  display: "flex",
  flexDirection: "column-reverse",
  alignItems: "center",
  gap: 32,
  padding: "120px 2vw 80px",
  backgroundColor: "rgba(255, 255, 255, .12)",
});
export const worksTextBox = style({
  display: "flex",
  flexDirection: "column-reverse",
  gap: 10,
  alignItems: "center",
});
export const worksName = style({
  fontSize: "1.6rem",
  fontWeight: 300,
  color: vars.color.text,
  "@media": {
    [breakpoints["sm"]]: {
      fontSize: "1.4rem",
    },
  },
});
export const worksCategory = style({
  fontSize: "1.2rem",
  fontWeight: 300,
  color: vars.color.text,
  "@media": {
    [breakpoints["sm"]]: {
      fontSize: "1.0rem",
    },
  },
});
export const worksLink = style({
  width: 160,
  height: 160,
  transition: "scale 0.3s ease",
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
});

export const contactSection = style({
  paddingBottom: 120,
  "@media": {
    [breakpoints["sm"]]: {
      paddingBottom: 60,
    },
  },
});
export const emailLink = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 32,
  margin: "0 auto",
  padding: "160px 240px",
  maxWidth: 1120,
  width: "100%",
  fontSize: "2.2rem",
  fontWeight: 300,
  color: "#130059",
  letterSpacing: 2,
  textDecoration: "none",
  backgroundColor: vars.color.text,
  "@media": {
    [breakpoints["2xl"]]: {
      maxWidth: 1000,
    },
    [breakpoints["xl"]]: {
      gap: 24,
      maxWidth: 900,
      padding: "140px 200px",
      fontSize: "2.0rem",
    },
    [breakpoints["lg"]]: {
      maxWidth: 700,
      padding: "120px 120px",
      fontSize: "1.7rem",
    },
    [breakpoints["md"]]: {
      maxWidth: 640,
      fontSize: "1.7rem",
    },
    [breakpoints["sm"]]: {
      gap: 16,
      padding: "200px 8px",
      fontSize: "1.4rem",
    },
  },
});
export const emailIcon = style({
  width: 40,
  height: 40,
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
      width: 20,
      height: 20,
    },
  },
});
export const emailTextBox = style({
  position: "relative",
  width: "37ch",
  height: 40,
  overflowY: "hidden",
  transformStyle: "preserve-3d",
  backfaceVisibility: "hidden",
});
export const emailTextRotateTop = style({
  position: "absolute",
  top: 0,
  bottom: 0,
  display: "flex",
  placeItems: "center",
  transformOrigin: "top",
  transform: "rotateX(0deg)",
  transition: "transform 0.3s linear",
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
  transition: "transform 0.3s linear",
  selectors: {
    [`${emailLink}:hover &`]: {
      transform: "rotateX(0deg) translateZ(0px)",
    },
  },
});
