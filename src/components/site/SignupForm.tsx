"use client";

import { useRef, useState, type FormEvent } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

const COUNTRY_CODES = [
  { code: "BJ", dial: "+229" },
  { code: "BF", dial: "+226" },
  { code: "CI", dial: "+225" },
  { code: "ML", dial: "+223" },
  { code: "SN", dial: "+221" },
  { code: "TG", dial: "+228" },
];

const WHATSAPP_GROUPS = {
  user: "https://chat.whatsapp.com/LrMVOKBlhzQ4wUOAniwMgL?s=cl&p=i&mlu=4&ilr=4",
  amb: "https://chat.whatsapp.com/GOMZi9L59jvAGueaQITRe8?s=cl&p=i&mlu=4&ilr=4",
};

export function SignupForm({ dict }: { dict: Dictionary["signup"] }) {
  const [list, setList] = useState<"user" | "amb">("user");
  const [submitted, setSubmitted] = useState(false);
  const resetTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const segmentClass = (active: boolean) =>
    `rounded-[9px] border-none px-2 py-[11px] text-sm font-bold ${
      active ? "bg-cream text-ink" : "bg-transparent text-dark-text"
    }`;

  // TODO: no backend/webhook exists yet to store signup details (name,
  // country, intent) — see kossiarou-api's provider stubs for the same
  // "not wired up yet" pattern used elsewhere in this project. The WhatsApp
  // group redirect below works today regardless.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    window.open(WHATSAPP_GROUPS[list], "_blank", "noopener,noreferrer");
    if (resetTimeout.current) clearTimeout(resetTimeout.current);
    resetTimeout.current = setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <section id="inscription" className="bg-ink text-cream">
      <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-start gap-12 px-10 py-[88px]">
        <div className="flex flex-col gap-[18px]">
          <h2 className="text-[clamp(40px,5vw,54px)] leading-[1] tracking-[-0.03em]">
            {dict.title}
          </h2>
          <p className="max-w-[420px] text-[19px] leading-[1.5] text-dark-text">
            {dict.description}
          </p>
          <div className="mt-2 flex flex-col gap-3 text-[15px]">
            {dict.steps.map((step, i) => (
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
          <div className="grid grid-cols-1 gap-1 rounded-xl bg-ink p-1 min-[360px]:grid-cols-2">
            <button
              type="button"
              aria-pressed={list === "user"}
              className={segmentClass(list === "user")}
              onClick={() => setList("user")}
            >
              {dict.firstUser}
            </button>
            <button
              type="button"
              aria-pressed={list === "amb"}
              className={segmentClass(list === "amb")}
              onClick={() => setList("amb")}
            >
              {dict.ambassador}
            </button>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
            <label className="flex flex-col gap-1.5 text-[13px] font-bold">
              {dict.firstName}
              <input
                required
                name="firstName"
                autoComplete="given-name"
                placeholder={dict.firstNamePlaceholder}
                className="h-[46px] rounded-[10px] border border-field-border bg-ink px-3 text-[15px] text-cream focus:border-gold"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-[13px] font-bold">
              {dict.whatsapp}
              <div className="flex h-[46px] overflow-hidden rounded-[10px] border border-field-border bg-ink focus-within:border-gold focus-within:outline-3 focus-within:outline-offset-2 focus-within:outline-gold">
                <select
                  name="country"
                  aria-label={dict.countryCode}
                  className="border-r border-field-border bg-transparent px-2 font-mono text-sm text-cream outline-none"
                >
                  {COUNTRY_CODES.map((c) => (
                    <option key={c.code}>
                      {c.code} {c.dial}
                    </option>
                  ))}
                </select>
                <input
                  required
                  type="tel"
                  inputMode="tel"
                  name="whatsapp"
                  autoComplete="tel-national"
                  aria-label={dict.whatsapp}
                  placeholder={dict.whatsappPlaceholder}
                  className="min-w-0 flex-1 bg-transparent px-2.5 font-mono text-sm text-cream outline-none"
                />
              </div>
            </label>
          </div>

          {list === "user" && (
            <label className="flex flex-col gap-1.5 text-[13px] font-bold">
              {dict.intentLabel}
              <select
                name="intent"
                className="h-[46px] rounded-[10px] border border-field-border bg-ink px-3 text-[15px] text-cream focus:border-gold"
              >
                {dict.intents.map((intent) => (
                  <option key={intent}>{intent}</option>
                ))}
              </select>
            </label>
          )}

          <button
            type="submit"
            className="min-h-12 rounded-xl bg-gold px-4 py-2 text-base font-bold text-ink hover:bg-gold-hover sm:overflow-hidden sm:text-ellipsis sm:whitespace-nowrap"
          >
            {submitted
              ? dict.thanks
              : `${dict.submit}${list === "amb" ? dict.submitAmbassadorSuffix : ""}`}
          </button>
          {/* Announces the confirmation to screen readers (the button label also changes). */}
          <span role="status" className="sr-only">
            {submitted ? dict.thanks : ""}
          </span>
          <span className="text-xs text-dark-text-soft">{dict.referral}</span>
        </form>
      </div>
    </section>
  );
}
