"use client";

import Header from "@/components/header";
import HeroBanner from "@/components/hero-banner";
import Hero2Banner from "@/components/Hero2Banner";
import HerobannerFinal from "@/components/HerobannerFinal";
import GrowSalonSection from "@/components/GrowSalonSection";
import ImageSlider from "@/components/image-slider";
import Services from "@/components/services";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import CTABanner from "@/components/cta-banner";
import Footer from "@/components/footer";
import WorkProcessSection from "@/components/WorkProcessSection";
import PieChartSection from "@/components/PieChartSection";
import FormSection from "@/components/FormSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HerobannerFinal />
      <Hero2Banner />
      <HeroBanner />
      <GrowSalonSection />
      <WorkProcessSection />
      <ImageSlider />
      <PieChartSection />
      <FormSection />
      <Services />
      <Features />
      <Testimonials />
      <CTABanner />
      <Footer />
    </div>
  );
}
