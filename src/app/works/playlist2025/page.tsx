import Works from "@/app/works/playlist2025/works";
import { SITE_TITLE_BASE } from "@/constants/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `プレイリスト2025 | ${SITE_TITLE_BASE}`,
};

export default function PlayList2025() {
  return (
    <>
      <Works />;
    </>
  );
}
