"use client";

import { useState } from "react";

const SECURITY_POINTS = [
  {
    title: "Vérification d’identité obligatoire",
    description: "Pour chaque client, sans exception.",
  },
  {
    title: "PIN à chaque opération",
    description: "Rien ne part sans votre code.",
  },
  {
    title: "Comptes à votre nom",
    description: "Dépôts et retraits uniquement vers vos propres comptes.",
  },
  {
    title: "Facture pour chaque virement",
    description: "Le justificatif de la commande accompagne chaque paiement bancaire.",
  },
];

const QUESTIONS = [
  "Dans quels pays puis-je ouvrir un compte ?",
  "Vers quelles devises puis-je convertir et payer ?",
  "Quels documents faut-il fournir ?",
  "Puis-je payer depuis le Bénin ou sur place ?",
  "Combien de temps prend un virement ?",
  "Que se passe-t-il après mon inscription ?",
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq">
      <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-12 px-10 py-[88px]">
        <div className="flex flex-col gap-[18px]">
          <span className="font-mono text-[13px] tracking-[0.12em] text-[#555a69] uppercase">
            Sécurité et questions
          </span>
          <h2 className="text-[clamp(34px,4.5vw,48px)] leading-[1] tracking-[-0.03em]">
            Votre argent, sous contrôle.
          </h2>
          <div className="mt-2.5 flex flex-col gap-[18px]">
            {SECURITY_POINTS.map((point) => (
              <div key={point.title} className="flex gap-3.5">
                <span className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-full bg-chip">
                  <span className="h-2.5 w-2.5 rounded-sm border-[1.5px] border-ink" />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-base font-bold">{point.title}</span>
                  <span className="text-sm leading-[1.5] text-ink-soft">{point.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col self-start border-t border-border-soft">
          {QUESTIONS.map((question, i) => {
            const open = openIndex === i;
            return (
              <div key={question} className="border-b border-border-soft">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-[22px] text-left text-[17px] font-bold"
                >
                  <span>{question}</span>
                  <span className="flex-none text-lg">{open ? "−" : "+"}</span>
                </button>
                {open && (
                  <p className="pr-[30px] pb-[22px] text-[15px] leading-[1.6] text-ink-soft">
                    Réponse à venir prochainement.
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
