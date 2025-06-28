"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import GradientScrollText from "@/components/GradientScrollText";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonialSets = [
    [
      {
        name: "Sarah Chen",
        role: "Salon Owner, Miami",
        initial: "S",
        rating: 5,
        content: "Glame transformed how we manage our salon. Appointments are seamless, and our customer retention improved by 40%!",
        color: "from-primary to-secondary",
      },
      {
        name: "Maria Rodriguez",
        role: "Makeup Artist, Los Angeles",
        initial: "M",
        rating: 5,
        content: "As a freelance makeup artist, Glame helps me stay organized and professional. My bookings increased by 60%!",
        color: "from-secondary to-pink-600",
      },
      {
        name: "Dr. James Wilson",
        role: "Dermatologist, New York",
        initial: "D",
        rating: 5,
        content: "The patient management features are outstanding. We've reduced wait times and improved patient satisfaction significantly.",
        color: "from-accent to-blue-600",
      },
    ],
    [
      {
        name: "Aisha Patel",
        role: "Spa Owner, Chicago",
        initial: "A",
        rating: 5,
        content: "The WhatsApp integration is a game-changer. We stay connected with clients effortlessly!",
        color: "from-green-500 to-teal-600",
      },
      {
        name: "Lisa Thompson",
        role: "Beauty Consultant, Dallas",
        initial: "L",
        rating: 5,
        content: "Billing and invoicing used to be a headache. Now it's completely automated and professional!",
        color: "from-purple-500 to-indigo-600",
      },
      {
        name: "Rachel Kim",
        role: "Hair Stylist, Seattle",
        initial: "R",
        rating: 5,
        content: "The analytics help me understand my business better. I've optimized my services based on the insights!",
        color: "from-yellow-500 to-orange-500",
      },
    ],
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonialSets.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonialSets.length) % testimonialSets.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
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
            Loved by Beauty Professionals Worldwide
          </GradientScrollText>
          <GradientScrollText
            as="p"
            className="text-xl max-w-3xl mx-auto"
            variant="purple"
            glow={true}
          >
            Don't just take our word for it. Here's what our customers say about Glame.
          </GradientScrollText>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="grid md:grid-cols-3 gap-8"
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
              >
                {testimonialSets[currentSlide].map((testimonial, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-xl">
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center`}>
                        <span className="text-white font-bold text-lg">{testimonial.initial}</span>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex text-yellow-400 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700">"{testimonial.content}"</p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonialSets.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-opacity ${
                  index === currentSlide ? "bg-white" : "bg-white/50 hover:bg-white/80"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
