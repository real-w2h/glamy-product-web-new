"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Users, 
  Bell, 
  TrendingUp, 
  Scissors, 
  Star,
  CheckCircle,
  Clock,
  Heart,
  Sparkles,
  BarChart3,
  UserCheck,
  BookOpen,
  ArrowRight,
  MessageSquare,
  Smartphone,
  CreditCard,
  Download,
  Target,
  Code,
  Zap,
  Shield,
  Globe,
  Headphones
} from "lucide-react";
import Link from "next/link";

export default function FeaturesPage() {
  const coreFeatures = [
    {
      icon: <Calendar className="w-8 h-8 text-purple-600" />,
      title: "Smart Appointment Management",
      description: "Effortless booking system with automated reminders, conflict detection, and easy rescheduling for seamless client management."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Client Relationship Management",
      description: "Complete client history, preferences tracking, and personalized service recommendations for enhanced customer experience."
    },
    {
      icon: <Bell className="w-8 h-8 text-purple-600" />,
      title: "Automated Notifications",
      description: "Smart reminders, booking confirmations, and follow-up messages to reduce no-shows and improve client engagement."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: "Advanced Analytics",
      description: "Real-time insights into business performance, staff productivity, and customer behavior with detailed reports."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-purple-600" />,
      title: "Integrated Payment System",
      description: "Secure payment processing with multiple payment options, invoicing, and automated billing management."
    },
    {
      icon: <UserCheck className="w-8 h-8 text-purple-600" />,
      title: "Staff Management",
      description: "Comprehensive staff scheduling, performance tracking, and commission management for optimal team productivity."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-600" />,
      title: "Mobile-First Design",
      description: "Fully responsive platform that works perfectly on all devices, ensuring accessibility anywhere, anytime."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-purple-600" />,
      title: "Communication Hub",
      description: "Integrated messaging system for client communication, appointment updates, and marketing campaigns."
    }
  ];

  const advancedFeatures = [
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
      title: "Business Intelligence",
      description: "AI-powered insights and predictive analytics to optimize your business operations and growth strategies."
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Data Security",
      description: "Enterprise-grade security with data encryption, regular backups, and compliance with industry standards."
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      title: "Multi-Location Support",
      description: "Manage multiple salon locations from a single dashboard with centralized reporting and control."
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: "Automation Tools",
      description: "Workflow automation for repetitive tasks, saving time and reducing manual errors in daily operations."
    },
    {
      icon: <Target className="w-8 h-8 text-purple-600" />,
      title: "Marketing Integration",
      description: "Built-in marketing tools with email campaigns, loyalty programs, and social media integration."
    },
    {
      icon: <Headphones className="w-8 h-8 text-purple-600" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support with live chat, phone, and email assistance for any issues."
    }
  ];

  const benefits = [
    "Increase revenue by up to 40% with optimized scheduling",
    "Reduce no-shows by 60% with automated reminders",
    "Save 10+ hours per week on administrative tasks",
    "Improve client satisfaction with personalized service",
    "Access real-time business insights and analytics",
    "Streamline operations across multiple locations",
    "Enhance staff productivity and performance",
    "Secure and compliant data management"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Powerful Features for Your Beauty Business
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover the comprehensive suite of tools designed to transform your salon or clinic operations, 
              enhance client experience, and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  Start Free Trial
                </button>
              </Link>
              <button className="border border-purple-600 text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Core Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your beauty business efficiently and effectively
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {coreFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Enterprise-grade features for growing beauty businesses
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {advancedFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Glamy?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of beauty professionals who have transformed their businesses with Glamy
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Ready to Transform Your Beauty Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Start your free trial today and experience the power of Glamy's comprehensive 
              beauty business management platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2">
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <button className="border border-purple-600 text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 