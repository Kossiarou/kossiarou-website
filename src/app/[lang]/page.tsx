import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/dictionaries";
import { hasLocale } from "@/i18n/config";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { WaitlistCards } from "@/components/site/WaitlistCards";
import { StorySection } from "@/components/site/StorySection";
import { AppShowcase } from "@/components/site/AppShowcase";
import { Features } from "@/components/site/Features";
import { OpenAccountSteps } from "@/components/site/OpenAccountSteps";
import { Pricing } from "@/components/site/Pricing";
import { Trust } from "@/components/site/Trust";
import { Faq } from "@/components/site/Faq";
import { SignupForm } from "@/components/site/SignupForm";
import { Footer } from "@/components/site/Footer";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

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
      <main id="contenu" tabIndex={-1} className="outline-none">
        <Hero dict={dict.hero} />
        <WaitlistCards dict={dict.waitlist} />
        <StorySection dict={dict.story} />
        <AppShowcase dict={dict.app} />
        <Features dict={dict.features} />
        <OpenAccountSteps dict={dict.steps} />
        <Pricing dict={dict.pricing} />
        <Trust dict={dict.trust} />
        <Faq dict={dict.faq} />
        <SignupForm dict={dict.signup} />
      </main>
      <Footer dict={dict.footer} />
    </div>
  );
}
