"use client";

import Header from "@/components/header";
import HeroBanner from "@/components/hero-banner";
import GrowSalonSection from "@/components/GrowSalonSection";
import ImageSlider from "@/components/image-slider";
import Services from "@/components/services";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import CTABanner from "@/components/cta-banner";
import Footer from "@/components/footer";
import WorkProcessSection from "@/components/WorkProcessSection";
import PieChartSection from "@/components/PieChartSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroBanner />
      <GrowSalonSection />
      <WorkProcessSection />
      <ImageSlider />
      <PieChartSection />
      <Services />
      <Features />
      <Testimonials />
      <CTABanner />
      <Footer />
    </div>
  );
}
