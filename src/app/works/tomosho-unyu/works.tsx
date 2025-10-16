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
              nameJa="「株式会社 智商運輸」コーポレートサイト"
              nameEn="Tomosho-Unyu Website"
              nameJaNode={
                <>
                  「株式会社 智商運輸」
                  <br />
                  コーポレートサイト
                </>
              }
              nameEnNode={
                <>
                  Tomosho-Unyu
                  <br />
                  Website
                </>
              }
              imageSrc="/tomosho-unyu-mockup.avif"
              imageWidth={4000}
              imageHeight={3000}
              what="「株式会社 智商運輸」コーポレートサイト"
              why={
                <>
                  物流DXプラットフォームを提供する株式会社Univearthとの経営統合に伴い、コーポレートサイトをリニューアルしました。
                </>
              }
              how={
                <>
                  スローガンである「BEST
                  QUALITY」を体現するため、安心感と信頼感を感じられるデザインに仕上げました。活発に運ぶ勢いを表現するため、ワイドなレイアウトと大胆なタイポグラフィを採用し、企業のエネルギッシュな姿勢を強調しました。
                </>
              }
              role={
                <>
                  Web Design,
                  <br />
                  Frontend Development
                </>
              }
              date="2025.8"
              URL="https://www.tomosho-unyu.co.jp/"
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
