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
