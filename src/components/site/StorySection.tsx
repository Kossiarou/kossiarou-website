"use client";

import { useState } from "react";
import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries";

// Language-neutral settings per scenario, in the same order as `dict.scenarios`.
// Only story-cny.png exists for now: every scenario reuses it as a placeholder.
const SCENARIO_META = [
  { code: "CNY", ref: "KSR-2026-0948", image: "/assets/story-cny.png" },
  { code: "EUR", ref: "KSR-2026-1204", image: "/assets/story-cny.png" },
  { code: "AED", ref: "KSR-2026-1377", image: "/assets/story-cny.png" },
  { code: "USD", ref: "KSR-2026-1561", image: "/assets/story-cny.png" },
];

export function StorySection({ dict }: { dict: Dictionary["story"] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scenario = dict.scenarios[activeIndex];
  const meta = SCENARIO_META[activeIndex];

  return (
    <section id="histoires" className="bg-ink text-cream">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-[18px] px-10 py-24">
        <span className="font-mono text-[13px] tracking-[0.12em] text-dark-text-soft uppercase">
          {dict.eyebrow}
        </span>
        <h2 className="max-w-[640px] text-[clamp(34px,4.5vw,48px)] leading-[1] tracking-[-0.03em]">
          {dict.title}
        </h2>
        <p className="max-w-[660px] text-[19px] leading-[1.5] text-dark-text-body">
          {dict.description}
        </p>
        <div role="tablist" aria-label={dict.tabsLabel} className="mt-[18px] flex flex-wrap gap-2">
          {dict.scenarios.map((d, i) => {
            const active = i === activeIndex;
            const code = SCENARIO_META[i].code;
            return (
              <button
                key={code}
                type="button"
                role="tab"
                id={`story-tab-${code}`}
                aria-selected={active}
                aria-controls="story-panel"
                onClick={() => setActiveIndex(i)}
                className={`flex cursor-pointer items-center gap-2.5 rounded-full py-1.5 pr-4 pl-1.5 text-[15px] font-bold transition-colors ${
                  active
                    ? "bg-cream text-ink"
                    : "border border-dark-border text-cream hover:bg-dark-surface"
                }`}
              >
                <span
                  className={`flex h-[30px] w-[30px] items-center justify-center rounded-full text-[10px] ${
                    active ? "bg-gold" : "bg-dark-surface-2"
                  }`}
                >
                  {code}
                </span>
                {d.label}
              </button>
            );
          })}
        </div>

        <div
          id="story-panel"
          role="tabpanel"
          aria-labelledby={`story-tab-${meta.code}`}
          className="mt-2.5 grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] gap-12"
        >
          <div className="flex flex-col gap-4 pt-1.5">
            <h3 className="text-4xl leading-[1.05] tracking-[-0.025em]">{scenario.title}</h3>
            <span className="font-mono text-[13px] text-dark-text-soft">{scenario.persona}</span>
            <p className="text-lg leading-[1.55] text-dark-text">{scenario.description}</p>
            <div className="mt-2.5 flex flex-col">
              {scenario.steps.map((step, i) => (
                <div key={step.title} className="flex gap-3.5">
                  <div className="flex flex-col items-center">
                    <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full border-2 border-gold text-xs text-gold">
                      {i + 1}
                    </span>
                    {i < scenario.steps.length - 1 && (
                      <span className="min-h-3.5 w-0.5 flex-1 bg-dark-border" />
                    )}
                  </div>
                  <div
                    className={`flex flex-col gap-1 ${i < scenario.steps.length - 1 ? "pb-4" : ""}`}
                  >
                    <span className="text-[17px] font-bold">{step.title}</span>
                    <span className="text-[15px] text-dark-text">{step.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[560px] pb-[120px]">
            <div className="relative h-[430px] w-full overflow-hidden rounded-[18px]">
              <Image src={meta.image} alt="" fill className="object-cover" />
            </div>
            <div className="absolute inset-x-4 bottom-0 flex flex-col gap-3 rounded-[18px] bg-cream px-5 pt-5 pb-4 text-ink shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-[15px] font-bold">kossiarou</span>
                <span className="font-mono text-xs text-[#555a69]">{meta.ref}</span>
              </div>
              <span className="flex w-fit items-center gap-1.5 rounded-full bg-success-soft px-2.5 py-[3px] text-[13px] font-bold text-success">
                <span className="h-[7px] w-[7px] rounded-full bg-success" />
                {scenario.receipt.status}
              </span>
              <span className="font-mono text-[28px]">{scenario.receipt.amount}</span>
              <span className="pb-1.5 font-mono text-[13px] text-[#555a69]">
                {scenario.receipt.debited}
              </span>
              {scenario.receipt.rows.map((row) => (
                <div
                  key={row.label}
                  className="flex justify-between gap-3 border-t border-dashed border-[#d8d1c3] py-2 text-sm"
                >
                  <span className="text-[#555a69]">{row.label}</span>
                  <span className="font-bold">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-6 text-xs text-dark-text-softer">{dict.disclaimer}</p>
      </div>
    </section>
  );
}
