import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, FileText } from "lucide-react";
import { type ArticleItem, normalizeArticleImageUrl } from "@/lib/articles-data";

export function getArticleCategory(slug: string): string {
  if (slug.includes("condensation") || slug.includes("ventilation") || slug.includes("vmi")) {
    return "Ventilation & Condensation";
  }
  if (slug.includes("merule") || slug.includes("moisissure") || slug.includes("sante") || slug.includes("salpetre")) {
    return "Moisissures & Santé";
  }
  if (slug.includes("remontees") || slug.includes("injection")) {
    return "Remontées capillaires";
  }
  if (slug.includes("cave") || slug.includes("sous-sol") || slug.includes("laterales")) {
    return "Cuvelage & Sous-sol";
  }
  if (slug.includes("toiture") || slug.includes("facade") || slug.includes("isolation")) {
    return "Infiltrations & Toiture";
  }
  if (slug.includes("achat") || slug.includes("diagnostic")) {
    return "Diagnostic & Immo";
  }
  return "Guide Expert";
}

export function estimateReadingTime(content?: string): string {
  if (!content) return "5 min de lecture";
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(3, Math.round(words / 200));
  return `${minutes} min de lecture`;
}

export function BlogCard({ article }: { article: ArticleItem }) {
  const category = getArticleCategory(article.slug);
  const readingTime = estimateReadingTime(article.content);
  const imageUrl = normalizeArticleImageUrl(article.imageUrl);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-blue-600/30">
      <Link
        href={`/blog/${article.slug}`}
        className="relative aspect-16/10 w-full overflow-hidden bg-slate-100 block"
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-blue-950/5 text-blue-900/30">
            <FileText className="size-12" />
          </div>
        )}
        <span className="absolute top-3 left-3 rounded-full bg-blue-950/85 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-3">
          <Clock className="size-3.5 text-blue-600" />
          <span>{readingTime}</span>
          <span className="text-slate-300">•</span>
          <span className="text-blue-700 font-semibold">Expertise Batihumi</span>
        </div>

        <h3 className="font-heading text-lg font-bold leading-snug text-blue-950 transition-colors group-hover:text-blue-700 mb-3 line-clamp-2">
          <Link href={`/blog/${article.slug}`}>{article.title}</Link>
        </h3>

        <p className="text-sm leading-relaxed text-slate-600 line-clamp-3 mb-6 flex-1">
          {article.description}
        </p>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-semibold text-blue-950 group-hover:text-blue-700 transition-colors inline-flex items-center gap-1.5">
            Lire le guide complet
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
          <span className="text-xs text-slate-400">Gratuit</span>
        </div>
      </div>
    </article>
  );
}
