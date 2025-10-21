import Works from "@/app/works/fleur/works";
import { SITE_TITLE_BASE } from "@/constants/constants";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `架空マカロン専門店「フルール」 | ${SITE_TITLE_BASE}`,
};

export default function Fleur() {
  return (
    <>
      <Works />
    </>
  );
}
