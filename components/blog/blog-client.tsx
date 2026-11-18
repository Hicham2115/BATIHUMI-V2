"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "convex/react";
import { ArrowRight, BookOpen, Clock, FileText, Search, Bookmark, X } from "lucide-react";

import { api } from "@/convex/_generated/api";
import {
  type ArticleItem,
  fallbackArticles,
  normalizeArticleImageUrl,
} from "@/lib/articles-data";
import { BlogCard, estimateReadingTime, getArticleCategory } from "./blog-card";

const categories = [
  "Tous les guides",
  "Remontées capillaires",
  "Ventilation & Condensation",
  "Moisissures & Santé",
  "Cuvelage & Sous-sol",
  "Infiltrations & Toiture",
  "Diagnostic & Immo",
];

export function BlogClient() {
  const queryPosts = useQuery(api.articles.list);
  const [selectedCategory, setSelectedCategory] = useState("Tous les guides");
  const [searchQuery, setSearchQuery] = useState("");

  const articles = useMemo(() => {
    const map = new Map<string, ArticleItem>();
    // First load fallback articles
    for (const p of fallbackArticles) {
      map.set(p.slug, p);
    }
    // Then override/add with articles from Convex if present
    if (queryPosts) {
      for (const raw of queryPosts) {
        const p = raw as unknown as ArticleItem;
        if (p.published !== false) {
          map.set(p.slug, p);
        }
      }
    }
    return Array.from(map.values());
  }, [queryPosts]);

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const category = getArticleCategory(article.slug);
      const matchesCategory =
        selectedCategory === "Tous les guides" || category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.description.toLowerCase().includes(q) ||
        (article.content && article.content.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [articles, selectedCategory, searchQuery]);

  // Featured article: first article if no search and "Tous" is selected
  const hasFeatured =
    selectedCategory === "Tous les guides" &&
    !searchQuery &&
    filteredArticles.length > 0;
  const featuredArticle = hasFeatured ? filteredArticles[0] : null;
  const listArticles = hasFeatured
    ? filteredArticles.slice(1)
    : filteredArticles;

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Controls: Search + Category Pills */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-12">
          {/* Search box */}
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
            <input
              type="text"
              placeholder="Rechercher un guide, un problème (ex: salpêtre, injection)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-slate-200 bg-white py-2.5 pl-10 pr-10 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700/20 shadow-sm"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                aria-label="Effacer la recherche"
              >
                <X className="size-4" />
              </button>
            )}
          </div>

          {/* Result count */}
          <div className="text-xs sm:text-sm font-medium text-slate-500">
            {filteredArticles.length}{" "}
            {filteredArticles.length > 1 ? "guides disponibles" : "guide disponible"}
          </div>
        </div>

        {/* Categories scrollable row */}
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-none mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? "bg-blue-950 text-white shadow-md shadow-blue-950/20"
                    : "bg-white text-slate-700 border border-slate-200/80 hover:border-blue-700/40 hover:text-blue-950"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Featured Card */}
        {featuredArticle && (
          <div className="mb-14">
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-slate-200/80 transition-all duration-300 hover:shadow-2xl hover:ring-blue-600/30">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                <Link
                  href={`/blog/${featuredArticle.slug}`}
                  className="relative aspect-16/10 lg:aspect-auto lg:h-full w-full overflow-hidden bg-slate-100 lg:col-span-7 block"
                >
                  {normalizeArticleImageUrl(featuredArticle.imageUrl) ? (
                    <Image
                      src={normalizeArticleImageUrl(featuredArticle.imageUrl)!}
                      alt={featuredArticle.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                      sizes="(min-width: 1024px) 60vw, 100vw"
                    />
                  ) : (
                    <div className="flex h-full min-h-[300px] w-full items-center justify-center bg-blue-950/5 text-blue-900/30">
                      <FileText className="size-16" />
                    </div>
                  )}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="rounded-full bg-blue-700 px-3 py-1 text-xs font-bold text-white shadow-sm flex items-center gap-1.5">
                      <Bookmark className="size-3" />
                      Guide Recommandé
                    </span>
                    <span className="rounded-full bg-blue-950/85 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                      {getArticleCategory(featuredArticle.slug)}
                    </span>
                  </div>
                </Link>

                <div className="p-8 sm:p-10 lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-4">
                      <Clock className="size-4 text-blue-600" />
                      <span>{estimateReadingTime(featuredArticle.content)}</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-blue-700 font-semibold">Dossier Spécial</span>
                    </div>

                    <h2 className="font-heading text-2xl sm:text-3xl font-extrabold leading-tight text-blue-950 transition-colors group-hover:text-blue-700 mb-4">
                      <Link href={`/blog/${featuredArticle.slug}`}>
                        {featuredArticle.title}
                      </Link>
                    </h2>

                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-8 line-clamp-4">
                      {featuredArticle.description}
                    </p>
                  </div>

                  <Link
                    href={`/blog/${featuredArticle.slug}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-950 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-blue-800 shadow-sm"
                  >
                    <span>Consulter le guide complet</span>
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        {listArticles.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {listArticles.map((article) => (
              <BlogCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
            <BookOpen className="mx-auto size-12 text-slate-300 mb-4" />
            <h3 className="font-heading text-lg font-bold text-blue-950 mb-2">
              Aucun guide trouvé
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
              Aucun article ne correspond à votre recherche &ldquo;{searchQuery}&rdquo;.
              Essayez un autre mot-clé ou réinitialisez les filtres.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("Tous les guides");
              }}
              className="rounded-full bg-blue-950 px-5 py-2 text-xs font-bold text-white hover:bg-blue-800"
            >
              Voir tous les guides
            </button>
          </div>
        )}

        {/* Bottom banner for booking free diagnostic */}
        <div className="mt-16 rounded-3xl bg-blue-950 p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="relative max-w-2xl">
            <span className="text-xs font-bold tracking-[0.14em] text-sky-400 uppercase">
              Besoin d&rsquo;un avis d&rsquo;expert sur place ?
            </span>
            <h3 className="mt-2 font-heading text-2xl sm:text-3xl font-black text-white">
              Votre diagnostic d&rsquo;humidité gratuit sous 48h
            </h3>
            <p className="mt-3 text-sm sm:text-base text-blue-100/80">
              Chaque mur humide a sa cause spécifique. Nos techniciens interviennent dans les 8 départements d&rsquo;Île-de-France avec hygromètre de précision et vous remettent un rapport écrit sans engagement.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="rounded-xl bg-white px-6 py-3 text-sm font-bold text-blue-950 hover:bg-blue-50 transition-colors shadow-sm"
              >
                Demander mon diagnostic gratuit
              </Link>
              <a
                href="tel:+33768841324"
                className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition-colors"
              >
                Appeler le 07 68 84 13 24
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
