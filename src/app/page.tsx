"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero2Banner from "@/components/Hero2Banner";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import CTABanner from "@/components/cta-banner";
import Features from "@/components/features";
import LeadGeneration from "@/components/lead-generation";
import GlameFeaturesSection from "@/components/GlameFeaturesSection";
import SalonShowcaseSection from "@/components/SalonShowcaseSection";
import GlameDashboardBanner from "@/components/GlameDashboardBanner";
import PieChartSection from "@/components/PieChartSection";
import BusinessReportSection from "@/components/BusinessReportSection";
import GrowSalonSection from "@/components/GrowSalonSection";
import ScrollTriggeredPopup from "@/components/ScrollTriggeredPopup";
import MultiImageSlider from "../components/MultiImageSlider";
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50">
      <Header />
      
      <div className="pt-16">
        <MultiImageSlider />
        <GlameDashboardBanner />
        {/* <FormSection /> */}
        {/* <BusinessReportSection /> */}
        {/* Banner Section Alignment Fix ko hata diya */}
        {/* <WorkProcessSection /> */}
        {/* <PieChartSection /> */}
        <Hero2Banner />
        <CTABanner />
        <GlameFeaturesSection />
        <Services />
        <Testimonials />
        <Features />
        <GrowSalonSection />
        <Footer />
        <ScrollTriggeredPopup />
      </div>
    </div>
  );
}
