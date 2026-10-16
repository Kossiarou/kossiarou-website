import { lang as getLang } from "next/root-params";
import { defaultLocale, hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { NotFoundPage } from "@/components/site/NotFoundPage";

async function resolveLang() {
  const requested = await getLang();
  return hasLocale(requested) ? requested : defaultLocale;
}

// Shown when notFound() is thrown under /fr or /en (see [...rest]/page.tsx).
// The language comes from the URL; any other value falls back to French.
export default async function NotFound() {
  const lang = await resolveLang();
  const dict = await getDictionary(lang);

  return <NotFoundPage lang={lang} dict={dict.notFound} />;
}
