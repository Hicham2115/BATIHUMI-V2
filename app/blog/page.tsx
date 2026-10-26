import type { Metadata } from "next";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BlogHero } from "@/components/blog/blog-hero";
import { BlogClient } from "@/components/blog/blog-client";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.batihumi.com";
const pageUrl = `${siteUrl}/blog`;

export const metadata: Metadata = {
  title: "Blog & Guides Experts Humidité, Moisissures & Salpêtre en Île-de-France",
  description:
    "Découvrez tous nos guides techniques et conseils d'experts pour identifier et traiter l'humidité, les remontées capillaires, le salpêtre et la condensation en Île-de-France. Diagnostic gratuit 48h.",
  keywords: [
    "blog humidité",
    "guides humidité maison",
    "conseils humidité appartement",
    "remontées capillaires traitement",
    "salpêtre mur pierre",
    "condensation ventilation VMI",
    "cuvelage cave DTU 14.1",
    "injection résine hydrofuge prix",
    "diagnostic humidité achat immobilier",
    "Île-de-France",
    "BATIHUMI",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Blog & Guides Experts Humidité | BATIHUMI",
    description:
      "Conseils et guides pratiques pour assainir et protéger durablement votre logement contre l'humidité en Île-de-France.",
    url: pageUrl,
    siteName: "BATIHUMI",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/logo.png`,
        width: 800,
        height: 800,
        alt: "BATIHUMI Blog & Guides Experts Humidité",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Guides Experts Humidité | BATIHUMI",
    description:
      "Conseils pratiques et solutions certifiées contre l'humidité en Île-de-France.",
    images: [`${siteUrl}/images/logo.png`],
  },
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blog & Guides BATIHUMI",
  description:
    "Guides et conseils d'experts pour lutter contre l'humidité, les moisissures et le salpêtre en Île-de-France.",
  url: pageUrl,
  publisher: {
    "@type": "Organization",
    name: "BATIHUMI",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/images/logo.png`,
    },
  },
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <Header />
      <main className="min-h-screen">
        <BlogHero />
        <BlogClient />
      </main>
      <Footer />
    </>
  );
}
