import path from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import vanillaExtract from "@antebudimir/eslint-plugin-vanilla-extract";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      "**/.next/**",
      "**/node_modules/**",
      "**/out/**",
      "**/build/**",
      "**/coverage/**",
      "**/.vercel/**",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.css.ts"],
    plugins: vanillaExtract.configs.recommended.plugins,
    rules: vanillaExtract.configs.recommended.rules,
  },
];

export default eslintConfig;
