import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CalendarCheck,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Contact } from "@/components/contact";
import { Reviews } from "@/components/reviews";
import { Faq } from "@/components/faq";
import { Button } from "@/components/ui/button";
import {
  getInterventionBySlug,
  interventions,
} from "@/lib/interventions-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return interventions.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const intervention = getInterventionBySlug(slug);

  if (!intervention) {
    return {
      title: "Zone d'intervention non trouvée | BATIHUMI",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.batihumi.com";
  const pageUrl = `${siteUrl}/interventions/${intervention.slug}`;

  return {
    title: intervention.title,
    description: intervention.description,
    keywords: [
      intervention.title,
      `traitement humidité ${intervention.name}`,
      `expert humidité ${intervention.departmentCode}`,
      `remontées capillaires ${intervention.name}`,
      `salpêtre ${intervention.name}`,
      `assèchement mur ${intervention.name}`,
      "diagnostic gratuit 48h",
      "garantie décennale 10 ans",
      "BATIHUMI Île-de-France",
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${intervention.title} | BATIHUMI`,
      description: intervention.description,
      url: pageUrl,
      siteName: "BATIHUMI",
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: `${siteUrl}/images/logo.png`,
          width: 800,
          height: 800,
          alt: intervention.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: intervention.title,
      description: intervention.description,
      images: [`${siteUrl}/images/logo.png`],
    },
  };
}

export default async function InterventionPage({ params }: Props) {
  const { slug } = await params;
  const intervention = getInterventionBySlug(slug);

  if (!intervention) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.batihumi.com";

  const localServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: `BATIHUMI - ${intervention.title}`,
    description: intervention.description,
    url: `${siteUrl}/interventions/${intervention.slug}`,
    telephone: "+33768841324",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "6 Rue de Belfort",
      postalCode: "92600",
      addressLocality: "Asnières-sur-Seine",
      addressRegion: "Île-de-France",
      addressCountry: "FR",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${intervention.name} (${intervention.departmentCode})`,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localServiceJsonLd) }}
      />

      <Header alwaysVisible={true} />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-blue-950 pt-28 pb-16 md:pt-36 md:pb-24">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
            aria-hidden="true"
          />
          <div className="pointer-events-none absolute -top-24 right-0 size-96 rounded-full bg-blue-700/25 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 md:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm">
                <MapPin className="size-3.5 text-sky-400" />
                Département {intervention.departmentCode} — {intervention.name}
              </span>

              <h1 className="mt-5 font-heading text-4xl leading-[1.08] font-black tracking-tight text-white sm:text-5xl md:text-6xl">
                Traitement de l&rsquo;humidité dans le{" "}
                <span className="text-sky-400">{intervention.name}</span>
              </h1>

              <p className="mt-5 text-lg leading-relaxed text-blue-100/85">
                {intervention.description}
              </p>

              {/* Guarantees Badges */}
              <div className="mt-7 flex flex-wrap gap-3">
                <span className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs sm:text-sm font-medium text-white backdrop-blur-sm">
                  <Zap className="size-4 text-sky-400" />
                  Intervention en 24h à 48h
                </span>
                <span className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs sm:text-sm font-medium text-white backdrop-blur-sm">
                  <ShieldCheck className="size-4 text-sky-400" />
                  Garantie Décennale 10 ans
                </span>
                <span className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs sm:text-sm font-medium text-white backdrop-blur-sm">
                  <Sparkles className="size-4 text-sky-400" />
                  Diagnostic gratuit sur place
                </span>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="h-12 gap-2 bg-white px-6 text-base font-bold text-blue-950 hover:bg-blue-50"
                  render={<a href="tel:+33768841324" />}
                  nativeButton={false}
                >
                  <Phone className="size-4 text-blue-700" />
                  07 68 84 13 24
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 gap-2 border-white/20 bg-white/10 px-6 text-base font-bold text-white backdrop-blur-sm hover:bg-white/20"
                  render={<Link href="/#contact" />}
                  nativeButton={false}
                >
                  <CalendarCheck className="size-4 text-sky-400" />
                  Prendre RDV en ligne
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Local Analysis and Expertise */}
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <p className="text-xs font-bold tracking-[0.14em] text-blue-700 uppercase">
                    Expertise locale
                  </p>
                  <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-extrabold text-blue-950">
                    Spécificités de l&rsquo;humidité dans le{" "}
                    {intervention.departmentCode} ({intervention.name})
                  </h2>
                </div>

                <div className="space-y-4 text-slate-700 text-base sm:text-[17px] leading-relaxed">
                  {intervention.content.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* Cities covered */}
                <div className="mt-8 rounded-2xl bg-slate-50 p-6 sm:p-8 border border-slate-200/80">
                  <div className="flex items-center gap-2 text-blue-950 font-bold mb-4">
                    <MapPin className="size-5 text-blue-700" />
                    <span>Communes desservies sous 24h à 48h :</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {intervention.cities.map((city) => (
                      <span
                        key={city}
                        className="rounded-full bg-white px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-slate-700 shadow-sm border border-slate-200"
                      >
                        {city}
                      </span>
                    ))}
                    <span className="rounded-full bg-blue-100/60 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-blue-800">
                      + Toutes les autres communes du {intervention.departmentCode}
                    </span>
                  </div>
                </div>
              </div>

              {/* Sidebar: 4-Step Process Card */}
              <div className="lg:col-span-5 rounded-3xl bg-blue-950 p-8 text-white shadow-xl">
                <h3 className="font-heading text-xl font-bold text-white mb-6">
                  Notre protocole d&rsquo;intervention dans le{" "}
                  {intervention.departmentCode}
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="size-8 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-sm shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">
                        Diagnostic complet sur place
                      </h4>
                      <p className="mt-1 text-xs text-blue-100/75 leading-relaxed">
                        Relevés hygrométriques à cœur, recherche des causes structurelles (remontées, infiltrations, condensation).
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="size-8 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-sm shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">
                        Rapport technique et devis sous 48h
                      </h4>
                      <p className="mt-1 text-xs text-blue-100/75 leading-relaxed">
                        Chiffrage transparent, sans engagement, adapté aux normes DTU applicables à votre bâtiment.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="size-8 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-sm shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">
                        Traitement certifié et propre
                      </h4>
                      <p className="mt-1 text-xs text-blue-100/75 leading-relaxed">
                        Injection sous pression, cuvelage hydrofuge ou ventilation positive réalisés par nos techniciens qualifiés.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="size-8 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-sm shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">
                        Garantie décennale 10 ans
                      </h4>
                      <p className="mt-1 text-xs text-blue-100/75 leading-relaxed">
                        Attestation d&rsquo;assurance décennale remise avec procès-verbal de réception de chantier.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <Link
                    href="/#contact"
                    className="block text-center rounded-xl bg-white py-3 text-sm font-bold text-blue-950 hover:bg-blue-50 transition-colors"
                  >
                    Demander mon diagnostic gratuit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <Reviews />

        {/* FAQ Section */}
        <Faq />

        {/* Contact Form */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}
