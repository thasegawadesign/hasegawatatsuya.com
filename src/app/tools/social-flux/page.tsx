import Works from "@/app/tools/social-flux/works";
import { SITE_TITLE_TOOLS } from "@/constants/constants";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `社会の流転 | ${SITE_TITLE_TOOLS}`,
};

export default function SocialFlux() {
  return (
    <>
      <Works />
    </>
  );
}
