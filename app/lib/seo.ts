import type { Work } from "./works";

export const SITE_URL = "https://eventbyjaleco.com";
export const SITE_NAME = "Event by Jaleco";

export const DEFAULT_TITLE =
  "Event by Jaleco — Boutique & Destination Wedding Planning, Sydney";
export const DEFAULT_DESCRIPTION =
  "A Sydney-based boutique studio designing quietly luxurious weddings worldwide. Considered design and full-service planning for couples who care about the difference candlelight makes.";

export const DEFAULT_KEYWORDS = [
  "boutique wedding planner Sydney",
  "luxury wedding planner Australia",
  "destination wedding planner",
  "Sydney wedding designer",
  "editorial wedding studio",
  "Surry Hills wedding planner",
  "private estate wedding",
  "intimate destination wedding",
];

export const BUSINESS = {
  name: SITE_NAME,
  legalName: "Event by Jaleco Pty Ltd",
  email: "hello@eventbyjaleco.com",
  foundingDate: "2014",
  street: "14 Florence Lane",
  city: "Surry Hills",
  region: "NSW",
  postcode: "2010",
  country: "AU",
  // Approximate Surry Hills, Sydney coordinates.
  latitude: -33.8847,
  longitude: 151.2106,
  hours: {
    days: ["Tuesday", "Wednesday", "Thursday", "Friday"] as const,
    opens: "10:00",
    closes: "17:00",
    timezone: "Australia/Sydney",
  },
  priceRange: "$$$$",
  areaServed: [
    { type: "Country", name: "Australia" },
    { type: "Country", name: "Italy" },
    { type: "Country", name: "France" },
    { type: "Country", name: "Greece" },
    { type: "Country", name: "United States" },
    { type: "Country", name: "Japan" },
  ],
};

export const SOCIAL = {
  instagram: "https://instagram.com/eventbyjaleco",
  pinterest: "https://pinterest.com/eventbyjaleco",
};

export const FOUNDER = {
  name: "Muelvi Jaleco",
  jobTitle: "Founder & Creative Director",
  bio: "Founder and Creative Director of Event by Jaleco, a Sydney-based boutique studio designing quietly luxurious weddings around the world since 2014.",
  image:
    "https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&w=1200&q=85",
};

export const TEAM = [
  { name: "Muelvi Jaleco", jobTitle: "Founder & Creative Director" },
  { name: "Mira", jobTitle: "Senior Designer" },
  { name: "Theo", jobTitle: "Production Lead" },
  { name: "Anouk", jobTitle: "Client Experience" },
];

export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID ?? "";
export const GSC_VERIFICATION = process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? "";

// Next 14's file-based opengraph-image.tsx is served at /opengraph-image
// (without an extension) but with `image/png` Content-Type. We use the
// extensionless URL in JSON-LD so it resolves correctly on any static host.
export const OG_IMAGE = {
  url: `${SITE_URL}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: "Event by Jaleco — boutique wedding atelier, established 2014.",
};

export type JsonLdGraph = {
  "@context": "https://schema.org";
  "@graph": Record<string, unknown>[];
};

const ORG_ID = `${SITE_URL}/#organization`;
const LOCALBUSINESS_ID = `${SITE_URL}/#localbusiness`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const FOUNDER_ID = `${SITE_URL}/#founder`;

export function organizationLd() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: SITE_URL,
    logo: OG_IMAGE.url,
    image: OG_IMAGE.url,
    email: BUSINESS.email,
    foundingDate: BUSINESS.foundingDate,
    founder: { "@id": FOUNDER_ID },
    sameAs: [SOCIAL.instagram, SOCIAL.pinterest],
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.street,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postcode,
      addressCountry: BUSINESS.country,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: BUSINESS.email,
        contactType: "customer service",
        areaServed: "Worldwide",
        availableLanguage: ["English"],
      },
    ],
  };
}

export function localBusinessLd() {
  return {
    "@type": "ProfessionalService",
    "@id": LOCALBUSINESS_ID,
    name: BUSINESS.name,
    description:
      "Boutique wedding planning and design studio for couples who care about the details. Sydney-based, available worldwide. By appointment only.",
    url: SITE_URL,
    image: OG_IMAGE.url,
    logo: OG_IMAGE.url,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.street,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postcode,
      addressCountry: BUSINESS.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: BUSINESS.hours.days,
        opens: BUSINESS.hours.opens,
        closes: BUSINESS.hours.closes,
      },
    ],
    areaServed: BUSINESS.areaServed.map((a) => ({
      "@type": a.type,
      name: a.name,
    })),
    sameAs: [SOCIAL.instagram, SOCIAL.pinterest],
    parentOrganization: { "@id": ORG_ID },
    founder: { "@id": FOUNDER_ID },
    knowsAbout: [
      "Wedding planning",
      "Wedding design",
      "Destination weddings",
      "Editorial event design",
      "Private estate weddings",
      "Multi-day celebrations",
    ],
  };
}

