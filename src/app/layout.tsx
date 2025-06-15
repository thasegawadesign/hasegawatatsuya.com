import { backgroundGradient, body, html } from "@/app/layout.css";
import BlackHole from "@/components/blackHole/blackHole";
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
import "yakuhanjp";

export const metadata: Metadata = {
  title: "Tatsuya Hasegawa | Webデザイナー",
  description: "Tatsuya Hasegawa のポートフォリオサイト",
};

const isProduction = process.env.NODE_ENV === "production";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" id="home" className={clsx(html)}>
      <body className={clsx(body, backgroundGradient)}>
        <Providers>
          {children}
          <Object1 />
          <Object2 />
          <Object3 />
          <Spiral />
          <BlackHole />
          <ParticleEffect />
        </Providers>
        {isProduction && <GoogleAnalytics gaId="G-KM86JXK42S" />}
        {isProduction && <VercelAnalytics />}
      </body>
    </html>
  );
}
