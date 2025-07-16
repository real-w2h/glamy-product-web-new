"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Calendar, 
  CreditCard, 
  Users, 
  TrendingUp, 
  Package, 
  UserCheck, 
  Crown,
  MessageSquare,
  Smartphone,
  Mail,
  Zap,
  Brain,
  Bot,
  Bell,
  Target,
  BarChart3,
  Settings,
  Shield,
  Clock,
  Star,
  MessageCircle
} from "lucide-react";
import GradientScrollText from "@/components/GradientScrollText";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import Link from "next/link";

export default function GlameFeaturesSection() {
  const coreFeatures = [
    {
      icon: Calendar,
      title: 'Appointment Management',
      description: 'Smart scheduling with automated reminders, conflict detection, and easy rescheduling. Never miss an appointment again.',
      benefits: ['Auto-reminders', 'Conflict detection', 'Easy rescheduling', 'Calendar sync'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: CreditCard,
      title: 'POS Billing',
      description: 'Complete point-of-sale system with multiple payment options, digital receipts, and integrated inventory tracking.',
      benefits: ['Multiple payment methods', 'Digital receipts', 'Inventory sync', 'Tax calculation'],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: Users,
      title: 'Customer Management',
      description: 'Comprehensive customer database with purchase history, preferences, and personalized service tracking.',
      benefits: ['Customer profiles', 'Purchase history', 'Preferences tracking', 'Service history'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'Manage & Boost Sales',
      description: 'Advanced analytics and reporting tools to track performance, identify trends, and optimize your business growth.',
      benefits: ['Sales analytics', 'Performance tracking', 'Trend analysis', 'Growth insights'],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      icon: Package,
      title: 'Stock Management',
      description: 'Automated inventory tracking with low stock alerts, supplier management, and purchase order automation.',
      benefits: ['Auto stock alerts', 'Supplier management', 'Purchase orders', 'Inventory tracking'],
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },

    {
      icon: Crown,
      title: 'Client Membership',
      description: 'Loyalty programs and membership management with tier-based benefits, points system, and exclusive offers.',
      benefits: ['Loyalty programs', 'Tier benefits', 'Points system', 'Exclusive offers'],
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    }
  ];

  const automationFeatures = [
    {
      icon: MessageSquare,
      title: 'Auto SMS',
      description: 'Automated SMS notifications for appointments, reminders, and important updates to keep clients informed.',
      features: ['Appointment reminders', 'Birthday wishes', 'Service updates', 'Promotional alerts'],
      color: 'from-green-500 to-green-600',
      isHighlighted: false
    },
    {
      icon: Brain,
      title: 'AI-Based Campaigns',
      description: 'Intelligent marketing campaigns powered by AI that analyze customer behavior and deliver personalized content.',
      features: ['Behavioral analysis', 'Personalized content', 'Smart targeting', 'Performance optimization'],
      color: 'from-purple-500 to-purple-600',
      isHighlighted: true
    },
    {
      icon: WhatsAppIcon,
      title: 'WhatsApp Broadcasting',
      description: 'Mass WhatsApp messaging for promotions, announcements, and customer engagement with delivery tracking.',
      features: ['Bulk messaging', 'Delivery tracking', 'Rich media support', 'Template messages'],
      color: 'from-green-600 to-green-700',
      isHighlighted: true
    },
    {
      icon: Mail,
      title: 'SMS & Email Broadcasting',
      description: 'Multi-channel communication system for reaching customers through SMS and email simultaneously.',
      features: ['Multi-channel delivery', 'Template management', 'Scheduling', 'Analytics tracking'],
      color: 'from-blue-500 to-blue-600',
      isHighlighted: false
    }
  ];

  return (
    <section id="glame-features" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <GradientScrollText
            as="h2"
            className="text-4xl lg:text-5xl font-bold mb-6"
            variant="apple"
            glow={false}
          >
            <span style={{
              background: 'linear-gradient(90deg, #f6339a, #ad46ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block'
            }}>
              Complete Salon Automation
            </span>
          </GradientScrollText>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Experience the future of salon management with Glame's comprehensive automation platform. 
            Everything you need to run and grow your beauty business, all in one place.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Zap className="h-4 w-4 mr-2 text-yellow-500" />
              <span>100% Automated</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2 text-blue-500" />
              <span>24/7 Operation</span>
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 mr-2 text-pink-500" />
              <span>AI-Powered</span>
            </div>
          </div>
        </motion.div>

        {/* Core Features */}
        <div className="mb-20">
          <motion.h3 
            className="text-3xl font-bold text-center mb-12 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Core Management Features
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group relative bg-white p-6 rounded-2xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-pink-400 cursor-pointer flex flex-col items-center text-center overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Animated gradient circles on hover */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                <div className={`${feature.bgColor} p-4 rounded-xl mb-4 inline-block transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                  <feature.icon className={`h-8 w-8 ${feature.iconColor} transition-all duration-300 group-hover:scale-110 group-hover:text-pink-500`} />
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900 transition-all duration-300 group-hover:text-pink-600 group-hover:scale-105">{feature.title}</h4>
                <p className="text-gray-500 text-sm mb-0 line-clamp-2">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Automation Features */}
        <div className="mb-20">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Smart Automation Features
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let AI handle your marketing and communication while you focus on what you do best - making clients beautiful.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-10">
            {automationFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className={`group relative p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border overflow-hidden ${
                  feature.isHighlighted 
                    ? 'bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200 hover:border-pink-300 hover:shadow-pink-100/50' 
                    : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-pink-200'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={feature.isHighlighted ? { scale: 1.02, y: -5 } : { scale: 1.01 }}
              >
                {/* Special background for highlighted features */}
                {feature.isHighlighted && (
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-100/30 to-purple-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                )}
                
                {/* Background gradient overlay for regular features */}
                {!feature.isHighlighted && (
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                )}
                
                <div className="relative z-10">
                  <div className="flex items-start mb-8">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${feature.color} mr-6 shadow-lg transition-all duration-300 ${
                      feature.isHighlighted 
                        ? 'group-hover:scale-125 group-hover:shadow-2xl group-hover:shadow-pink-200/50' 
                        : 'group-hover:scale-110'
                    }`}>
                      <feature.icon className={`text-white transition-all duration-300 ${
                        feature.isHighlighted ? 'h-10 w-10 group-hover:h-12 group-hover:w-12' : 'h-8 w-8'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-bold text-2xl mb-3 transition-all duration-300 ${
                        feature.isHighlighted 
                          ? 'text-gray-900 group-hover:text-pink-700 group-hover:scale-105' 
                          : 'text-gray-900 group-hover:text-pink-600'
                      }`}>{feature.title}</h4>
                      <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        <div className={`rounded-full mr-3 transition-all duration-300 ${
                          feature.isHighlighted 
                            ? 'w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-600 group-hover:scale-150 group-hover:shadow-lg' 
                            : 'w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:scale-125'
                        }`}></div>
                        <span className={`font-medium transition-all duration-300 ${
                          feature.isHighlighted ? 'group-hover:font-semibold' : ''
                        }`}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Enhanced decorative elements for highlighted features */}
                {feature.isHighlighted ? (
                  <>
                    <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-pulse"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 group-hover:animate-pulse"></div>
                    <div className="absolute top-1/2 right-8 w-8 h-8 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 group-hover:animate-bounce"></div>
                  </>
                ) : (
                  <>
                    <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready to Transform Your Salon?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of salon owners who have already automated their business with Glame. 
            Start your free trial today and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Start Free Trial
              </button>
            </Link>
            <button className="border-2 border-pink-500 text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 