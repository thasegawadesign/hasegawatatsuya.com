import Works from "@/app/tools/cursor-dashboard/works";
import { SITE_TITLE_TOOLS } from "@/constants/constants";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `Cursor Dashboard | ${SITE_TITLE_TOOLS}`,
};

export default function CursorDashboard() {
  return (
    <>
      <Works />
    </>
  );
}
