import Works from "@/app/playgrounds/fleur/works";
import { SITE_TITLE_EXPERIMENTAL } from "@/constants/constants";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `架空マカロン専門店フルール | ${SITE_TITLE_EXPERIMENTAL}`,
};

export default function Fleur() {
  return (
    <>
      <Works />
    </>
  );
}
