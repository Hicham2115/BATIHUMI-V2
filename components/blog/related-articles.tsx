import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { fallbackArticles } from "@/lib/articles-data";
import { BlogCard } from "./blog-card";

export function RelatedArticles({ currentSlug }: { currentSlug: string }) {
  const related = fallbackArticles
    .filter((a) => a.slug !== currentSlug)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
          <div>
            <p className="text-xs font-bold tracking-[0.14em] text-blue-700 uppercase">
              Pour approfondir
            </p>
            <h3 className="mt-2 font-heading text-2xl sm:text-3xl font-extrabold text-blue-950">
              Ces guides pourraient aussi vous intéresser
            </h3>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-700 hover:text-blue-900 transition-colors"
          >
            <span>Voir tous nos guides</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((article) => (
            <BlogCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
