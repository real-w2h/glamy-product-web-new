"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import GradientScrollText from "@/components/GradientScrollText";

export default function Services() {
  const services = [
    {
      title: "Salons & Studios",
      icon: "✂️",
      description: "Streamline your salon operations with comprehensive appointment scheduling, staff management, and customer relationship tools.",
      features: ["Appointment management", "Staff scheduling", "Customer profiles"],
      color: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      iconBg: "from-primary to-purple-600",
      buttonColor: "bg-primary hover:bg-purple-700",
    },
    {
      title: "Makeup Artists",
      icon: "🎨",
      description: "Grow your freelance business with lead tracking, booking management, and automated promotional campaigns.",
      features: ["Lead tracking", "Booking management", "Promotion campaigns"],
      color: "from-pink-50 to-pink-100",
      borderColor: "border-pink-200",
      iconBg: "from-secondary to-pink-600",
      buttonColor: "bg-secondary hover:bg-pink-600",
    },
    {
      title: "Dermatologists",
      icon: "👨‍⚕️",
      description: "Enhance your practice with advanced patient management, clinic automation, and comprehensive reporting tools.",
      features: ["Patient management", "Clinic automation", "Advanced reporting"],
      color: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      iconBg: "from-accent to-blue-600",
      buttonColor: "bg-accent hover:bg-blue-600",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
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
              Tailored Solutions for Every Beauty Professional
            </span>
          </GradientScrollText>
          <GradientScrollText
            as="p"
            className="text-xl max-w-3xl mx-auto"
            variant="purple"
            glow={true}
          >
            Whether you run a salon, work as a makeup artist, or manage a dermatology clinic, Glame has the perfect solution for you.
          </GradientScrollText>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`bg-gradient-to-br ${service.color} p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border ${service.borderColor}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                <span className="text-white text-2xl">{service.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className={`w-full ${service.buttonColor} text-white transition-colors`}>
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
