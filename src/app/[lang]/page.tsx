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
import { Faq } from "@/components/site/Faq";
import { SignupForm } from "@/components/site/SignupForm";
import { Footer } from "@/components/site/Footer";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-cream">
      <Header lang={lang} dict={dict.header} />
      <Hero dict={dict.hero} />
      <WaitlistCards dict={dict.waitlist} />
      <StorySection dict={dict.story} />
      <AppShowcase dict={dict.app} />
      <Features dict={dict.features} />
      <OpenAccountSteps dict={dict.steps} />
      <Pricing dict={dict.pricing} />
      <Faq dict={dict.faq} />
      <SignupForm dict={dict.signup} />
      <Footer dict={dict.footer} />
    </div>
  );
}
