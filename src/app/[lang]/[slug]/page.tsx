import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/dictionaries";
import { hasLocale } from "@/i18n/config";
import { LANDING_PAGES, getLandingPage } from "@/content/landing-fr";
import { LandingPage } from "@/components/site/LandingPage";
import { buildMetadata } from "@/lib/seo";

// The landing, information and legal pages only exist in French (see content/landing-fr.ts).
// Any other path, or the same path in English, is a real 404.
export function generateStaticParams() {
  return LANDING_PAGES.map((page) => ({ lang: "fr", slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const page = getLandingPage(slug);
  if (lang !== "fr" || !page) return {};
  const dict = await getDictionary("fr");
  return buildMetadata({
    lang,
    path: page.slug,
    title: page.title,
    description: page.description,
    imageAlt: dict.meta.ogImageAlt,
  });
}

export default async function Page({ params }: PageProps<"/[lang]/[slug]">) {
  const { lang, slug } = await params;
  const page = getLandingPage(slug);
  if (!hasLocale(lang) || lang !== "fr" || !page) notFound();
  const dict = await getDictionary(lang);

  return <LandingPage lang={lang} dict={dict} page={page} />;
}
