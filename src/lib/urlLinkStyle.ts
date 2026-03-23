import type React from "react";

export type UrlLinkStyle = React.CSSProperties & {
  "--link-underline-top"?: string;
};

const getUrlFontSize = (url: string) => {
  const length = url.length;

  if (length > 80) return "clamp(0.7rem, 1.0vw, 1.7rem)";
  if (length > 60) return "clamp(0.8rem, 1.16vw, 1.8rem)";
  if (length > 40) return "clamp(0.9rem, 1.2vw, 2.0rem)";

  return "clamp(1.6rem, 1.4vw, 2.3rem)";
};

const getUrlUnderlineTop = (url: string) => {
  const length = url.length;

  if (length > 80) return "clamp(0.8rem, 0.96vw, 1.6rem)";
  if (length > 60) return "clamp(1.0rem, 1.0vw, 1.8rem)";
  if (length > 40) return "clamp(1.2rem, 1.2vw, 2.0rem)";

  return "clamp(1.6rem, 1.3vw, 2.4rem)";
};

export const getUrlLinkStyle = (url: string): UrlLinkStyle => ({
  fontSize: getUrlFontSize(url),
  "--link-underline-top": getUrlUnderlineTop(url),
});
