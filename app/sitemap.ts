import { MetadataRoute } from "next";

const baseUrl = "https://yisus.dev";
const locales = ["en", "vi"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          "en-US": `${baseUrl}/en`,
          "vi-VN": `${baseUrl}/vi`,
          "x-default": `${baseUrl}/en`,
        },
      },
    });

    entries.push({
      url: `${baseUrl}/${locale}/resume`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          "en-US": `${baseUrl}/en/resume`,
          "vi-VN": `${baseUrl}/vi/resume`,
          "x-default": `${baseUrl}/en/resume`,
        },
      },
    });

    entries.push({
      url: `${baseUrl}/${locale}/resume/harvard`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          "en-US": `${baseUrl}/en/resume/harvard`,
          "vi-VN": `${baseUrl}/vi/resume/harvard`,
          "x-default": `${baseUrl}/en/resume/harvard`,
        },
      },
    });
  }

  return entries;
}