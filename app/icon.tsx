import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 22,
          fontStyle: "italic",
          lineHeight: 1,
          letterSpacing: -1,
          paddingBottom: 2,
        }}
      >
        J
      </div>
    ),
    size,
  );
}
