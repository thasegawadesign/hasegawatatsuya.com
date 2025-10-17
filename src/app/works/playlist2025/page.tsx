import Works from "@/app/works/playlist2025/works";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "プレイリスト2025 | ポートフォリオ | Webデザイナー 長谷川 達也",
};

export default function PlayList2025() {
  return (
    <>
      <Works />;
    </>
  );
}
