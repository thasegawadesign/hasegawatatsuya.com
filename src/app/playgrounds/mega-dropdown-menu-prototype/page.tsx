import Works from "@/app/playgrounds/mega-dropdown-menu-prototype/works";
import { SITE_TITLE_PLAYGROUNDS } from "@/constants/constants";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `メガドロップダウンメニュー | ${SITE_TITLE_PLAYGROUNDS}`,
};

export default function MegaDropdownMenuPrototype() {
  return (
    <>
      <Works />
    </>
  );
}
