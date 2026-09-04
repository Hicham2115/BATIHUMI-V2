import { Phone } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Le diagnostic est-il vraiment gratuit et sans engagement ?",
    answer:
      "Oui, totalement. Notre technicien se déplace à votre domicile gratuitement, analyse l'ensemble des zones touchées par l'humidité et vous remet un rapport complet. Aucun engagement d'achat n'est requis.",
  },
  {
    question: "Combien coûte un traitement humidité en Île-de-France ?",
    answer:
      "Le coût dépend de la surface traitée et du type de problème (remontées capillaires, moisissures, infiltrations). La plupart de nos interventions vont de 500 € à 2 500 € TTC. Après le diagnostic gratuit, vous recevez un devis détaillé et transparent.",
  },
  {
    question: "Intervenez-vous dans ma ville ?",
    answer:
      "Nous couvrons l'ensemble de l'Île-de-France : Paris et les 7 départements de la région (92, 93, 94, 91, 95, 77, 78). Appelez-nous pour confirmer la disponibilité dans votre commune.",
  },
  {
    question: "Les traitements sont-ils durables ?",
    answer:
      "Oui. Nos traitements sont garantis avec une assurance décennale couvrant vos travaux 10 ans. Nous utilisons uniquement des produits certifiés et des techniques éprouvées pour éliminer le problème à la source, pas seulement en surface.",
  },
  {
    question: "En combien de temps pouvez-vous intervenir ?",
    answer:
      "Nous organisons votre diagnostic sous 24 à 48h en Île-de-France. Pour les situations urgentes (moisissures importantes, problème de santé), contactez-nous directement pour un créneau prioritaire.",
  },
  {
    question: "Êtes-vous assurés et certifiés ?",
    answer:
      "BATIHUMI est couvert par une assurance décennale complète. Tous nos produits sont certifiés conformes aux normes européennes. Vous pouvez nous demander nos justificatifs d'assurance à tout moment.",
  },
  {
    question: "Le devis m'engage-t-il à faire les travaux ?",
    answer:
      "Non, jamais. Notre diagnostic et notre devis sont entièrement gratuits et sans obligation. Vous êtes libre d'accepter ou de décliner notre proposition. Notre objectif est de vous donner toutes les informations pour décider en connaissance de cause.",
  },
  {
    question: "Comment prendre rendez-vous ?",
    answer:
      "Deux façons : (1) Appelez-nous directement, disponible du lundi au vendredi de 9h à 17h. (2) Remplissez notre formulaire de diagnostic gratuit et nous vous rappelons sous 2h.",
  },
];

export function Faq() {
  return (
    <section className="relative overflow-hidden bg-blue-950 py-16 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -top-32 right-0 size-96 rounded-full bg-blue-700/20 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold tracking-[0.14em] text-blue-300 uppercase">
            Questions fréquentes
          </p>
          <h2 className="mt-3 font-heading text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl">
            Vous avez des questions ?
            <br />
            <span className="text-blue-300">Nous avons les réponses.</span>
          </h2>
          <div className="mx-auto mt-6 h-1 w-10 rounded-full bg-blue-500" />
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] px-6 backdrop-blur-sm sm:px-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="border-white/10"
              >
                <AccordionTrigger className="text-white hover:text-blue-300 [&>span]:bg-white/10 [&>span]:text-blue-200 [&>span]:ring-white/0 hover:[&>span]:bg-blue-500/90 hover:[&>span]:text-white hover:[&>span]:ring-blue-400/40 data-[state=open]:[&>span]:bg-blue-500 data-[state=open]:[&>span]:text-white data-[state=open]:[&>span]:ring-blue-400/40">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-blue-100/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="tel:0768841324"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-blue-950 shadow-lg shadow-black/20 transition-colors hover:bg-blue-50"
          >
            <Phone className="size-4" />
            07 68 84 13 24 — Prendre rendez-vous maintenant
          </a>
        </div>
      </div>
    </section>
  );
}
