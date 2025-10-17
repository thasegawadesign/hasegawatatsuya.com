import Works from "@/app/works/univearth/works";
import { SITE_TITLE_BASE } from "@/constants/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `「株式会社Univearth」コーポレートサイト | ${SITE_TITLE_BASE}`,
};

export default function Univearth() {
  return (
    <>
      <Works />
    </>
  );
}
