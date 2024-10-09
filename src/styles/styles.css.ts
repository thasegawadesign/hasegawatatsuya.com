import { keyframes, style } from "@vanilla-extract/css";

export const breakpoints = {
  "2xl": "screen and (max-width: 1535px)",
  xl: "screen and (max-width: 1279px)",
  lg: "screen and (max-width: 1023px)",
  md: "screen and (max-width: 767px)",
  sm: "screen and (max-width: 639px)",
} as const;

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
  maxWidth: 1440,
  backgroundColor: "rgba(255, 255, 255, .1)",
  margin: "100px auto",
  border: "solid 1px",
  borderColor: "rgba(255, 255, 255, .3)",
  borderRadius: 20,
  boxShadow: "inset 0px 0px 80px rgba(255, 255 , 255 , .3)",
  backdropFilter: "blur(120px)",
});

export const logo = style({
  fontSize: "3.6rem",
  fontWeight: 400,
  color: "#fff",
  textDecoration: "none",
});

export const header = style({
  position: "relative",
});

export const navBox = style({
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

export const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});
export const circle = style({
  position: "fixed",
  top: "-50px",
  right: "-50px",
  width: 130,
  height: 130,
  fontSize: "12px",
  animationName: rotate,
  animationDuration: "20s",
  animationTimingFunction: "linear",
  animationIterationCount: "infinite",
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
});
export const object3 = style({
  position: "fixed",
  bottom: "-16%",
  left: "4%",
  background: `radial-gradient(rgba(185, 79, 202, 1), rgba(234, 234, 234, 1))`,
  width: 600,
  height: 600,
  borderRadius: "100%",
  filter: "blur(16px)",
  zIndex: -50,
});
