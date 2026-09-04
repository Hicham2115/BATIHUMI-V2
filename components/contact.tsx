"use client";

import { useState, type FormEvent } from "react";
import { Clock, Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const contactInfo = [
  {
    icon: Phone,
    label: "Téléphone",
    value: "07 68 84 13 24",
    href: "tel:+33768841324",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@batihumi.fr",
    href: "mailto:contact@batihumi.fr",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "6 Rue de Belfort, 92600 Asnières-sur-Seine",
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Lun - Ven : 9h - 17h",
  },
];

const services = [
  "Remontées capillaires",
  "Moisissures",
  "Salpêtre",
  "Infiltrations",
  "Ventilation & VMC",
  "Autre",
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold tracking-[0.14em] text-blue-700 uppercase">
            Contact
          </p>
          <h2 className="mt-3 font-heading text-3xl leading-tight font-extrabold tracking-tight text-blue-950 sm:text-4xl">
            Parlons de votre
            <br />
            <span className="text-blue-700">problème d&rsquo;humidité.</span>
          </h2>
          <p className="mt-4 text-slate-600">
            Notre équipe vous répond sous 2h, du lundi au vendredi.
          </p>
          <div className="mx-auto mt-6 h-1 w-10 rounded-full bg-blue-700" />
        </div>

        <div className="mt-12 grid grid-cols-1 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm md:grid-cols-2">
          <div className="relative isolate overflow-hidden bg-blue-950 p-8 md:p-10">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
              aria-hidden="true"
            />
            <div className="pointer-events-none absolute -top-24 -right-16 size-72 rounded-full bg-blue-700/25 blur-3xl" />

            <div className="relative flex h-full flex-col">
              <h3 className="font-heading text-xl font-bold text-white">
                Nos coordonnées
              </h3>
              <p className="mt-2 text-sm text-blue-200">
                Diagnostic gratuit et sans engagement, partout en
                Île-de-France.
              </p>

              <div className="mt-8 flex-1 space-y-6">
                {contactInfo.map((item) => {
                  const content = (
                    <div className="flex items-start gap-4">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-blue-300">
                        <item.icon className="size-5" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold tracking-wide text-blue-300 uppercase">
                          {item.label}
                        </p>
                        <p className="mt-0.5 text-sm font-medium text-white">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block transition-opacity hover:opacity-80"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>

              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-700 text-white">
                  <CheckCircle2 className="size-4" />
                </span>
                <p className="text-sm text-blue-100">
                  Garantie décennale &middot; + de 500 projets réalisés
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <span className="flex size-14 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                  <CheckCircle2 className="size-7" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-blue-950">
                  Merci pour votre message !
                </h3>
                <p className="mt-2 max-w-xs text-sm text-slate-600">
                  Notre équipe revient vers vous sous 2h, du lundi au
                  vendredi.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex h-full flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="text-sm font-semibold text-blue-950"
                    >
                      Nom complet
                    </label>
                    <Input
                      id="contact-name"
                      name="name"
                      required
                      placeholder="Jean Dupont"
                      className="mt-1.5 h-11"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="text-sm font-semibold text-blue-950"
                    >
                      Téléphone
                    </label>
                    <Input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="06 12 34 56 78"
                      className="mt-1.5 h-11"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-sm font-semibold text-blue-950"
                  >
                    Email
                  </label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="jean.dupont@email.com"
                    className="mt-1.5 h-11"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-service"
                    className="text-sm font-semibold text-blue-950"
                  >
                    Type de problème
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    defaultValue=""
                    className="mt-1.5 h-11 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm text-slate-700 outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    <option value="" disabled>
                      Sélectionnez une option
                    </option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-1 flex-col">
                  <label
                    htmlFor="contact-message"
                    className="text-sm font-semibold text-blue-950"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Décrivez votre situation..."
                    className="mt-1.5 min-h-24 w-full flex-1 resize-none rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm text-slate-700 outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="mt-1 h-auto w-full gap-2 bg-blue-950 py-3 text-white hover:bg-blue-900"
                >
                  <Send className="size-4" />
                  Envoyer ma demande
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
