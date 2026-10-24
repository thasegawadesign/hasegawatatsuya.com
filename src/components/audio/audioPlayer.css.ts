import { edgeMedia, HAMBURGER_EDGE_KEYS, type SiteEdge } from "@/styles/siteEdge";
import { vars } from "@/styles/styles.css";
import { keyframes, style } from "@vanilla-extract/css";

const AUDIO_BUTTON_SIZE = 20;
// ハンバーガーを出す幅では、ガラスのカードの端からの基準値で右下に置く（右端は右上のハンバーガーと揃う）。
// 下はハンバーガーのようにロゴへ合わせて下げる理由がないので、上の基準値をそのまま使う
// 円は右端が 1 点しかなく、横線のハンバーガーと数値で揃えると内側に見えるので、その分だけ外へ出す
const OPTICAL_OVERSHOOT = "3px";
const atEdge = (edge: SiteEdge) => ({
  right: `calc(${edge.side} - ${OPTICAL_OVERSHOOT})`,
  bottom: edge.top,
});

export const audioInteract = keyframes({
  "0%": { borderWidth: "2px" },
  "50%": { borderWidth: "8px" },
  "100%": { borderWidth: "2px" },
});
export const audioButtonBox = style({
  position: "fixed",
  zIndex: 100,
  right: "2vw",
  bottom: "2vw",
  "@media": edgeMedia(HAMBURGER_EDGE_KEYS, atEdge),
});
export const audioButton = style({
  display: "block",
  border: `solid 2px ${vars.color.text}`,
  borderRadius: "100%",
  background: "transparent",
  width: AUDIO_BUTTON_SIZE,
  height: AUDIO_BUTTON_SIZE,
  animationName: audioInteract,
  animationDuration: "2s",
  animationTimingFunction: "ease",
  animationIterationCount: "infinite",
  animationPlayState: "paused",
  ":hover": {
    cursor: "pointer",
  },
});
export const animationPaused = style({
  animationPlayState: "paused",
});
export const animationRunning = style({
  animationPlayState: "running",
});
