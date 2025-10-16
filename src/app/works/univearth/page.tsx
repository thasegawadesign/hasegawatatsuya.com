import Works from "@/app/works/univearth/works";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "「株式会社Univearth」コーポレートサイト | Webデザイナー 長谷川 達也 | ポートフォリオ",
};

export default function Univearth() {
  return (
    <>
      <Works />
    </>
  );
}
