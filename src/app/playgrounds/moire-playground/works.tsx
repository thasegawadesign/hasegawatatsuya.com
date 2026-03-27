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
              nameJa="モアレパターン"
              nameEn="Moiré Pattern Playground"
              nameJaNode={<>モアレパターン</>}
              imageSrc="/images/mockups/moire-playground-mockup.avif"
              imageWidth={6000}
              imageHeight={4500}
              videoSrc="/videos/mockups/moire-playground-mockup.mp4"
              what="モアレパターンのプレイグラウンド"
              why="Three.js Journeyのコースを受講中に興味を持ったモアレパターンを実装してみました。"
              how="Three.js"
              role={<>Front-end Development</>}
              date="2026.3"
              DemoURL="https://www.moire-playground.vegetworks.com/"
            />
          </main>
          <Footer />
        </Glass>
        <BackToIndex />
      </div>
    </>
  );
}
