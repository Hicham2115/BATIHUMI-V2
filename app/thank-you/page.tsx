"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    fbq?: (...args: [string, ...unknown[]]) => void;
  }
}

export default function ThankYouPage() {
  useEffect(() => {
    window.fbq?.("track", "Lead");
  }, []);

  return (
    <main className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-slate-50 px-4 pb-20 pt-32 sm:pb-24 sm:pt-36">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-100/70 via-slate-50 to-slate-50"
        aria-hidden="true"
      />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <div className="text-center lg:text-left">
          <span className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-950/15 lg:mx-0">
            <CheckCircle2 className="size-8" />
          </span>
          <p className="mt-8 text-sm font-bold tracking-[0.16em] text-blue-700 uppercase">
            Demande bien envoyée
          </p>
          <h1 className="mt-4 font-heading text-4xl leading-tight font-extrabold tracking-tight text-blue-950 sm:text-5xl">
            Merci pour votre confiance.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 lg:mx-0 sm:text-lg">
            Votre message a bien été transmis à notre équipe. Nous allons
            étudier votre demande et vous recontacter rapidement.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Button
              render={<Link href="/" />}
              className="h-12 gap-2 rounded-full bg-blue-950 px-6 text-white hover:bg-blue-900"
            >
              Retour à l’accueil
              <ArrowRight className="size-4" />
            </Button>
            <Button
              render={<a href="tel:+33768841324" />}
              variant="outline"
              className="h-12 rounded-full border-slate-300 bg-white px-6 text-blue-950 hover:bg-blue-50"
            >
              07 68 84 13 24
            </Button>
          </div>
        </div>

        <aside className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-blue-950/5 sm:p-9">
          <p className="text-sm font-bold tracking-wide text-blue-700 uppercase">
            La suite
          </p>
          <h2 className="mt-2 font-heading text-2xl font-bold text-blue-950">
            Nous prenons le relais.
          </h2>
          <div className="mt-7 space-y-6">
            <div className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <Clock3 className="size-5" />
              </span>
              <div>
                <h3 className="font-semibold text-blue-950">Réponse rapide</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  Notre équipe vous recontacte sous 2h, du lundi au vendredi.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <ShieldCheck className="size-5" />
              </span>
              <div>
                <h3 className="font-semibold text-blue-950">
                  Diagnostic gratuit
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  Nous étudions votre situation sans frais et sans engagement.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-100 pt-6 text-sm text-slate-600">
            Besoin d’une réponse immédiate?{" "}
            <a
              href="tel:+33768841324"
              className="font-semibold text-blue-700 underline decoration-blue-200 underline-offset-4 hover:text-blue-900"
            >
              Appelez-nous
            </a>
            .
          </div>
        </aside>
      </div>
    </main>
  );
}
