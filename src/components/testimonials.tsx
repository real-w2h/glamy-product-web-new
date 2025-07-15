"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonialSets = [
    [
      {
        name: "Sylvia H Green",
        role: "Customer",
        image: "/attached_assets/1_1750152529582.jpg",
        rating: 5,
        content: "There are many variations of long passages available but the content majority have suffered to the editor page when looking at its layout alteration in some injected.",
      },
      {
        name: "Gordo Novak",
        role: "Customer", 
        image: "/attached_assets/3_1750152529582.jpg",
        rating: 5,
        content: "There are many variations of long passages available but the content majority have suffered to the editor page when looking at its layout alteration in some injected.",
      },
      {
        name: "Reid E Butt",
        role: "Customer",
        image: "/attached_assets/4_1750152529582.jpg",
        rating: 5,
        content: "There are many variations of long passages available but the content majority have suffered to the editor page when looking at its layout alteration in some injected.",
      },
      {
        name: "Parker Jimenez",
        role: "Customer",
        image: "/attached_assets/10_1750152529582.jpg",
        rating: 5,
        content: "There are many variations of long passages available but the content majority have suffered to the editor page when looking at its layout alteration in some injected.",
      },
    ],
    [
      {
        name: "Sarah Chen",
        role: "Customer",
        image: "/attached_assets/1_1750152529582.jpg",
        rating: 5,
        content: "Glame transformed how we manage our salon. Appointments are seamless, and our customer retention improved by 40%!",
      },
      {
        name: "Maria Rodriguez",
        role: "Customer",
        image: "/attached_assets/3_1750152529582.jpg",
        rating: 5,
        content: "As a freelance makeup artist, Glame helps me stay organized and professional. My bookings increased by 60%!",
      },
      {
        name: "Dr. James Wilson",
        role: "Customer",
        image: "/attached_assets/4_1750152529582.jpg",
        rating: 5,
        content: "The patient management features are outstanding. We've reduced wait times and improved patient satisfaction significantly.",
      },
      {
        name: "Aisha Patel",
        role: "Customer",
        image: "/attached_assets/10_1750152529582.jpg",
        rating: 5,
        content: "The WhatsApp integration is a game-changer. We stay connected with clients effortlessly!",
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
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-4">
            <span className="text-pink-600 font-semibold text-sm tracking-widest uppercase">
              TESTIMONIALS
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            What Our Client <span className="text-pink-600">Say's</span> About Us
          </h2>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
              >
                {testimonialSets[currentSlide].map((testimonial, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4 ring-2 ring-pink-200">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                        <p className="text-pink-600 text-sm font-medium">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {testimonial.content}
                    </p>
                    
                    <div className="flex text-pink-500">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-12 space-x-3">
            {testimonialSets.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? "bg-pink-600 scale-125" 
                    : "bg-pink-300 hover:bg-pink-400"
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
