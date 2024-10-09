import { style } from "@vanilla-extract/css";

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
  maxWidth: 1320,
  backgroundColor: "rgba(255, 255, 255, .1)",
  marginTop: 100,
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: 100,
  borderRadius: 20,
  border: "solid 1px",
  borderColor: "rgba(255, 255, 255, .3)",
  boxShadow: "inset 0px 0px 80px rgba(255, 255 , 255 , .3)",
  backdropFilter: "blur(80px)",
});

export const logo = style({
  fontSize: "3.6rem",
  fontWeight: 400,
  color: "#fff",
  textDecoration: "none",
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
