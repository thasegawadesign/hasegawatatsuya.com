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
              nameJa="アクセシブルなSplideカルーセル"
              nameEn="Accessible Splide Carousel"
              nameJaNode={
                <>
                  アクセシブルな
                  <br />
                  Splideカルーセル
                </>
              }
              imageSrc="/images/mockups/nextjs-splide-carousel-mockup.avif"
              imageWidth={6000}
              imageHeight={4500}
              videoSrc="/videos/mockups/nextjs-splide-carousel-mockup.mp4"
              what="アクセシビリティを配慮したSplideカルーセルのプロトタイプ"
              why="アクセシビリティを配慮したSplideカルーセルのプロトタイプを制作しました。スクリーンリーダーでの操作性を確保するため、キーボード操作でもスライドが可能なように実装しました。"
              how={
                <>
                  Splideカルーセルをベースに、スクリーンリーダーとキーボード操作でもスライドを切り替えられるようARIA属性とフォーカス管理を実装しました。視覚的なカルーセル体験を損なわず、アクセシビリティを担保する設計を目指しています。
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
              date="2025.11"
              DemoURL="https://nextjs-splide-carousel.vegetworks.com/"
            />
          </main>
          <Footer />
        </Glass>
        <BackToIndex />
      </div>
    </>
  );
}
