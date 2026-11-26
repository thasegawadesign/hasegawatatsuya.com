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
              nameJa="株式会社Univearth コーポレートサイト"
              nameEn="Univearth Website"
              nameJaNode={
                <>
                  株式会社Univearth
                  <br />
                  コーポレートサイト
                </>
              }
              nameEnNode={<>Univearth Inc.</>}
              imageSrc="/images/mockups/univearth-mockup.avif"
              imageWidth={4000}
              imageHeight={3000}
              what="株式会社Univearth コーポレートサイト"
              why={
                <>
                  株式会社Univearthのコーポレートサイトをリニューアルしました。「スマート物流の大衆化」というビジョンを、荷主にも運送会社にも納得してもらう必要がありました。
                </>
              }
              how={
                <>
                  物流業界は、長く慣習で動いてきた業界です。そこに新しい仕組みを持ち込む会社が「変革」を語っても、すぐには信じてもらえません。だから、売り込む言葉より、判断の材料になる情報を見せることを大切にしました。中心に置いたのは、長距離ドライバーとして業界の古い慣習を内側から見てきた創業者の声です。本人の言葉で語られるからこそ、ビジョンが現場の実感をともなって伝わります。ドライバーが、家族との時間を大切にできる業界へ。その願いに、「共に届ける」の思いを込めました。
                </>
              }
              role={
                <>
                  Web Design,
                  <br />
                  Frontend Development
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
