import { keyframes, style } from "@vanilla-extract/css";

export const aboutHero = style({
  position: "relative",
  margin: "120px auto 24px",
  height: 480,
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
});
export const nameJa = style({
  fontSize: "12.8rem",
  color: "#fff",
  marginBottom: -36,
});
export const nameEn = style({
  fontSize: "14rem",
  fontWeight: 400,
  color: "#fff",
});
export const photoBox = style({
  position: "relative",
  width: "100%",
  height: "480px",
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
});
