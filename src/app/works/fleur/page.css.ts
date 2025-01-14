import { vars } from "@/styles/styles.css";
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
