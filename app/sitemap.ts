import type { MetadataRoute } from "next";
import { guides } from "../lib/guides";
import { absoluteUrl } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-08-25T00:00:00Z");

  return [
    {
      url: absoluteUrl("/"),
      lastModified: updated,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/guides"),
      lastModified: updated,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...guides.map((guide) => ({
      url: absoluteUrl(`/guides/${guide.slug}`),
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
