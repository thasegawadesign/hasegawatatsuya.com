import Works from "@/app/playgrounds/customer-voice-carousel-prototype/works";
import { SITE_TITLE_EXPERIMENTAL } from "@/constants/constants";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `お客様の声カルーセル | ${SITE_TITLE_EXPERIMENTAL}`,
};

export default function CustomerVoiceCarouselPrototypePage() {
  return (
    <>
      <Works />
    </>
  );
}
