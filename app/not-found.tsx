import Link from "next/link";
import type { Metadata } from "next";
import { Droplets, House, MessageCircle } from "lucide-react";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page introuvable",
  description: "La page que vous recherchez n'existe pas ou a été déplacée.",
  robots: { index: false, follow: true },
};

const quickLinks = [
  { label: "Nos services", href: "/#services" },
  { label: "Réalisations", href: "/#realisations" },
  { label: "Zone d'intervention", href: "/#zone-intervention" },
  { label: "Contact", href: "/#contact" },
];

export default function NotFound() {
  return (
    <>
      <Header />

      <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950">
        <div
          className="absolute -top-40 -right-40 size-[32rem] rounded-full bg-blue-600/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-48 -left-32 size-[28rem] rounded-full bg-sky-500/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-black/55 to-transparent" />

        <div className="relative mx-auto w-full max-w-3xl px-6 pt-32 pb-20 text-center sm:px-8">
          <p className="flex items-center justify-center gap-2 text-xs font-bold tracking-[0.14em] text-white uppercase sm:text-sm">
            <Droplets className="size-4 text-sky-400" aria-hidden="true" />
            Erreur 404
          </p>

          <h1 className="mt-5 font-heading text-[6rem] leading-none font-black tracking-[-0.03em] text-white sm:text-[8rem]">
            4<span className="text-blue-400">0</span>4
          </h1>

          <h2 className="mt-4 font-heading text-2xl leading-tight font-black tracking-[-0.02em] text-white sm:text-3xl">
            Cette page a pris l&rsquo;eau.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-slate-300">
            La page que vous cherchez n&rsquo;existe pas ou a été déplacée.
            Comme une infiltration, mieux vaut s&rsquo;attaquer à la cause :
            revenez à l&rsquo;accueil.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              size="lg"
              className="h-12 w-full gap-2 bg-blue-600 px-6 text-base font-semibold text-white transition-transform duration-300 hover:bg-blue-500 sm:w-auto"
              render={<Link href="/" />}
              nativeButton={false}
            >
              <House className="size-4" />
              Retour à l&rsquo;accueil
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 w-full border-white/30 bg-white/5 px-6 text-base font-semibold text-white backdrop-blur-sm duration-300 sm:w-auto"
              render={<Link href="/#contact" />}
              nativeButton={false}
            >
              <MessageCircle className="size-4" />
              Contacter Batihumi
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-white/10 pt-8">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-300 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
