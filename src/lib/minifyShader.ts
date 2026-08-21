import { minifyShaderSource } from "../../scripts/minifyShaderSource.cjs";

export function minifyShader(source: string): string {
  if (process.env.NODE_ENV !== "production") {
    return source;
  }
  return minifyShaderSource(source);
}
