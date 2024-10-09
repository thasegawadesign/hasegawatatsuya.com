import { keyframes, style } from "@vanilla-extract/css";

export const breakpoints = {
  "2xl": "screen and (max-width: 1535px)",
  xl: "screen and (max-width: 1279px)",
  lg: "screen and (max-width: 1023px)",
  md: "screen and (max-width: 767px)",
  sm: "screen and (max-width: 639px)",
} as const;

export const html = style({
  overflowX: "hidden",
});

export const smoothScroll = style({
  "@media": {
    "(prefers-reduced-motion: no-preference)": {
      ":focus-within": {
        scrollBehavior: "smooth",
      },
    },
  },
});

export const backgroundGradient = style({
  backgroundColor: "#106",
  backgroundImage: `
  radial-gradient(at 0 0, #f70, transparent 40%),
  radial-gradient(at 0 40%, #0df, transparent 40%),
  radial-gradient(at 40% 60%, #01f, transparent 80%),
  radial-gradient(at 0 100%, #faa, transparent 50%)`,
  backgroundAttachment: "fixed",
});

export const glass = style({
  position: "relative",
  maxWidth: 1400,
  width: "88%",
  margin: "100px auto",
  backgroundColor: "rgba(255, 255, 255, .1)",
  borderRadius: 20,
  border: "solid 1px",
  borderColor: "rgba(255, 255, 255, .3)",
  ":before": {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "100%",
    borderRadius: 20,
    boxShadow: "inset 0px 0px 80px rgba(255, 255 , 255 , .3)",
    backdropFilter: "blur(120px)",
    zIndex: -1,
  },
  "@media": {
    [breakpoints["xl"]]: {
      width: "92%",
    },
  },
});

export const header = style({
  position: "relative",
});

export const nav = style({
  position: "fixed",
  top: 160,
  left: "clamp(40px, 15.2%, 300px)",
  display: "flex",
  flexDirection: "column",
  gap: 12,
  zIndex: 100,
  "@media": {
    [breakpoints["2xl"]]: {
      left: "clamp(40px, 10%, 240px)",
    },
  },
});
export const navLinkBox = style({
  display: "flex",
  flexDirection: "column",
  gap: 8,
});
export const navLink = style({
  fontSize: "2.0rem",
  fontWeight: 300,
  color: "#fff",
  textDecoration: "none",
  borderBottom: "solid 12px",
  transition: "border-bottom 0.3s ease",
  ":hover": {
    borderBottomWidth: "1px",
  },
});

export const logo = style({
  fontSize: "3.6rem",
  fontWeight: 400,
  color: "#fff",
  textDecoration: "none",
});

export const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});
export const circle = style({
  position: "absolute",
  top: "-50px",
  right: "-50px",
  width: 130,
  height: 130,
  fontSize: "12px",
  animationName: rotate,
  animationDuration: "20s",
  animationTimingFunction: "linear",
  animationIterationCount: "infinite",
  "@media": {
    [breakpoints["xl"]]: {
      top: "-40px",
      right: "-40px",
      width: 110,
      height: 110,
    },
  },
});
export const circleSvg = style({
  overflow: "visible",
});
export const circlePath = style({
  fill: "none",
});
export const circleText = style({
  fill: "#fff",
  fontWeight: 300,
});

export const animateObject1 = keyframes({
  "0%": { transform: "translateY(-4%)" },
  "100%": { transform: "translateY(4%)" },
});
export const object1 = style({
  position: "fixed",
  top: "4%",
  left: "40%",
  background: `radial-gradient(rgba(83, 158, 227, .5), rgba(234, 234, 234, 1))`,
  width: 440,
  height: 440,
  borderRadius: "100%",
  filter: "blur(4px)",
  zIndex: -50,
  animationName: animateObject1,
  animationDuration: "10s",
  animationTimingFunction: "ease-in-out",
  animationIterationCount: "infinite",
  animationDirection: "alternate-reverse",
});
export const animateObject2 = keyframes({
  "0%": { transform: "translateY(-8%)" },
  "100%": { transform: "translateY(8%)" },
});
export const object2 = style({
  position: "fixed",
  top: "36%",
  right: "2%",
  background: `radial-gradient(rgba(83, 227, 124, .6), rgba(234, 234, 234, 1))`,
  width: 500,
  height: 500,
  borderRadius: "100%",
  filter: "blur(12px)",
  zIndex: -50,
  animationName: animateObject2,
  animationDuration: "16s",
  animationTimingFunction: "ease-in-out",
  animationIterationCount: "infinite",
  animationDirection: "alternate-reverse",
});
export const animateObject3 = keyframes({
  "0%": { transform: "translateY(-16%)" },
  "100%": { transform: "translateY(16%)" },
});
export const object3 = style({
  position: "fixed",
  bottom: "-24%",
  left: "4%",
  background: `radial-gradient(rgba(185, 79, 202, 1), rgba(234, 234, 234, 1))`,
  width: 600,
  height: 600,
  borderRadius: "100%",
  filter: "blur(16px)",
  zIndex: -50,
  animationName: animateObject3,
  animationDuration: "20s",
  animationTimingFunction: "ease-in-out",
  animationIterationCount: "infinite",
  animationDirection: "alternate-reverse",
});

