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
              imageSrc="/vision-scroll-snap-mockup.avif"
              imageWidth={6000}
              imageHeight={4500}
              what="創作・アート系画像を全画面表示し、スクロールスナップで切り替えるサンプル"
              why="scroll-snap-typeの挙動を試すフロントエンド練習として制作しました。ビジュアル訴求のセクションへの応用を想定しています。スクロールホイール操作時のスナップ速度に課題があり、改善を模索中です。"
              how="Next.js / Tailwind CSS"
              role={
                <>
                  Web Design,
                  <br />
                  Front-end Development
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
