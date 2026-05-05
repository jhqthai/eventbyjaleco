import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/seo";
import { WORKS } from "./lib/works";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/work`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/press`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/inquire`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];

  const workRoutes: MetadataRoute.Sitemap = WORKS.map((work) => ({
    url: `${SITE_URL}/work/${work.slug}`,
    lastModified: new Date(`${work.year}-12-31`),
    changeFrequency: "yearly",
    priority: 0.8,
    images: [work.hero],
  }));

  return [...staticRoutes, ...workRoutes];
}
