now cimport React from "react";
import { motion } from "framer-motion";
import CompleteSalonAutomationHero from "@/components/CompleteSalonAutomationHero";

export default function CompleteSalonAutomationHero() {
  return (
    <section className="relative bg-[#fff6f7] py-20 lg:py-32 overflow-visible px-4 flex flex-col items-center justify-center min-h-[80vh]">
      {/* Top Badge */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-6 flex justify-center">
        <span className="bg-pink-100 text-pink-700 px-4 py-1 rounded-full text-sm font-semibold shadow-sm flex items-center gap-2">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 20 12 16.9 7.82 20 9 12.91l-5-3.64 5.91-.91L12 2z" fill="#ec4899"/></svg>
          Complete Salon Automation CRM
        </span>
      </motion.div>
      {/* Main Heading */}
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-4 leading-tight relative">
        <span className="relative inline-block text-pink-500">
          Complete Salon Automation
          <svg viewBox="0 0 320 18" width="100%" height="18" className="absolute left-0 right-0 -bottom-2 w-full" style={{zIndex: -1}}>
            <path d="M5 15 Q160 25 315 10" stroke="#ef476f" strokeWidth="3" fill="none" />
          </svg>
        </span>{' '}CRM
      </motion.h1>
      {/* Subheading */}
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg sm:text-xl text-gray-600 text-center max-w-2xl mb-10">
        Streamline every aspect of your beauty business with our all-in-one CRM platform. Manage appointments, sales, billing, staff, and marketing with ease.
      </motion.p>
      {/* Call to Action Buttons */}
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} className="relative z-10 mt-6 flex flex-row gap-6 justify-center items-center w-full max-w-2xl mx-auto">
        <button className="rounded-full bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 shadow-lg transition-all text-base">Get Free Demo</button>
        <button className="rounded-full bg-white border border-pink-500 text-pink-500 font-semibold px-8 py-3 shadow-lg transition-all text-base hover:bg-pink-50">Video Demo</button>
      </motion.div>
      {/* Decorative SVGs */}
      {/* Left Arrow SVG */}
      <motion.svg initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="absolute left-32 top-1/2 -translate-y-1/2 hidden md:block z-10" width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 70 Q60 10 110 60" stroke="#ec4899" strokeWidth="4" fill="none" />
        <path d="M110 60 l-10 -5 l5 10" stroke="#ec4899" strokeWidth="4" fill="none" />
      </motion.svg>
      {/* Right Megaphone SVG */}
      <motion.svg initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.7 }} className="absolute right-56 top-1/2 -translate-y-1/2 hidden md:block z-10" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#ec4899" strokeWidth="4">
          <rect x="30" y="30" width="20" height="20" rx="5" fill="none" />
          <path d="M50 40 l20 -10" />
          <path d="M50 40 l20 10" />
          <path d="M30 40 l-10 10" />
        </g>
      </motion.svg>
      {/* Plus Icon SVG */}
      <motion.svg initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.8 }} className="absolute right-32 top-24 hidden md:block z-10" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#ec4899" strokeWidth="4">
          <line x1="16" y1="6" x2="16" y2="26" />
          <line x1="6" y1="16" x2="26" y2="16" />
        </g>
      </motion.svg>
      {/* Floating Stat Card (left) */}
      <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="absolute left-16 bottom-32 hidden md:block">
        <div className="bg-white rounded-xl shadow-2xl p-4 min-w-[140px] max-w-[180px] flex flex-col items-center border border-gray-100 opacity-90">
          <span className="text-xs text-gray-500 mb-2">Total visits this month</span>
          <span className="font-bold text-lg text-gray-800">4,532,234</span>
          <span className="text-green-500 text-xs">+7.2%</span>
          <div className="w-full mt-2">
            <div className="h-2 bg-pink-200 rounded-full w-3/4 mb-1"></div>
            <div className="h-2 bg-gray-200 rounded-full w-1/2"></div>
          </div>
        </div>
      </motion.div>
      {/* Floating Stat Card (right) */}
      <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="absolute right-16 top-32 hidden md:block">
        <div className="bg-white rounded-xl shadow-2xl p-4 min-w-[140px] max-w-[180px] flex flex-col items-center border border-gray-100 opacity-90">
          <span className="text-xs text-gray-500 mb-2">Top Location</span>
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=64&h=40" alt="Top Location" className="rounded-lg w-16 h-10 object-cover mb-2" />
          <span className="font-bold text-lg text-gray-800">12,8392</span>
        </div>
      </motion.div>
      {/* Centered Main Image */}
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 1 }} className="relative z-10 mt-12 flex justify-center">
        <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=400" alt="Person with Laptop" className="rounded-full w-72 h-72 object-cover shadow-2xl border-8 border-white" />
      </motion.div>
      {/* Testimonial */}
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2 }} className="absolute right-32 bottom-16 hidden md:block bg-white rounded-xl shadow-lg p-6 max-w-xs border border-gray-100">
        <div className="flex items-center mb-2">
          <span className="text-pink-500 text-xl mr-2">★★★★★</span>
        </div>
        <p className="text-gray-700 text-sm mb-2">“We are dedicated, reliable & assigned to grow your business.”</p>
        <div className="flex items-center gap-2">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 20 12 16.9 7.82 20 9 12.91l-5-3.64 5.91-.91L12 2z" fill="#ec4899"/></svg>
          <span className="text-xs text-pink-500 font-semibold">CEO & Founder</span>
        </div>
      </motion.div>
    </section>
  );
} 