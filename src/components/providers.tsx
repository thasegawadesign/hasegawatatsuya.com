"use client";

import ClientNavigationTracker from "@/components/clientNavigationTracker";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import { Provider } from "jotai";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useSmoothScroll();
  return (
    <Provider>
      <ClientNavigationTracker />
      {children}
    </Provider>
  );
}
