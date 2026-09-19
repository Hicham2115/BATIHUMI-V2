import Image from "next/image";
import Link from "next/link";

import { CtaBanner } from "@/components/cta-banner";

const linkColumns = [
  {
    title: "Nos services",
    links: [
      { label: "Remontées capillaires", href: "#services" },
      { label: "Moisissures", href: "#services" },
      { label: "Salpêtre", href: "#services" },
      { label: "Infiltrations", href: "#services" },
      { label: "Ventilation & VMC", href: "#services" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Réalisations", href: "#realisations" },
      { label: "Avis clients", href: "#avis-clients" },
      { label: "Zone d'intervention", href: "#zone-intervention" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Informations légales",
    links: [
      { label: "Mentions légales", href: "/mentions-legales" },
      {
        label: "Politique de confidentialité",
        href: "/politique-de-confidentialite",
      },
      { label: "CGV", href: "/cgv" },
    ],
  },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com", icon: FacebookIcon },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: InstagramIcon,
  },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: LinkedinIcon },
];

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.9.25-1.5 1.55-1.5H16.5V4.35C16.2 4.3 15.2 4.2 14.05 4.2c-2.4 0-4.05 1.47-4.05 4.17V10.5H7.5v3H10V21h3.5Z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      {...props}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H4.06V20h2.88V8.5ZM5.5 4a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM20 20v-6.3c0-3.37-1.8-4.94-4.2-4.94-1.94 0-2.8 1.07-3.28 1.82V8.5H9.63C9.67 9.32 9.63 20 9.63 20h2.88v-6.16c0-.33.02-.66.12-.9.27-.66.87-1.35 1.9-1.35 1.34 0 1.87 1.02 1.87 2.52V20H20Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 md:p-8">
          <CtaBanner />

          <div className="grid grid-cols-1 gap-10 px-4 pt-12 pb-6 sm:grid-cols-2 sm:px-6 md:px-8 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
            <div className="sm:col-span-2 lg:col-span-1">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="Batihumi"
                  width={64}
                  height={64}
                  className="size-11 shrink-0 rounded-lg"
                />
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
                Expert en diagnostic et traitement durable de l&rsquo;humidité —
                remontées capillaires, moisissures, salpêtre et infiltrations —
                pour les particuliers, agences et notaires
                d&rsquo;Île-de-France.
              </p>
              <div className="mt-5 flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex size-9 items-center justify-center rounded-full bg-blue-950 text-white transition-colors hover:bg-blue-800"
                  >
                    <social.icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>

            {linkColumns.map((column) => (
              <div key={column.title}>
                <p className="font-heading text-sm font-bold text-blue-950">
                  {column.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group/link inline-flex items-center text-sm text-slate-600 transition-colors duration-300 hover:text-blue-700"
                      >
                        <span
                          className="mr-0 size-0 scale-0 rounded-full bg-blue-500 opacity-0 transition-all duration-300 ease-out group-hover/link:mr-2 group-hover/link:size-1.5 group-hover/link:scale-100 group-hover/link:opacity-100"
                          aria-hidden="true"
                        />
                        <span className="transition-transform duration-300 ease-out group-hover/link:translate-x-0.5">
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-2 border-t border-slate-200 px-4 pt-6 text-center text-xs text-slate-500 sm:flex-row sm:justify-between sm:px-8 sm:text-left">
            <p>
              &copy; {new Date().getFullYear()} Batihumi. Tous droits réservés.
            </p>
            <p>
              6 Rue de Belfort, 92600 Asnières-sur-Seine &middot; 07 68 84 13 24
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
