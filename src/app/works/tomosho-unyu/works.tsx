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
                  Tomosho-
                  <br />
                  Unyu
                </>
              }
              imageSrc="/tomosho-unyu-mockup.avif"
              imageWidth={4000}
              imageHeight={3000}
              what="「株式会社 智商運輸」コーポレートサイト"
              why={
                <>
                  物流DXプラットフォームを開発する株式会社Univearthとの経営統合を機に、ブランドイメージの再構築を目的としたコーポレートサイトリニューアルを担当しました。
                </>
              }
              how={
                <>
                  スローガンである「BEST
                  QUALITY」を体現するため、運送会社としての安心感と信頼感を軸としたデザインに仕上げました。ワイドなレイアウトと大胆なタイポグラフィによって物流のスピード感とダイナミズムを表現し、ブランドのエネルギーを際立たせています。
                </>
              }
              role={
                <>
                  Web Design,
                  <br />
                  Front-end Development
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
