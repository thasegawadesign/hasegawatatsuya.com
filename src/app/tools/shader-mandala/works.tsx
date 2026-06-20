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
              nameJa="シェーダー曼荼羅 目標達成シート"
              nameEn="Shader Mandala"
              nameJaNode={<>シェーダー曼荼羅 目標達成シート</>}
              imageSrc="/images/mockups/shader-mandala-mockup.avif"
              imageWidth={6000}
              imageHeight={4500}
              what="金剛界曼荼羅の九会を再解釈した3×3の目標達成シート。目標とサブゴール、やることを書き留めるたび、宝珠の光と金線の曼荼羅が静かにうねり、言葉が形として残るWebアプリケーション"
              why="コンピュータサイエンスと曼荼羅を掛け合わせたかったのが制作のきっかけです。金剛界曼荼羅の九会を手がかりに、シェーダーによる光と幾何で目標や言葉を置く場を再解釈し、静かに呼吸する曼荼羅として形にしたいと考えました。"
              how="Next.js / TypeScript / WebGPU / WGSL"
              role={
                <>
                  Web Design,
                  <br />
                  Front-end Development
                </>
              }
              date="2026.6"
              DemoURL="https://www.shader-mandala.vegetworks.com/"
            />
          </main>
          <Footer />
        </Glass>
        <BackToIndex />
      </div>
    </>
  );
}
