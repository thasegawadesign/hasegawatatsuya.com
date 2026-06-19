import { SITE_URL } from "@/constants/constants";
import type { MetadataRoute } from "next";

const routes: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "", changeFrequency: "monthly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/works/fukusho-unyu", changeFrequency: "yearly", priority: 0.7 },
  { path: "/works/tomosho-unyu", changeFrequency: "yearly", priority: 0.7 },
  { path: "/works/univearth", changeFrequency: "yearly", priority: 0.7 },
  { path: "/tools/yasashii-web-check", changeFrequency: "yearly", priority: 0.7 },
  { path: "/tools/cookie-memo", changeFrequency: "yearly", priority: 0.7 },
  { path: "/tools/cursor-dashboard", changeFrequency: "yearly", priority: 0.7 },
  { path: "/playgrounds/moire-playground", changeFrequency: "yearly", priority: 0.5 },
  { path: "/playgrounds/editorial-hero-prototype", changeFrequency: "yearly", priority: 0.5 },
  {
    path: "/playgrounds/customer-voice-carousel-prototype",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  { path: "/playgrounds/vision-scroll-snap", changeFrequency: "yearly", priority: 0.5 },
  { path: "/playgrounds/nextjs-splide-carousel", changeFrequency: "yearly", priority: 0.5 },
  { path: "/playgrounds/playlist2025", changeFrequency: "yearly", priority: 0.5 },
  { path: "/playgrounds/fleur", changeFrequency: "yearly", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: path ? `${SITE_URL}${path}` : SITE_URL,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
