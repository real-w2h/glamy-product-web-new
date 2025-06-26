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
    <section id="home" className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-purple-200 flex items-center justify-center py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Grow Your Beauty Business with{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Glame
            </span>
          </motion.h1>

          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full text-lg font-medium text-gray-700 shadow-lg border border-white/20">
              ✂️ Salons
            </span>
            <span className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full text-lg font-medium text-gray-700 shadow-lg border border-white/20">
              🎨 Makeup Artists
            </span>
            <span className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full text-lg font-medium text-gray-700 shadow-lg border border-white/20">
              👨‍⚕️ Dermatologists
            </span>
          </motion.div>

          <motion.p 
            className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Simplify your beauty business with our all-in-one CRM platform. Manage appointments, billing, and customer engagement effortlessly.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 px-8 py-4 text-lg font-semibold"
              onClick={scrollToExplore}
            >
              Explore Glame
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white/95 backdrop-blur-sm hover:bg-white border-2 border-purple-200 hover:border-purple-300 text-gray-700 hover:text-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg font-semibold"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Additional decorative elements */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <p className="text-sm text-gray-500 mb-4">
              Trusted by 10,000+ beauty professionals worldwide
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-75"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-150"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-300"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
