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
              what="公開統計をもとに地域社会の移ろいを「流れ」として可視化するデータビジュアライゼーションツール。統計データが示す固定的なグラフと時間の流れを内包したビジュアル表現をミックスしました。"
              why="統計とシェーダーの表現を掛け合わせたら面白そうと思ったことが制作のきっかけです。真面目な学問とクリエイティブを掛け算し、数理的なものを視覚的に表現することを試みました。"
              how={
                <>
                  統計データの「固定されたグラフ」と「時間の流れ」を重ねるため、D3.jsの折れ線グラフで社会の輪郭を描き、Three.jsのシェーダーでその背後の気配や温度を表現する二層構造にしました。都道府県や年の切り替えに連動して、両方のレイヤーが同期して更新されます。
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
