import { fetchQuery } from "convex/nextjs";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, ShieldCheck } from "lucide-react";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Contact } from "@/components/contact";
import { BlogPostContent } from "@/components/blog/blog-post-content";
import { RelatedArticles } from "@/components/blog/related-articles";
import { estimateReadingTime, getArticleCategory } from "@/components/blog/blog-card";
import {
  type ArticleItem,
  fallbackArticles,
  getFallbackArticleBySlug,
  normalizeArticleImageUrl,
} from "@/lib/articles-data";
import { api } from "@/convex/_generated/api";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  return fallbackArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  let article: ArticleItem | null = null;
  try {
    article = (await fetchQuery(api.articles.getBySlug, {
      slug,
    })) as ArticleItem | null;
  } catch (error) {
    console.error("Convex fetch error in generateMetadata:", error);
  }

  if (!article) {
    article = getFallbackArticleBySlug(slug) ?? null;
  }

  if (!article) {
    return {
      title: "Article introuvable | BATIHUMI",
      description: "Le guide technique demandé n'existe pas.",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.batihumi.com";
  const articleUrl = `${siteUrl}/blog/${article.slug}`;
  const rawImage = normalizeArticleImageUrl(article.imageUrl);
  const imageUrl = rawImage
    ? rawImage.startsWith("http")
      ? rawImage
      : `${siteUrl}${rawImage}`
    : `${siteUrl}/images/logo.png`;

  return {
    title: `${article.title} | BATIHUMI`,
    description: article.description,
    keywords: [
      article.title,
      "traitement humidité",
      "remontées capillaires",
      "moisissures",
      "salpêtre",
      "assèchement de murs",
      "Île-de-France",
      "Paris",
      "diagnostic humidité gratuit",
      "expert humidité BATIHUMI",
    ],
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      title: `${article.title} | BATIHUMI`,
      description: article.description,
      url: articleUrl,
      siteName: "BATIHUMI",
      locale: "fr_FR",
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | BATIHUMI`,
      description: article.description,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  let article: ArticleItem | null = null;
  try {
    article = (await fetchQuery(api.articles.getBySlug, {
      slug,
    })) as ArticleItem | null;
  } catch (error) {
    console.error("Convex fetch error in BlogPostPage:", error);
  }

  if (!article) {
    article = getFallbackArticleBySlug(slug) ?? null;
  }

  if (!article) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.batihumi.com";
  const publicationDate = article._creationTime
    ? new Date(article._creationTime).toISOString()
    : "2026-08-24T16:29:25.125Z";
  const category = getArticleCategory(article.slug);
  const readingTime = estimateReadingTime(article.content);

  const rawImage = normalizeArticleImageUrl(article.imageUrl);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    image: rawImage
      ? rawImage.startsWith("http")
        ? rawImage
        : `${siteUrl}${rawImage}`
      : `${siteUrl}/images/logo.png`,
    url: `${siteUrl}/blog/${article.slug}`,
    datePublished: publicationDate,
    dateModified: publicationDate,
    author: {
      "@type": "Organization",
      name: "BATIHUMI",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "BATIHUMI",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${article.slug}`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog & Guides",
        item: `${siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${siteUrl}/blog/${article.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Header alwaysVisible={true} />

      <main className="bg-white min-h-screen pt-28 md:pt-36">
        {/* Breadcrumbs and back button */}
        <div className="border-b border-slate-100 bg-slate-50/60 py-3.5">
          <div className="mx-auto max-w-4xl px-4 md:px-8">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 overflow-x-auto whitespace-nowrap">
              <Link href="/" className="hover:text-blue-700 transition-colors">
                Accueil
              </Link>
              <span>/</span>
              <Link
                href="/blog"
                className="hover:text-blue-700 transition-colors"
              >
                Blog &amp; Guides
              </Link>
              <span>/</span>
              <span className="text-slate-900 font-medium truncate max-w-xs sm:max-w-md">
                {article.title}
              </span>
            </div>
          </div>
        </div>

        {/* Article Header & Main Column */}
        <article className="mx-auto max-w-4xl px-4 md:px-8 py-10 md:py-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-700 hover:text-blue-900 transition-colors mb-8"
          >
            <ArrowLeft className="size-4" />
            <span>Retour à tous les guides</span>
          </Link>

          <header className="mb-10">
            {/* Badges row */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <span className="rounded-full bg-blue-950 px-3 py-1 text-xs font-semibold text-white">
                {category}
              </span>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 flex items-center gap-1.5">
                <ShieldCheck className="size-3.5" />
                Garantie Décennale
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 flex items-center gap-1.5">
                <Clock className="size-3.5 text-slate-400" />
                {readingTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.15] text-blue-950 tracking-tight mb-6">
              {article.title}
            </h1>

            {/* Description lead */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-sans mb-8">
              {article.description}
            </p>

            {/* Author and Date bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-100 text-xs sm:text-sm text-slate-500">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-blue-950 text-white flex items-center justify-center font-bold text-sm">
                  B
                </div>
                <div>
                  <div className="font-semibold text-slate-900">
                    Équipe Technique BATIHUMI
                  </div>
                  <div className="text-xs text-slate-500">
                    Experts Traitement Humidité Île-de-France
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Calendar className="size-4" />
                <span>Mis à jour en 2026</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          {rawImage && (
            <div className="relative aspect-16/9 w-full overflow-hidden rounded-3xl bg-slate-100 shadow-lg mb-12">
              <Image
                src={rawImage}
                alt={article.title}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 896px, 100vw"
              />
            </div>
          )}

          {/* Article Markdown Content with Callouts & CTAs */}
          <BlogPostContent content={article.content} title={article.title} />
        </article>

        {/* Related Articles */}
        <RelatedArticles currentSlug={article.slug} />

        {/* Embedded Contact Form for immediate conversion */}
        <div className="bg-white">
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}
