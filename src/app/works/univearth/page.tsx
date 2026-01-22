import Works from "@/app/works/univearth/works";
import { SITE_TITLE_WORKS } from "@/constants/constants";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `「株式会社Univearth」コーポレートサイト | ${SITE_TITLE_WORKS}`,
};

export default function Univearth() {
  return (
    <>
      <Works />
    </>
  );
}
