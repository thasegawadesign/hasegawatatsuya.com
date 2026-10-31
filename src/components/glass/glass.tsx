"use client";

import { glassShell } from "@/components/glass/glass.css";
import { LiquidGlassCard } from "@/components/glass/liquidGlassCard";
import clsx from "clsx";

export default function Glass({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={clsx(glassShell)}>
      <LiquidGlassCard>{children}</LiquidGlassCard>
    </div>
  );
}
