import Works from "@/app/playgrounds/auto-playing-carousel/works";
import { SITE_TITLE_PLAYGROUNDS } from "@/constants/constants";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `自動再生カルーセル | ${SITE_TITLE_PLAYGROUNDS}`,
};

export default function AutoPlayingCarousel() {
  return (
    <>
      <Works />
    </>
  );
}
