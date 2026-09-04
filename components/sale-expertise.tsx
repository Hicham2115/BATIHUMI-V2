import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Droplet, FileText, Users } from "lucide-react";

import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Droplet,
    title: "Diagnostic humidité avant mise en vente :",
    description: "protégez-vous des vices cachés",
  },
  {
    icon: Clock,
    title: "Rapport d'expertise remis en 48h :",
    description: "accélérez votre transaction",
  },
  {
    icon: Users,
    title: "Accompagnement agences immobilières et notaires",
  },
];

const steps = [
  {
    number: "01",
    title: "Contactez-nous",
    description: "Appelez ou remplissez le formulaire. Réponse garantie sous 2h.",
  },
  {
    number: "02",
    title: "Diagnostic gratuit",
    description: "Expertise à domicile sous 24 à 48h en Île-de-France.",
  },
  {
    number: "03",
    title: "Traitement expert",
    description: "Solution durable avec garantie décennale incluse.",
  },
];

export function SaleExpertise() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="relative isolate overflow-hidden rounded-3xl bg-blue-950">
          <Image
            src="/images/humidite-ascensionnelle.jpg"
            alt="Mur endommagé par l'humidité, rapport d'expertise avant vente"
            fill
            className="object-cover object-right opacity-70"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-950/10" />

          <div className="relative grid grid-cols-1 gap-10 p-8 md:p-12 lg:min-h-[520px] lg:grid-cols-[1fr_360px] lg:items-center">
            <div>
              <h2 className="font-heading text-3xl leading-tight font-extrabold text-white sm:text-4xl">
                Vous vendez ou achetez
                <br />
                un bien immobilier en
                <br />
                <span className="text-blue-400">Île-de-France ?</span>
              </h2>
              <p className="mt-5 max-w-xl text-slate-300">
                Un problème d&rsquo;humidité non traité peut bloquer une vente
                ou faire chuter le prix de 10 à 15%. Obtenez un rapport
                d&rsquo;expert avant votre transaction.
              </p>

              <div className="mt-8 divide-y divide-white/10">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-4 py-3.5 first:pt-0">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-blue-700">
                      <feature.icon className="size-5" />
                    </span>
                    <p className="pt-2 text-sm text-white">
                      <span className="font-semibold">{feature.title}</span>
                      {feature.description && (
                        <>
                          {" "}
                          <span className="text-slate-300">{feature.description}</span>
                        </>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white p-8 text-center shadow-2xl">
              <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                <FileText className="size-6" />
              </span>
              <h3 className="mt-4 font-heading text-lg leading-snug font-bold text-blue-950">
                Demander un rapport d&rsquo;expertise avant vente
              </h3>
              <p className="mt-2 text-sm font-medium text-blue-700">
                Gratuit &amp; Sans engagement
              </p>
              <Button
                size="icon"
                className="mx-auto mt-6 size-14 rounded-full bg-blue-700 text-white hover:bg-blue-600"
                render={<Link href="/diagnostic" aria-label="Demander un rapport d'expertise" />}
                nativeButton={false}
              >
                <ArrowRight className="size-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-14">
          <p className="font-serif text-sm text-slate-500 italic">
            Comment ça marche ?
          </p>
          <h3 className="mt-2 font-heading text-2xl font-extrabold tracking-tight text-blue-950 sm:text-3xl">
            De votre appel à la solution en{" "}
            <span className="text-blue-700">3 étapes</span>
          </h3>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="border-slate-200 px-0 py-8 first:pt-0 sm:border-l sm:px-10 sm:py-0 sm:first:border-l-0 sm:first:pl-0"
              >
                <span className="font-serif text-5xl font-light text-blue-700">
                  {step.number}
                </span>
                <h4 className="mt-5 font-heading text-base font-bold text-blue-950">
                  {step.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="mt-6 h-px w-10 bg-slate-300 sm:hidden" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
