import { glassBox } from "@/app/about/page.css";
import { main } from "@/app/works/works.css";
import BackToIndex from "@/components/backToIndex/backToIndex";
import Footer from "@/components/footer/footer";
import Glass from "@/components/glass/glass";
import Header from "@/components/header/header";
import Object1 from "@/components/object/object1";
import Object2 from "@/components/object/object2";
import Object3 from "@/components/object/object3";
import WorksInfo from "@/components/works/worksInfo";
import clsx from "clsx";

export default function Works() {
  return (
    <>
      <div className={clsx(glassBox)}>
        <Glass>
          <Header />
          <main className={clsx(main)}>
            <WorksInfo
              nameJa="プレイリスト2025"
              nameEn="PLAYLIST2025"
              nameJaNode={<>プレイリスト2025</>}
              nameEnNode={
                <>
                  PLAYLIST
                  <br />
                  2025
                </>
              }
              imageSrc="/playlist2025-mockup.avif"
              imageWidth={4000}
              imageHeight={3000}
              what="音楽配信サービスプレイリストカバー画像"
              why={
                <>
                  私が利用している音楽配信サービスでは、プレイリストカバー画像が自動で生成されますが、せっかくなら自分でデザインしてみたいと思ったことが制作のきっかけです。
                </>
              }
              how={
                <>
                  日本流行色協会（JAFCA）が発表した2025年のテーマカラーである「ホライゾングリーン」—空の青と海のエメラルドグリーンが溶け合う水平線のような色—を採用し、背景にはポップなイラストをあしらうことで、音楽鑑賞シーンに馴染むような心地よさとリラックス感を表現しています。
                </>
              }
              role="Visual Design"
              date="2025.1"
            />
          </main>
          <Footer />
        </Glass>
        <BackToIndex />
      </div>
      <Object1 />
      <Object2 />
      <Object3 />
    </>
  );
}
