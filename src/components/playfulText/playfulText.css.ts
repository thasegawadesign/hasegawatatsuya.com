import { breakpoints } from "@/styles/styles.css";
import { style } from "@vanilla-extract/css";

export const root = style({
  display: "inline-block",
  position: "relative",
  cursor: "pointer",
  WebkitTapHighlightColor: "transparent",
  userSelect: "none",
});

export const pressable = style({
  // 既定の touch-action では、横になぞった時点で pointercancel が来る
  touchAction: "pan-y",
});

export const grabbable = style({
  cursor: "grab",
  touchAction: "none",
  selectors: {
    "&:active": {
      cursor: "grabbing",
    },
  },
});

export const tuggable = style({
  cursor: "grab",
  touchAction: "pan-y",
  selectors: {
    "&:active": {
      cursor: "grabbing",
    },
  },
});

export const swaying = style({});

export const faceted = style({});

export const punchline = style({
  display: "block",
  marginInline: "auto",
  width: "fit-content",
  "@media": {
    [breakpoints["lg"]]: {
      marginInline: 0,
    },
  },
});

export const word = style({
  display: "inline-block",
  position: "relative",
  // 文字ごとの inline-block は語の途中でも折り返せてしまう
  whiteSpace: "nowrap",
});

export const caret = style({
  position: "absolute",
  top: "50%",
  left: 0,
  opacity: 0,
  marginTop: "-0.41em",
  background: "currentColor",
  width: "max(2px, 0.045em)",
  height: "0.82em",
  pointerEvents: "none",
});

export const untyped = style({
  opacity: 0,
});

export const char = style({
  display: "inline-block",
  position: "relative",
  willChange: "transform",
  selectors: {
    [`${swaying} &`]: {
      transformOrigin: "50% 100%",
    },
    [`${faceted} &`]: {
      transition: "filter 0.5s ease-out",
    },
  },
});

export const blurred = style({
  filter: "blur(0.28em)",
  selectors: {
    [`${faceted} &`]: {
      transitionDuration: "0.12s",
    },
  },
});

// 記号を文字として流し込むと、書体の違いで字幅とベースラインが変わり行がずれる
export const glyph = style({
  WebkitTextFillColor: "transparent",
  selectors: {
    "&::after": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      opacity: 0.86,
      content: "attr(data-glyph)",
      fontFamily: 'ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, monospace',
      fontWeight: 400,
      WebkitTextFillColor: "currentColor",
    },
  },
});

export const visuallyHidden = style({
  position: "absolute",
  width: 1,
  height: 1,
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  whiteSpace: "nowrap",
});
