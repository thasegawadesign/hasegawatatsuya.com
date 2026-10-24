// ページ全体の重なり順。コンポーネント内だけで効く z-index（ガラスの 0〜1 など）が本文より下に収まるよう 10 刻みにする
export const LAYER = {
  background: -30,
  orb: -20,
  spiral: -10,
  content: 10,
  chrome: 20,
  tooltip: 30,
} as const;
