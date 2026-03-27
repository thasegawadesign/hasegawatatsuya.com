import { Cormorant, Noto_Serif_JP, Roboto } from "next/font/google";

export const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  preload: true,
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
  display: "swap",
  preload: true,
});

export const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  preload: true,
});

/** next/font の Noto Serif JP は latin サブセットのみのため、日本語は本文の sans に落ちないよう明朝を挟む */
export const notoSerifJPJaFontFamily = `${notoSerifJP.style.fontFamily}, "Hiragino Mincho ProN", "Yu Mincho", "YuMincho", "MS PMincho", "Noto Serif JP", serif`;
