"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Home, Calendar, MessageSquare, CreditCard, Package, Boxes, Users, BarChart2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import GradientScrollText from "@/components/GradientScrollText";

// Using placeholder images - replace with your actual images
const slide1 = { src: "/attached_assets/1_1750152529582.jpg" };
const slide2 = { src: "/attached_assets/3_1750152529582.jpg" };
const slide3 = { src: "/attached_assets/4_1750152529582.jpg" };
const slide4 = { src: "/attached_assets/10_1750152529582.jpg" };

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image: slide1,
      title: "How To Grow Your Salon?",
      description: "Join us and grow together towards the peak of success!",
      cta: "Book Your Free Demo"
    },
    {
      id: 2,
      image: slide2,
      title: "All in One Solutions for Salon",
      description: "Join us and grow together towards the peak of success!",
      cta: "Free Demo"
    },
    {
      id: 3,
      image: slide3,
      title: "One Platform Pure Salon Magic",
      description: "Smart salon solutions with automated marketing",
      cta: "Free Demo"
    },
    {
      id: 4,
      image: slide4,
      title: "The Smart Salon Experience",
      description: "Manage your beauty business with seamless scheduling and smooth operations",
      cta: "Free Trial"
    }
  ];

  const itemsToShow = 3;
  const maxIndex = Math.max(0, slides.length - itemsToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <GradientScrollText
            as="h2"
            className="text-3xl lg:text-4xl font-bold mb-4"
            variant="apple"
            glow={true}
          >
            <span style={{
              background: 'linear-gradient(90deg, #f6339a, #ad46ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block'
            }}>Transform Your</span> <span style={{ color: '#f6339a', WebkitTextFillColor: '#f6339a' }}>Beauty Business Today</span>
          </GradientScrollText>
        </motion.div>

        <div className="relative">
          {/* Navigation Arrows - Top Right */}
          <div className="absolute top-6 right-8 flex gap-2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="bg-white/90 backdrop-blur-sm text-gray-800 border-white/50 hover:bg-white shadow-lg"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-white/90 backdrop-blur-sm text-gray-800 border-white/50 hover:bg-white shadow-lg"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          {/* Main Slider Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-1/3 flex-shrink-0 px-3">
                  <Link href="/signup">
                    <div className="cursor-pointer group">
                      <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white">
                        <img
                          src={slide.image.src}
                          alt={slide.title}
                          className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator + Progress Bar Container */}
          <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center mt-4">
            {/* Dots Indicator */}
            <div className="flex space-x-2 mb-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  className={`rounded-full border-2 border-white transition-all duration-300 focus:outline-none ${
                    index === currentIndex
                      ? "w-5 h-5 shadow-lg" // active dot
                      : "w-3.5 h-3.5 bg-gray-300 hover:bg-gray-400" // inactive dot
                  }`}
                  style={index === currentIndex ? { background: '#C43AFF' } : {}}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div 
                className="rounded-full transition-all duration-300 h-1"
                style={{ background: '#C43AFF', width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link href="/signup">
            <Button 
              size="lg"
              className="gradient-primary text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Your Journey with Glame
            </Button>
          </Link>
          <p className="text-gray-600 mt-4">
            Join thousands of beauty professionals already growing with Glame
          </p>
        </motion.div>

        {/* Marquee Band at Bottom with 15px margin top and 20px padding top and bottom */}
        <div style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          background: '#fff',
          borderTop: '2px solid #f3e8ff',
          boxShadow: '0 -2px 8px rgba(244, 63, 94, 0.04)',
          zIndex: 20,
          overflow: 'hidden',
          height: 'auto',
          minHeight: '20px',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '20px',
          paddingBottom: '20px',
          marginTop: '15px',
        }}>
          <div style={{
            display: 'inline-block',
            whiteSpace: 'nowrap',
            animation: 'marquee 18s linear infinite',
            fontWeight: 600,
            fontSize: '14px',
            color: '#ad46ff',
            letterSpacing: '0.04em',
            lineHeight: '20px',
          }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              <Home size={16} style={{ marginRight: 2 }} /> Salon CRM
            </span>
            &nbsp; • &nbsp;
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              <Calendar size={16} style={{ marginRight: 2 }} /> Appointment
            </span>
            &nbsp; • &nbsp;
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              <MessageSquare size={16} style={{ marginRight: 2 }} /> WhatsApp Campaign
            </span>
            &nbsp; • &nbsp;
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              <CreditCard size={16} style={{ marginRight: 2 }} /> Billing
            </span>
            &nbsp; • &nbsp;
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              <Package size={16} style={{ marginRight: 2 }} /> Product Management
            </span>
            &nbsp; • &nbsp;
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              <Boxes size={16} style={{ marginRight: 2 }} /> Inventory Management
            </span>
            &nbsp; • &nbsp;
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              <Users size={16} style={{ marginRight: 2 }} /> Employee Management
            </span>
            &nbsp; • &nbsp;
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              <BarChart2 size={16} style={{ marginRight: 2 }} /> Sales Reports
            </span>
            &nbsp; • &nbsp;
            {/* Repeat for smooth marquee */}
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              <Home size={16} style={{ marginRight: 2 }} /> Salon CRM
            </span>
            &nbsp; • &nbsp;
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              <Calendar size={16} style={{ marginRight: 2 }} /> Appointment
            </span>
            &nbsp; • &nbsp;
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              <MessageSquare size={16} style={{ marginRight: 2 }} /> WhatsApp Campaign
            </span>
            &nbsp; • &nbsp;
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              <CreditCard size={16} style={{ marginRight: 2 }} /> Billing
            </span>
            &nbsp; • &nbsp;
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              <Package size={16} style={{ marginRight: 2 }} /> Product Management
            </span>
            &nbsp; • &nbsp;
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              <Boxes size={16} style={{ marginRight: 2 }} /> Inventory Management
            </span>
            &nbsp; • &nbsp;
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              <Users size={16} style={{ marginRight: 2 }} /> Employee Management
            </span>
            &nbsp; • &nbsp;
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              <BarChart2 size={16} style={{ marginRight: 2 }} /> Sales Reports
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Add this to the bottom of the file (or in a global CSS file):
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
*/