import { createVar, styleVariants } from "@vanilla-extract/css";

export const linkUnderlineTop = createVar();

export const urlLinkSize = styleVariants({
  over80: {
    fontSize: "clamp(0.7rem, 1.0vw, 1.7rem)",
    vars: { [linkUnderlineTop]: "clamp(0.8rem, 0.96vw, 1.6rem)" },
  },
  over60: {
    fontSize: "clamp(0.8rem, 1.16vw, 1.8rem)",
    vars: { [linkUnderlineTop]: "clamp(1.0rem, 1.0vw, 1.8rem)" },
  },
  over40: {
    fontSize: "clamp(0.9rem, 1.2vw, 2.0rem)",
    vars: { [linkUnderlineTop]: "clamp(1.2rem, 1.2vw, 2.0rem)" },
  },
  base: {
    fontSize: "clamp(1.6rem, 1.4vw, 2.3rem)",
    vars: { [linkUnderlineTop]: "clamp(1.6rem, 1.3vw, 2.4rem)" },
  },
});
