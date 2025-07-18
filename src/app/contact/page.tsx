"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Testimonials from "@/components/testimonials";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  CheckCircle,
  Send,
  User,
  Building,
  Users,
  Heart,
  Scissors,
  Star,
  ChevronDown,
  ChevronUp,
  Shield,
  Smartphone,
  HeadphonesIcon,
  CreditCard,
  Calendar,
  HelpCircle
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after successful submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        businessType: "",
        subject: "",
        message: ""
      });
    }, 3000);
  };

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "Glame CRM ka use karne me sabse bada challenge kya ho sakta hai?",
      answer: "Agar aap technology ke aadhi nahin hain ya pehli baar CRM use kar rahe hain, toh shuru me thoda confusing lag sakta hai. Lekin humari team aapko onboarding me pura support degi aur simple tutorials bhi available hain jisse aap easily seekh sakte hain.",
      icon: <HelpCircle className="h-5 w-5 text-purple-600" />
    },
    {
      question: "Kya Glame CRM mobile pe bhi use ho sakta hai?",
      answer: "Haan! Glame CRM completely mobile-friendly hai. Aap apne salon/spa business ko kahin se bhi manage kar sakte hain — chahe aap office me ho ya travel kar rahe ho.",
      icon: <Smartphone className="h-5 w-5 text-blue-600" />
    },
    {
      question: "Kya mera pura client data safe rahega?",
      answer: "Ye ek common concern hai aur bilkul valid bhi. Glame CRM me aapka sara data secure servers par encrypted hota hai, aur hum regularly security audits karte hain taaki aapka data 100% safe rahe.",
      icon: <Shield className="h-5 w-5 text-green-600" />
    },
    {
      question: "Agar mujhe technical issue aaye toh help kahan milegi?",
      answer: "Aap hamare customer support se chat, email ya phone ke zariye turant contact kar sakte hain. Humari priority hoti hai ki aapko minimum downtime ho.",
      icon: <HeadphonesIcon className="h-5 w-5 text-orange-600" />
    },
    {
      question: "Kya Glame CRM payment collection bhi manage karta hai?",
      answer: "Ji haan, Glame CRM integrated payment options offer karta hai. Aap clients se online payments accept kar sakte hain aur unka record bhi maintain hota hai.",
      icon: <CreditCard className="h-5 w-5 text-pink-600" />
    },
    {
      question: "Kya Glame CRM multi-location support karta hai?",
      answer: "Agar aapke multiple branches hain, toh aap unhe ek hi dashboard se manage kar sakte hain. Har location ka separate data bhi dekh sakte hain aur combined bhi.",
      icon: <Calendar className="h-5 w-5 text-indigo-600" />
    }
  ];

  const businessTypes = [
    { value: "salon", label: "Salon" },
    { value: "makeup_artist", label: "Makeup Artist" },
    { value: "dermatologist", label: "Dermatologist" },
    { value: "spa", label: "Spa" },
    { value: "barber_shop", label: "Barber Shop" },
    { value: "nail_salon", label: "Nail Salon" },
    { value: "other", label: "Other" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Get in <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
              Ready to transform your beauty business? Let's connect and explore how Glame can help you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            
            {/* Left Side - Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Ready to Transform Your Beauty Business?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Join thousands of beauty professionals who have already streamlined their operations 
                  and boosted their revenue with <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Glame</span>.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Quick Response</h4>
                    <p className="text-gray-600">We respond to all inquiries within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h4>
                    <p className="text-gray-600">Our team of beauty industry experts are here to help</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Personalized Demo</h4>
                    <p className="text-gray-600">Get a customized demo tailored to your business needs</p>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Mail className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">info@glamebeauty.com</p>
                      <p className="text-sm text-gray-600">Send us an email</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Phone className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">+91 9650833553</p>
                      <p className="text-sm text-gray-600">Give us a call</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">4th, 443 Cloud 9 Vaishali</p>
                      <p className="text-gray-900 font-medium">Sector 1, Ghaziabad 201010</p>
                      <p className="text-sm text-gray-600">Visit our office</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <Clock className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">Mon-Sat: 9:00 AM - 6:00 PM</p>
                      <p className="text-sm text-gray-600">Business hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div id="contact-form" className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100 sticky top-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-600 text-lg">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Send Us a Message
                    </h2>
                    <p className="text-gray-600">
                      Fill out the form below and we'll respond within 24 hours.
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                          className="w-full px-4 py-3 text-base rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          required
                          className="w-full px-4 py-3 text-base rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone and Business Type Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          className="w-full px-4 py-3 text-base rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Business Type
                        </label>
                        <select
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 text-base rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-700"
                        >
                          <option value="">Select your business type</option>
                          {businessTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                        className="w-full px-4 py-3 text-base rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us more about your needs..."
                        required
                        rows={5}
                        className="w-full px-4 py-3 text-base rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-3 text-lg"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>

                    {/* Bottom Text */}
                    <div className="text-center pt-4">
                      <p className="text-gray-500 text-sm">
                        We'll respond to your message within 24 hours.
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Glame CRM ke baare mein sabse common questions aur unke answers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                                     <div className="flex items-center space-x-4">
                     <div className="flex-shrink-0">
                       {faq.icon}
                     </div>
                     <div>
                       <span className="text-lg font-semibold text-gray-900">
                         {faq.question}
                       </span>
                     </div>
                   </div>
                  <div className="flex-shrink-0 ml-4">
                    {expandedFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </button>
                
                                 {expandedFAQ === index && (
                   <div className="px-8 pb-6 pt-2">
                     <div className="pl-9">
                       <p className="text-gray-700 text-base leading-relaxed">
                         {faq.answer}
                       </p>
                     </div>
                   </div>
                 )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-lg mb-6 opacity-90">
                Our team is here to help you with any queries about Glame CRM
              </p>
              <button
                onClick={() => {
                  const contactForm = document.querySelector('#contact-form');
                  contactForm?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Contact Us Now
              </button>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
} 