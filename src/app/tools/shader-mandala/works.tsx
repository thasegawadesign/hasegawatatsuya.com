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
              what="金剛界曼荼羅の九会と、コンピュータサイエンスを融合させた目標達成シート。言葉を置くたび、粘性をもつ宝珠の光が宿り、金線の幾何と溶け合いながら、曼荼羅全体がぬるりと呼吸します。"
              why="毎日目標を確認する場が欲しかったのが制作のきっかけです。書き留めた言葉が消えず形として残り、曼荼羅が静かにうねる体験として表現しました。"
              how="Next.js / TypeScript / WebGPU / WGSL"
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
