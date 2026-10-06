"use client";

import { useState } from "react";
import Image from "next/image";

type Scenario = {
  code: string;
  label: string;
  title: string;
  persona: string;
  description: string;
  steps: { title: string; detail: string }[];
  image: string;
  receipt: {
    ref: string;
    status: string;
    amount: string;
    debited: string;
    rows: { label: string; value: string }[];
  };
};

// Seul story-cny.png existe pour l'instant : les autres scénarios réutilisent ce placeholder.
const SCENARIOS: Scenario[] = [
  {
    code: "CNY",
    label: "Voyager en Chine",
    title: "Acheter à Yiwu, payer depuis Cotonou ou sur place",
    persona: "Aïcha · commerçante, Cotonou → Yiwu, Chine",
    description:
      "Avant de partir, Aïcha convertit ses francs CFA en yuans et paie son fournisseur par virement bancaire depuis le Bénin, facture de la commande jointe. Sur place, elle règle l’hôtel, les taxis et ses petits achats avec sa carte, sans frais.",
    steps: [
      { title: "Dépôt", detail: "300 000 FCFA depuis son MTN MoMo, instantané" },
      { title: "Conversion", detail: "XOF → CNY, instantanée" },
      { title: "Virement au fournisseur", detail: "Depuis le Bénin, facture de la commande jointe" },
      { title: "Sur place", detail: "Paiements par carte bancaire, sans frais" },
    ],
    image: "/assets/story-cny.png",
    receipt: {
      ref: "KSR-2026-0948",
      status: "Livré",
      amount: "3 000,00 CNY",
      debited: "≈ 234 000 FCFA débités",
      rows: [
        { label: "Bénéficiaire", value: "Yiwu Trading Co." },
        { label: "Justificatif", value: "Facture de la commande" },
        { label: "Délai", value: "Selon la banque, jusqu’à 24 h" },
      ],
    },
  },
  {
    code: "EUR",
    label: "Un enfant étudiant",
    title: "Payer les frais de scolarité sans stress",
    persona: "Marcel · parent, Porto-Novo → Lyon, France",
    description:
      "Marcel convertit ses francs CFA en euros au taux fixe et règle la scolarité de sa fille directement sur le compte de l’université. Chaque mois, il lui envoie son allocation sur son compte en euros.",
    steps: [
      { title: "Dépôt", detail: "330 000 FCFA depuis son compte bancaire, instantané" },
      { title: "Conversion", detail: "XOF → EUR à parité fixe, 655,957 FCFA pour 1 €" },
      { title: "Virement à l’école", detail: "Sur le RIB de l’université, appel de frais joint" },
      { title: "Allocation mensuelle", detail: "Envoyée à sa fille sur son compte en euros" },
    ],
    image: "/assets/story-cny.png",
    receipt: {
      ref: "KSR-2026-1204",
      status: "Livré",
      amount: "500,00 EUR",
      debited: "≈ 327 979 FCFA débités",
      rows: [
        { label: "Bénéficiaire", value: "Université de Lyon" },
        { label: "Justificatif", value: "Appel de frais de scolarité" },
        { label: "Délai", value: "Selon la banque, jusqu’à 24 h" },
      ],
    },
  },
  {
    code: "AED",
    label: "Les Émirats",
    title: "Commander à Dubaï, payer depuis Cotonou",
    persona: "Fatou · revendeuse, Cotonou → Dubaï, Émirats arabes unis",
    description:
      "Fatou convertit ses francs CFA en dirhams et règle son fournisseur de Dubaï par virement bancaire, facture à l’appui. Lors de ses déplacements, elle paie l’hôtel et ses achats avec sa carte, sans frais.",
    steps: [
      { title: "Dépôt", detail: "330 000 FCFA depuis son MTN MoMo, instantané" },
      { title: "Conversion", detail: "XOF → AED, instantanée" },
      { title: "Virement au fournisseur", detail: "Depuis le Bénin, facture de la commande jointe" },
      { title: "Sur place", detail: "Paiements par carte bancaire, sans frais" },
    ],
    image: "/assets/story-cny.png",
    receipt: {
      ref: "KSR-2026-1377",
      status: "Livré",
      amount: "2 000,00 AED",
      debited: "≈ 326 000 FCFA débités",
      rows: [
        { label: "Bénéficiaire", value: "Al Noor Trading LLC" },
        { label: "Justificatif", value: "Facture de la commande" },
        { label: "Délai", value: "Selon la banque, jusqu’à 24 h" },
      ],
    },
  },
  {
    code: "USD",
    label: "Les États-Unis",
    title: "Payer vos abonnements et achats en dollars",
    persona: "Koffi · développeur, Cotonou → États-Unis",
    description:
      "Koffi convertit ses francs CFA en dollars et alimente sa carte virtuelle USD pour ses outils en ligne et ses achats. Il reçoit aussi les paiements de ses clients américains directement sur son wallet USD.",
    steps: [
      { title: "Dépôt", detail: "480 000 FCFA depuis son MTN MoMo, instantané" },
      { title: "Conversion", detail: "XOF → USD, instantanée" },
      { title: "Carte virtuelle USD", detail: "Rechargée automatiquement depuis son solde XOF" },
      { title: "Réception", detail: "Virements des États-Unis crédités sur son wallet" },
    ],
    image: "/assets/story-cny.png",
    receipt: {
      ref: "KSR-2026-1561",
      status: "Crédité",
      amount: "800,00 USD",
      debited: "≈ 480 000 FCFA débités",
      rows: [
        { label: "Destination", value: "Carte virtuelle USD" },
        { label: "Recharge", value: "Automatique depuis le solde XOF" },
        { label: "Délai", value: "Instantané" },
      ],
    },
  },
];

