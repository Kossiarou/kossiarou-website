const TIERS = [
  {
    name: "Standard",
    badge: "Par défaut",
    featured: true,
    perOperation: "2 000 000 FCFA",
    perOperationNote: "par opération · ≈ 3 000 €",
    perMonth: "15 000 €",
    perMonthNote: "par mois · ≈ 9 839 355 FCFA",
    bullets: [
      "Compte XOF, conversion et virements",
      "Cartes virtuelles XOF et USD",
      "Vérification d’identité obligatoire",
    ],
  },
  {
    name: "Pro",
    badge: "Sur demande",
    featured: false,
    perOperation: "10 000 €",
    perOperationNote: "par opération",
    perMonth: "50 000 €",
    perMonthNote: "par mois",
    bullets: [
      "Pour les commerçants et freelances",
      "Justificatifs : origine des fonds, activité",
      "Validation par notre équipe",
    ],
  },
  {
    name: "Business",
    badge: "Sur demande",
    featured: false,
    perOperation: "25 000 €",
    perOperationNote: "par opération",
    perMonth: "150 000 €",
    perMonthNote: "par mois",
    bullets: [
      "Pour les importateurs et entreprises",
      "Au-delà : plafond sur mesure",
      "Interlocuteur dédié",
    ],
  },
];

export function Pricing() {
  return (
    <section id="tarifs" className="border-b border-border">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-[18px] px-10 py-[88px]">
        <span className="font-mono text-[13px] tracking-[0.12em] text-[#555a69] uppercase">
          Tarifs et plafonds
        </span>
        <h2 className="max-w-[640px] text-[clamp(34px,4.5vw,48px)] leading-[1] tracking-[-0.03em]">
          Des plafonds qui grandissent avec votre activité.
        </h2>
        <p className="max-w-[720px] text-[17px] leading-[1.6] text-ink-soft">
          Tout le monde commence en Standard. Commerçants et entrepreneurs peuvent demander un
          plafond plus élevé en justifiant l’origine de leurs fonds et leur activité.
        </p>

        <div className="mt-[26px] grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[18px]">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col gap-1.5 rounded-2xl bg-white p-6 ${
                tier.featured ? "border-2 border-ink" : "border border-border"
              }`}
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xl font-bold">{tier.name}</span>
                <span
                  className={`rounded-full px-2.5 py-[3px] text-xs font-bold ${
                    tier.featured ? "bg-gold" : "bg-chip-2 font-semibold"
                  }`}
                >
                  {tier.badge}
                </span>
              </div>
              <span className="text-xs font-bold tracking-[0.06em]">JUSQU’À</span>
              <span className="font-mono text-[25px]">{tier.perOperation}</span>
              <span className="mb-2.5 text-[13px] text-ink-soft">{tier.perOperationNote}</span>
              <span className="text-xs font-bold tracking-[0.06em]">JUSQU’À</span>
              <span className="font-mono text-[25px]">{tier.perMonth}</span>
              <span className="mb-3 text-[13px] text-ink-soft">{tier.perMonthNote}</span>
              <div className="flex flex-col gap-2 text-[15px]">
                {tier.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                    {bullet}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
