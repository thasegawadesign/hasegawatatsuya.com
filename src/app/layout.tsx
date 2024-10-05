import clsx from "clsx";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tatsuya Hasegawa",
  description: "Tatsuya Hasegawa のポートフォリオサイト",
};

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={clsx(notoSansJP.className)}>{children}</body>
    </html>
  );
}
