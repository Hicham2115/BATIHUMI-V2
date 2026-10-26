import type { Metadata } from "next";
import { Archivo, Fraunces, Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Toaster } from "sonner";
import "./globals.css";

import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { Providers } from "@/components/providers";

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.batihumi.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "BATIHUMI - Expert en Traitement de l'Humidité, Moisissures & Salpêtre en Île-de-France",
    template: "%s | BATIHUMI",
  },
  description:
    "Expert en traitement de l'humidité en Île-de-France (Paris, 92, 93, 94, 91, 95, 77, 78). Diagnostic gratuit sous 48h, injection de résine, assèchement de murs, cuvelage & ventilation VMI. Garantie décennale 10 ans.",
  keywords: [
    "traitement humidité",
    "traitement humidité paris",
    "traitement humidité val de marne",
    "traitement humidité hauts-de-seine",
    "remontées capillaires",
    "injection résine hydrofuge",
    "assèchement de murs",
    "traitement salpêtre",
    "cuvelage cave",
    "ventilation VMI",
    "VMC hygroréglable",
    "diagnostic humidité gratuit",
    "expert humidité Paris 75",
    "entreprise assèchement 94",
    "mur humide paris",
    "infiltration toiture",
    "infiltration eau façade",
    "garantie décennale 10 ans",
    "BATIHUMI",
  ],
  authors: [{ name: "BATIHUMI", url: siteUrl }],
  category: "Home Improvement",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title:
      "BATIHUMI - Expert en Traitement de l'Humidité & Moisissures en Île-de-France",
    description:
      "Solutions durables et définitives contre l'humidité, les moisissures, le salpêtre et les remontées capillaires. Diagnostic gratuit sous 48h en Île-de-France. Garantie décennale 10 ans.",
    url: siteUrl,
    siteName: "BATIHUMI",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/logo.png`,
        width: 800,
        height: 800,
        alt: "BATIHUMI Logo - Expert Traitement Humidité Île-de-France",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BATIHUMI - Expert Traitement Humidité Île-de-France",
    description:
      "Diagnostic gratuit sous 48h. Traitement définitif de l'humidité et remontées capillaires avec Garantie Décennale 10 ans.",
    images: [`${siteUrl}/images/logo.png`],
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
  name: "BATIHUMI",
  image: `${siteUrl}/images/logo.png`,
  "@id": `${siteUrl}/#organization`,
  url: siteUrl,
  telephone: "+33768841324",
  email: "contact@batihumi.com",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6 Rue de Belfort",
    postalCode: "92600",
    addressLocality: "Asnières-sur-Seine",
    addressRegion: "Île-de-France",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.9114,
    longitude: 2.2858,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Paris (75)" },
    { "@type": "AdministrativeArea", name: "Hauts-de-Seine (92)" },
    { "@type": "AdministrativeArea", name: "Seine-Saint-Denis (93)" },
    { "@type": "AdministrativeArea", name: "Val-de-Marne (94)" },
    { "@type": "AdministrativeArea", name: "Essonne (91)" },
    { "@type": "AdministrativeArea", name: "Val-d'Oise (95)" },
    { "@type": "AdministrativeArea", name: "Seine-et-Marne (77)" },
    { "@type": "AdministrativeArea", name: "Yvelines (78)" },
    { "@type": "AdministrativeArea", name: "Île-de-France" },
  ],
  knowsAbout: [
    "Traitement humidité ascensionnelle",
    "Injection résine hydrofuge",
    "Assèchement des murs",
    "Traitement salpêtre",
    "Traitement moisissures",
    "Ventilation VMI et VMC",
    "Cuvelage cave et sous-sol",
    "Étanchéité toiture et façade",
    "Diagnostic humidité avant achat immobilier",
    "Garantie décennale 10 ans",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1439009578054298');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            alt=""
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1439009578054298&ev=PageView&noscript=1"
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <Providers>
          <SmoothScroll>{children}</SmoothScroll>
          <Toaster richColors position="top-center" />
        </Providers>
      </body>
    </html>
  );
}
