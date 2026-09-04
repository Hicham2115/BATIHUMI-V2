import Link from "next/link";
import { ArrowRight, Lock, MapPin, Phone, Play, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const stats = [
  { value: "10 ans", label: "Garantie décennale" },
  { value: "48h", label: "Intervention rapide" },
  { value: "500+", label: "Projets réalisés" },
];

const formFields = [
  {
    name: "name",
    type: "text",
    placeholder: "Nom complet",
    autoComplete: "name",
    icon: User,
  },
  {
    name: "phone",
    type: "tel",
    placeholder: "Téléphone",
    autoComplete: "tel",
    icon: Phone,
  },
  {
    name: "postalCode",
    type: "text",
    placeholder: "Code postal",
    autoComplete: "postal-code",
    icon: MapPin,
  },
];

function HeroCtas({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row sm:gap-4", className)}>
      <Button
        size="lg"
        className="h-12 w-full bg-blue-700 px-6 text-base font-semibold text-white transition-transform duration-300 hover:bg-blue-600 sm:w-auto"
        render={<Link href="/diagnostic" />}
        nativeButton={false}
      >
        Demander un diagnostic gratuit
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="h-12 w-full border-white/30 bg-white/5 px-6 text-base font-semibold text-white backdrop-blur-sm duration-300 sm:w-auto"
        render={<Link href="/realisations" />}
        nativeButton={false}
      >
        <Play className="size-4" />
        Voir une réalisation
      </Button>
    </div>
  );
}

function LeadForm({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-full rounded-2xl border-t-2 border-t-blue-500 bg-slate-950/95 p-5 shadow-2xl shadow-black/40 backdrop-blur sm:p-6 md:p-7",
        className,
      )}
    >
      <h2 className="font-heading text-xl font-bold tracking-tight text-white">
        Diagnostic gratuit sous 48h
      </h2>
      <p className="mt-1 text-sm text-slate-400">
        Sans engagement · Réponse sous 2h
      </p>

      <form className="mt-6 space-y-3">
        {formFields.map((field) => (
          <div key={field.name} className="relative">
            <field.icon
              className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-slate-500"
              aria-hidden="true"
            />
            <Input
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              autoComplete={field.autoComplete}
              required
              className="h-12 rounded-xl border-white/10 bg-white/5 pl-10 text-white placeholder:text-slate-500 focus-visible:border-blue-400 focus-visible:bg-white/[0.07] focus-visible:ring-blue-400/30"
            />
          </div>
        ))}
        <Button
          type="submit"
          size="lg"
          className="group h-12 w-full gap-2 bg-blue-700 text-sm font-bold tracking-wide text-white uppercase shadow-lg shadow-blue-950/40 transition-transform hover:-translate-y-0.5 hover:bg-blue-600"
        >
          Être rappelé
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </form>

      <p className="mt-4 flex items-center gap-1.5 text-xs text-slate-400">
        <Lock className="size-3" />
        Vos données sont 100% confidentielles
      </p>
    </div>
  );
}

function HeroVideo({ className }: { className?: string }) {
  return (
    <video
      src="/videos/hero.mp4"
      autoPlay
      loop
      muted
      playsInline
      aria-hidden="true"
      className={cn(
        "absolute inset-0 size-full object-cover object-center",
        className,
      )}
    />
  );
}

export function Hero() {
  return (
    <section>
      {/* Mobile / tablet: video banner with content that flows naturally below. */}
      <div className="bg-slate-950 lg:hidden">
        <div className="relative h-[min(108vw,30rem)] min-h-90 w-full overflow-hidden bg-slate-950 sm:aspect-video sm:h-auto sm:min-h-0">
          <HeroVideo className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/10" />
          <div className="absolute inset-x-0 bottom-0 px-5 pt-10 pb-6 sm:px-8 sm:pb-8">
            <p className="flex items-center gap-2 text-xs font-bold tracking-[0.14em] text-white uppercase">
              <span
                className="h-1.5 w-1.5 rounded-full bg-white"
                aria-hidden="true"
              />
              Expert anti-humidité en Île-de-France
            </p>
            <h1 className="mt-3 font-heading text-3xl leading-[1.05] font-black tracking-[-0.03em] text-white sm:text-4xl">
              L&rsquo;humidité n&rsquo;attend pas.
              <br />
              Nous non plus.
            </h1>
          </div>
        </div>

        <div className="mx-auto max-w-xl px-5 py-8 pb-[max(2rem,env(safe-area-inset-bottom))] sm:px-8">
          <p className="text-base leading-7 text-slate-300">
            Diagnostic gratuit sous 48h, traitement définitif et garantie
            décennale.
          </p>
          <HeroCtas className="mt-6" />
          {/* <LeadForm className="mt-8" /> */}
        </div>
      </div>

      {/* Desktop: full-bleed video with a two-column layout */}
      <div className="relative hidden overflow-hidden bg-slate-950 lg:block">
        <HeroVideo />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/35 via-slate-950/35 to-blue-950/10" />

        <div className="relative mx-auto grid min-h-[720px] max-w-[1470px] grid-cols-[1fr_380px] items-center gap-12 px-8 py-28">
          <div>
            <p className="flex items-center gap-2 text-sm font-bold tracking-[0.14em] text-white uppercase">
              <span
                className="h-1.5 w-1.5 rounded-full bg-white"
                aria-hidden="true"
              />
              Expert anti-humidité en Île-de-France
            </p>
            <h1 className="mt-5 max-w-4xl font-heading text-[4.5rem] leading-[0.98] font-black tracking-[-0.03em] text-white">
              L&rsquo;humidité n&rsquo;attend pas.
              <br />
              <span className="mt-2 inline-block rounded-xl border border-white/25 bg-white/10 px-4 py-2 text-white shadow-lg shadow-black/20 backdrop-blur-md">
                Nous non plus.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-[17px] leading-7 text-white">
              Diagnostic gratuit sous 48h, traitement définitif et garantie
              décennale.
            </p>
            <HeroCtas className="mt-9" />
          </div>

          <LeadForm className="justify-self-end" />
        </div>
      </div>

      <div className="border-b border-border bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-8 md:py-16">
          <div className="flex flex-col divide-y divide-slate-300 sm:flex-row sm:divide-x sm:divide-y-0">
            {stats.map((stat) => (
              <div key={stat.label} className="py-6 first:pt-0 sm:flex-1 sm:px-8 sm:py-0 sm:first:pl-0">
                <div className="h-0.5 w-8 bg-blue-700" aria-hidden="true" />
                <p className="mt-4 font-heading text-4xl leading-none font-black tracking-tight text-blue-950 tabular-nums sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
            <div className="py-6 sm:flex-[1.6] sm:px-8 sm:py-0">
              <div className="h-0.5 w-8 bg-blue-700" aria-hidden="true" />
              <h3 className="mt-4 font-heading text-xl leading-snug font-bold text-slate-900 md:text-2xl">
                Des solutions efficaces contre l&rsquo;humidité, pour des
                résultats durables.
              </h3>
              <p className="mt-2 text-sm text-slate-600 md:text-base">
                Remontées capillaires, moisissures, salpêtre ou infiltration :
                nous traitons la cause, pas seulement les symptômes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
