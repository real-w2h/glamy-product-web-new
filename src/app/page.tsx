"use client";

import Header from "@/components/header";
import HeroBanner from "@/components/hero-banner";
import Hero2Banner from "@/components/Hero2Banner";
import HerobannerFinal from "@/components/HerobannerFinal";
import GrowSalonSection from "@/components/GrowSalonSection";
import ImageSlider from "@/components/image-slider";
import Services from "@/components/services";
import Features from "@/components/features";
import GlameFeaturesSection from "@/components/GlameFeaturesSection";
import GlameDashboardBanner from "@/components/GlameDashboardBanner";
import Testimonials from "@/components/testimonials";
import CTABanner from "@/components/cta-banner";
import Footer from "@/components/footer";
import WorkProcessSection from "@/components/WorkProcessSection";
// import PieChartSection from "@/components/PieChartSection";
import FormSection from "@/components/FormSection";
// import BusinessReportSection from "@/components/BusinessReportSection";
import ScrollTriggeredPopup from "@/components/ScrollTriggeredPopup";
import MultiImageSlider from "../components/MultiImageSlider";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <MultiImageSlider />
      <GlameDashboardBanner />
      {/* <FormSection /> */}
      {/* <BusinessReportSection /> */}
      {/* Banner Section Alignment Fix ko hata diya */}
      {/* <WorkProcessSection /> */}
      {/* <PieChartSection /> */}
      <Hero2Banner />
      <GlameFeaturesSection />
      <Services />
      <Features />
      <GrowSalonSection />
      <Testimonials />
      <CTABanner />
      <Footer />
      <ScrollTriggeredPopup />
    </div>
  );
}
