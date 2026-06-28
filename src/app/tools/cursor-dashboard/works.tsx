import { glassBox } from "@/app/about/page.css";
import { main } from "@/app/tools/tools.css";
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
              nameJa="Cursor Dashboard"
              nameEn="Cursor Dashboard"
              nameJaNode={<>カーソルダッシュボード</>}
              imageSrc="/images/mockups/cursor-dashboard-mockup.avif"
              imageWidth={6000}
              imageHeight={4500}
              videoSrc="/videos/mockups/cursor-dashboard-mockup.mp4"
              what="ブラウザ上でマウス／ポインタの動きをリアルタイムに集計し、トレイル・速度波形・ヒートマップなどで可視化するダッシュボード"
              why="リアルタイムで更新されるダッシュボードUIの表現を試したくて制作しました。マウスやポインタの動きをそのまま計測・集計する題材にすることで、操作に直接連動して表示が変わる体験を通じて、操作そのものがデータになる仕組みを実装しています。"
              how={
                <>
                  ポインタイベントを都度集計し、トレイル・速度波形・ヒートマップの各ビューへ即座に反映する構成にしました。操作のたびに表示が更新されるダッシュボード体験を実現しています。
                  <br />
                  技術面では Next.js / TypeScript / Tailwind CSS を採用しています。
                </>
              }
              role={<>Frontend Development</>}
              date="2026.4"
              DemoURL="https://www.cursor-dashboard.vegetworks.com/"
            />
          </main>
          <Footer />
        </Glass>
        <BackToIndex />
      </div>
    </>
  );
}
