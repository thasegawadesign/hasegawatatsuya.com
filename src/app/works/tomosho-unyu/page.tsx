import Works from "@/app/works/tomosho-unyu/works";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "「株式会社 智商運輸」コーポレートサイト | Webデザイナー 長谷川 達也 | ポートフォリオ",
};

export default function Univearth() {
  return (
    <>
      <Works />
    </>
  );
}
