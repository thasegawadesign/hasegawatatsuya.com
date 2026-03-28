"use client";

import { incrementClientNavigationCount } from "@/lib/clientNavigationCount";
import { usePathname } from "next/navigation";
import { useRef } from "react";

/**
 * 初回レンダーでは pathname のみ記録し、それ以降の pathname 変化でカウントを増やす。
 * レンダー中に更新するため、/about 初回マウント時点で getClientNavigationCount() が正しい。
 */
export default function ClientNavigationTracker() {
  const pathname = usePathname();
  const prevPathnameRef = useRef<string | null>(null);

  if (
    prevPathnameRef.current !== null &&
    prevPathnameRef.current !== pathname
  ) {
    incrementClientNavigationCount();
  }
  prevPathnameRef.current = pathname;

  return null;
}
