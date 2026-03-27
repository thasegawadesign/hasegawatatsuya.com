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
              nameJa="大小2枚の非対称ヒーロー"
              nameEn="Editorial Hero Prototype"
              nameJaNode={
                <>
                  大小2枚の
                  <br />
                  非対称ヒーロー
                </>
              }
              imageSrc="/images/mockups/editorial-hero-prototype-mockup.avif"
              imageWidth={6000}
              imageHeight={4500}
              videoSrc="/videos/mockups/editorial-hero-prototype-mockup.mp4"
              what="大小2枚の非対称ヒーロー、プロトタイプ"
              why="設備や空間を紹介するサイトのファーストビューで活かせそうなヒーローのプロトタイプを制作しました。時間差をつけて幕が上がるように次々と画像を提示する実装を試しました。"
              how="Next.js / TypeScript / Tailwind CSS"
              role={
                <>
                  Web Design,
                  <br />
                  Front-end Development
                </>
              }
              date="2026.3"
              DemoURL="https://www.editorial-hero-prototype.vegetworks.com/"
            />
          </main>
          <Footer />
        </Glass>
        <BackToIndex />
      </div>
    </>
  );
}
