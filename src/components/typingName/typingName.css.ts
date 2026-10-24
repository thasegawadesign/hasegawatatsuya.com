import { style } from "@vanilla-extract/css";

export const visuallyHidden = style({
  position: "absolute",
  width: 1,
  height: 1,
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  whiteSpace: "nowrap",
});

export const char = style({
  display: "inline-block",
  whiteSpace: "pre",
  "@media": {
    // 遷移直後の描画で一瞬だけ完成形が見えてしまうのを防ぐ
    "(prefers-reduced-motion: no-preference)": {
      opacity: 0,
    },
  },
});

// 親の background-clip: text は変形した子の文字を拾わないことがあるので、
// グラデーションを一文字ずつに持たせる（縦方向のグラデーションなので文字ごとでも見た目は変わらない）。
// 親は background-image を子に受け渡すだけにして、自分では描かない
export const enLine = style({
  backgroundSize: "0 0",
});
// 字間を詰めているので文字の端が箱からはみ出し、background-clip: text だとそこが描かれない。
// 余白で箱を広げ、同じ量の負のマージンで字送りを元に戻す
export const enChar = style({
  backgroundImage: "inherit",
  margin: "0 -0.2em",
  padding: "0 0.2em",
  height: "1.2em",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});
