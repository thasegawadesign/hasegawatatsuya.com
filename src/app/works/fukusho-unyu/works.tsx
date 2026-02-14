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
              nameJa="「福昇運輸株式会社」コーポレートサイト"
              nameEn="Fukusho-Unyu Website"
              nameJaNode={
                <>
                  「福昇運輸株式会社」
                  <br />
                  コーポレートサイト
                </>
              }
              nameEnNode={
                <>
                  Fukusho-
                  <br />
                  Unyu
                </>
              }
              imageSrc="/fukusho-unyu-mockup.avif"
              imageWidth={4000}
              imageHeight={3000}
              what="「福昇運輸株式会社」コーポレートサイト"
              why={
                <>
                  物流DXプラットフォームを開発する株式会社Univearthとの経営統合を機に、ブランドイメージの再構築を目的としたコーポレートサイトリニューアルを担当しました。
                </>
              }
              how={
                <>
                  物流の本質である「正確に届けること」を、デジタルの力でさらに高める姿勢を整理整頓の行き届いたインターフェイスに落とし込みました。
                </>
              }
              role={
                <>
                  Web Design,
                  <br />
                  Front-end Development
                </>
              }
              date="2026.1"
              URL="https://www.fukusho-unyu.co.jp/"
            />
          </main>
          <Footer />
        </Glass>
        <BackToIndex />
      </div>
    </>
  );
}
