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
              what="アクセシビリティを配慮したSplideカルーセルのプロトタイプ"
              why="アクセシビリティを配慮したSplideカルーセルのプロトタイプを制作しました。スクリーンリーダーでの操作性を確保するため、キーボード操作でもスライドが可能なように実装しました。"
              how="Next.js / TypeScript / Tailwind CSS"
              role={
                <>
                  Web Design,
                  <br />
                  Front-end Development
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
