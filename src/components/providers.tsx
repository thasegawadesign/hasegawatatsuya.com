"use client";

import useSmoothScroll from "@/hooks/useSmoothScroll";
import { Provider } from "jotai";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useSmoothScroll();
  return <Provider>{children}</Provider>;
}
