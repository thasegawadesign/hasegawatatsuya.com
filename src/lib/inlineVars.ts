import type { CSSProperties } from "react";

// @vanilla-extract/dynamic の assignInlineVars は、これだけのために依存を増やすほどではないので使わない
export const inlineVars = (vars: Record<string, string>): CSSProperties =>
  Object.fromEntries(
    Object.entries(vars).map(([cssVar, value]) => [
      cssVar.replace(/^var\((--[^,)]+)[^)]*\)$/, "$1"),
      value,
    ]),
  );
