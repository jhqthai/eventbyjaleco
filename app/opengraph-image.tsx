import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Event by Jaleco — boutique wedding atelier, established 2014.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont(family: string, weight: number, style = "normal") {
  const url = `https://fonts.googleapis.com/css2?family=${family.replace(
    / /g,
    "+",
  )}:${style === "italic" ? "ital," : ""}wght@${
    style === "italic" ? "1," : ""
  }${weight}&display=swap`;
  try {
    const css = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
      },
    }).then((r) => r.text());
    const match = css.match(/src: url\((https:\/\/[^)]+\.woff2)\)/);
    if (!match) return null;
    const fontData = await fetch(match[1]).then((r) => r.arrayBuffer());
    return fontData;
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const [cormorantRegular, cormorantItalic, inter] = await Promise.all([
    loadFont("Cormorant Garamond", 500),
    loadFont("Cormorant Garamond", 500, "italic"),
    loadFont("Inter", 400),
  ]);

  const fonts: Array<{
    name: string;
    data: ArrayBuffer;
    weight?: 400 | 500;
    style?: "normal" | "italic";
  }> = [];
  if (cormorantRegular)
    fonts.push({
      name: "Cormorant",
      data: cormorantRegular,
      weight: 500,
      style: "normal",
    });
  if (cormorantItalic)
    fonts.push({
      name: "Cormorant",
      data: cormorantItalic,
      weight: 500,
      style: "italic",
    });
  if (inter)
    fonts.push({ name: "Inter", data: inter, weight: 400, style: "normal" });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FAF7F2",
          padding: "80px 96px",
          fontFamily: "Cormorant, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "Inter, sans-serif",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#7A6E5D",
          }}
        >
          Boutique Wedding Atelier · Est. 2014
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 132,
              lineHeight: 1,
              letterSpacing: -3,
              color: "#1A1814",
            }}
          >
            Event by Jaleco
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 44,
              lineHeight: 1.1,
              fontStyle: "italic",
              color: "#5A4F3F",
            }}
          >
            Quietly luxurious weddings, made with intention.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontFamily: "Inter, sans-serif",
            fontSize: 20,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#7A6E5D",
          }}
        >
          <div style={{ display: "flex" }}>Sydney · Worldwide</div>
          <div style={{ display: "flex" }}>eventbyjaleco.com</div>
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length > 0 ? fonts : undefined },
  );
}
