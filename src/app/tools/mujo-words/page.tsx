import Works from "@/app/tools/mujo-words/works";
import { SITE_TITLE_TOOLS } from "@/constants/constants";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `無常の言葉 | ${SITE_TITLE_TOOLS}`,
};

export default function MujoWords() {
  return (
    <>
      <Works />
    </>
  );
}
