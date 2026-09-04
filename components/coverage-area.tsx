import { MapPin, Phone } from "lucide-react";

const departments = [
  { code: "75", name: "Paris" },
  { code: "92", name: "Hauts-de-Seine" },
  { code: "93", name: "Seine-Saint-Denis" },
  { code: "94", name: "Val-de-Marne" },
  { code: "91", name: "Essonne" },
  { code: "95", name: "Val-d'Oise" },
  { code: "77", name: "Seine-et-Marne" },
  { code: "78", name: "Yvelines" },
];

const cityColumns = [
  ["Paris", "Boulogne-Billancourt", "Nanterre", "Saint-Denis", "Vincennes"],
  ["Versailles", "Créteil", "Évry", "Argenteuil", "Montreuil"],
  [
    "Colombes",
    "Cergy",
    "Vitry-sur-Seine",
    "Rueil-Malmaison",
    "Issy-les-Moulineaux",
  ],
];

const mapBadges = [
  { code: "95", name: "Val-d'Oise", top: "12%", left: "42%" },
  { code: "93", name: "Seine-Saint-Denis", top: "30%", left: "72%" },
  { code: "78", name: "Yvelines", top: "34%", left: "9%" },
  { code: "92", name: "Hauts-de-Seine", top: "51%", left: "27%" },
  { code: "94", name: "Val-de-Marne", top: "48%", left: "75%" },
  { code: "91", name: "Essonne", top: "80%", left: "29%" },
  { code: "77", name: "Seine-et-Marne", top: "84%", left: "70%" },
];

