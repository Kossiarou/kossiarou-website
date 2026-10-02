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

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <Hero />
      <WaitlistCards />
      <StorySection />
      <AppShowcase />
      <Features />
      <OpenAccountSteps />
      <Pricing />
      <Faq />
      <SignupForm />
      <Footer />
    </div>
  );
}
