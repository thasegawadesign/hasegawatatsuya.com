import { backgroundGradient, body, html } from "@/app/layout.css";
import AudioButton from "@/components/audio/audioPlayer";
import Object1 from "@/components/object/object1";
import Object2 from "@/components/object/object2";
import Object3 from "@/components/object/object3";
import ParticleEffect from "@/components/particleEffect/particleEffect";
import Providers from "@/components/providers";
import Spiral from "@/components/spiral/spiral";
import "@/styles/reset.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import clsx from "clsx";
import type { Metadata } from "next";
import Script from "next/script";
import "yakuhanjp";

export const metadata: Metadata = {
  title: "Webデザイナー 長谷川 達也 | ポートフォリオ",
  description:
    "Webデザイナー 長谷川 達也のポートフォリオです。実際に触れることのできるWeb作品をデザイン・実装することに喜びを感じます。書いたコードが画面に反映される感動を学習を始めて以来ずっと持ち続けています。",
  verification: {
    google: "JTf9RfAVU6O4mqwU7bBXJwpFWrnCygv66A1qrGjnJ90",
  },
};

const isProduction = process.env.NODE_ENV === "production";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "長谷川 達也",
    url: "https://hasegawatatsuya.com",
    jobTitle: "Webデザイナー",
    sameAs: ["https://github.com/thasegawadesign", "https://x.com/thasegawa_"],
  };
  return (
    <html lang="ja" id="home" className={clsx(html)}>
      <body className={clsx(body, backgroundGradient)}>
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          {children}
          <AudioButton />
          <Object1 />
          <Object2 />
          <Object3 />
          <Spiral />
          <ParticleEffect />
        </Providers>
        {isProduction && <GoogleAnalytics gaId="G-KM86JXK42S" />}
        {isProduction && <VercelAnalytics />}
      </body>
    </html>
  );
}
