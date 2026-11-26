import { BookOpen, ShieldCheck, Droplets, Clock } from "lucide-react";

export function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-blue-950 pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Background patterns */}
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
      <div className="pointer-events-none absolute bottom-0 -left-20 size-80 rounded-full bg-sky-500/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm">
          <Droplets className="size-3.5 text-sky-400" />
          Centre d&rsquo;Expertise & Guides Pratiques
        </span>

        <h1 className="mt-5 font-heading text-4xl leading-[1.1] font-black tracking-tight text-white sm:text-5xl md:text-6xl max-w-4xl mx-auto">
          Guides Experts Humidité, Moisissures &amp;{" "}
          <span className="text-sky-400">Salpêtre</span>
        </h1>

        <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-blue-100/85">
          Comprenez les causes réelles de l&rsquo;humidité dans votre logement et découvrez les solutions techniques certifiées (injections, cuvelage, VMI) pour assainir durablement votre habitat en Île-de-France.
        </p>

        {/* Badges row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs sm:text-sm font-medium text-white backdrop-blur-sm">
            <BookOpen className="size-4 text-sky-400" />
            12 guides techniques complets
          </span>
          <span className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs sm:text-sm font-medium text-white backdrop-blur-sm">
            <ShieldCheck className="size-4 text-sky-400" />
            Validé par nos experts certifiés
          </span>
          <span className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs sm:text-sm font-medium text-white backdrop-blur-sm">
            <Clock className="size-4 text-sky-400" />
            Mis à jour 2026
          </span>
        </div>
      </div>
    </section>
  );
}
