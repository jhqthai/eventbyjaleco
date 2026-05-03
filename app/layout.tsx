import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes, Raleway } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const script = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap",
});

const sans = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Event by Jaleco — Boutique Wedding Planning",
  description:
    "Bespoke wedding design and full-service planning for couples who love the details. Intimate ceremonies, full planning, and destination weddings.",
  openGraph: {
    title: "Event by Jaleco — Boutique Wedding Planning",
    description:
      "Bespoke wedding design and full-service planning for couples who love the details.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${script.variable} ${sans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
