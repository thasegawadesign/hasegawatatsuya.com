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
              nameJa="Cursor Dashboard"
              nameEn="Cursor Dashboard"
              nameJaNode={<>カーソルダッシュボード</>}
              imageSrc="/images/mockups/cursor-dashboard-mockup.avif"
              imageWidth={6000}
              imageHeight={4500}
              videoSrc="/videos/mockups/cursor-dashboard-mockup.mp4"
              what="ブラウザ上でマウス／ポインタの動きをリアルタイムに集計し、トレイル・速度波形・ヒートマップなどで可視化するダッシュボード"
              why="ダッシュボードUIをちゃんと作ってみたかったのが制作のきっかけです。マウスを動かすたびに表示がガラッと変わっていくのが楽しくて、フロントエンドやっててよかったなと感じられるものを作りたかったので、カーソルの動きをリアルタイムで可視化するテーマにしました。"
              how="Next.js / TypeScript / Tailwind CSS"
              role={<>Front-end Development</>}
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
