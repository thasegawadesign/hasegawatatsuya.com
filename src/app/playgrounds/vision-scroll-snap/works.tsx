import { glassBox } from "@/app/about/page.css";
import { main } from "@/app/works/works.css";
import BackToIndex from "@/components/backToIndex/backToIndex";
import WorksInfo from "@/components/experimental/worksInfo";
import Footer from "@/components/footer/footer";
import Glass from "@/components/glass/glass";
import Header from "@/components/header/header";
import clsx from "clsx";

export default function Works() {
  return (
    <>
      <div className={clsx(glassBox)}>
        <Glass>
          <Header />
          <main className={clsx(main)}>
            <WorksInfo
              nameJa="Visionスクロールスナップ"
              nameEn="Vision Scroll Snap"
              nameJaNode={
                <>
                  Vision
                  <br />
                  スクロールスナップ
                </>
              }
              imageSrc="/images/mockups/vision-scroll-snap-mockup.avif"
              imageWidth={6000}
              imageHeight={4500}
              videoSrc="/videos/mockups/vision-scroll-snap-mockup.mp4"
              what="創作・アート系画像を全画面表示し、スクロールスナップで切り替えるサンプル"
              why="scroll-snap-typeの挙動を試すフロントエンド練習として制作しました。創作・アート系の画像を全画面で見せ、スクロールで切り替えるビジュアル訴求のセクションへの応用を想定しています。"
              how={
                <>
                  CSSのscroll-snap-typeを用い、全画面画像がスクロールに連動して切り替わる構成にしました。JavaScriptに頼らず、ネイティブのスクロール挙動でスナップさせることで、軽量かつ滑らかな切り替えを実現しています。
                  <br />
                  技術面では Next.js / TypeScript / Tailwind CSS を採用しています。
                </>
              }
              role={
                <>
                  Web Design,
                  <br />
                  Frontend Development
                </>
              }
              date="2026.3"
              DemoURL="https://www.vision-scroll-snap.vegetworks.com/"
            />
          </main>
          <Footer />
        </Glass>
        <BackToIndex />
      </div>
    </>
  );
}
