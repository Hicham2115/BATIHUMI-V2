import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { services, type Service } from "@/lib/services-data";

export function RelatedServices({ current }: { current: Service }) {
  const others = services.filter((service) => service.slug !== current.slug).slice(0, 4);

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="font-heading text-2xl font-extrabold text-blue-950">
          Nos autres services
        </h2>
        <div className="mt-5 border-t border-slate-200" />

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-100 hover:shadow-md"
            >
              <span className="text-sm font-semibold text-blue-950">
                {service.title}
              </span>
              <ArrowRight className="size-4 shrink-0 text-blue-700 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
