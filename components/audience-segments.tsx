import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Home,
  Phone,
  ShieldCheck,
  User,
} from "lucide-react";

const segments = [
  {
    title: "Propriétaire / Locataire",
    description: "Vous faites face à un problème d'humidité dans votre logement ?",
    cta: "Découvrir nos solutions",
    href: "/particuliers",
    icon: User,
  },
  {
    title: "Vendeur / Acheteur immobilier",
    description: "Besoin d'un diagnostic avant la vente ou l'achat d'un bien ?",
    cta: "En savoir plus",
    href: "/transaction",
    icon: Home,
  },
  {
    title: "Agence immobilière",
    description: "Des partenariats fiables et des tarifs préférentiels pour vos clients.",
    cta: "Découvrir l'offre pro",
    href: "/professionnels",
    icon: Building2,
  },
  {
    title: "Urgence humidité",
    description: "Une situation urgente ? Nous intervenons rapidement.",
    cta: "Contactez-nous maintenant",
    href: "/contact",
    icon: Phone,
  },
];

const trustPoints = [
  { title: "Diagnostic offert", subtitle: "sous 48h", icon: Clock },
  { title: "Réponse garantie", subtitle: "sous 2h", icon: CalendarCheck },
  { title: "Garantie décennale", subtitle: "10 ans", icon: ShieldCheck },
  { title: "+ de 500 projets", subtitle: "réalisés", icon: CheckCircle2 },
];

export function AudienceSegments() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold tracking-[0.14em] text-blue-700 uppercase">
            Qui êtes-vous ?
          </p>
          <h2 className="mt-3 font-heading text-3xl leading-tight font-extrabold tracking-tight text-blue-950 sm:text-4xl">
            Trouvez la solution adaptée
            <br />
            <span className="text-blue-700">à votre situation.</span>
          </h2>
          <p className="mt-4 text-slate-600">
            Des solutions efficaces contre l&rsquo;humidité, adaptées à
            chaque besoin.
          </p>
          <div className="mx-auto mt-6 h-1 w-10 rounded-full bg-blue-700" />
        </div>

        <div className="mt-12 grid grid-cols-1 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:divide-y-0">
          {segments.map((segment) => (
            <div key={segment.href} className="flex flex-col">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-slate-100" />
              <div className="flex flex-1 flex-col items-center px-6 pb-6 text-center">
                <span className="-mt-6 flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-700 text-white shadow-lg shadow-blue-900/20">
                  <segment.icon className="size-5" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold text-blue-950">
                  {segment.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{segment.description}</p>
                <Link
                  href={segment.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800"
                >
                  {segment.cta}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 divide-y divide-white/15 rounded-2xl bg-blue-950 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="flex items-center gap-3 px-6 py-6 text-white"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/25 text-blue-200">
                <point.icon className="size-4" />
              </span>
              <p className="text-sm leading-tight font-semibold">
                {point.title}
                <br />
                <span className="font-normal text-blue-200">{point.subtitle}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