export function CoverageArea() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold tracking-[0.14em] text-blue-700 uppercase">
            Proche de vous
          </p>
          <h2 className="mt-3 font-heading text-3xl leading-tight font-extrabold tracking-tight text-blue-950 sm:text-4xl">
            BatiHumi intervient
            <br />
            <span className="text-blue-700">
              dans toute l&rsquo;Île-de-France
            </span>
          </h2>
          <p className="mt-4 text-slate-600">
            Basés à Asnières-sur-Seine, nous intervenons rapidement chez vous.
            <br />
            Délais d&rsquo;intervention : 24 à 48h maximum.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          <div className="grid overflow-hidden rounded-2xl shadow-sm sm:grid-cols-[220px_1fr]">
            <div className="flex flex-col justify-center gap-4 bg-blue-950 px-8 py-10 text-white">
              <div className="flex items-center gap-2 text-sm font-semibold text-blue-300">
                <MapPin className="size-4" />
                Notre zone
              </div>
              <h3 className="font-heading text-2xl font-bold">Île-de-France</h3>
              <div className="h-px w-8 bg-blue-400/40" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-blue-200">
                Une équipe locale, réactive et disponible pour intervenir
                rapidement à proximité de chez vous.
              </p>
            </div>

            <div className="relative min-h-[420px] overflow-hidden bg-slate-50">
              <svg
                className="absolute inset-0 size-full opacity-80"
                viewBox="0 0 400 400"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <ellipse
                  cx="335"
                  cy="55"
                  rx="38"
                  ry="24"
                  fill="#bbf7d0"
                  opacity="0.5"
                  transform="rotate(-15 335 55)"
                />
                <ellipse
                  cx="55"
                  cy="335"
                  rx="26"
                  ry="17"
                  fill="#bbf7d0"
                  opacity="0.45"
                />
                <path
                  d="M-10,35 C60,65 45,125 115,145 C185,165 165,225 235,245 C280,258 300,300 340,320"
                  stroke="#93c5fd"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.5"
                />
                <g stroke="#cbd5e1" strokeWidth="1" fill="none" opacity="0.6">
                  <path d="M0,120 C110,140 190,90 400,112" />
                  <path d="M0,300 C120,278 220,340 400,304" />
                  <path d="M42,0 C64,150 20,255 66,400" />
                  <path d="M182,0 C202,120 158,262 200,400" />
                  <path d="M400,58 C300,80 250,205 322,400" />
                  <path d="M0,210 C90,205 130,215 220,208 C300,203 340,215 400,210" />
                  <path d="M270,0 C255,90 285,150 260,220" />
                </g>
              </svg>

              {[
                {
                  size: "94%",
                  fill: "bg-blue-500/5",
                  border: "border-blue-400/20",
                },
                {
                  size: "66%",
                  fill: "bg-blue-500/10",
                  border: "border-blue-400/25",
                },
                {
                  size: "38%",
                  fill: "bg-blue-500/20",
                  border: "border-blue-400/35",
                },
              ].map((ring) => (
                <div
                  key={ring.size}
                  className={`absolute rounded-full border ${ring.border} ${ring.fill}`}
                  style={{
                    width: ring.size,
                    aspectRatio: "1 / 1",
                    top: "29%",
                    left: "44%",
                    transform: "translate(-50%, -50%)",
                  }}
                  aria-hidden="true"
                />
              ))}

              {mapBadges.map((badge) => (
                <div
                  key={badge.code}
                  className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
                  style={{ top: badge.top, left: badge.left }}
                >
                  <span className="rounded-md bg-blue-700 px-2 py-0.5 text-xs font-bold text-white shadow-sm">
                    {badge.code}
                  </span>
                  <span className="text-[11px] font-medium text-slate-600">
                    {badge.name}
                  </span>
                </div>
              ))}

              <div
                className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                style={{ top: "18%", left: "44%" }}
              >
                <span className="whitespace-nowrap rounded-lg bg-blue-800 px-3 py-1.5 text-xs font-bold text-white shadow-md">
                  Asnières-sur-Seine
                </span>
                <span
                  className="-mt-px size-0 border-x-4 border-t-6 border-x-transparent border-t-blue-800"
                  aria-hidden="true"
                />
                <span
                  className="mt-1 size-1.5 rounded-full bg-blue-950"
                  aria-hidden="true"
                />
              </div>

              <div
                className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
                style={{ top: "42%", left: "48%" }}
              >
                <span className="rounded-md bg-blue-700 px-2 py-0.5 text-xs font-bold text-white shadow-sm">
                  75
                </span>
                <span className="text-[11px] font-medium text-slate-600">
                  Paris
                </span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold tracking-[0.1em] text-blue-700 uppercase">
              Départements couverts
            </p>
            <div className="mt-2 h-0.5 w-8 bg-blue-700" aria-hidden="true" />

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
              {departments.map((dept) => (
                <div
                  key={dept.code}
                  className="rounded-xl bg-white p-4 text-center shadow-sm"
                >
                  <p className="font-heading text-xl font-black text-blue-700">
                    {dept.code}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-600">{dept.name}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm font-bold tracking-[0.1em] text-blue-700 uppercase">
              Villes d&rsquo;intervention principales
            </p>

            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-4">
              {cityColumns.map((column, columnIndex) => (
                <ul key={columnIndex} className="space-y-2">
                  {column.map((city) => (
                    <li
                      key={city}
                      className="flex items-center gap-2 text-sm text-slate-700"
                    >
                      <span
                        className="size-1.5 shrink-0 rounded-full bg-blue-700"
                        aria-hidden="true"
                      />
                      {city}
                    </li>
                  ))}
                </ul>
              ))}
              <p className="text-sm text-slate-500 italic">
                &hellip; et plus encore
              </p>
            </div>

            <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl bg-white p-6 shadow-sm sm:flex-row sm:items-center">
              <div className="flex items-center gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-blue-700 text-white">
                  <Phone className="size-5" />
                </span>
                <div>
                  <p className="font-semibold text-blue-950">
                    Besoin d&rsquo;une intervention ?
                  </p>
                  <p className="text-sm text-slate-600">
                    Vérifiez la disponibilité dans votre ville.
                  </p>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <a
                  href="tel:+33768841324"
                  className="text-lg font-bold text-blue-700 hover:text-blue-800"
                >
                  07 68 84 13 24
                </a>
                <p className="text-xs text-slate-500">Lun - Ven : 9h - 17h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
