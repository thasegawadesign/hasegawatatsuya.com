import Works from "@/app/works/cursor-dashboard/works";
import { SITE_TITLE_WORKS } from "@/constants/constants";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `Cursor Dashboard | ${SITE_TITLE_WORKS}`,
};

export default function CursorDashboard() {
  return (
    <>
      <Works />
    </>
  );
}
