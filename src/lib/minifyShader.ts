import { minify } from "shaderkit";

/**
 * GLSL / WGSL を minify（コメント削除・空白畳み込み）。
 * 本番のみ適用し、開発時はソースを読みやすく保つ。
 * @see https://github.com/CodyJasonBennett/shaderkit
 */
export function minifyShader(source: string): string {
  if (process.env.NODE_ENV !== "production") {
    return source;
  }
  return minify(source);
}
