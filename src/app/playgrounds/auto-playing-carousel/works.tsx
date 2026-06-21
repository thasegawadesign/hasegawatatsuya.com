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
              nameJa="自動再生カルーセル"
              nameEn="Auto playing carousel"
              nameJaNode={<>自動再生カルーセル</>}
              imageSrc="/images/mockups/auto-playing-carousel-mockup.avif"
              imageWidth={6000}
              imageHeight={4500}
              videoSrc="/videos/mockups/auto-playing-carousel-mockup.mp4"
              what="ファーストビューで自動再生するカルーセルのプロトタイプ"
              why="整備・メンテナンス企業のサイトを想定し、ヒーロー画像を自動再生するカルーセルのプロトタイプを制作しました。スライドの切り替えと再生状態をスクリーンリーダーでも把握できるよう、アクセシビリティにも配慮しています。"
              how="Next.js / TypeScript / Tailwind CSS"
              role={
                <>
                  Web Design,
                  <br />
                  Frontend Development
                </>
              }
              date="2026.6"
              DemoURL="https://www.auto-playing-carousel.vegetworks.com/"
            />
          </main>
          <Footer />
        </Glass>
        <BackToIndex />
      </div>
    </>
  );
}
