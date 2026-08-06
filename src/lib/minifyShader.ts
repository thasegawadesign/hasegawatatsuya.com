import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { minifyShaderSource } = require("../../scripts/minifyShaderSource.cjs") as {
  minifyShaderSource: (source: string) => string;
};

/**
 * GLSL / WGSL 向けの保守的な minify。
 * 本番では webpack ローダーが `minifyShader(\`...\`)` を文字列リテラルへ置換する。
 * 開発時・ローダー未適用時のフォールバックとして残している。
 */
export function minifyShader(source: string): string {
  if (process.env.NODE_ENV !== "production") {
    return source;
  }
  return minifyShaderSource(source);
}
