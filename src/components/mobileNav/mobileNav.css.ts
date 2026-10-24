import { CUBIC_BEZIER, DURATION_M, SITE_BASE_COLOR } from "@/constants/constants";
import { LAYER } from "@/styles/layers";
import {
  edgeMedia,
  HAMBURGER_EDGE_KEYS,
  hamburgerSlotInset,
  type SiteEdge,
} from "@/styles/siteEdge";
import { breakpoints, vars } from "@/styles/styles.css";
import { style } from "@vanilla-extract/css";

// 画面端を覆うために上下左右へはみ出しているので、余白にその分を足してリンクの右端を hamburgerSlot の右端に揃える
const BLEED = 5;
const menuPadding = (edge: SiteEdge) => {
  const inset = hamburgerSlotInset(edge);
  return {
    paddingTop: `calc(${inset.top} + ${BLEED}px)`,
    paddingRight: `calc(${inset.right} + ${BLEED}px)`,
    paddingLeft: `calc(${inset.right} + ${BLEED}px)`,
  };
};

export const mobileNav = style({
  position: "fixed",
  zIndex: LAYER.chrome,
  // 幅を 100vw で取るとスクロールバーの分だけ右にずれ、fixed の hamburgerSlot と揃わなくなるので inset で張る
  inset: -BLEED,
  backgroundColor: SITE_BASE_COLOR,
  overflowY: "auto",
  "@media": edgeMedia(HAMBURGER_EDGE_KEYS, menuPadding),
});
// 閉じるボタン自体は hamburgerSlot で固定配置されるので、ここはリンクを下げるための場所取りだけをする
export const mobileNavCrossBox = style({
  height: 52,
  listStyleType: "none",
});
export const mobileNavCross = style({
  display: "block",
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  ":before": {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%) rotate(45deg)",
    backgroundColor: vars.color.text,
    width: 2,
    height: 40,
    content: "",
  },
  ":after": {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%) rotate(-45deg)",
    backgroundColor: vars.color.text,
    width: 2,
    height: 40,
    content: "",
  },
});
export const mobileNavLinkBox = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: 28,
  // ×印は 40px の線を 45° 傾けたもので、見た目の幅は約 28px。幅 36px の hamburgerSlot の右端より約 4px 内側で終わるので、
  // リンクの右端もそこまで下げる（字間の 0.02em で文字の右端がすでに約 1px 内側にある分を差し引く）
  paddingRight: 3,
  listStyleType: "none",
  "@media": {
    [breakpoints["sm"]]: {
      gap: 20,
    },
  },
});
export const mobileNavLink = style({
  position: "relative",
  transition: `height ${DURATION_M}s ${CUBIC_BEZIER}`,
  textDecoration: "none",
  letterSpacing: "0.02em",
  color: vars.color.text,
  fontSize: "5.6rem",
  fontWeight: 100,
  "@media": {
    [breakpoints["sm"]]: {
      fontSize: "4.6rem",
    },
  },
  selectors: {
    "&::before": {
      position: "absolute",
      top: "1em",
      display: "block",
      transition: `height ${DURATION_M}s ${CUBIC_BEZIER}`,
      borderRadius: "0 0 12px 12px",
      backgroundColor: vars.color.text,
      width: "100%",
      height: 40,
      content: "",
    },
    "&:focus-visible": {
      paddingBottom: 40,
    },
    "&:focus-visible::before": {
      height: 1,
    },
    "&:hover": {
      paddingBottom: 40,
    },
    "&:hover::before": {
      height: 1,
    },
  },
});
