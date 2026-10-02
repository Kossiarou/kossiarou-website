"use client";

import { useState, type FormEvent } from "react";

const COUNTRY_CODES = [
  { code: "BJ", dial: "+229" },
  { code: "BF", dial: "+226" },
  { code: "CI", dial: "+225" },
  { code: "ML", dial: "+223" },
  { code: "SN", dial: "+221" },
  { code: "TG", dial: "+228" },
];

const INTENTS = [
  "Payer des fournisseurs en Chine",
  "Envoyer de l’argent à un enfant étudiant",
  "Voyager aux Émirats",
  "Payer aux États-Unis",
];

export function SignupForm() {
  const [list, setList] = useState<"user" | "amb">("user");
  const [submitted, setSubmitted] = useState(false);

  const segmentClass = (active: boolean) =>
    `rounded-[9px] border-none px-2 py-[11px] text-sm font-bold ${
      active ? "bg-cream text-ink" : "bg-transparent text-dark-text"
    }`;

  // TODO: no waitlist backend/webhook exists yet — wire this up to whatever
  // collects signups (see kossiarou-api's provider stubs for the same
  // "not wired up yet" pattern used elsewhere in this project).
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="inscription" className="bg-ink text-cream">
      <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-start gap-12 px-10 py-[88px]">
        <div className="flex flex-col gap-[18px]">
          <h2 className="text-[clamp(40px,5vw,54px)] leading-[1] tracking-[-0.03em]">
            Soyez parmi les premiers.
          </h2>
          <p className="max-w-[420px] text-[19px] leading-[1.5] text-dark-text">
            Choisissez votre liste, laissez votre numéro WhatsApp, puis rejoignez le groupe
            d’attente.
          </p>
          <div className="mt-2 flex flex-col gap-3 text-[15px]">
            {[
              "Choisissez : premier utilisateur ou ambassadeur",
              "Indiquez votre prénom, votre pays et votre numéro",
              "Rejoignez le groupe WhatsApp d’attente de votre liste",
            ].map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span className="flex h-[26px] w-[26px] flex-none items-center justify-center rounded-full bg-dark-surface-2 text-xs text-gold">
                  {i + 1}
                </span>
                {step}
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3.5 rounded-[20px] border border-dark-border bg-dark-surface p-[22px]"
        >
          <div className="grid grid-cols-2 gap-1 rounded-xl bg-ink p-1">
            <button
              type="button"
              className={segmentClass(list === "user")}
              onClick={() => setList("user")}
            >
              Premier utilisateur
            </button>
            <button
              type="button"
              className={segmentClass(list === "amb")}
              onClick={() => setList("amb")}
            >
              Ambassadeur
            </button>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
            <label className="flex flex-col gap-1.5 text-[13px] font-bold">
              Prénom
              <input
                required
                placeholder="Ex. Aïcha"
                className="h-[46px] rounded-[10px] border border-dark-border bg-ink px-3 text-[15px] text-cream outline-none focus:border-gold"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-[13px] font-bold">
              Numéro WhatsApp
              <div className="flex h-[46px] overflow-hidden rounded-[10px] border border-dark-border bg-ink">
                <select className="border-r border-dark-border bg-transparent px-2 font-mono text-sm text-cream outline-none">
                  {COUNTRY_CODES.map((c) => (
                    <option key={c.code}>
                      {c.code} {c.dial}
                    </option>
                  ))}
                </select>
                <input
                  required
                  placeholder="01 97 00 00 00"
                  className="min-w-0 flex-1 bg-transparent px-2.5 font-mono text-sm text-cream outline-none"
                />
              </div>
            </label>
          </div>

          <label className="flex flex-col gap-1.5 text-[13px] font-bold">
            Vous voulez surtout
            <select className="h-[46px] rounded-[10px] border border-dark-border bg-ink px-3 text-[15px] text-cream outline-none">
              {INTENTS.map((intent) => (
                <option key={intent}>{intent}</option>
              ))}
            </select>
          </label>

          <button
            type="submit"
            className="h-12 overflow-hidden rounded-xl bg-gold px-4 text-base font-bold text-ellipsis whitespace-nowrap text-ink hover:bg-gold-hover"
          >
            {submitted
              ? "Merci ! On vous recontacte bientôt."
              : `S’inscrire et rejoindre le groupe WhatsApp${list === "amb" ? " (ambassadeur)" : ""}`}
          </button>
          <span className="text-xs text-dark-text-soft">
            Un code de parrainage ? Vous le saisirez à l’inscription dans l’app.
          </span>
        </form>
      </div>
    </section>
  );
}
