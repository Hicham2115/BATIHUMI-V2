import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Droplet, FileText, Users } from "lucide-react";

import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Droplet,
    title: "Diagnostic humidité avant mise en vente",
    description: "protégez-vous des vices cachés",
  },
  {
    icon: Clock,
    title: "Rapport d'expertise remis en 48h",
    description: "accélérez votre transaction",
  },
  {
    icon: Users,
    title: "Accompagnement agences immobilières et notaires",
  },
];

export function CtaBanner() {
  return (
    <div className="relative isolate overflow-hidden rounded-3xl bg-blue-950">
      <Image
        src="/images/banner.png"
        alt="Rapport d'expertise humidité avant une transaction immobilière"
        fill
        className="object-cover object-right"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-950/20" />

      <div className="relative flex min-h-[560px] flex-col justify-center gap-7 p-8 md:p-14 lg:max-w-2xl">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
          <FileText className="size-4 text-blue-400" />
          Expertise avant vente
        </span>

        <div>
          <h2 className="font-heading text-3xl leading-tight font-extrabold text-white sm:text-4xl">
            Vous vendez ou achetez
            <br />
            un bien immobilier en{" "}
            <span className="text-blue-400">Île-de-France ?</span>
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-blue-500" aria-hidden="true" />
        </div>

        <p className="max-w-xl text-slate-300">
          Un problème d&rsquo;humidité non traité peut bloquer une vente
          ou faire chuter le prix de 10 à 15%. Obtenez un rapport
          d&rsquo;expert avant votre transaction.
        </p>

        <div className="divide-y divide-white/10">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start gap-4 py-4 first:pt-0">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-blue-400">
                <feature.icon className="size-5" />
              </span>
              <p className="pt-1.5 text-sm">
                <span className="block font-semibold text-white">{feature.title}</span>
                {feature.description && (
                  <span className="mt-0.5 block text-blue-400">{feature.description}</span>
                )}
              </p>
            </div>
          ))}
        </div>

        <Button
          size="lg"
          className="w-fit gap-2 bg-blue-700 px-8 text-white hover:bg-blue-600"
          render={<Link href="/diagnostic" />}
          nativeButton={false}
        >
          <ArrowRight className="size-4" />
          Demander un rapport d&rsquo;expertise avant vente
        </Button>
      </div>
    </div>
  );
}
