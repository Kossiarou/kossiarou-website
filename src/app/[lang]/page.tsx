import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/dictionaries";
import { hasLocale } from "@/i18n/config";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Pain } from "@/components/site/Pain";
import { Destinations } from "@/components/site/Destinations";
import { WaitlistCards } from "@/components/site/WaitlistCards";
import { StorySection } from "@/components/site/StorySection";
import { AppShowcase } from "@/components/site/AppShowcase";
import { Features } from "@/components/site/Features";
import { OpenAccountSteps } from "@/components/site/OpenAccountSteps";
import { Countries } from "@/components/site/Countries";
import { Pricing } from "@/components/site/Pricing";
import { Trust } from "@/components/site/Trust";
import { Faq } from "@/components/site/Faq";
import { SignupForm } from "@/components/site/SignupForm";
import { Footer } from "@/components/site/Footer";
import { JsonLd } from "@/components/site/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { faqSchema, graph, serviceSchema, websiteSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return buildMetadata({
    lang,
    title: dict.meta.title,
    description: dict.meta.description,
    ogTitle: dict.meta.ogTitle,
    ogDescription: dict.meta.ogDescription,
    imageAlt: dict.meta.ogImageAlt,
    bilingual: true,
  });
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  // The structured data repeats the visible FAQ word for word (a Google requirement).
  const faqItems = dict.faq.questions.map((q, i) => ({ q, a: dict.faq.answers[i] }));
  const schema = graph(
    websiteSchema(lang),
    serviceSchema(dict.meta.schema, absoluteUrl(lang)),
    faqSchema(faqItems),
  );

  return (
    <div className="min-h-screen bg-cream">
      {/* First stop for keyboard users: jumps over the navigation to the content. */}
      <a
        href="#contenu"
        className="sr-only rounded-xl bg-ink px-4 py-3 text-base font-bold text-cream focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
      >
        {dict.header.skip}
      </a>
      <Header lang={lang} dict={dict.header} />
      <JsonLd data={schema} />
      <main id="contenu" tabIndex={-1} className="outline-none">
        <Hero dict={dict.hero} />
        <Pain dict={dict.pain} />
        <Destinations dict={dict.destinations} />
        <WaitlistCards dict={dict.waitlist} />
        <StorySection dict={dict.story} />
        <AppShowcase dict={dict.app} />
        <Features dict={dict.features} />
        <OpenAccountSteps dict={dict.steps} />
        <Countries dict={dict.countries} />
        <Pricing dict={dict.pricing} />
        <Trust dict={dict.trust} />
        <Faq dict={dict.faq} />
        <SignupForm dict={dict.signup} />
      </main>
      <Footer dict={dict.footer} />
    </div>
  );
}
