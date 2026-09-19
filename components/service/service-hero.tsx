import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, Phone, ShieldCheck, Sparkles, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Service } from "@/lib/services-data";

const featurePills = [
  { icon: Sparkles, label: "Diagnostic gratuit" },
  { icon: Zap, label: "Intervention sous 48h" },
  { icon: ShieldCheck, label: "Garantie décennale" },
];

export function ServiceHero({ service }: { service: Service }) {
  return (
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

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-sky-400" aria-hidden="true" />
            Disponible maintenant. Nous venons chez vous.
          </span>

          <h1 className="mt-5 font-heading text-4xl leading-[1.05] font-black tracking-tight text-white sm:text-5xl">
            {service.title}
          </h1>

          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-blue-100/85">
            {service.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {featurePills.map((pill) => (
              <span
                key={pill.label}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
              >
                <pill.icon className="size-4 text-sky-400" />
                {pill.label}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 gap-2 bg-white px-6 text-base font-bold text-blue-950 hover:bg-blue-50"
              render={<a href="tel:+33768841324" />}
              nativeButton={false}
            >
              <Phone className="size-4" />
              Appelez maintenant
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 gap-2 border-white/25 bg-white/5 px-6 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/10"
              render={<Link href="/#contact" />}
              nativeButton={false}
            >
              <CalendarCheck className="size-4" />
              Devis gratuit
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-2xl shadow-black/30">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-transparent" />
          </div>

          <div className="relative mx-4 -mt-10 flex items-center gap-4 rounded-2xl bg-white p-4 shadow-xl shadow-black/20 sm:absolute sm:right-0 sm:bottom-6 sm:left-0 sm:mx-6 sm:mt-0 md:left-auto md:w-80">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
              <Phone className="size-5" />
            </span>
            <div>
              <p className="text-xs font-bold tracking-wide text-slate-500 uppercase">
                Besoin d&rsquo;aide maintenant ?
              </p>
              <a
                href="tel:+33768841324"
                className="font-heading text-lg font-extrabold text-blue-950 hover:text-blue-700"
              >
                07 68 84 13 24
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
