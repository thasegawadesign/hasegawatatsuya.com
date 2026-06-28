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
              nameJa="お客様の声カルーセルのプロトタイプ"
              nameEn="Customer Voice Carousel"
              nameJaNode={<>お客様の声カルーセル</>}
              imageSrc="/images/mockups/customer-voice-carousel-prototype-mockup.avif"
              imageWidth={6000}
              imageHeight={4500}
              videoSrc="/videos/mockups/customer-voice-carousel-prototype-mockup.mp4"
              what="お客様の声をカルーセルで表示するプロトタイプ"
              why="ライブラリ（Embla Carousel）の挙動を試すフロントエンド練習として制作しました。お客様の声を2枚同時に見せつつ、操作で次の声へ切り替えるカルーセルを実装しています。"
              how="Next.js / TypeScript / Tailwind CSS"
              role={
                <>
                  Web Design,
                  <br />
                  Frontend Development
                </>
              }
              date="2026.3"
              DemoURL="https://www.customer-voice-carousel-prototype.vegetworks.com/"
            />
          </main>
          <Footer />
        </Glass>
        <BackToIndex />
      </div>
    </>
  );
}