export function websiteLd() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    inLanguage: "en-AU",
    publisher: { "@id": ORG_ID },
  };
}

export function founderLd() {
  return {
    "@type": "Person",
    "@id": FOUNDER_ID,
    name: FOUNDER.name,
    jobTitle: FOUNDER.jobTitle,
    description: FOUNDER.bio,
    image: FOUNDER.image,
    url: `${SITE_URL}/about`,
    worksFor: { "@id": ORG_ID },
  };
}

export function personLd(name: string, jobTitle: string) {
  return {
    "@type": "Person",
    name,
    jobTitle,
    worksFor: { "@id": ORG_ID },
  };
}

export type FaqItem = { question: string; answer: string };

export function faqLd(items: FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export type Crumb = { name: string; url: string };

export function breadcrumbLd(items: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url.startsWith("http") ? c.url : `${SITE_URL}${c.url}`,
    })),
  };
}

export function workArticleLd(work: Work) {
  const url = `${SITE_URL}/work/${work.slug}`;
  return {
    "@type": "Article",
    "@id": `${url}#article`,
    headline: `${work.place}, ${work.region} — ${work.year}`,
    description: work.narrative,
    image: [work.hero, ...work.essay.map((e) => e.src)].slice(0, 6),
    datePublished: `${work.year}-01-01`,
    dateModified: `${work.year}-12-31`,
    inLanguage: "en-AU",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: {
      "@type": "Person",
      name: work.photographer,
      jobTitle: "Photographer",
    },
    creator: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    about: {
      "@type": "Place",
      name: `${work.place}, ${work.region}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: work.place,
        addressRegion: work.region,
      },
    },
    keywords: [
      `${work.place} wedding planner`,
      `${work.region} wedding planner`,
      `${work.category} wedding`,
      "destination wedding",
    ].join(", "),
  };
}

export function aboutPageLd() {
  return {
    "@type": "AboutPage",
    "@id": `${SITE_URL}/about#aboutpage`,
    url: `${SITE_URL}/about`,
    name: "About — Event by Jaleco",
    description:
      "Event by Jaleco is a Sydney-based boutique studio designing quietly luxurious weddings for couples who care about the difference candlelight makes.",
    inLanguage: "en-AU",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
  };
}

export function contactPageLd() {
  return {
    "@type": "ContactPage",
    "@id": `${SITE_URL}/inquire#contactpage`,
    url: `${SITE_URL}/inquire`,
    name: "Inquire — Event by Jaleco",
    description:
      "Begin a conversation with Event by Jaleco. Share a few details about your wedding and we will be in touch within two business days.",
    inLanguage: "en-AU",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
  };
}

export function collectionPageLd(input: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@type": "CollectionPage",
    "@id": `${input.url}#collectionpage`,
    url: input.url,
    name: input.name,
    description: input.description,
    inLanguage: "en-AU",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
  };
}

export function workItemListLd(works: Work[]) {
  return {
    "@type": "ItemList",
    name: "Selected weddings designed by Event by Jaleco",
    numberOfItems: works.length,
    itemListElement: works.map((w, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/work/${w.slug}`,
      name: `${w.place}, ${w.region} — ${w.year}`,
      image: w.thumb,
    })),
  };
}

export type PressFeatureInput = {
  publication: string;
  headline: string;
  date: string;
  url: string;
};

export function pressItemListLd(features: PressFeatureInput[]) {
  return {
    "@type": "ItemList",
    name: "Press features — Event by Jaleco",
    numberOfItems: features.length,
    itemListElement: features.map((f, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Article",
        headline: f.headline,
        datePublished: f.date,
        url: f.url === "#" ? SITE_URL : f.url,
        publisher: { "@type": "Organization", name: f.publication },
        about: { "@id": ORG_ID },
      },
    })),
  };
}

export function buildGraph(
  blocks: Array<Record<string, unknown> | null | undefined>,
): JsonLdGraph {
  return {
    "@context": "https://schema.org",
    "@graph": blocks.filter(Boolean) as Record<string, unknown>[],
  };
}
