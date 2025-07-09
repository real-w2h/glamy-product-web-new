"use client";

import { motion } from "framer-motion";
import { 
  Calendar, 
  Users, 
  MessageSquare, 
  Smartphone, 
  CreditCard, 
  UserCheck, 
  Download,
  Target,
  Code 
} from "lucide-react";
import GradientScrollText from "@/components/GradientScrollText";

export default function Features() {
  const features = [
    {
      icon: Calendar,
      number: '01',
      title: 'Appointment Management',
      description: 'Smart scheduling system with automated reminders, conflict detection, and easy rescheduling options.',
      cta: 'Get Started',
      ctaHref: '#',
      color: 'from-primary to-purple-600',
    },
    {
      icon: Users,
      number: '02',
      title: 'Lead Management',
      description: 'Track potential customers, follow up automatically, and convert leads into loyal clients.',
      cta: 'Learn More',
      ctaHref: '#',
      color: 'from-secondary to-pink-600',
    },
    {
      icon: MessageSquare,
      number: '03',
      title: 'WhatsApp Campaigns',
      description: 'Reach customers directly with personalized WhatsApp messages and promotional campaigns.',
      cta: 'Explore Dashboard',
      ctaHref: '#',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Smartphone,
      number: '04',
      title: 'SMS Broadcasting',
      description: 'Send bulk SMS for offers, birthday wishes, anniversary discounts, and important updates.',
      cta: 'Get Started',
      ctaHref: '#',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: CreditCard,
      number: '05',
      title: 'Billing Management',
      description: 'Automated invoicing, payment tracking, and financial reporting to keep your finances organized.',
      cta: 'Learn More',
      ctaHref: '#',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: UserCheck,
      number: '06',
      title: 'Employee Management',
      description: 'Track attendance, manage salaries, and monitor staff performance in one place.',
      cta: 'Explore Dashboard',
      ctaHref: '#',
      color: 'from-purple-500 to-indigo-600',
    },
    {
      icon: Download,
      number: '07',
      title: 'Instant Reports',
      description: 'Download invoices and detailed reports anytime in seconds with our fast reporting system.',
      cta: 'Get Started',
      ctaHref: '#',
      color: 'from-teal-500 to-cyan-600',
    },
    {
      icon: Target,
      number: '08',
      title: 'Meta Ads Campaigns',
      description: 'Launch targeted Facebook and Instagram ad campaigns to reach new customers and grow your client base.',
      cta: 'Learn More',
      ctaHref: '#',
      color: 'from-blue-600 to-indigo-700',
    },
    {
      icon: Code,
      number: '09',
      title: 'Custom Development',
      description: 'Get personalized features and integrations tailored specifically to your business needs and workflow.',
      cta: 'Explore Dashboard',
      ctaHref: '#',
      color: 'from-gray-600 to-gray-800',
    },
  ];

  return (
    <section id="features" className="py-8 bg-white">
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
              Everything You Need to Succeed
            </span>
          </GradientScrollText>
          <GradientScrollText
            as="p"
            className="text-xl max-w-3xl mx-auto"
            variant="purple"
            glow={true}
          >
            Discover powerful features designed specifically for beauty professionals to streamline operations and grow their business.
          </GradientScrollText>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-start border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <span className="bg-pink-100 text-pink-500 rounded-full p-3 mr-3">
                  <feature.icon className="h-7 w-7" />
                </span>
                <span className="text-2xl font-bold text-pink-100">{feature.number}</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{feature.description}</p>
              <a href={feature.ctaHref} className="text-sm font-semibold text-pink-500 hover:underline flex items-center mt-auto">{feature.cta} <span className="ml-1">→</span></a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
