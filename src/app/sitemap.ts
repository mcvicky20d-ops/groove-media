import type { MetadataRoute } from "next";

const base = "https://thegroovemedia.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/weddings", "/corporate", "/events", "/about", "/contact"];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
