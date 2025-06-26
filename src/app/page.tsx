"use client";

import Header from "@/components/header";
import HeroBanner from "@/components/hero-banner";
import ImageSlider from "@/components/image-slider";
import Services from "@/components/services";
import LeadGeneration from "@/components/lead-generation";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import CTABanner from "@/components/cta-banner";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroBanner />
      <ImageSlider />
      <Services />
      <LeadGeneration />
      <Features />
      <Testimonials />
      <CTABanner />
      <Footer />
    </div>
  );
}
