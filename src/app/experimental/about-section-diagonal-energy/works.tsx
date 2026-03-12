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
              imageSrc="/about-section-diagonal-energy-mockup.avif"
              imageWidth={6000}
              imageHeight={4500}
              what="日本の運送会社らしい、大胆な斜めレイアウトのAboutセクション"
              why="現場仕事の力強さを斜めのレイアウトと力強いタイポグラフィで表現できるのではと思い制作しました。"
              how="Next.js / Tailwind CSS"
              role={
                <>
                  Web Design,
                  <br />
                  Front-end Development
                </>
              }
              date="2026.3"
              DemoURL="https://about-section-diagonal-energy.vegetworks.com/"
              BuyURL="https://vegetworks.lemonsqueezy.com/checkout/buy/5fa86ece-aaf6-4bb3-b46d-c028610b8a42"
            />
          </main>
          <Footer />
        </Glass>
        <BackToIndex />
      </div>
    </>
  );
}