export const nameMainVisual = style({
  fontSize: "22rem",
  color: "#130059",
  lineHeight: "0.76em",
  textAlign: "center",
  margin: "180px auto 160px",
  "@media": {
    [breakpoints["2xl"]]: {
      fontSize: "20rem",
    },
    [breakpoints["xl"]]: {
      fontSize: "18rem",
    },
    [breakpoints["lg"]]: {
      fontSize: "15rem",
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
  margin: "0 auto",
  backgroundColor: "rgba(19, 0, 89, .3)",
  overflow: "hidden",
  ":before": {
    content: "",
    position: "absolute",
    width: 1,
    height: 60,
    backgroundColor: "#fff",
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
  color: "#fff",
  letterSpacing: 2,
  textAlign: "center",
  marginBottom: 40,
});

export const aboutSection = style({
  paddingTop: 76,
  paddingBottom: 160,
});

export const description = style({
  fontSize: "2.0rem",
  fontWeight: 300,
  color: "#fff",
  lineHeight: "2.4em",
  letterSpacing: 2,
  textAlign: "center",
  marginBottom: 120,
  padding: "0 20px",
  transformOrigin: "right bottom",
  "@media": {
    [breakpoints["2xl"]]: {
      fontSize: "1.8rem",
    },
    [breakpoints["lg"]]: {
      fontSize: "1.7rem",
    },
  },
});
export const desktopBr = style({
  "@media": {
    [breakpoints["lg"]]: {
      display: "none",
    },
  },
});
export const mobileBr = style({
  display: "none",
  "@media": {
    [breakpoints["lg"]]: {
      display: "block",
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
});
export const profileName = style({
  fontSize: "2.4rem",
  fontWeight: 300,
  color: "#fff",
  letterSpacing: 2,
  "@media": {
    [breakpoints["2xl"]]: {
      fontSize: "2.2rem",
    },
    [breakpoints["lg"]]: {
      fontSize: "1.8rem",
    },
  },
});
export const profileOccupation = style({
  fontSize: "1.4rem",
  fontWeight: 300,
  color: "#fff",
  letterSpacing: 2,
  "@media": {
    [breakpoints["2xl"]]: {
      fontSize: "1.2rem",
    },
  },
});
export const profileLinkBox = style({
  display: "flex",
  gap: 16,
  marginBottom: 52,
});
export const profileLinkIcon = style({
  width: 20,
  height: 20,
  color: "#fff",
  "@media": {
    [breakpoints["2xl"]]: {
      width: 18,
      height: 18,
    },
  },
});
export const profileMore = style({
  position: "relative",
  fontSize: "1.6rem",
  fontWeight: 300,
  color: "#fff",
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
    backgroundColor: "#fff",
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
  },
});
export const profileImage = style({
  marginLeft: -120,
  "@media": {
    [breakpoints["xl"]]: {
      marginLeft: -100,
      width: 180,
      height: 270,
    },
    [breakpoints["lg"]]: {
      marginLeft: -80,
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
  },
});
export const worksItem = style({
  display: "flex",
  flexDirection: "column-reverse",
  alignItems: "center",
  gap: 32,
  padding: "120px 0px 80px",
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
  color: "#fff",
});
export const worksCategory = style({
  fontSize: "1.2rem",
  fontWeight: 300,
  color: "#fff",
});
export const worksLink = style({
  width: 160,
  height: 160,
  transition: "scale 0.3s ease",
  ":hover": {
    scale: 1.02,
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
  },
});
export const worksIcon = style({
  width: "100%",
  height: "100%",
});
export const worksUnderDevelopmentItem = style({
  display: "grid",
  placeItems: "center",
  backgroundColor: "rgba(255, 255, 255, .12)",
});
export const worksUnderDevelopment = style({
  fontSize: "1.6rem",
  fontWeight: 300,
  color: "#fff",
});

export const contactSection = style({
  paddingBottom: 120,
});
export const emailLink = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 32,
  margin: "0 auto",
  padding: "74px 240px",
  maxWidth: 1120,
  width: "100%",
  fontSize: "2.2rem",
  fontWeight: 300,
  color: "#130059",
  letterSpacing: 2,
  textDecoration: "none",
  backgroundColor: "#fff",
  transition: "letter-spacing 0.3s linear",
  ":hover": {
    letterSpacing: 2.4,
  },
  "@media": {
    [breakpoints["2xl"]]: {
      maxWidth: 1000,
    },
    [breakpoints["xl"]]: {
      gap: 24,
      maxWidth: 900,
      padding: "74px 200px",
      fontSize: "2.0rem",
    },
    [breakpoints["lg"]]: {
      maxWidth: 660,
      padding: "74px 120px",
      fontSize: "1.7rem",
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
  },
});

export const footer = style({
  textAlign: "center",
  paddingBottom: 24,
});
export const copyRight = style({
  fontWeight: 300,
  letterSpacing: 2,
  color: "#fff",
});
