import {
  SITE_HAMBURGER_TRANSITION_NAME,
  SITE_NAV_TRANSITION_NAME,
  WORK_HEADING_TRANSITION_NAME,
  WORK_PHOTO_TRANSITION_NAME,
} from "@/lib/viewTransitionNames";
import { createGlobalTheme, globalStyle, style } from "@vanilla-extract/css";

export const breakpoints = {
  "2xl": "screen and (max-width: 1535px)",
  xl: "screen and (max-width: 1279px)",
  lg: "screen and (max-width: 1023px)",
  md: "screen and (max-width: 767px)",
  sm: "screen and (max-width: 639px)",
} as const;

export const vars = createGlobalTheme(":root", {
  color: {
    text: "#faf1e8",
  },
});

globalStyle("::view-transition-group(*)", {
  animationDuration: "0.8s",
});
globalStyle("::view-transition-group(profile-photo)", {
  animationTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)",
});
globalStyle("::view-transition-old(about-name)", {
  animationDuration: "0.4s",
  animationTimingFunction: "ease-out",
});

// 作品写真と作品名はブラウザ標準のフェード（-ua-view-transition-fade-in / fade-out）を使い、長さだけ変える。
// 自作の @keyframes は iPhone の Safari で効かず、写真と作品名がフェードせずに残ってから消えていたため
globalStyle(`::view-transition-group(${WORK_PHOTO_TRANSITION_NAME})`, {
  zIndex: 1,
  animation: "none",
});
// 作品名は写真に重なるデザインなので、遷移中も写真より手前に置く
globalStyle(`::view-transition-group(${WORK_HEADING_TRANSITION_NAME})`, {
  zIndex: 2,
  animation: "none",
});
globalStyle(
  `::view-transition-old(${WORK_PHOTO_TRANSITION_NAME}), ::view-transition-new(${WORK_PHOTO_TRANSITION_NAME}), ::view-transition-old(${WORK_HEADING_TRANSITION_NAME}), ::view-transition-new(${WORK_HEADING_TRANSITION_NAME})`,
  {
    animationDuration: "0.7s",
    animationTimingFunction: "ease-out",
    // group が animation: none なので fill-mode を明示しないと、フェードし終えた写真が遷移の終わりまで一瞬戻る
    animationFillMode: "both",
  },
);
// ナビ／ハンバーガーは作品写真・ページ本体より手前に固定し、位置は動かさない
globalStyle(
  `::view-transition-group(${SITE_NAV_TRANSITION_NAME}), ::view-transition-group(${SITE_HAMBURGER_TRANSITION_NAME})`,
  {
    zIndex: 100,
    animation: "none",
  },
);
globalStyle(
  `::view-transition-old(${SITE_NAV_TRANSITION_NAME}), ::view-transition-new(${SITE_NAV_TRANSITION_NAME}), ::view-transition-old(${SITE_HAMBURGER_TRANSITION_NAME}), ::view-transition-new(${SITE_HAMBURGER_TRANSITION_NAME})`,
  {
    animation: "none",
  },
);
globalStyle("::view-transition-group(*), ::view-transition-old(*), ::view-transition-new(*)", {
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animation: "none",
    },
  },
});

export const desktopBr = style({
  "@media": {
    [breakpoints["lg"]]: {
      display: "none",
    },
  },
});
export const mobileBr = style({
  display: "none",
  "@media": {
    [breakpoints["lg"]]: {
      display: "block",
    },
  },
});
