import path from "node:path";
import { fileURLToPath } from "node:url";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin({
  unstable_turbopack: {
    mode: "auto",
  },
});
const rootDir = path.dirname(fileURLToPath(import.meta.url));
const shaderMinifyLoader = path.join(rootDir, "scripts/minify-shader-loader.cjs");

const shaderMinifyRule = {
  condition: "production",
  loaders: [shaderMinifyLoader],
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  // iPhone など同じ LAN の端末から dev サーバーを確認できるようにする
  // （許可しないと開発用リソースがブロックされ、View Transition などが確認できない）
  allowedDevOrigins: ["192.168.*.*"],
  serverExternalPackages: ["esbuild"],
  turbopack: {
    rules: {
      "**/liquidShaderGlsl.ts": shaderMinifyRule,
      "**/liquidBootScript.ts": shaderMinifyRule,
      "**/particleEffect.tsx": shaderMinifyRule,
    },
  },
  webpack(config, { dev }) {
    if (!dev) {
      config.module.rules.push({
        test: /(?:liquidShaderGlsl\.ts|liquidBootScript\.ts|particleEffect\.tsx)$/,
        enforce: "pre",
        use: [shaderMinifyLoader],
      });
    }
    return config;
  },
  async redirects() {
    return [
      {
        source: "/works",
        destination: "/#works",
        permanent: false,
      },
      {
        source: "/tools",
        destination: "/#tools",
        permanent: false,
      },
      {
        source: "/works/yasashii-web-check",
        destination: "/tools/yasashii-web-check",
        permanent: true,
      },
      {
        source: "/works/cookie-memo",
        destination: "/tools/cookie-memo",
        permanent: true,
      },
      {
        source: "/works/cursor-dashboard",
        destination: "/tools/cursor-dashboard",
        permanent: true,
      },
      {
        source: "/works/playlist2025",
        destination: "/playgrounds/playlist2025",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/#contact",
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'none'",
          },
        ],
      },
    ];
  },
};

export default withVanillaExtract(nextConfig);
