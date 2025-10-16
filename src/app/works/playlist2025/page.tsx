import Works from "@/app/works/playlist2025/works";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "プレイリスト2025 | Webデザイナー 長谷川 達也 | ポートフォリオ",
};

export default function PlayList2025() {
  return (
    <>
      <Works />;
    </>
  );
}
