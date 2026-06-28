import { glassBox } from "@/app/about/page.css";
import { main } from "@/app/works/works.css";
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
              nameJa="メガドロップダウンメニュー"
              nameEn="Mega Dropdown Menu"
              nameJaNode={
                <>
                  メガドロップダウン
                  <br />
                  メニュー
                </>
              }
              imageSrc="/images/mockups/mega-dropdown-menu-prototype-mockup.avif"
              imageWidth={6000}
              imageHeight={4500}
              videoSrc="/videos/mockups/mega-dropdown-menu-prototype-mockup.mp4"
              what="メガドロップダウンメニューのインタラクション検証プロトタイプ"
              why="コーポレートサイトを想定し、グローバルナビのメガドロップダウンメニューの開閉インタラクションを検証するプロトタイプを制作しました。ホバー・フォーカス時の表示切り替えや、キーボード操作時のアクセシビリティにも配慮しています。"
              how={
                <>
                  グローバルナビの各項目にホバー・フォーカスでメガメニューが展開するインタラクションを実装しました。キーボード操作時にもメニュー内を移動できるよう、開閉状態とフォーカスの制御に配慮しています。
                  <br />
                  技術面では Next.js / TypeScript / Tailwind CSS を採用しています。
                </>
              }
              role={
                <>
                  Web Design,
                  <br />
                  Frontend Development
                </>
              }
              date="2025.10"
              DemoURL="https://www.mega-dropdown-menu-prototype.vegetworks.com/"
            />
          </main>
          <Footer />
        </Glass>
        <BackToIndex />
      </div>
    </>
  );
}
