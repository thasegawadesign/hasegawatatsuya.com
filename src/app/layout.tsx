import { GoogleAnalytics } from "@next/third-parties/google";
import clsx from "clsx";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

import Providers from "@/components/providers";
import "@/styles/reset.css";
import { backgroundGradient, html, smoothScroll } from "@/styles/styles.css";

export const metadata: Metadata = {
  title: "Tatsuya Hasegawa",
  description: "Tatsuya Hasegawa のポートフォリオサイト",
};

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
});

const isProduction = process.env.NODE_ENV === "production";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={clsx(html, smoothScroll)}>
      <body className={clsx(notoSansJP.className, backgroundGradient)}>
        <Providers>{children}</Providers>
        {isProduction && <GoogleAnalytics gaId="G-KM86JXK42S" />}
      </body>
    </html>
  );
}
