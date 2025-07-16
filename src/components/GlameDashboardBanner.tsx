"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  BarChart3,
  Target,
  Settings,
  Shield,
  Monitor,
  Zap,
  Star,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function GlameDashboardBanner() {
  const dashboardFeatures = [
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Live dashboard with key performance indicators, sales trends, and business insights at your fingertips.'
    },
    {
      icon: Target,
      title: 'Smart Targeting',
      description: 'AI-powered customer segmentation and targeting for maximum campaign effectiveness and ROI.'
    },
    {
      icon: Settings,
      title: 'Easy Configuration',
      description: 'Simple setup and configuration for all automation features with intuitive controls and customization options.'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee and data protection compliance.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Experience the Glame Dashboard
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Your command center for salon success. Everything you need, beautifully organized and easy to use.
          </p>
          <div className="flex items-center justify-center space-x-8 text-base">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
              Real-time Monitoring
            </div>
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
              Lightning Fast
            </div>
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
              User Friendly
            </div>
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {dashboardFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-lg mb-4 inline-block">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-2 text-gray-900">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready to Experience the Future?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              See how Glame's dashboard transforms your salon operations. Get instant access to powerful insights and automation tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                  Explore Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </Link>
              <button className="border-2 border-pink-500 text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 