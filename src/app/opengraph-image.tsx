import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = `${site.legalName} — Wedding, Corporate & Ad Film Production in ${site.city}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #082b1d 0%, #0c3826 55%, #0f4530 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "linear-gradient(135deg,#f7cd47,#bd820f)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 800,
              color: "#082b1d",
            }}
          >
            ▶
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#f7cd47",
              fontWeight: 700,
              letterSpacing: 6,
            }}
          >
            {site.name.toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: "#faf7f0",
              lineHeight: 1.05,
            }}
          >
            We produce films for brands, people &amp; ideas.
          </div>
          <div style={{ fontSize: 32, color: "rgba(250,247,240,0.75)" }}>
            Wedding · Corporate · Ad Films &amp; Photography — {site.city}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 26,
            color: "rgba(250,247,240,0.6)",
          }}
        >
          <span>{site.url.replace("https://", "")}</span>
          <span>★ {site.rating.value} · 100+ films delivered</span>
        </div>
      </div>
    ),
    size
  );
}
