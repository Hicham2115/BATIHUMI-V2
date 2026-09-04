import type { Metadata } from "next";
import { Archivo, Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SmoothScroll } from "@/components/layout/smooth-scroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const siteUrl = "https://www.batihumi.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Batihumi | Expert anti-humidité en Île-de-France",
    template: "%s | Batihumi",
  },
  description:
    "Remontées capillaires, moisissures, salpêtre, infiltrations : Batihumi diagnostique et traite durablement l'humidité de votre logement en Île-de-France. Diagnostic gratuit sous 48h, garantie décennale.",
  keywords: [
    "traitement humidité",
    "remontées capillaires",
    "traitement moisissures",
    "traitement salpêtre",
    "injection résine",
    "assèchement mur",
    "expert humidité Île-de-France",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Batihumi | Expert anti-humidité en Île-de-France",
    description:
      "Diagnostic gratuit sous 48h et traitement durable de l'humidité : remontées capillaires, moisissures, salpêtre, infiltrations. Garantie décennale.",
    url: siteUrl,
    siteName: "Batihumi",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Batihumi | Expert anti-humidité en Île-de-France",
    description:
      "Diagnostic gratuit sous 48h et traitement durable de l'humidité en Île-de-France.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Batihumi",
  description:
    "Expert en traitement de l'humidité, moisissures, salpêtre et remontées capillaires en Île-de-France.",
  url: siteUrl,
  telephone: "+33768841324",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6 Rue de Belfort",
    postalCode: "92600",
    addressLocality: "Asnières-sur-Seine",
    addressCountry: "FR",
  },
  areaServed: [
    "Paris",
    "Hauts-de-Seine",
    "Seine-Saint-Denis",
    "Val-de-Marne",
    "Essonne",
    "Val-d'Oise",
    "Seine-et-Marne",
    "Yvelines",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
