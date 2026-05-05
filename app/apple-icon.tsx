import { ImageResponse } from "next/og";

export const runtime = "nodejs";
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
          backgroundColor: "#1A1814",
          color: "#FAF7F2",
          fontFamily: "Georgia, serif",
          fontSize: 120,
          fontStyle: "italic",
          lineHeight: 1,
          letterSpacing: -4,
          paddingBottom: 12,
        }}
      >
        J
      </div>
    ),
    size,
  );
}
