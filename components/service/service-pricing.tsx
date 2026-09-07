import { ClipboardCheck, FileText, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: ClipboardCheck,
    label: "Diagnostic",
    value: "Gratuit",
  },
  {
    icon: FileText,
    label: "Devis",
    value: "Sans engagement",
  },
  {
    icon: ShieldCheck,
    label: "Garantie",
    value: "Décennale — 10 ans",
  },
];

export function ServicePricing() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 text-center md:px-8">
        <h2 className="font-heading text-3xl leading-tight font-extrabold tracking-tight text-blue-950 sm:text-4xl">
          Des conditions transparentes
        </h2>
        <p className="mt-4 text-slate-600">
          Pas de frais cachés. Diagnostic et devis gratuits, sans obligation
          d&rsquo;achat.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <span className="mx-auto flex size-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <item.icon className="size-6" />
              </span>
              <p className="mt-5 text-sm font-semibold text-slate-500">
                {item.label}
              </p>
              <p className="mt-1 font-heading text-2xl font-extrabold text-blue-700">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
