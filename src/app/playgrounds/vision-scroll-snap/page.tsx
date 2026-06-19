import Works from "@/app/playgrounds/vision-scroll-snap/works";
import { SITE_TITLE_PLAYGROUNDS } from "@/constants/constants";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `Visionスクロールスナップ | ${SITE_TITLE_PLAYGROUNDS}`,
};

export default function VisionScrollSnap() {
  return (
    <>
      <Works />
    </>
  );
}
