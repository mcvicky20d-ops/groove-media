import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg,#0f4530,#082b1d)",
        }}
      >
        <div
          style={{
            width: 104,
            height: 104,
            borderRadius: 9999,
            background: "#faf7f0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 0,
              height: 0,
              borderTop: "30px solid transparent",
              borderBottom: "30px solid transparent",
              borderLeft: "48px solid #082b1d",
              marginLeft: 12,
            }}
          />
        </div>
      </div>
    ),
    size
  );
}
