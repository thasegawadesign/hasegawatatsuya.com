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
              nameJa="「株式会社Univearth」コーポレートサイト"
              nameEn="Univearth Website"
              nameJaNode={
                <>
                  「株式会社Univearth」
                  <br />
                  コーポレートサイト
                </>
              }
              nameEnNode={<>Univearth</>}
              imageSrc="/univearth-mockup.avif"
              imageWidth={4000}
              imageHeight={3000}
              what="「株式会社Univearth」コーポレートサイト"
              why={
                <>
                  ミッションを「共に届ける」と再定義した、株式会社Univearthのコーポレートサイトを制作しました。
                </>
              }
              how={
                <>
                  ステークホルダーはもちろん、家族や地域社会への約束を果たす企業姿勢を表現するため、信頼感と誠実さを感じられるデザインに仕上げました。具体的には、関わる人々が協力し、共に未来を創造していくイメージを象徴的に表現するため、「交差する」流線形をデザインに取り入れました。また、コーポレートカラーの無彩色を基調とし、整然としたレイアウトを心がけ、すっきりとした印象に仕上げました。さらに、ユーザーが直感的に情報を探せるよう、シンプルで分かりやすいナビゲーションを心がけました。
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
      <Object1 />
      <Object2 />
      <Object3 />
    </>
  );
}
