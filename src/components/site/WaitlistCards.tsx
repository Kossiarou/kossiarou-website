import Image from "next/image";

const CARDS = [
  {
    tag: "Liste 1",
    title: "Premiers utilisateurs",
    description:
      "Pour celles et ceux qui veulent payer, envoyer et voyager avec Kossiarou dès le premier jour.",
    bullets: [
      "Accès à l’app dès l’ouverture dans votre pays",
      "Groupe WhatsApp d’attente : nouvelles et dates en avant-première",
      "Avantage premiers utilisateurs : [AVANTAGE]",
    ],
    image: "/assets/list-users.png",
    cta: "M’inscrire comme premier utilisateur",
    ctaStyle: "bg-gold text-ink hover:bg-gold-hover",
  },
  {
    tag: "Liste 2",
    title: "Devenir ambassadeur",
    description:
      "Vous animez un marché, une école, une association ou une communauté en ligne ? Faites connaître Kossiarou autour de vous.",
    bullets: [
      "Commission : [COMMISSION] par client actif",
      "Lien personnel, kit de communication et QR code",
      "Tableau de bord et référent Kossiarou dédié",
    ],
    image: "/assets/list-ambassadors.png",
    cta: "Candidater comme ambassadeur",
    ctaStyle: "border border-border-soft bg-white hover:bg-cream-soft",
  },
];

export function WaitlistCards() {
  return (
    <section id="listes">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-[18px] px-10 py-[88px]">
        <span className="font-mono text-[13px] tracking-[0.12em] text-[#555a69] uppercase">
          Deux listes d’attente
        </span>
        <h2 className="max-w-[620px] text-[clamp(34px,4.5vw,48px)] leading-[1] tracking-[-0.03em]">
          Choisissez votre place avant l’ouverture.
        </h2>
        <p className="max-w-[700px] text-[19px] leading-[1.5] text-ink-soft">
          Inscrivez-vous sur la liste qui vous correspond. Juste après, vous rejoignez le groupe
          WhatsApp d’attente de votre liste.
        </p>
        <div className="mt-[26px] grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-[18px]">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-white"
            >
              <div className="relative h-[310px] w-full">
                <Image src={card.image} alt="" fill className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col gap-3 px-6 pt-6 pb-[26px]">
                <span className="w-fit rounded-full bg-chip-2 px-2.5 py-[3px] font-mono text-[13px]">
                  {card.tag}
                </span>
                <h3 className="text-[25px] tracking-[-0.02em]">{card.title}</h3>
                <p className="text-[17px] leading-[1.5] text-ink-soft">{card.description}</p>
                <div className="flex flex-col gap-2 text-[15px] leading-[1.45]">
                  {card.bullets.map((bullet) => (
                    <div key={bullet} className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                      {bullet}
                    </div>
                  ))}
                </div>
                <a
                  href="#inscription"
                  className={`mt-auto w-fit rounded-xl px-5 py-3 text-[15px] font-bold whitespace-nowrap ${card.ctaStyle}`}
                >
                  {card.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
