"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronRight, Menu, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { services } from "@/lib/services-data";

const navLinks = [
  { label: "Zone d'intervention", href: "/#zone-intervention" },
  { label: "Réalisations", href: "/#realisations" },
  { label: "Avis clients", href: "/#avis-clients" },
  { label: "Blog & Guides", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

const navLinkClass =
  "relative py-1 text-white transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-sky-400 after:transition-all after:duration-300 hover:text-white hover:after:w-full";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 sm:gap-3">
      <Image
        src="/images/logo.png"
        alt="Batihumi"
        width={64}
        height={64}
        className="size-10 shrink-0 rounded-lg sm:size-12"
      />
      <span className="mt-0.5 hidden text-[13px] font-bold tracking-[0.11em] text-white sm:block">
        BATIHUMI
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

export function Header({ alwaysVisible = false }: { alwaysVisible?: boolean }) {
  const scrolled = useScrolled();
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled || alwaysVisible
          ? "border-blue-950/10 bg-blue-950 shadow-lg shadow-black/10"
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
                className={`${navLinkClass} flex items-center gap-1 outline-none`}
              >
                Nos services
                <ChevronDown className="size-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={14}
                className="w-80 rounded-2xl border border-slate-100 p-2 shadow-2xl shadow-blue-950/10 ring-0"
              >
                {services.map((service) => (
                  <DropdownMenuItem
                    key={service.slug}
                    render={<Link href={`/services/${service.slug}`} />}
                    className="group/item justify-between rounded-xl px-3 py-2.5 text-[13.5px] font-medium text-blue-950 focus:bg-blue-50 focus:text-blue-700"
                  >
                    {service.title}
                    <ChevronRight className="size-3.5 shrink-0 text-blue-300 opacity-0 transition-opacity group-focus/item:opacity-100" />
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
              href="https://api.whatsapp.com/send/?phone=33768841324&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-semibold whitespace-nowrap text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <Phone className="size-4 text-sky-400" />
              07 68 84 13 24
            </a>
            <Button
              size="lg"
              className="group h-11 overflow-hidden rounded-full bg-blue-600 px-5 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-900/30"
              render={<Link href="/#contact" />}
              nativeButton={false}
            >
              Demander un diagnostic
              <ArrowRight className="size-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Ouvrir le menu"
                  className="text-white hover:bg-white/10 hover:text-white lg:hidden"
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[min(88vw,22rem)] gap-0 border-l border-white/10 bg-blue-950 p-0 text-white sm:max-w-none"
            >
              <SheetHeader className="border-b border-white/10 px-6 py-5 pr-14 text-left">
                <SheetTitle className="text-white">Navigation</SheetTitle>
                <SheetDescription className="text-blue-200/75">
                  BATIHUMI · Expert anti-humidité
                </SheetDescription>
              </SheetHeader>

              <div className="flex-1 overflow-y-auto px-5 py-4">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((open) => !open)}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                  aria-expanded={mobileServicesOpen}
                  aria-controls="mobile-services-list"
                >
                  Nos services
                  <ChevronDown
                    className={`size-4 text-sky-300 transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  id="mobile-services-list"
                  className={`grid overflow-hidden transition-all duration-200 ${
                    mobileServicesOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="flex flex-col border-l border-white/15 py-1 pl-3">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="rounded-md px-3 py-2.5 text-[13px] text-blue-100/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <nav aria-label="Navigation principale" className="mt-2 flex flex-col">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="rounded-lg px-3 py-3 text-sm font-medium text-blue-100/85 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="mt-auto flex flex-col gap-4 border-t border-white/10 p-5">
                <a
                  href="https://api.whatsapp.com/send/?phone=33768841324&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <Phone className="size-4 text-sky-300" />
                  07 68 84 13 24
                </a>
                <Button
                  className="h-11 w-full rounded-full bg-blue-600 text-white hover:bg-blue-500"
                  render={<Link href="/#contact" onClick={() => setMobileMenuOpen(false)} />}
                  nativeButton={false}
                >
                  Demander un diagnostic
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
