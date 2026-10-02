# Kossiarou — marketing site

Next.js (App Router, TypeScript, Tailwind v4) implementation of the "Design site web Kossiarou"
Claude Design project, waitlist landing page for the Kossiarou app (KryptaPay).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Known gaps to fill in before launch

- **Images are placeholders.** `public/assets/*.png` (hero, waitlist cards, CNY story) are
  generated stand-ins, not the real photos from the design — the design-import tool's file read
  is capped below the original PNGs' size, so they came back truncated. Re-export the originals
  from the Design project and drop them in at the same filenames/dimensions.
- **Bracketed placeholders** throughout the copy (`[FRAIS]`, `[COMMISSION]`, `[AVANTAGE]`,
  `[BANQUES]`, `[E-MAIL CONTACT]`, `[WHATSAPP]`, `[STATUT RÉGLEMENTAIRE...]`) are intentional,
  carried over from the design — fill in with real values before launch.
- **FAQ answers** are all `[RÉPONSE À COMPLÉTER]` — the design only specified the questions.
- **Signup form has no backend yet** — submitting shows a local confirmation message but doesn't
  send anywhere. See the `TODO` in `src/components/site/SignupForm.tsx`.
- **Language toggle (FR/EN) is cosmetic** — the design only defines French copy; the toggle
  switches visual state but not content. Wire up real i18n once English copy exists.

See `kossiarou-api`, `kossiarou-infra`, and `kossiarou-mobile` for the sibling repos that make up
the rest of the Kossiarou project.
