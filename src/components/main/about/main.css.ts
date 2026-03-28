import {
  CUBIC_BEZIER,
  DURATION_M,
  LIQUID_REVEAL_DURATION_S,
  LIQUID_REVEAL_EASING,
} from "@/constants/constants";
import { breakpoints, vars } from "@/styles/styles.css";
import { globalStyle, keyframes, style } from "@vanilla-extract/css";

globalStyle("@property --photo-rotate", {
  syntax: '"<angle>"',
  initialValue: "132deg",
  inherits: false,
} as Parameters<typeof globalStyle>[1]);

const photoMagicSpin = keyframes({
  from: { ["--photo-rotate"]: "0deg" } as Record<string, string>,
  to: { ["--photo-rotate"]: "360deg" } as Record<string, string>,
});

const photoBrighten = keyframes({
  from: { filter: "brightness(1)" },
  to: { filter: "brightness(1.16)" },
});

export const main = style({
  position: "relative",
  zIndex: 50,
});

export const aboutHero = style({
  position: "relative",
  margin: "140px auto 96px",
  height: 480,
  "@media": {
    [breakpoints["xl"]]: {
      margin: "120px auto 60px",
      height: 420,
    },
    [breakpoints["sm"]]: {
      margin: "108px auto 40px",
    },
  },
});
export const nameBox = style({
  position: "absolute",
  zIndex: 50,
  top: 260,
  right: 0,
  left: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  pointerEvents: "none",
  "@media": {
    [breakpoints["sm"]]: {
      top: 280,
    },
  },
});
export const nameJa = style({
  position: "relative",
  zIndex: 50,
  marginBottom: "-0.6em",
  letterSpacing: "-0.16em",
  color: vars.color.text,
  fontSize: "clamp(4rem, 7.5vw + 2.5rem, 15.4rem)",
  fontWeight: 700,
});
export const nameEn = style({
  position: "relative",
  zIndex: 30,
  background: `linear-gradient(180deg, #1f255f 0%, #6a748a 40%, ${vars.color.text} 50%)`,
  padding: "0 16px",
  width: "fit-content",
  height: "1.2em",
  letterSpacing: "-0.09em",
  fontSize: "clamp(5.2rem, 8.6vw + 2.6rem, 17.6rem)",
  fontWeight: 700,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});
export const tilt = style({
  position: "relative",
  zIndex: 10,
  margin: "-120px auto",
  paddingTop: 108,
  width: "100%",
  height: "100vh",
  "@media": {
    [breakpoints["sm"]]: {
      marginTop: -120,
    },
  },
});
export const photoBox = style({
  position: "relative",
  margin: "0 auto",
  width: 320,
  height: 480,
  "@media": {
    [breakpoints["xl"]]: {
      width: 280,
      height: 420,
    },
  },
});
export const photoMagic = style({
  boxSizing: "border-box",
  position: "relative",
  isolation: "isolate",
  backfaceVisibility: "hidden",
  borderRadius: 20,
  padding: 4,
  width: "100%",
  height: "100%",
  overflow: "visible",
  WebkitBackfaceVisibility: "hidden",
  selectors: {
    "&::before": {
      position: "absolute",
      zIndex: 1,
      inset: "-4px",
      transform: "translateZ(0)",
      borderRadius: 24,
      background:
        "linear-gradient(var(--photo-rotate, 132deg), #6dd5ed, #5b6cf0 36%, #1747d6 92%, #cb2ed6 100%)",
      animation: `${photoMagicSpin} 12s linear infinite`,
      content: '""',
    },
    "&::after": {
      position: "absolute",
      zIndex: 0,
      inset: "-20px",
      transform: "translateZ(0) scale(0.6)",
      opacity: 0.82,
      filter: "blur(60px)",
      borderRadius: 24,
      background:
        "linear-gradient(var(--photo-rotate, 132deg), #6dd5ed, #5b6cf0 36%, #1747d6 92%, #cb2ed6 100%)",
      pointerEvents: "none",
      animation: `${photoMagicSpin} 12s linear infinite`,
      content: '""',
    },
  },
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      selectors: {
        "&::before, &::after": {
          animation: "none",
        },
      },
    },
  },
});

export const photoMagicInner = style({
  position: "relative",
  zIndex: 2,
  backfaceVisibility: "hidden",
  borderRadius: 20,
  backgroundColor: "#9bc4f8",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  WebkitBackfaceVisibility: "hidden",
});

export const photo = style({
  position: "relative",
  zIndex: 0,
  display: "block",
  borderRadius: 20,
  boxShadow: "8px 8px 16px 4px rgba(53, 53, 147, 0.26)",
  objectFit: "cover",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  userSelect: "none",
});