export function StorySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scenario = SCENARIOS[activeIndex];

  return (
    <section id="histoires" className="bg-ink text-cream">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-[18px] px-10 py-24">
        <span className="font-mono text-[13px] tracking-[0.12em] text-dark-text-soft uppercase">
          Quatre trajets, une seule app
        </span>
        <h2 className="max-w-[640px] text-[clamp(34px,4.5vw,48px)] leading-[1] tracking-[-0.03em]">
          Là où votre argent doit aller, Kossiarou l’emmène.
        </h2>
        <p className="max-w-[660px] text-[19px] leading-[1.5] text-dark-text-body">
          Vous déposez en francs CFA depuis vos comptes, la conversion est instantanée, puis vous
          payez par virement bancaire, avec la facture de la commande, ou directement avec votre
          carte.
        </p>
        <div role="tablist" aria-label="Destinations" className="mt-[18px] flex flex-wrap gap-2">
          {SCENARIOS.map((d, i) => {
            const active = i === activeIndex;
            return (
              <button
                key={d.code}
                type="button"
                role="tab"
                id={`story-tab-${d.code}`}
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
                  {d.code}
                </span>
                {d.label}
              </button>
            );
          })}
        </div>

        <div
          id="story-panel"
          role="tabpanel"
          aria-labelledby={`story-tab-${scenario.code}`}
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
              <Image src={scenario.image} alt="" fill className="object-cover" />
            </div>
            <div className="absolute inset-x-4 bottom-0 flex flex-col gap-3 rounded-[18px] bg-cream px-5 pt-5 pb-4 text-ink shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-[15px] font-bold">kossiarou</span>
                <span className="font-mono text-xs text-[#555a69]">{scenario.receipt.ref}</span>
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

        <p className="mt-6 text-xs text-dark-text-softer">
          Scénarios d’illustration. Taux de démonstration (EUR : parité fixe 655,957 FCFA). Frais
          et délais définitifs communiqués au lancement.
        </p>
      </div>
    </section>
  );
}
