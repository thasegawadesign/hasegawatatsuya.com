import { Cormorant, Noto_Serif_JP, Roboto } from "next/font/google";

export const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
});

export const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: "400",
});
