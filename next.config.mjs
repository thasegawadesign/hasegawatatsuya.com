import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
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
