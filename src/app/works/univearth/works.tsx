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
              nameJa="「株式会社Univearth」コーポレートサイト"
              nameEn="Univearth Website"
              nameJaNode={
                <>
                  「株式会社Univearth」
                  <br />
                  コーポレートサイト
                </>
              }
              nameEnNode={<>Univearth Inc.</>}
              imageSrc="/images/mockups/univearth-mockup.avif"
              imageWidth={4000}
              imageHeight={3000}
              what="「株式会社Univearth」コーポレートサイト"
              why={
                <>
                  「共に届ける」というミッションのもと、その思想をUI・体験設計に落とし込んだ株式会社Univearthのコーポレートサイトを制作しました。
                </>
              }
              how={
                <>
                  企業取引における論理購買に耐えうる情報設計を目指しました。荷主・運送会社双方の意思決定者が、根拠をもとに取引先を判断できるよう、訴求より提示を設計の基本姿勢としています。
                  <br />
                  コーポレートカラーの無彩色と整然としたレイアウトは、装飾より情報を前面に出すための選択です。交差する流線形のモチーフは、荷主・運送会社・地域社会が対等に結びつく関係性を象徴しており、パートナーシップへの姿勢を視覚的に示しています。ナビゲーションにおいても、検討者が必要な情報へ最短で到達できる導線を優先しました。
                </>
              }
              role={
                <>
                  Web Design,
                  <br />
                  Front-end Development
                </>
              }
              date="2025.1"
              URL="https://www.univearth.co.jp/"
            />
          </main>
          <Footer />
        </Glass>
        <BackToIndex />
      </div>
    </>
  );
}
