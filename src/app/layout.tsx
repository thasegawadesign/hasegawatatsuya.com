import { backgroundGradient, body, html } from "@/app/layout.css";
import AudioButton from "@/components/audio/audioPlayer";
import Object1 from "@/components/object/object1";
import Object2 from "@/components/object/object2";
import Object3 from "@/components/object/object3";
import ParticleEffect from "@/components/particleEffect/particleEffect";
import Providers from "@/components/providers";
import Spiral from "@/components/spiral/spiral";
import { EMAIL, GITHUB, X } from "@/constants/constants";
import "@/styles/reset.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import clsx from "clsx";
import type { Metadata } from "next";
import Script from "next/script";
import "yakuhanjp";

const TITLE = "長谷川 達也 | ポートフォリオ";
const DESCRIPTION =
  "Webデザイナー/フロントエンドエンジニア 長谷川 達也のポートフォリオです。実際に触れることのできるWeb作品をデザイン・実装することに喜びを感じます。書いたコードが画面に反映される感動を学習を始めて以来ずっと持ち続けています。";
const URL = "https://www.hasegawatatsuya.com";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  verification: {
    google: process.env.GOOGLE_VERIFICATION || "",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: TITLE,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    site: "@thasegawa_",
    creator: "@thasegawa_",
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
    alternateName: "Tatsuya Hasegawa",
    jobTitle: [
      { "@value": "Webデザイナー", "@language": "ja" },
      { "@value": "フロントエンドエンジニア", "@language": "ja" },
      { "@value": "Web Designer", "@language": "en" },
      { "@value": "Front-end Developer", "@language": "en" },
    ],
    description: DESCRIPTION,
    url: URL,
    sameAs: [GITHUB, X],
    email: EMAIL,
  };
  return (
    <html lang="ja" id="home" className={clsx(html)}>
      <body className={clsx(body, backgroundGradient)}>
        <Script
          id="json-ld-person"
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
        {isProduction && (
          <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID || ""} />
        )}
        {isProduction && <VercelAnalytics />}
      </body>
    </html>
  );
}
