import { breakpoints, vars } from "@/styles/styles.css";
import { style } from "@vanilla-extract/css";

export const fleurImage = style({
  height: "auto",
  borderRadius: "20px 20px 0 0",
});

export const fleurHeadingHgroup = style({
  marginTop: "-4vw",
  marginLeft: "6vw",
});
export const fleurHeadingEn = style({
  fontSize: "clamp(5.6rem, 12vw, 20rem)",
  color: vars.color.text,
});
export const fleurHeadingJa = style({
  fontSize: "clamp(1.6rem, 1.6vw, 2.8rem)",
  fontWeight: 300,
  color: vars.color.text,
  marginLeft: "3.6vw",
});

export const worksDl = style({
  display: "flex",
  flexDirection: "column",
  gap: "5.2vw",
  marginTop: "7.6vw",
  marginBottom: "7.2vw",
  padding: "0 4.8vw",
});
export const worksDlItem = style({
  display: "flex",
  justifyContent: "center",
  gap: "2.4vw",
});
export const worksDt = style({
  fontSize: "1.2rem",
  fontWeight: 300,
  color: vars.color.text,
  width: 48,
  textAlign: "right",
  "@media": {
    [breakpoints["xl"]]: {
      width: 36,
    },
  },
});
export const worksDd = style({
  fontSize: "clamp(1.6rem, 1.4vw, 2.4rem)",
  fontWeight: 300,
  color: vars.color.text,
  width: "48vw",
  lineHeight: "1.6em",
  "@media": {
    [breakpoints["2xl"]]: {
      width: "60vw",
    },
    [breakpoints["xl"]]: {
      width: "72vw",
    },
  },
});
export const worksRole = style({
  fontSize: "clamp(2.8rem, 3vw, 4.8rem)",
  color: vars.color.text,
  lineHeight: "1.28em",
  width: "48vw",
  "@media": {
    [breakpoints["2xl"]]: {
      width: "60vw",
    },
    [breakpoints["xl"]]: {
      width: "72vw",
    },
  },
});
