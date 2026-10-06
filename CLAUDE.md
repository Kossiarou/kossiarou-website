@AGENTS.md

## Languages (FR / EN)

The site is bilingual: `/fr` and `/en` (routes under `src/app/[lang]/`, redirect in `src/proxy.ts`).

- All user-facing text lives in `src/i18n/dictionaries/fr.ts` (reference language) and `en.ts`. Never write text directly in a component: add a key to **both** dictionaries and read it from the `dict` prop.
- `en.ts` is typed on `fr.ts`: a key missing in one language makes `tsc` fail. ESLint (`react/jsx-no-literals`) rejects text written directly in `src/components/**`.
- Components receive their slice of the dictionary as a prop (`dict`) from `src/app/[lang]/page.tsx`, including client components.
- Write amounts in the local format (FR `3 000,00 CNY`, EN `3,000.00 CNY`) inside the dictionaries, not in the components.
- Language-neutral values (brand name, e-mail address, URLs, image paths, icons) stay in the components.
