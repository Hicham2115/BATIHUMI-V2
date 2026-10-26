import { fetchQuery } from "convex/nextjs";
import type { MetadataRoute } from "next";

import { fallbackArticles } from "@/lib/articles-data";
import { interventions } from "@/lib/interventions-data";
import { services } from "@/lib/services-data";
import { api } from "@/convex/_generated/api";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.batihumi.com";

  // Core pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  // Services dynamic routes
  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Interventions dynamic routes (all Île-de-France departments)
  const interventionRoutes: MetadataRoute.Sitemap = interventions.map(
    (intervention) => ({
      url: `${baseUrl}/interventions/${intervention.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    }),
  );

  // Dynamic blog articles from Convex + fallbackArticles to guarantee full coverage
  const allArticlesMap = new Map<
    string,
    { slug: string; creationTime?: number }
  >();

  // Add fallbacks first
  for (const fa of fallbackArticles) {
    allArticlesMap.set(fa.slug, {
      slug: fa.slug,
      creationTime: fa._creationTime || Date.now(),
    });
  }

  try {
    const articles = await fetchQuery(api.articles.list);
    if (articles) {
      for (const rawArticle of articles) {
        const article = rawArticle as unknown as {
          slug: string;
          _creationTime?: number;
        };
        allArticlesMap.set(article.slug, {
          slug: article.slug,
          creationTime: article._creationTime,
        });
      }
    }
  } catch (error) {
    console.error(
      "Error fetching articles for sitemap, using fallbacks:",
      error,
    );
  }

  const blogRoutes: MetadataRoute.Sitemap = Array.from(
    allArticlesMap.values(),
  ).map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.creationTime || Date.now()),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...interventionRoutes,
    ...blogRoutes,
  ];
}
