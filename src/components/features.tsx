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
      title: "Appointment Management",
      description: "Smart scheduling system with automated reminders, conflict detection, and easy rescheduling options.",
      color: "from-primary to-purple-600",
    },
    {
      icon: Users,
      title: "Lead Management",
      description: "Track potential customers, follow up automatically, and convert leads into loyal clients.",
      color: "from-secondary to-pink-600",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Campaigns",
      description: "Reach customers directly with personalized WhatsApp messages and promotional campaigns.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Smartphone,
      title: "SMS Broadcasting",
      description: "Send bulk SMS for offers, birthday wishes, anniversary discounts, and important updates.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: CreditCard,
      title: "Billing Management",
      description: "Automated invoicing, payment tracking, and financial reporting to keep your finances organized.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: UserCheck,
      title: "Employee Management",
      description: "Track attendance, manage salaries, and monitor staff performance in one place.",
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: Download,
      title: "Instant Reports",
      description: "Download invoices and detailed reports anytime in seconds with our fast reporting system.",
      color: "from-teal-500 to-cyan-600",
    },
    {
      icon: Target,
      title: "Meta Ads Campaigns",
      description: "Launch targeted Facebook and Instagram ad campaigns to reach new customers and grow your client base.",
      color: "from-blue-600 to-indigo-700",
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Get personalized features and integrations tailored specifically to your business needs and workflow.",
      color: "from-gray-600 to-gray-800",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
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
            glow={true}
          >
            Everything You Need to Succeed
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
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
