"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { 
  Star, 
  Quote, 
  Users, 
  Award, 
  TrendingUp, 
  ThumbsUp,
  Play,
  Calendar,
  Heart,
  Sparkles,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function TestimonialsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      number: "10+",
      label: "Expert Developers",
      description: "Best performance team members"
    },
    {
      icon: <Star className="w-8 h-8 text-purple-600" />,
      number: "8+",
      label: "Years Experience",
      description: "Power developer expertise"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      number: "100%",
      label: "Project Success",
      description: "Strong team delivery rate"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      number: "24/7",
      label: "Team Support",
      description: "Dedicated development power"
    }
  ];

  const testimonialCategories = [
    { id: "all", label: "All Reviews", count: 24 },
    { id: "salon", label: "Salon Owners", count: 12 },
    { id: "clinic", label: "Clinics", count: 8 },
    { id: "freelancer", label: "Freelancers", count: 4 }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Salon Owner",
      business: "Luxe Beauty Salon",
      location: "New York, NY",
      category: "salon",
      image: "/attached_assets/1_1750152529582.jpg",
      rating: 5,
      content: "Glame transformed how we manage our salon. Appointments are seamless, staff scheduling is automated, and our customer retention improved by 40%. The analytics dashboard gives us insights we never had before!",
      highlights: ["40% retention increase", "Automated scheduling", "Advanced analytics"],
      verified: true
    },
    {
      id: 2,
      name: "Dr. James Wilson",
      role: "Dermatologist",
      business: "Wilson Dermatology Clinic",
      location: "Los Angeles, CA",
      category: "clinic",
      image: "/attached_assets/4_1750152529582.jpg",
      rating: 5,
      content: "The patient management features are outstanding. We've reduced wait times by 60% and improved patient satisfaction significantly. The secure data handling gives us peace of mind.",
      highlights: ["60% less wait time", "HIPAA compliant", "Patient satisfaction"],
      verified: true
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      role: "Freelance Makeup Artist",
      business: "Maria's Makeup Studio",
      location: "Miami, FL",
      category: "freelancer",
      image: "/attached_assets/3_1750152529582.jpg",
      rating: 5,
      content: "As a freelance makeup artist, Glame helps me stay organized and professional. My bookings increased by 60% and clients love the seamless booking experience. The mobile app is perfect for on-the-go management.",
      highlights: ["60% more bookings", "Mobile-first design", "Professional image"],
      verified: true
    },
    {
      id: 4,
      name: "Aisha Patel",
      role: "Spa Manager",
      business: "Serenity Wellness Spa",
      location: "Chicago, IL",
      category: "salon",
      image: "/attached_assets/10_1750152529582.jpg",
      rating: 5,
      content: "The WhatsApp integration is a game-changer. We stay connected with clients effortlessly and our no-show rate dropped to almost zero. The automated reminders are perfect!",
      highlights: ["Zero no-shows", "WhatsApp integration", "Automated reminders"],
      verified: true
    },
    {
      id: 5,
      name: "Robert Kim",
      role: "Clinic Director",
      business: "Advanced Aesthetic Clinic",
      location: "San Francisco, CA",
      category: "clinic",
      image: "/attached_assets/4_1750152529582.jpg",
      rating: 5,
      content: "Glame's comprehensive platform handles everything from patient intake to treatment tracking. Our operational efficiency increased by 50% and staff love how intuitive it is.",
      highlights: ["50% efficiency gain", "Complete solution", "Intuitive interface"],
      verified: true
    },
    {
      id: 6,
      name: "Emma Thompson",
      role: "Beauty Consultant",
      business: "ET Beauty Services",
      location: "Austin, TX",
      category: "freelancer",
      image: "/attached_assets/1_1750152529582.jpg",
      rating: 5,
      content: "The payment processing is seamless and secure. I love how clients can pay online and I get instant notifications. My cash flow improved dramatically with automated billing.",
      highlights: ["Seamless payments", "Instant notifications", "Better cash flow"],
      verified: true
    },
    {
      id: 7,
      name: "Michael Brown",
      role: "Barbershop Owner",
      business: "Classic Cuts Barbershop",
      location: "Denver, CO",
      category: "salon",
      image: "/attached_assets/3_1750152529582.jpg",
      rating: 5,
      content: "Simple, powerful, and affordable. Glame helped us modernize our traditional barbershop without losing our personal touch. Our younger clients especially love the online booking.",
      highlights: ["Modernized operations", "Personal touch", "Online booking"],
      verified: true
    },
    {
      id: 8,
      name: "Lisa Chang",
      role: "Esthetician",
      business: "Glow Skin Studio",
      location: "Seattle, WA",
      category: "freelancer",
      image: "/attached_assets/10_1750152529582.jpg",
      rating: 5,
      content: "The client history feature is invaluable. I can track skin progress, treatment preferences, and build stronger relationships. My clients feel truly cared for.",
      highlights: ["Client history", "Treatment tracking", "Stronger relationships"],
      verified: true
    }
  ];

  const filteredTestimonials = selectedCategory === "all" 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory);

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
            <div className="mb-4">
              <span className="text-purple-600 font-semibold text-sm tracking-widest uppercase">
                TESTIMONIALS
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              What Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Happy Clients</span> Say
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join thousands of beauty professionals who have transformed their businesses with Glamy. 
              Read real stories from real clients who've experienced amazing results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  Start Your Success Story
                </button>
              </Link>
              <button className="border border-purple-600 text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transition-all duration-300 flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Video Reviews
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-purple-600 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {testimonialCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-50 shadow-sm"
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Header */}
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 ring-2 ring-purple-200">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                      {testimonial.verified && (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      )}
                    </div>
                    <p className="text-purple-600 text-sm font-medium">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs">{testimonial.business}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">{testimonial.location}</span>
                </div>

                {/* Quote */}
                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-purple-200" />
                  <p className="text-gray-600 text-sm leading-relaxed pl-4">
                    {testimonial.content}
                  </p>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {testimonial.highlights.map((highlight, idx) => (
                    <span key={idx} className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full">
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between text-xs text-gray-500 border-t pt-4">
                  <span>Verified Review</span>
                  <ThumbsUp className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Start your free trial today and become our next success story. 
              Join thousands of beauty professionals who trust Glamy for their business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <button className="border border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 