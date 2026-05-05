import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Script from "next/script";
import JsonLd from "./components/JsonLd";
import "./globals.css";
import {
  buildGraph,
  DEFAULT_DESCRIPTION,
  DEFAULT_KEYWORDS,
  DEFAULT_TITLE,
  founderLd,
  GA4_ID,
  GSC_VERIFICATION,
  localBusinessLd,
  organizationLd,
  SITE_NAME,
  SITE_URL,
  websiteLd,
} from "./lib/seo";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s — Event by Jaleco",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Muelvi Jaleco", url: `${SITE_URL}/about` }],
  creator: "Muelvi Jaleco",
  publisher: SITE_NAME,
  category: "wedding planning",
  keywords: DEFAULT_KEYWORDS,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // openGraph.images and twitter.images are auto-derived by Next 14 from
  // app/opengraph-image.tsx, so we omit them here. They can still be
  // overridden per-page via generateMetadata when needed (e.g. work details
  // override with the wedding's hero image).
  openGraph: {
    type: "website",
    title: DEFAULT_TITLE,
    description:
      "A boutique studio for couples who care about the difference candlelight makes.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description:
      "A boutique studio for couples who care about the difference candlelight makes.",
  },
  icons: {
    icon: "/icon",
    apple: "/apple-icon",
    shortcut: "/icon",
  },
  manifest: "/site.webmanifest",
  verification: GSC_VERIFICATION
    ? { google: GSC_VERIFICATION }
    : undefined,
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};

const globalGraph = buildGraph([
  organizationLd(),
  localBusinessLd(),
  websiteLd(),
  founderLd(),
]);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <JsonLd data={globalGraph} id="ld-global" />
        {GA4_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA4_ID}', { anonymize_ip: true });
              `}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
