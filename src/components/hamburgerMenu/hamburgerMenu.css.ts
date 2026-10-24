import { SITE_HAMBURGER_TRANSITION_NAME } from "@/lib/viewTransitionNames";
import {
  edgeMedia,
  HAMBURGER_BREAKPOINT,
  HAMBURGER_EDGE_KEYS,
  hamburgerSlotInset,
} from "@/styles/siteEdge";
import { vars } from "@/styles/styles.css";
import { style } from "@vanilla-extract/css";

const HAMBURGER_SLOT_WIDTH = 36;

// 開くボタンとモバイルナビの閉じるボタンは必ず同じ位置・同じ大きさに重ねる。位置は siteEdge の hamburgerSlotInset で決める
export const hamburgerSlot = style({
  position: "fixed",
  zIndex: 100,
  width: HAMBURGER_SLOT_WIDTH,
  height: 32,
  "@media": edgeMedia(HAMBURGER_EDGE_KEYS, hamburgerSlotInset),
});

export const hamburgerMenu = style({
  display: "none",
  flexDirection: "column",
  gap: 1,
  border: "none",
  backgroundColor: "transparent",
  ":hover": {
    cursor: "pointer",
  },
  "@media": {
    [HAMBURGER_BREAKPOINT]: {
      display: "flex",
      // display:none のデスクトップではキャプチャ対象外。ハンバーガーを出す幅だけ手前に固定する
      viewTransitionName: SITE_HAMBURGER_TRANSITION_NAME,
    },
  },
});
export const hamburgerMenuLine = style({
  borderRadius: "0 0 6px 6px",
  backgroundColor: vars.color.text,
  width: 36,
  height: 10,
});
