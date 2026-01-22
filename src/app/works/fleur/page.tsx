import Works from "@/app/works/fleur/works";
import { SITE_TITLE_WORKS } from "@/constants/constants";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `架空マカロン専門店「フルール」 | ${SITE_TITLE_WORKS}`,
};

export default function Fleur() {
  return (
    <>
      <Works />
    </>
  );
}
