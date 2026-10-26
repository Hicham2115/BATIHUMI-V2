import ReactMarkdown from "react-markdown";
import {
  CheckCircle2,
  Phone,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function BlogPostContent({
  content,
}: {
  content: string;
  title?: string;
}) {
  return (
    <div className="space-y-10">
      {/* Key Takeaways Callout Box */}
      <div className="rounded-2xl border-l-4 border-blue-700 bg-blue-50/70 p-6 sm:p-7 shadow-sm">
        <div className="flex items-center gap-2.5 text-blue-950 font-bold text-base mb-2">
          <CheckCircle2 className="size-5 text-blue-700 shrink-0" />
          <span>En résumé : les points clés du diagnostic</span>
        </div>
        <p className="text-sm leading-relaxed text-slate-700">
          Ce guide vous aide à repérer les symptômes exacts, comprendre les causes structurelles et choisir la technique d&rsquo;assèchement appropriée selon les normes de construction (DTU) en vigueur en Île-de-France.
        </p>
      </div>

      {/* Markdown Content with Customized Components */}
      <div className="article-body text-slate-700 leading-relaxed space-y-6">
        <ReactMarkdown
          components={{
            h2: ({ ...props }) => (
              <h2
                className="mt-12 mb-4 font-heading text-2xl sm:text-3xl font-extrabold text-blue-950 tracking-tight pt-4 border-t border-slate-100"
                {...props}
              />
            ),
            h3: ({ ...props }) => (
              <h3
                className="mt-8 mb-3 font-heading text-xl sm:text-2xl font-bold text-blue-900 tracking-tight"
                {...props}
              />
            ),
            h4: ({ ...props }) => (
              <h4
                className="mt-6 mb-2 font-heading text-lg font-bold text-slate-900"
                {...props}
              />
            ),
            p: ({ ...props }) => (
              <p
                className="text-base sm:text-[17px] leading-relaxed text-slate-700 my-4"
                {...props}
              />
            ),
            ul: ({ ...props }) => (
              <ul
                className="my-5 space-y-2.5 pl-6 list-disc marker:text-blue-700 text-slate-700"
                {...props}
              />
            ),
            ol: ({ ...props }) => (
              <ol
                className="my-5 space-y-2.5 pl-6 list-decimal marker:text-blue-700 marker:font-bold text-slate-700"
                {...props}
              />
            ),
            li: ({ ...props }) => (
              <li className="text-base leading-relaxed pl-1" {...props} />
            ),
            strong: ({ ...props }) => (
              <strong className="font-bold text-blue-950" {...props} />
            ),
            blockquote: ({ ...props }) => (
              <blockquote
                className="my-6 rounded-r-xl border-l-4 border-blue-700 bg-slate-50 p-4 sm:p-5 italic text-slate-700 font-serif text-lg leading-relaxed shadow-sm"
                {...props}
              />
            ),
            hr: () => <hr className="my-10 border-slate-200" />,
            a: ({ href, children, ...props }) => (
              <Link
                href={href || "#"}
                className="font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 transition-colors hover:text-blue-900 hover:decoration-blue-700"
                {...props}
              >
                {children}
              </Link>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>

      {/* Mid-Article / End-of-article Diagnostic Callout Box */}
      <div className="rounded-2xl bg-gradient-to-br from-blue-950 to-blue-900 p-8 text-white shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-800/80 px-3 py-1 text-xs font-semibold text-sky-300 mb-2">
              <ShieldCheck className="size-3.5" />
              Garantie Décennale 10 ans
            </span>
            <h4 className="font-heading text-xl sm:text-2xl font-black text-white">
              Un doute sur l&rsquo;humidité de vos murs ?
            </h4>
            <p className="mt-2 text-sm text-blue-100/80">
              Ne laissez pas l&rsquo;humidité dégrader votre santé et votre bâti. Nos techniciens se déplacent sous 24 à 48h partout en Île-de-France pour un diagnostic hygrométrique sans engagement.
            </p>
          </div>
          <div className="flex flex-col gap-3 w-full sm:w-auto shrink-0">
            <Button
              className="bg-white text-blue-950 hover:bg-blue-50 font-bold"
              render={<Link href="/#contact" />}
              nativeButton={false}
            >
              Demander mon diagnostic
            </Button>
            <a
              href="tel:+33768841324"
              className="flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 py-2 px-4 text-xs font-semibold text-white hover:bg-white/10"
            >
              <Phone className="size-3.5 text-sky-400" />
              07 68 84 13 24
            </a>
          </div>
        </div>
      </div>

      {/* Author Bio Box */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 shadow-sm">
        <div className="size-16 rounded-full bg-blue-950 text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-md">
          B
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h4 className="font-heading text-base font-bold text-blue-950">
              Équipe Technique BATIHUMI
            </h4>
            <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-[11px] font-bold text-blue-800">
              Experts Agréés
            </span>
          </div>
          <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
            Spécialistes du traitement de l&rsquo;humidité, des remontées capillaires, de l&rsquo;assèchement des murs et du cuvelage en Île-de-France. Basés à Asnières-sur-Seine (92), nos chantiers sont garantis 10 ans par assurance décennale.
          </p>
        </div>
      </div>
    </div>
  );
}
