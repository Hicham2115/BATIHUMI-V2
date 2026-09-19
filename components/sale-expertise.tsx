const steps = [
  {
    number: "01",
    title: "Contactez-nous",
    description: "Appelez ou remplissez le formulaire. Réponse garantie sous 2h.",
  },
  {
    number: "02",
    title: "Diagnostic gratuit",
    description: "Expertise à domicile sous 24 à 48h en Île-de-France.",
  },
  {
    number: "03",
    title: "Traitement expert",
    description: "Solution durable avec garantie décennale incluse.",
  },
];

export function SaleExpertise() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-14">
          <p className="font-serif text-sm text-slate-500 italic">
            Comment ça marche ?
          </p>
          <h3 className="mt-2 font-heading text-2xl font-extrabold tracking-tight text-blue-950 sm:text-3xl">
            De votre appel à la solution en{" "}
            <span className="text-blue-700">3 étapes</span>
          </h3>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="border-slate-200 px-0 py-8 first:pt-0 sm:border-l sm:px-10 sm:py-0 sm:first:border-l-0 sm:first:pl-0"
              >
                <span className="font-serif text-5xl font-light text-blue-700">
                  {step.number}
                </span>
                <h4 className="mt-5 font-heading text-base font-bold text-blue-950">
                  {step.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="mt-6 h-px w-10 bg-slate-300 sm:hidden" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
