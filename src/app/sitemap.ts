import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: {
    path: string;
    priority: number;
    freq: "weekly" | "monthly";
  }[] = [
    { path: "", priority: 1, freq: "weekly" },
    { path: "/weddings", priority: 0.9, freq: "monthly" },
    { path: "/corporate", priority: 0.9, freq: "monthly" },
    { path: "/events", priority: 0.9, freq: "monthly" },
    { path: "/about", priority: 0.7, freq: "monthly" },
    { path: "/contact", priority: 0.8, freq: "monthly" },
  ];
  return routes.map(({ path, priority, freq }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: freq,
    priority,
  }));
}
