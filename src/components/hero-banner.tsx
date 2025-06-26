"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroBanner() {
  const scrollToExplore = () => {
    const element = document.getElementById("services");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="gradient-hero py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Grow Your Beauty Business with{" "}
            <span className="text-gradient">Glame</span>
          </motion.h1>

          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-lg font-medium text-gray-700 shadow-sm">
              ✂️ Salons
            </span>
            <span className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-lg font-medium text-gray-700 shadow-sm">
              🎨 Makeup Artists
            </span>
            <span className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-lg font-medium text-gray-700 shadow-sm">
              👨‍⚕️ Dermatologists
            </span>
          </motion.div>

          <motion.p 
            className="text-xl lg:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Simplify your beauty business with our all-in-one CRM platform. Manage appointments, billing, and customer engagement effortlessly.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg"
              className="gradient-primary text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onClick={scrollToExplore}
            >
              Explore Glame
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
            >
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
