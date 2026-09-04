import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Diagnostic offert",
    description:
      "Analyse complète et gratuite de vos problèmes d'humidité par nos experts.",
    badge: "Gratuit",
    image: "/images/diagnostic-offert.png",
  },
  {
    number: "02",
    title: "Traitement de l'humidité ascensionnelle",
    description:
      "Élimination définitive des remontées capillaires grâce à nos techniques éprouvées.",
    image: "/images/humidite-ascensionnelle.png",
  },
  {
    number: "03",
    title: "Injection de résine",
    description:
      "Traitement par injection de produits hydrofuges pour créer une barrière étanche.",
    image: "/images/injection-resine.png",
  },
  {
    number: "04",
    title: "Assèchement des murs",
    description:
      "Techniques d'assèchement adaptées à chaque type de construction et de problème.",
    image: "/images/assechement-murs.png",
  },
  {
    number: "05",
    title: "Protection hydrofuge",
    description:
      "Application de produits de protection pour prévenir les infiltrations d'eau.",
    image: "/images/protection-hydrofuge.png",
  },
  {
    number: "06",
    title: "Traitement des moisissures",
    description:
      "Élimination et prévention des moisissures pour un environnement sain.",
    image: "/images/traitement-moisissures.png",
  },
  {
    number: "07",
    title: "Étanchéité des murs",
    description:
      "Renforcement de l'étanchéité pour une protection durable contre l'humidité.",
    image: "/images/etancheite-murs.png",
  },
  {
    number: "08",
    title: "Traitement anti-salpêtre",
    description:
      "Élimination des traces blanches et cristallisations causées par l'humidité.",
    image: "/images/traitement-anti-salpetre.png",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold tracking-[0.14em] text-blue-700 uppercase">
            Nos services
          </p>
          <h2 className="mt-3 font-heading text-3xl leading-tight font-extrabold tracking-tight text-blue-950 sm:text-4xl">
            Solutions complètes contre{" "}
            <span className="text-blue-700">l&rsquo;humidité</span>
          </h2>
          <p className="mt-4 text-slate-600">
            Nous offrons une gamme complète de traitements pour protéger votre
            habitation durablement contre tous les problèmes d&rsquo;humidité.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.number}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 25vw, 100vw"
                />
                {service.badge && (
                  <span className="absolute top-3 right-3 rounded-full bg-blue-950 px-3 py-1 text-xs font-semibold text-white">
                    {service.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2.5">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white">
                    {service.number}
                  </span>
                  <h3 className="font-heading text-base font-bold text-blue-950 transition-colors group-hover:text-blue-700">
                    {service.title}
                  </h3>
                </div>
                <div className="mt-3 flex items-start justify-between gap-3">
                  <p className="text-sm text-slate-600">
                    {service.description}
                  </p>
                  <ArrowRight className="mt-0.5 size-4 shrink-0 text-blue-700 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
