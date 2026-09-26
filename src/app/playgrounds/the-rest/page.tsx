import Works from "@/app/playgrounds/the-rest/works";
import { SITE_TITLE_PLAYGROUNDS } from "@/constants/constants";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `The Rest. | ${SITE_TITLE_PLAYGROUNDS}`,
};

export default function TheRest() {
  return (
    <>
      <Works />
    </>
  );
}
