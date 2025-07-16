"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function FormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessType: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative py-20 px-4 flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="w-full max-w-lg mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Get Started Today
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Full Name"
                required
                className="w-full px-5 py-4 text-lg rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-purple-400 transition-all placeholder-gray-400"
              />
            </div>

            {/* Email Address */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                required
                className="w-full px-5 py-4 text-lg rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-purple-400 transition-all placeholder-gray-400"
              />
            </div>

            {/* Phone Number */}
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className="w-full px-5 py-4 text-lg rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-purple-400 transition-all placeholder-gray-400"
              />
            </div>

            {/* Business Type */}
            <div>
              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleInputChange}
                className="w-full px-5 py-4 text-lg rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-purple-400 transition-all text-gray-400 appearance-none bg-white cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: 'right 1.5rem center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '1.5em 1.5em'
                }}
              >
                <option value="">Select your business type</option>
                <option value="salon">Salon</option>
                <option value="makeup_artist">Makeup Artist</option>
                <option value="dermatologist">Dermatologist</option>
                <option value="spa">Spa</option>
                <option value="barber_shop">Barber Shop</option>
                <option value="nail_salon">Nail Salon</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Link href="/signup">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-[1.02] text-lg"
                >
                  Start Free Trial
                </button>
              </Link>
            </div>

            {/* Bottom Text */}
            <div className="text-center pt-4">
              <p className="text-gray-500 text-base">
                No credit card required. 14-day free trial.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
} 