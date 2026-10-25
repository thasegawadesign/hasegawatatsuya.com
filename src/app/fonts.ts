import { Cormorant, Noto_Sans_JP, Roboto } from "next/font/google";
import localFont from "next/font/local";

export const yakuHanJP = localFont({
  src: [
    {
      path: "../fonts/yakuhanjp/YakuHanJP-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/yakuhanjp/YakuHanJP-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/yakuhanjp/YakuHanJP-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  preload: true,
  adjustFontFallback: false,
  variable: "--font-yakuhan-jp",
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+3001,U+3002,U+3008,U+3009,U+300A,U+300B,U+300C,U+300D,U+300E,U+300F,U+3010,U+3011,U+3014,U+3015,U+30FB,U+FF01,U+FF08,U+FF09,U+FF1A,U+FF1B,U+FF1F,U+FF3B,U+FF3D,U+FF5B,U+FF5D",
    },
  ],
});

export const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "block",
  preload: true,
  adjustFontFallback: true,
  variable: "--font-cormorant",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  variable: "--font-roboto",
});

// About の名前にしか使わないので、その字だけに絞って全ページで preload する。
// Google Fonts の分割ファイルだとカナが latin の preload に入らず、直接開いたときに名前の表示が遅れる
export const notoSerifJP = localFont({
  src: "../fonts/notoserifjp/NotoSerifJP-Bold-name.woff2",
  weight: "700",
  style: "normal",
  display: "block",
  preload: true,
  adjustFontFallback: false,
  fallback: ["'Hiragino Mincho ProN'", "'Yu Mincho'", "YuMincho", "'MS PMincho'"],
  variable: "--font-noto-serif-jp",
});

export const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  display: "swap",
  preload: true,
  adjustFontFallback: false,
  fallback: ["'Hiragino Sans'", "'Hiragino Kaku Gothic ProN'", "'Yu Gothic'", "YuGothic", "Meiryo"],
  variable: "--font-noto-sans-jp",
});
