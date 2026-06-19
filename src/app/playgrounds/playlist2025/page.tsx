import Works from "@/app/playgrounds/playlist2025/works";
import { SITE_TITLE_PLAYGROUNDS } from "@/constants/constants";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `プレイリスト2025 | ${SITE_TITLE_PLAYGROUNDS}`,
};

export default function PlayList2025() {
  return (
    <>
      <Works />;
    </>
  );
}
