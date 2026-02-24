import { glassBox } from "@/app/about/page.css";
import { main } from "@/app/works/works.css";
import BackToIndex from "@/components/backToIndex/backToIndex";
import Footer from "@/components/footer/footer";
import Glass from "@/components/glass/glass";
import Header from "@/components/header/header";
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
                  物流DXプラットフォームを開発する株式会社Univearthとの経営統合を機に、企業イメージの再構築を目的としたコーポレートサイトリニューアルを担当しました。
                </>
              }
              how={
                <>
                  運送業において顧客が求めるのは「速さ」と「確かさ」の両立です。この二つの価値を一つのビジュアルに統合することを設計の起点としました。
                  ワイドなレイアウトは物流が持つスケールとスピード感を体感的に伝えるためのものであり、大胆なタイポグラフィはその勢いに重心を与え、信頼性を視覚的に担保する役割を果たしています。動きのある表現に「揺るぎなさ」を内包させることで、スローガンである「BEST
                  QUALITY」をデザイン言語として体現しました。
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
    </>
  );
}
