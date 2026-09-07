import type { Service } from "@/lib/services-data";

export function ServiceIncludes({ service }: { service: Service }) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold tracking-[0.14em] text-blue-700 uppercase">
            Notre intervention
          </p>
          <h2 className="mt-3 font-heading text-3xl leading-tight font-extrabold tracking-tight text-blue-950 sm:text-4xl">
            Ce que comprend
            <br />
            <span className="text-blue-700">{service.title.toLowerCase()}</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.includes.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:bg-white hover:shadow-xl"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white">
                <item.icon className="size-5" />
              </span>
              <h3 className="mt-5 font-heading text-base font-bold text-blue-950">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
