import Image from "next/image";

const DESTINATIONS = [
  { code: "CNY", label: "Voyager en Chine", active: true },
  { code: "EUR", label: "Un enfant étudiant", active: false },
  { code: "AED", label: "Les Émirats", active: false },
  { code: "USD", label: "Les États-Unis", active: false },
];

const STEPS = [
  { n: 1, title: "Dépôt", detail: "300 000 FCFA depuis son MTN MoMo, instantané" },
  { n: 2, title: "Conversion", detail: "XOF → CNY, instantanée" },
  { n: 3, title: "Virement au fournisseur", detail: "Depuis le Bénin, facture de la commande jointe" },
  { n: 4, title: "Sur place", detail: "Paiements par carte bancaire, sans frais" },
];

const RECEIPT_ROWS = [
  { label: "Bénéficiaire", value: "Yiwu Trading Co." },
  { label: "Justificatif", value: "Facture de la commande" },
  { label: "Délai", value: "Selon la banque, jusqu’à 24 h" },
];

export function StorySection() {
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
        <div className="mt-[18px] flex flex-wrap gap-2">
          {DESTINATIONS.map((d) => (
            <span
              key={d.code}
              className={`flex items-center gap-2.5 rounded-full py-1.5 pr-4 pl-1.5 text-[15px] font-bold ${
                d.active
                  ? "bg-cream text-ink"
                  : "border border-dark-border text-cream"
              }`}
            >
              <span
                className={`flex h-[30px] w-[30px] items-center justify-center rounded-full text-[10px] ${
                  d.active ? "bg-gold" : "bg-dark-surface-2"
                }`}
              >
                {d.code}
              </span>
              {d.label}
            </span>
          ))}
        </div>

        <div className="mt-2.5 grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] gap-12">
          <div className="flex flex-col gap-4 pt-1.5">
            <h3 className="text-4xl leading-[1.05] tracking-[-0.025em]">
              Acheter à Yiwu, payer depuis Cotonou ou sur place
            </h3>
            <span className="font-mono text-[13px] text-dark-text-soft">
              Aïcha · commerçante, Cotonou → Yiwu, Chine
            </span>
            <p className="text-lg leading-[1.55] text-dark-text">
              Avant de partir, Aïcha convertit ses francs CFA en yuans et paie son fournisseur par
              virement bancaire depuis le Bénin, facture de la commande jointe. Sur place, elle
              règle l’hôtel, les taxis et ses petits achats avec sa carte, sans frais.
            </p>
            <div className="mt-2.5 flex flex-col">
              {STEPS.map((step, i) => (
                <div key={step.n} className="flex gap-3.5">
                  <div className="flex flex-col items-center">
                    <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full border-2 border-gold text-xs text-gold">
                      {step.n}
                    </span>
                    {i < STEPS.length - 1 && (
                      <span className="min-h-3.5 w-0.5 flex-1 bg-dark-border" />
                    )}
                  </div>
                  <div className={`flex flex-col gap-1 ${i < STEPS.length - 1 ? "pb-4" : ""}`}>
                    <span className="text-[17px] font-bold">{step.title}</span>
                    <span className="text-[15px] text-dark-text">{step.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[560px] pb-[120px]">
            <div className="relative h-[430px] w-full overflow-hidden rounded-[18px]">
              <Image src="/assets/story-cny.png" alt="" fill className="object-cover" />
            </div>
            <div className="absolute inset-x-4 bottom-0 flex flex-col gap-3 rounded-[18px] bg-cream px-5 pt-5 pb-4 text-ink shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-[15px] font-bold">kossiarou</span>
                <span className="font-mono text-xs text-[#555a69]">KSR-2026-0948</span>
              </div>
              <span className="flex w-fit items-center gap-1.5 rounded-full bg-success-soft px-2.5 py-[3px] text-[13px] font-bold text-success">
                <span className="h-[7px] w-[7px] rounded-full bg-success" />
                Livré
              </span>
              <span className="font-mono text-[28px]">3 000,00 CNY</span>
              <span className="pb-1.5 font-mono text-[13px] text-[#555a69]">
                ≈ 234 000 FCFA débités
              </span>
              {RECEIPT_ROWS.map((row) => (
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
