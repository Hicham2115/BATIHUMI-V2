import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { services } from "@/lib/services-data";

const badges: Record<string, string> = {
  "diagnostic-offert": "Gratuit",
};

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold tracking-[0.14em] text-blue-700 uppercase">
            Nos services
          </p>
          <h2 className="mt-3 font-heading text-3xl leading-tight font-extrabold tracking-tight text-blue-950 sm:text-4xl">
            Solutions complètes contre{" "}
            <span className="text-blue-700">l&rsquo;humidité</span>
          </h2>
          <p className="mt-4 text-slate-600">
            Nous offrons une gamme complète de traitements pour protéger votre
            habitation durablement contre tous les problèmes d&rsquo;humidité.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 25vw, 100vw"
                />
                {badges[service.slug] && (
                  <span className="absolute top-3 right-3 rounded-full bg-blue-950 px-3 py-1 text-xs font-semibold text-white">
                    {badges[service.slug]}
                  </span>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2.5">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white">
                    {service.number}
                  </span>
                  <h3 className="font-heading text-base font-bold text-blue-950 transition-colors group-hover:text-blue-700">
                    {service.title}
                  </h3>
                </div>
                <div className="mt-3 flex items-start justify-between gap-3">
                  <p className="text-sm text-slate-600">
                    {service.shortDescription}
                  </p>
                  <ArrowRight className="mt-0.5 size-4 shrink-0 text-blue-700 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
