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
              nameJa="福昇運輸株式会社 コーポレートサイト"
              nameEn="Fukusho-Unyu Website"
              nameJaNode={
                <>
                  福昇運輸株式会社
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
              imageSrc="/images/mockups/fukusho-unyu-mockup.avif"
              imageWidth={6000}
              imageHeight={4500}
              what="福昇運輸株式会社 コーポレートサイト"
              why={
                <>
                  福昇運輸株式会社のコーポレートサイトを新規制作しました。株式会社Univearthとの経営統合で、会社のあり方は大きく変わりました。その変化を、これから一緒に働く人に届ける場所が必要でした。
                </>
              }
              how={
                <>
                  物流DXプラットフォームを導入すると、事務の工数は大きく減ります。それは、これまでその業務を担ってきた人の仕事がなくなることでもあります。ドライバーもまた、2024年問題で走れる時間が限られ、働き方が変わりつつあります。この会社で働こうとする人が本当に知りたいのは、そうした変化の中で、人がどう扱われるのかです。そこでブログをサイトの中心に据え、決める側の経営と、受け止める側の現場、両方の目線から、その変化をありのままに書いています。
                </>
              }
              role={
                <>
                  Web Design,
                  <br />
                  Frontend Development
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
