# Kossiarou — marketing site

Bilingual (French / English) waitlist landing page for the Kossiarou app (a KryptaPay service that
converts CFA francs into EUR, USD, CNY and AED). It implements the "Design site web Kossiarou"
Claude Design project.

## Stack

- Next.js 16 (App Router, Turbopack) and React 19, TypeScript
- Tailwind CSS v4, fonts Sora and IBM Plex Mono (`next/font`)
- No database and no API: the site is static apart from the language redirect (`src/proxy.ts`)

> This Next.js version has breaking changes compared to older releases. Before writing code, read
> the matching guide in `node_modules/next/dist/docs/` (see `AGENTS.md`).

## Getting started

Requires Node.js 20.9 or newer (developed on Node 22).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000): it redirects to `/fr` or `/en`.

| Command | What it does |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build (generates `/fr` and `/en` as static pages) |
| `npm run start` | Serves the production build |
| `npm run lint` | ESLint (also rejects text written directly in components, see below) |
| `npx tsc --noEmit` | Type check (also fails when an English text is missing) |

Optional environment variable:

- `NEXT_PUBLIC_SITE_URL`: public address of the site, used to build the absolute URL of the share
  image (`og:image`). Defaults to `https://kossiarou.com`, which has to be confirmed.

## Languages (FR / EN)

- `/fr` and `/en` are separate pages. A visit to any address without a language is redirected by
  `src/proxy.ts`, in this order: language chosen with the FR/EN toggle (cookie `locale`), browser
  language (`Accept-Language`), then French.
- **All user-facing text lives in `src/i18n/dictionaries/fr.ts` (reference language) and `en.ts`.**
  Never write text directly in a component: add the key to both dictionaries and read it from the
  `dict` prop. `en.ts` is typed on `fr.ts`, so a missing English text fails `tsc`, and ESLint
  (`react/jsx-no-literals`) rejects text written in a component.
- Amounts are written in the local format inside the dictionaries (`3 000,00 CNY` in French,
  `3,000.00 CNY` in English).
- The English text was written for this project and still needs a review before launch.

## Project structure

```
src/
  app/
    [lang]/
      layout.tsx        <html lang>, fonts, page title, share tags (Open Graph, Twitter)
      page.tsx          the single page: assembles the sections below
      not-found.tsx     localized 404 page (FR / EN)
      [...rest]/page.tsx  sends every unknown path to the 404 page
    globals.css         design tokens (colors) and base styles
    icon.svg, favicon.ico
  components/site/      one file per section (Header, Hero, WaitlistCards, StorySection,
                        AppShowcase, Features, OpenAccountSteps, Pricing, Trust, Faq,
                        SignupForm, Footer) plus Logo, LanguageToggle, NotFoundPage
  i18n/                 languages, dictionary loader, fr.ts and en.ts
  proxy.ts              language redirect
public/assets/          photos and share image
```

Sections keep the ids of the design (`#top`, `#listes`, `#histoires`, `#app`, `#fonctionnalites`,
`#ouvrir`, `#tarifs`, `#confiance`, `#faq`, `#inscription`): navigation links rely on them.

## Design and assets

- Source of truth: the Claude Design project (`Kossiarou Site.dc.html`). Colors, fonts and spacing
  follow it; keep the palette, fonts, section ids and file names in `public/assets/`.
- Photos come from Unsplash (credits are in the footer). `og-image.png` is the share image.
- The four story photos (`story-cny.png`, `story-eur.png`, `story-aed.png`, `story-usd.png`) are
  real photos. To change one, keep the file name. Check that the authors of the EUR, AED and USD
  photos are credited in the footer (`footer.photoCredit` in both dictionaries).
- Layout was checked from 280 px to 3440 px wide. The navigation becomes a burger menu under 800 px,
  and "S'inscrire" moves into that menu under 360 px.

## What is still missing before launch

| Item | Where to change it |
|---|---|
| Real fees (the table shows `[FRAIS]` / `[FEES]`) | `pricing.feesRows` in both dictionaries |
| Commission amount, first-user perk, partner banks (currently "announced before we open" / "banks soon") | `waitlist.cards`, `features.items` |
| Regulatory status, approved partners, testimonials ("Soon") | `trust.cards`, `footer.legal` |
| Legal pages (Mentions légales, Confidentialité, Conditions d'utilisation): the footer links point to `#` | `footer.columns` and new pages |
| Final site address for the share image | `NEXT_PUBLIC_SITE_URL` |
| English review | `src/i18n/dictionaries/en.ts` |

The optional "four coins" variant under the hero (`heroBase = 'pieces'` in the design) is not
implemented.

## Signup form

`src/components/site/SignupForm.tsx` opens the WhatsApp waiting group of the chosen list and shows a
thank-you message, but **nothing is stored**: there is no back-end for the first name, country and
goal. See the `TODO` in that file. Where the signups should go is still to be decided; the form
will need field checks, error messages and spam protection once it is connected.

## Working on this repository

- Never push to `main`: create a branch and open a pull request.
- Before opening one, run `npm run lint`, `npx tsc --noEmit` and `npm run build`.
- There are no automated tests yet.
- Run the development server in your own terminal. Starting it from a tool that later closes its
  output pipe makes the Next.js workers crash with "Jest worker encountered 2 child process
  exceptions" (`write EPIPE`).

## Related repositories

`kossiarou-api`, `kossiarou-infra` and `kossiarou-mobile` are the other parts of the Kossiarou
project. They are not part of this repository, and access to them is granted through the Kossiarou
GitHub organization.
