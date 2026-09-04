"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Droplet, Menu, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const services = [
  {
    label: "Remontées capillaires",
    href: "/services/remontees-capillaires",
  },
  { label: "Moisissures", href: "/services/moisissures" },
  { label: "Salpêtre", href: "/services/salpetre" },
  { label: "Infiltrations", href: "/services/infiltrations" },
  { label: "Ventilation & VMC", href: "/services/ventilation" },
];

const navLinks = [
  { label: "Réalisations", href: "/realisations" },
  { label: "Avis clients", href: "/avis-clients" },
  { label: "À propos", href: "/a-propos" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const navLinkClass =
  "relative py-1 text-white transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-sky-400 after:transition-all after:duration-300 hover:text-white hover:after:w-full";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 sm:gap-3">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/10 backdrop-blur-sm sm:size-11 sm:rounded-xl">
        <Droplet
          className="size-4 text-sky-400 sm:size-5"
          fill="currentColor"
          strokeWidth={0}
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-base font-extrabold tracking-tight text-white sm:text-xl">
          BATIHUMI
        </span>
        <span className="mt-0.5 hidden text-[9px] font-bold tracking-[0.11em] text-sky-400 sm:block">
          EXPERT ANTI-HUMIDITÉ
        </span>
      </span>
    </Link>
  );
}

function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

export function Header() {
  const scrolled = useScrolled();

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-blue-950/70 shadow-lg shadow-black/10 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto grid h-16 max-w-none grid-cols-[1fr_auto_minmax(max-content,1.6fr)] items-center px-4 sm:px-6 md:h-20 md:px-9 lg:h-[80px]">
        <div className="flex items-center">
          <Logo />
        </div>

        <div className="flex justify-center">
          <nav className="hidden items-center gap-6 text-sm font-medium lg:flex xl:gap-8">
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`${navLinkClass} flex items-center gap-1 outline-none data-popup-open:text-white data-popup-open:after:w-full`}
              >
                Nos services
                <ChevronDown className="size-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={10}
                className="w-56 p-1"
              >
                {services.map((service) => (
                  <DropdownMenuItem
                    key={service.href}
                    render={<Link href={service.href} />}
                    className="px-2.5 py-1.5 text-sm text-slate-700 focus:bg-blue-50 focus:text-blue-700"
                  >
                    {service.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={navLinkClass}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center justify-end gap-3 xl:gap-4">
          <div className="hidden items-center gap-3 lg:flex xl:gap-4">
            <a
              href="tel:+33768841324"
              className="flex shrink-0 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-semibold whitespace-nowrap text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <Phone className="size-4 text-sky-400" />
              07 68 84 13 24
            </a>
            <Button
              size="lg"
              className="group h-11 overflow-hidden rounded-full bg-blue-600 px-5 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-900/30"
              render={<Link href="/diagnostic" />}
              nativeButton={false}
            >
              Demander un diagnostic
              <ArrowRight className="size-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 hover:text-white lg:hidden"
              >
                <Menu className="size-5" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="end"
              sideOffset={8}
              className="w-[calc(100vw-2rem)] max-w-sm rounded-xl p-3 shadow-xl lg:hidden"
            >
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between px-1.5 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground [&::-webkit-details-marker]:hidden">
                  Nos services
                  <ChevronDown className="size-3.5 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="mt-1 flex flex-col">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="rounded-md px-2.5 py-1.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </details>
              <div className="my-2 h-px bg-border" />
              <div className="flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-md px-1.5 py-2 text-sm hover:bg-muted"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="my-2 h-px bg-border" />
              <div className="flex flex-col gap-3 p-1.5">
                <a
                  href="tel:+33768841324"
                  className="flex items-center gap-2 text-sm font-semibold text-blue-700"
                >
                  <Phone className="size-4" />
                  07 68 84 13 24
                </a>
                <Button
                  className="bg-blue-700 text-white hover:bg-blue-800"
                  render={<Link href="/diagnostic" />}
                  nativeButton={false}
                >
                  Demander un diagnostic
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
}
