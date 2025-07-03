import React from "react";

export default function WorkProcessSection() {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          {/* Left Side */}
          <div>
            <span className="inline-flex items-center bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="mr-2"><path d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 20 12 16.9 7.82 20 9 12.91l-5-3.64 5.91-.91L12 2z" fill="#ec4899"/></svg>
              Work Process
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-purple-600 inline-block">
              <span style={{ color: '#f6339a' }}>Glame</span> Your All-in-One Salon CRM & <span style={{ color: '#f6339a' }}>Marketing Partner</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-md">
              Welcome to Glame — designed to revolutionize salon businesses with powerful CRM tools, WhatsApp marketing, appointment management, and growth analytics, all on a single dashboard.
            </p>
          </div>
          {/* Right Side Image */}
          <div>
            <img src="/attached_assets/section_workprocess.png" alt="Section" className="w-full" />
          </div>
        </div>
        {/* Steps Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-start">
            <div className="flex items-center mb-4">
              <span className="bg-pink-100 text-pink-500 rounded-full p-3 mr-3">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20" stroke="#ec4899" strokeWidth="2"/></svg>
              </span>
              <span className="text-3xl font-bold text-pink-100">01</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Smart Salon Setup</h3>
            <p className="text-gray-600 mb-4 text-sm">Launch your salon digitally in minutes. From staff profiles to services and rates — get everything ready fast.</p>
            <a href="#" className="text-sm font-semibold text-pink-500 hover:underline flex items-center">Get Started <span className="ml-1">→</span></a>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-start">
            <div className="flex items-center mb-4">
              <span className="bg-pink-100 text-pink-500 rounded-full p-3 mr-3">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#ec4899" strokeWidth="2"/><path d="M12 8v4l3 3" stroke="#ec4899" strokeWidth="2"/></svg>
              </span>
              <span className="text-3xl font-bold text-pink-100">02</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Automated Marketing & WhatsApp Blasts</h3>
            <p className="text-gray-600 mb-4 text-sm">Grow your customer base with scheduled offers, birthday wishes, and targeted re-engagements via WhatsApp.</p>
            <a href="#" className="text-sm font-semibold text-pink-500 hover:underline flex items-center">Learn More <span className="ml-1">→</span></a>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-start">
            <div className="flex items-center mb-4">
              <span className="bg-pink-100 text-pink-500 rounded-full p-3 mr-3">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="#ec4899" strokeWidth="2"/><path d="M8 12h8" stroke="#ec4899" strokeWidth="2"/></svg>
              </span>
              <span className="text-3xl font-bold text-pink-100">03</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Real-Time Analytics & Feedback</h3>
            <p className="text-gray-600 mb-4 text-sm">Track appointments, revenue trends, and customer reviews — all from one dashboard.</p>
            <a href="#" className="text-sm font-semibold text-pink-500 hover:underline flex items-center">Explore Dashboard <span className="ml-1">→</span></a>
          </div>
        </div>
      </div>
    </section>
  );
} 