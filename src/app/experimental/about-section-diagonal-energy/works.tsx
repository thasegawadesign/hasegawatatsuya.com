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
              nameJa="斜めが刺さるAboutセクション"
              nameEn="Diagonal About Section"
              nameJaNode={
                <>
                  斜めが刺さる
                  <br />
                  Aboutセクション
                </>
              }
              imageSrc="/images/mockups/about-section-diagonal-energy-mockup.avif"
              imageWidth={6000}
              imageHeight={4500}
              videoSrc="/videos/mockups/about-section-diagonal-energy-mockup.mp4"
              what="日本の運送会社らしい力強さを、斜めレイアウトとタイポグラフィで魅せるAboutセクション"
              why="現場仕事の力強さを、ダイナミックな斜めレイアウトと力強いタイポグラフィで表現したいと思い制作したAboutセクションです。テキストとロゴ、写真を差し替えるだけで、運送・物流業のコーポレートサイトや採用サイトにすぐに使える構成になっています。自社サイトの印象を一段引き上げたい方は、ぜひご活用をご検討ください。"
              how="Next.js / Tailwind CSS"
              role={
                <>
                  Web Design,
                  <br />
                  Front-end Development
                </>
              }
              date="2026.3"
              DemoURL="https://www.about-section-diagonal-energy-demo.vegetworks.com/"
              StoreURL="https://vegetworks.gumroad.com/l/about-section-diagonal-energy"
            />
          </main>
          <Footer />
        </Glass>
        <BackToIndex />
      </div>
    </>
  );
}
