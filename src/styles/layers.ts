// ページ全体の重なり順。コンポーネント内だけで効く z-index（ガラスの 0〜1 など）が本文より下に収まるよう 10 刻みにする
export const LAYER = {
  background: -30,
  orb: -20,
  content: 10,
  chrome: 20,
  tooltip: 30,
} as const;

// View Transition のグループは ::view-transition の中だけで重なるので LAYER とは別に並べる。
// 指定しないと描画順まかせになり、ページ側の position や isolation を変えただけで写真と見出しの上下が入れ替わる
export const TRANSITION_LAYER = {
  photo: 10,
  heading: 20,
  chrome: 30,
  particles: 40,
  textCircle: 50,
  cursor: 60,
} as const;
