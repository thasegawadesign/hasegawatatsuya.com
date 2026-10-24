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

// 画面端を覆うために上下左右へはみ出しているので、余白にその分を足して hamburgerSlot と同じ基準に揃える
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
  // ×印に揃えると大きなリンクが内側に寄って見えるので、開閉ボタンの位置は変えずにリンクだけ外へ出す
  marginRight: -12,
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
