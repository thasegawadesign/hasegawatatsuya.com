import Works from "@/app/playgrounds/moire-playground/works";
import { SITE_TITLE_PLAYGROUNDS } from "@/constants/constants";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `モアレパターン | ${SITE_TITLE_PLAYGROUNDS}`,
};

export default function MoirePlayground() {
  return (
    <>
      <Works />
    </>
  );
}
