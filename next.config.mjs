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
            value: [
              `default-src 'self'`,
              `script-src 'self' ${process.env.NODE_ENV === "development" ? "'unsafe-eval'" : ""}`,
              `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`,
              `img-src 'self' data: https:`,
              `font-src 'self' https://fonts.gstatic.com`,
              `connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com`,
              `frame-ancestors 'none'`,
              `form-action 'self'`,
              `base-uri 'self'`,
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default withVanillaExtract(nextConfig);
