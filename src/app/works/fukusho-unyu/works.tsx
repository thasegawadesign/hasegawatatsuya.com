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
                  物流DXプラットフォームを開発する株式会社Univearthとの経営統合を機に、企業イメージの再構築を目的としたコーポレートサイトの新規制作を担当しました。
                </>
              }
              how={
                <>
                  運送・物流業界が直面する人手不足や業界変化という構造的な課題を背景に、このサイトの核として位置づけたのがブログ機能です。経営の戦略的な視点と、現場目線のリアルなコンテンツを継続発信することで、求職者に「この会社で働く意味」を伝える採用メディアとしての役割を持たせました。
                  <br />
                  技術面では Next.js / TypeScript / Tailwind CSS
                  を採用。CMSは使用せず、運用コストを抑えながら柔軟にカスタマイズできる構成としています。
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
