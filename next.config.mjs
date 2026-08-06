import path from "node:path";
import { fileURLToPath } from "node:url";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin();
const rootDir = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["esbuild"],
  webpack(config, { dev }) {
    if (!dev) {
      config.module.rules.push({
        test: /(?:liquidShaderGlsl\.ts|liquidBootScript\.ts|particleEffect\.tsx)$/,
        enforce: "pre",
        use: [path.join(rootDir, "scripts/minify-shader-loader.cjs")],
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
