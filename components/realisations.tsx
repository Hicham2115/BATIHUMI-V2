"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronsLeftRight } from "lucide-react";

const projects = [
  {
    category: "Remontées capillaires",
    title: "Maison ancienne – Asnières-sur-Seine",
    location: "Asnières-sur-Seine (92)",
    date: "Avril 2024",
    beforeImage: "/images/avant1.jpg",
    afterImage: "/images/apres1.jpg",
  },
  {
    category: "Moisissures",
    title: "Appartement – Boulogne-Billancourt",
    location: "Boulogne-Billancourt (92)",
    date: "Mars 2024",
    beforeImage: "/images/avant2.jpg",
    afterImage: "/images/apres2.jpg",
  },
  {
    category: "Salpêtre",
    title: "Maison – Saint-Denis",
    location: "Saint-Denis (93)",
    date: "Février 2024",
    beforeImage: "/images/avant3.jpg",
    afterImage: "/images/apres3.jpg",
  },
  {
    category: "Assèchement de murs",
    title: "Sous-sol – Vincennes",
    location: "Vincennes (94)",
    date: "Janvier 2024",
    beforeImage: "/images/avant1.jpg",
    afterImage: "/images/apres1.jpg",
  },
];

function BeforeAfter({
  before,
  after,
  alt,
}: {
  before: string;
  after: string;
  alt: string;
}) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const updateFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const percent = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, percent)));
  };

  const handlePointerDown = (event: React.PointerEvent) => {
    draggingRef.current = true;
    (event.target as HTMLElement).setPointerCapture(event.pointerId);
    updateFromClientX(event.clientX);
  };

  const handlePointerMove = (event: React.PointerEvent) => {
    if (!draggingRef.current) return;
    updateFromClientX(event.clientX);
  };

  const handlePointerUp = () => {
    draggingRef.current = false;
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full touch-none overflow-hidden select-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      <div className="absolute inset-0">
        <Image
          src={after}
          alt={`${alt} – après`}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 25vw, 50vw"
        />
        <span className="absolute top-3 right-3 rounded bg-blue-950/80 px-2.5 py-1 text-[11px] font-bold tracking-wide text-white">
          APRÈS
        </span>
      </div>

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={before}
          alt={`${alt} – avant`}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 25vw, 50vw"
        />
        <span className="absolute top-3 left-3 rounded bg-blue-950/80 px-2.5 py-1 text-[11px] font-bold tracking-wide text-white">
          AVANT
        </span>
      </div>

      <div
        className="absolute inset-y-0 w-0.5 bg-white"
        style={{ left: `${position}%` }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white text-blue-950 shadow-lg"
        style={{ left: `${position}%` }}
      >
        <ChevronsLeftRight className="size-4" />
      </div>
    </div>
  );
}

export function Realisations() {
  return (
    <section id="realisations" className="scroll-mt-20 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold tracking-[0.14em] text-blue-700 uppercase">
            Nos réalisations
          </p>
          <h2 className="mt-3 font-heading text-3xl leading-tight font-extrabold tracking-tight text-blue-950 sm:text-4xl">
            Découvrez nos interventions{" "}
            <span className="text-blue-700">avant/après</span>
          </h2>
          <p className="mt-4 text-slate-600">
            Chaque projet est unique, mais notre objectif reste le même :
            éliminer durablement l&rsquo;humidité et protéger votre habitat.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <BeforeAfter
                before={project.beforeImage}
                after={project.afterImage}
                alt={project.title}
              />
              {/* <div className="p-5">
                <p className="text-xs font-bold tracking-wide text-blue-700 uppercase">
                  {project.category}
                </p>
                <h3 className="mt-1.5 font-heading text-base font-bold text-blue-950">
                  {project.title}
                </h3>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="size-3.5" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="size-3.5" />
                    {project.date}
                  </span>
                </div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
