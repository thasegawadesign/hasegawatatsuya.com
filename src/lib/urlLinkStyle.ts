import { urlLinkSize } from "@/lib/urlLinkStyle.css";

export const getUrlLinkClassName = (url: string) => {
  const length = url.length;

  if (length > 80) return urlLinkSize.over80;
  if (length > 60) return urlLinkSize.over60;
  if (length > 40) return urlLinkSize.over40;

  return urlLinkSize.base;
};
