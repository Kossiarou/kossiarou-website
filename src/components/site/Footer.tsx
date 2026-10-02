import { Logo } from "./Logo";

const COLUMNS = [
  {
    title: "PRODUIT",
    links: [
      { href: "#app", label: "L’app" },
      { href: "#tarifs", label: "Tarifs" },
      { href: "#listes", label: "Listes d’attente" },
    ],
  },
  {
    title: "AIDE",
    links: [{ href: "#faq", label: "FAQ" }],
    extra: ["[E-MAIL CONTACT]", "[WHATSAPP]"],
  },
  {
    title: "LÉGAL",
    links: [
      { href: "#", label: "Mentions légales" },
      { href: "#", label: "Confidentialité" },
      { href: "#", label: "Conditions d’utilisation" },
    ],
  },
];

export function Footer() {
  return (
    <footer>
      <div className="mx-auto flex max-w-[1200px] flex-col gap-7 px-10 pt-[52px] pb-11">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-7">
          <div className="col-span-2 flex min-w-0 flex-col gap-3">
            <Logo size="lg" />
            <p className="text-sm leading-[1.55] text-ink-soft">
              « Kossiarou » signifie « paiement » en bariba.
              <br />
              Une application de KryptaPay.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title} className="flex flex-col gap-2.5 text-sm">
              <span className="text-xs font-bold tracking-[0.08em]">{col.title}</span>
              {col.links.map((link) => (
                <a key={link.label} href={link.href} className="underline">
                  {link.label}
                </a>
              ))}
              {col.extra?.map((item) => (
                <span key={item} className="font-mono text-[13px] text-ink-soft">
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1.5 text-xs leading-[1.6] text-ink-soft">
          <p>
            Kossiarou est un service de KryptaPay. [STATUT RÉGLEMENTAIRE ET PARTENAIRES AGRÉÉS À
            COMPLÉTER]. © 2026 KryptaPay.
          </p>
          <p>
            Photos : Ali Mkumbwa, Gylain Omer, Yingchou Han, Joyce Busola, David Rotimi et Sandisk,
            sur Unsplash (licence Unsplash).
          </p>
        </div>
      </div>
    </footer>
  );
}
