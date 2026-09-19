import Image from "next/image";
import { Star } from "lucide-react";

const distribution = [
  { stars: 5, count: 210 },
  { stars: 4, count: 34 },
];

const totalReviews = distribution.reduce((sum, row) => sum + row.count, 0);
const maxCount = Math.max(...distribution.map((row) => row.count));
const average = (
  distribution.reduce((sum, row) => sum + row.stars * row.count, 0) /
  totalReviews
).toFixed(1);

const categories = [
  { label: "Diagnostic", score: "4.9" },
  { label: "Réactivité", score: "4.8" },
  { label: "Professionnalisme", score: "4.9" },
  { label: "Rapport qualité-prix", score: "4.7" },
  { label: "Suivi de chantier", score: "4.8" },
];

const reviews = [
  {
    name: "Claire Fontaine",
    initials: "CF",
    date: "il y a 2 mois",
    rating: 5,
    text: "Après des années à voir l'humidité gagner du terrain, on a enfin trouvé une équipe qui a traité le problème à la racine. Le mur est resté sec depuis, et le rapport remis était d'un sérieux rare.",
    photos: ["/images/avant1.jpg", "/images/apres1.jpg"],
  },
  {
    name: "Marc Delrieu",
    initials: "MD",
    date: "il y a 4 mois",
    rating: 4,
    text: "Diagnostic clair, chantier propre, délais respectés au jour près. Pour une vente en cours, c'était exactement le rapport d'expertise dont notre notaire avait besoin. Seul bémol : un peu de retard pour obtenir le premier rendez-vous.",
  },
  {
    name: "Sophie Nguyen",
    initials: "SN",
    date: "il y a 5 mois",
    rating: 5,
    text: "La moisissure était revenue trois fois avec d'autres artisans. BatiHumi a compris l'origine réelle du problème dès la première visite. Rien à redire depuis un an.",
    photos: ["/images/avant2.jpg", "/images/apres2.jpg"],
  },
];

export function Reviews() {
  return (
    <section id="avis-clients" className="scroll-mt-20 bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <h2 className="font-heading text-2xl font-extrabold text-blue-950">
          Avis clients
        </h2>
        <div className="mt-5 border-t border-slate-200" />

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
          <div className="flex shrink-0 flex-col items-center gap-1 sm:items-start sm:border-r sm:border-slate-200 sm:pr-8">
            <p className="font-heading text-5xl font-black text-blue-950">
              {average}
            </p>
            <div className="flex gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className={
                    index < Math.round(Number(average))
                      ? "size-4 fill-blue-700 text-blue-700"
                      : "size-4 text-slate-300"
                  }
                />
              ))}
            </div>
            <p className="text-sm text-slate-500">{totalReviews} avis</p>
          </div>

          <div className="space-y-2.5">
            {distribution.map((row) => (
              <div key={row.stars} className="flex items-center gap-3 text-sm">
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-blue-700"
                    style={{ width: `${(row.count / maxCount) * 100}%` }}
                  />
                </div>
                <span className="w-6 shrink-0 font-semibold text-blue-950">
                  {row.stars}.0
                </span>
                <span className="w-24 shrink-0 text-slate-500">
                  {row.count} avis
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <div
              key={category.label}
              className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm"
            >
              <span className="font-bold text-blue-700">{category.score}</span>
              <span className="text-slate-600">{category.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 divide-y divide-slate-200">
          {reviews.map((review) => (
            <div key={review.name} className="py-6 first:pt-0">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                    {review.initials}
                  </span>
                  <div>
                    <p className="font-heading text-sm font-bold text-blue-950">
                      {review.name}
                    </p>
                    <p className="text-xs text-slate-500">{review.date}</p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-1.5">
                  <span className="text-sm font-bold text-blue-950">
                    {review.rating}.0
                  </span>
                  <div className="flex gap-0.5" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className={
                          index < review.rating
                            ? "size-3.5 fill-blue-700 text-blue-700"
                            : "size-3.5 text-slate-300"
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                {review.text}
              </p>

              {review.photos && (
                <div className="mt-4 flex gap-2">
                  {review.photos.map((photo) => (
                    <div
                      key={photo}
                      className="relative size-16 shrink-0 overflow-hidden rounded-lg bg-slate-100"
                    >
                      <Image
                        src={photo}
                        alt={`Photo du chantier – ${review.name}`}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
