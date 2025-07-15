"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import GradientScrollText from "@/components/GradientScrollText";
// import SalonShowcaseSection from "@/components/SalonShowcaseSection";

export default function Services() {
  const services = [
    {
      title: "Salons & Studios",
      icon: "✂️",
      description: "Streamline your salon operations with comprehensive appointment scheduling, staff management, and customer relationship tools.",
      features: ["Appointment management", "Staff scheduling", "Customer profiles"],
      color: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      iconBg: "from-primary to-purple-600",
      buttonColor: "bg-primary hover:bg-purple-700",
    },
    {
      title: "Makeup Artists",
      icon: "🎨",
      description: "Grow your freelance business with lead tracking, booking management, and automated promotional campaigns.",
      features: ["Lead tracking", "Booking management", "Promotion campaigns"],
      color: "from-pink-50 to-pink-100",
      borderColor: "border-pink-200",
      iconBg: "from-secondary to-pink-600",
      buttonColor: "bg-secondary hover:bg-pink-600",
    },
    {
      title: "Dermatologists",
      icon: "👨‍⚕️",
      description: "Enhance your practice with advanced patient management, clinic automation, and comprehensive reporting tools.",
      features: ["Patient management", "Clinic automation", "Advanced reporting"],
      color: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      iconBg: "from-accent to-blue-600",
      buttonColor: "bg-accent hover:bg-blue-600",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Tailored Solutions for Every Beauty Professional
          </h2>
          <p className="text-xl text-purple-400 max-w-3xl mx-auto">
            Whether you run a salon, work as a makeup artist, or manage a dermatology clinic, <span className="text-pink-500 font-semibold">Glame</span> has the perfect solution for you.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className={`bg-white/80 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col min-h-[420px]`}
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-3xl bg-gradient-to-br from-purple-100 to-pink-100">
                <span>{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-5 text-base">{service.description}</p>
              <ul className="space-y-2 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700 text-base">
                    <span className="text-green-500 mr-2">✔️</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-auto text-sm font-semibold pt-2 select-none cursor-default text-[#f6339a]">
                Learn More →
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Salon Showcase Section */}
      {/* <SalonShowcaseSection /> */}


    </section>
  );
}
