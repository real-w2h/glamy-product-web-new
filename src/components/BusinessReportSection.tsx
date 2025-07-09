import React from "react";
import GradientScrollText from "@/components/GradientScrollText";
import { motion } from "framer-motion";

export default function BusinessReportSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Business Report Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#f7eaff] rounded-3xl shadow-xl p-8 relative min-h-[420px] flex flex-col justify-between"
        >
          {/* Visitors this month */}
          <div className="absolute right-8 top-6 flex items-center gap-2">
            <svg width="28" height="18" viewBox="0 0 28 18" fill="none"><path d="M2 16C4.5 10 8.5 2 14 2C19.5 2 23.5 10 26 16" stroke="#c026d3" strokeWidth="2" fill="none"/><circle cx="24" cy="16" r="2" fill="#c026d3"/></svg>
            <span className="font-bold text-lg text-[#a21caf]">1,235</span>
            <span className="text-xs text-gray-500">Visitors this month</span>
          </div>
          {/* Main Stat */}
          <div className="flex flex-col items-center justify-center mt-10 mb-6">
            <span className="text-4xl font-extrabold text-black">$3,650</span>
            <span className="text-gray-500 text-lg">Your total saving so far</span>
            <span className="mt-4 px-4 py-1 rounded-xl bg-white/80 text-[#a21caf] font-semibold shadow text-lg">$3,560</span>
          </div>
          {/* Chart (placeholder image or SVG) */}
          <div className="flex justify-center items-end h-32 mb-6" style={{ paddingLeft: '20px' }}>
            <img src="/attached_assets/section_pie.png" alt="Chart" className="h-full w-auto object-contain" />
          </div>
          {/* Accuracy */}
          <div className="flex items-center gap-2 absolute left-8 bottom-8">
            <span className="w-8 h-8 rounded-full bg-[#a21caf] flex items-center justify-center text-white font-bold text-lg">✓</span>
            <span className="font-bold text-lg text-[#a21caf]">94%</span>
            <span className="text-gray-500 text-sm">Accuracy</span>
          </div>
        </motion.div>
        {/* Right: Animated Text & CTA */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <GradientScrollText
            as="h2"
            className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
            variant="apple"
            glow={true}
          >
            Easily customize all your business reports
          </GradientScrollText>
          <p className="text-lg text-gray-600 mb-8 max-w-xl">
            Keep your team members and customers in the loop by sharing your dashboard publicly or privately and receiving regular reports via email. Access links let your clients view their website.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all text-lg">
            Try for Free
          </button>
        </motion.div>
      </div>
    </section>
  );
} 