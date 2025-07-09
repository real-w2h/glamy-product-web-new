import React from "react";
import { motion } from "framer-motion";

export default function SalonShowcaseSection() {
  return (
    <>
      <section className="relative py-20 px-4 overflow-hidden mt-10">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/salon_section_Glame.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(16, 24, 40, 0.8)' }}></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="mr-2">
                  <path d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 20 12 16.9 7.82 20 9 12.91l-5-3.64 5.91-.91L12 2z" fill="#ec4899"/>
                </svg>
                Salon Excellence
              </span>
              
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
                Grow your <span style={{ color: '#f6339a' }}>Salon Business</span> with <span style={{ color: '#f6339a' }}>Glame CRM</span>
              </h2>
              
              <p className="text-gray-200 text-lg mb-8 max-w-md leading-relaxed">
                Boost your online presence, and attract the right audience to grow your business successfully.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-white">
                  <span className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center mr-3">
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>Smart appointment management</span>
                </div>
                <div className="flex items-center text-white">
                  <span className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center mr-3">
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>WhatsApp marketing automation</span>
                </div>
                <div className="flex items-center text-white">
                  <span className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center mr-3">
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>Real-time analytics & insights</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all text-lg">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all text-lg">
                  Watch Demo
                </button>
              </div>
            </motion.div>
            
            {/* Right Side - Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {/* Stat Card 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">500+</div>
                  <div className="text-gray-200 text-sm">Salons Trust Glame</div>
                </div>
              </div>
              
              {/* Stat Card 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">50K+</div>
                  <div className="text-gray-200 text-sm">Appointments Managed</div>
                </div>
              </div>
              
              {/* Stat Card 3 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">98%</div>
                  <div className="text-gray-200 text-sm">Customer Satisfaction</div>
                </div>
              </div>
              
              {/* Stat Card 4 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-gray-200 text-sm">Support Available</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <div style={{position: 'relative', width: '100%', height: '24px', background: '#fff', marginTop: '-24px', zIndex: 2}}></div>
    </>
  );
} 