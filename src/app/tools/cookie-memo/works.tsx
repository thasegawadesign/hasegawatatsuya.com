import { glassBox } from "@/app/about/page.css";
import { main } from "@/app/tools/tools.css";
import BackToIndex from "@/components/backToIndex/backToIndex";
import WorksInfo from "@/components/experimental/worksInfo";
import Footer from "@/components/footer/footer";
import Glass from "@/components/glass/glass";
import Header from "@/components/header/header";
import clsx from "clsx";

export default function Works() {
  return (
    <>
      <div className={clsx(glassBox)}>
        <Glass>
          <Header />
          <main className={clsx(main)}>
            <WorksInfo
              nameJa="Cookieメモ"
              nameEn="Cookie Memo"
              nameJaNode={<>Cookieメモ</>}
              imageSrc="/images/mockups/cookie-memo-mockup.avif"
              imageWidth={6000}
              imageHeight={4500}
              what="フォルダで整理できる、保存すると「チン♪」と鳴る、ちょっと楽しいメモ帳Webアプリ"
              why="日常のメモをもっと気軽に、少し楽しく書けるアプリが欲しかったのが制作のきっかけです。パソコンに馴染みがない人にも、書いて保存するだけで小さな達成感が得られる体験を届けたいと考えました。"
              how="Next.js / TypeScript / Tailwind CSS"
              role={
                <>
                  Web Design,
                  <br />
                  Frontend Development,
                  <br />
                  Backend Development
                </>
              }
              date="2026.5"
              DemoURL="https://www.cookie-memo.com/"
            />
          </main>
          <Footer />
        </Glass>
        <BackToIndex />
      </div>
    </>
  );
}