/** 初回フルロードで /about を開いたとき、リビール同期・明るさアニメの開始前 */
export const photoPreReveal = style({
  filter: "brightness(1)",
});

/** / などからクライアント遷移で /about に来たとき（読み込み時の同期アニメなし） */
export const photoStaticBright = style({
  filter: "brightness(1.16)",
});

export const photoRevealActive = style({
  animation: `${photoBrighten} ${LIQUID_REVEAL_DURATION_S}s ${LIQUID_REVEAL_EASING} forwards`,
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      filter: "brightness(1.16)",
      animation: "none",
    },
  },
});

export const profileLinkBox = style({
  position: "relative",
  zIndex: 20,
  display: "flex",
  justifyContent: "center",
  gap: 16,
  marginTop: 160,
  marginRight: "auto",
  marginBottom: "clamp(60px, 5vw, 80px)",
  marginLeft: "auto",
  width: "fit-content",
  "@media": {
    [breakpoints["sm"]]: {
      gap: 12,
    },
  },
});
export const profileLink = style({
  display: "block",
  transition: `scale ${DURATION_M}s ${CUBIC_BEZIER}`,
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  ":focus-visible": {
    scale: 1.28,
  },
  ":hover": {
    scale: 1.28,
  },
});
export const profileLinkIcon = style({
  width: 28,
  height: 28,
  color: vars.color.text,
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
    [breakpoints["sm"]]: {
      marginLeft: "8vw",
    },
  },
});

export const occupation = style({
  position: "relative",
  zIndex: 20,
  marginBottom: "clamp(60px, 5vw, 80px)",
  textAlign: "center",
  lineHeight: 1.2,
  letterSpacing: "-0.08em",
  color: vars.color.text,
  fontSize: "clamp(3.2rem, 3.6vw + 2.4rem, 7.2rem)",
  fontWeight: 600,
  "@media": {
    [breakpoints["sm"]]: {
      marginLeft: "8vw",
      textAlign: "left",
    },
  },
});

export const description = style({
  position: "relative",
  zIndex: 20,
  marginBottom: "clamp(60px, 5vw, 80px)",
  padding: "0 4vw",
  textAlign: "center",
  lineHeight: 1.7,
  letterSpacing: "-0.04em",
  color: vars.color.text,
  fontSize: "clamp(1.8rem, 0.72vw + 1.2rem, 2.4rem)",
  fontWeight: 300,
  "@media": {
    [breakpoints["sm"]]: {
      padding: "0 8vw",
      textAlign: "left",
      lineHeight: 1.6,
    },
  },
});

export const section = style({
  padding: "0 4vw",
  "@media": {
    [breakpoints["sm"]]: {
      padding: "0 8vw",
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
    [breakpoints["sm"]]: {
      textAlign: "left",
    },
  },
});

export const historySection = style({
  marginBottom: "clamp(60px, 5vw, 80px)",
});
export const history = style({
  position: "relative",
  zIndex: 20,
  display: "flex",
  flexDirection: "column",
  gap: 16,
  textAlign: "center",
  color: vars.color.text,
  fontWeight: 300,
  "@media": {
    [breakpoints["sm"]]: {
      gap: 12,
      textAlign: "left",
    },
  },
});

export const certificationsSection = style({
  marginBottom: "clamp(60px, 5vw, 80px)",
});
export const certifications = style({
  position: "relative",
  zIndex: 20,
  display: "flex",
  flexDirection: "column",
  gap: 16,
  textAlign: "center",
  color: vars.color.text,
  fontWeight: 300,
  "@media": {
    [breakpoints["sm"]]: {
      gap: 12,
      textAlign: "left",
    },
  },
});

export const contributionsSection = style({
  marginBottom: "clamp(200px, 15.6vw, 260px)",
});
export const contributions = style({
  position: "relative",
  zIndex: 20,
  display: "flex",
  flexDirection: "column",
  gap: 16,
  textAlign: "center",
  color: vars.color.text,
  fontWeight: 300,
  "@media": {
    [breakpoints["sm"]]: {
      gap: 12,
      textAlign: "left",
    },
  },
});
export const year = style({
  marginBottom: 4,
  lineHeight: 1.2,
  letterSpacing: "-0.02em",
  fontSize: "clamp(1.6rem, 0.72vw + 1rem, 2rem)",
});
export const event = style({
  lineHeight: 1.3,
  letterSpacing: "-0.04em",
  fontSize: "clamp(1.8rem, 0.72vw + 1.2rem, 2.4rem)",
});
