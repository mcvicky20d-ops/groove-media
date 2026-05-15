import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.legalName,
    short_name: site.name,
    description:
      "Chennai production house — cinematic wedding, corporate & ad films, event coverage and photography.",
    start_url: "/",
    display: "standalone",
    background_color: "#082b1d",
    theme_color: "#0f4530",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
