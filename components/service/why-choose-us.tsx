import { Award, MapPin, ShieldCheck, Zap } from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "Experts locaux",
    description:
      "Basés à Asnières-sur-Seine, nous intervenons dans toute l'Île-de-France.",
  },
  {
    icon: Award,
    title: "500+ projets réalisés",
    description:
      "Un savoir-faire éprouvé sur des centaines de chantiers réussis.",
  },
  {
    icon: Zap,
    title: "Intervention sous 48h",
    description: "Diagnostic organisé rapidement, 7 jours sur 7.",
  },
  {
    icon: ShieldCheck,
    title: "Garantie décennale",
    description: "Chaque traitement est couvert pendant 10 ans.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="text-center font-heading text-3xl leading-tight font-extrabold tracking-tight text-blue-950 sm:text-4xl">
          Pourquoi nous choisir
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-slate-200 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <reason.icon className="size-6" />
              </span>
              <h3 className="mt-5 font-heading text-base font-bold text-blue-950">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
