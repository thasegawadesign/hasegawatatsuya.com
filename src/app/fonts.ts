import { Cormorant, Noto_Sans_JP, Noto_Serif_JP, Roboto } from "next/font/google";

export const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
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

export const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  variable: "--font-noto-serif-jp",
});

export const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  variable: "--font-noto-sans-jp",
});
