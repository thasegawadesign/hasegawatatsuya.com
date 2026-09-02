"use client";

import { glassShell } from "@/components/glass/glass.css";
import { LiquidGlassCard } from "@/components/glass/liquidGlassCard";
import clsx from "clsx";
import { useRef } from "react";

export default function Glass({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className={clsx(glassShell)}>
      <LiquidGlassCard containerRef={containerRef}>{children}</LiquidGlassCard>
    </div>
  );
}
