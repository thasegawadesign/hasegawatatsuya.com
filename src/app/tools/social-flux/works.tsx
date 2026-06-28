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
              nameJa="社会の流転"
              nameEn="Social Flux"
              nameJaNode={<>社会の流転</>}
              imageSrc="/images/mockups/social-flux-mockup.avif"
              imageWidth={6000}
              imageHeight={4500}
              what="公開統計をもとに地域社会の移ろいを「流れ」として可視化するデータビジュアライゼーションツール。統計データが示す固定的なグラフと時間の流れを内包したビジュアル表現として、D3.jsの折れ線グラフが社会の輪郭を示し、Three.jsのシェーダー背景がその背後にある気配や温度を描きます。"
              why="人口の増減や高齢化の進行は、表の数字だけでは感じ取りにくい移ろいです。都道府県や年を変えるたびに、その移ろいが光と流れとして立ち上がる体験を届けたいと考え、公開統計を読み解くWebアプリを制作しました。"
              how={
                <>
                  統計データの「固定されたグラフ」と「時間の流れ」を重ねるため、D3.jsの折れ線グラフで社会の輪郭を描き、Three.jsのシェーダー背景でその背後の気配や温度を表現する二層構造にしました。都道府県や年の切り替えに連動して、両方のレイヤーが同期して更新されます。
                  <br />
                  技術面では Next.js / TypeScript / D3.js / Three.js / Tailwind CSS
                  を採用しています。
                </>
              }
              role={
                <>
                  Web Design,
                  <br />
                  Frontend Development,
                  <br />
                  Backend Development
                </>
              }
              date="2026.6"
              DemoURL="https://www.social-flux.vegetworks.com/"
            />
          </main>
          <Footer />
        </Glass>
        <BackToIndex />
      </div>
    </>
  );
}
