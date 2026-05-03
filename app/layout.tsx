import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "optional",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eventbyjaleco.com"),
  title: {
    default: "Event by Jaleco — Boutique Wedding Planning",
    template: "%s — Event by Jaleco",
  },
  description:
    "A boutique studio for couples who care about the difference candlelight makes. Considered design and full-service planning for weddings around the world.",
  openGraph: {
    title: "Event by Jaleco — Boutique Wedding Planning",
    description:
      "A boutique studio for couples who care about the difference candlelight makes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
