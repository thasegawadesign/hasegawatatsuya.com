import Works from "@/app/works/playlist2025/works";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "プレイリスト2025 | Tatsuya Hasegawa | Webデザイナー",
  description: "Tatsuya Hasegawa のポートフォリオサイト",
};

export default function PlayList2025() {
  return (
    <>
      <Works />;
    </>
  );
}
