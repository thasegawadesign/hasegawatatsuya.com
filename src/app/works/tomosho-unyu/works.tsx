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
              nameJa="株式会社 智商運輸 コーポレートサイト"
              nameEn="Tomosho-Unyu Website"
              nameJaNode={
                <>
                  株式会社 智商運輸
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
              imageSrc="/images/mockups/tomosho-unyu-mockup.avif"
              imageWidth={4000}
              imageHeight={3000}
              what="株式会社 智商運輸 コーポレートサイト"
              why={
                <>
                  株式会社
                  智商運輸のコーポレートサイトをリニューアルしました。株式会社Univearthとの経営統合で、会社のあり方は大きく変わりました。だからこそ、変わらない「速さ」と「確かさ」を、あらためて示す必要がありました。
                </>
              }
              how={
                <>
                  運送業において顧客が求めるのは「速さ」と「確かさ」の両立です。この二つの価値を統合し、スローガンである「BEST
                  QUALITY」を形にすることを設計のゴールとしました。速さは、ワイドなレイアウトと動きのある表現で、物流のスケールとスピード感を体で感じられるようにしました。確かさは、主要取引先、これまで運んだ荷物、安全への取り組みといった、積み重ねてきた実績で示しています。
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
    </>
  );
}
