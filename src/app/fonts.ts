import { Cormorant, Noto_Serif_JP, Roboto } from "next/font/google";

export const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
  display: "swap",
});

export const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});
