import Works from "@/app/works/univearth/works";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "「株式会社Univearth」コーポレートサイト | ポートフォリオ | Webデザイナー 長谷川 達也",
};

export default function Univearth() {
  return (
    <>
      <Works />
    </>
  );
}
