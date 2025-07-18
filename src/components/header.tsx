"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Star, Calendar, Users, Scissors, Heart } from "lucide-react";
import Link from "next/link";


export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("salon-management");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
    setIsServicesMenuOpen(false);
  };

  const serviceCategories = [
    { 
      id: "salon-management", 
      name: "Salon Management", 
      href: "/salon-management",
      icon: <Scissors className="w-4 h-4" />
    },
    { 
      id: "clinic-management", 
      name: "Clinic Management", 
      href: "/clinic-management",
      icon: <Heart className="w-4 h-4" />
    },
    { 
      id: "dermatology", 
      name: "Dermatology", 
      href: "/dermatology",
      icon: <Users className="w-4 h-4" />
    }
  ];

  const serviceOfferings: Record<string, Array<{
    title: string;
    description: string;
    badge: string;
    badgeColor: string;
    features: string[];
  }>> = {
    "salon-management": [
      {
        title: "Appointment Booking",
        description: "Smart scheduling system",
        badge: "Popular",
        badgeColor: "bg-green-500",
        features: ["Online booking", "Calendar sync", "SMS reminders"]
      },
      {
        title: "Staff Management",
        description: "Manage your team efficiently",
        badge: "New!",
        badgeColor: "bg-purple-500",
        features: ["Staff scheduling", "Performance tracking", "Commission management"]
      },
      {
        title: "Inventory Control",
        description: "Track products & supplies",
        badge: "Essential",
        badgeColor: "bg-blue-500",
        features: ["Stock alerts", "Supplier management", "Cost tracking"]
      }
    ],
    "clinic-management": [
      {
        title: "Patient Records",
        description: "Digital health records",
        badge: "Secure",
        badgeColor: "bg-green-500",
        features: ["HIPAA compliant", "Medical history", "Treatment plans"]
      },
      {
        title: "Billing & Insurance",
        description: "Streamlined payment processing",
        badge: "Popular",
        badgeColor: "bg-orange-500",
        features: ["Insurance claims", "Payment tracking", "Financial reports"]
      },
      {
        title: "Telemedicine",
        description: "Virtual consultations",
        badge: "New!",
        badgeColor: "bg-purple-500",
        features: ["Video calls", "Online prescriptions", "Remote monitoring"]
      }
    ],
    "dermatology": [
      {
        title: "Skin Care Management",
        description: "Comprehensive dermatology solutions",
        badge: "Professional",
        badgeColor: "bg-green-500",
        features: ["Patient records", "Treatment tracking", "Follow-up reminders"]
      },
      {
        title: "Appointment System",
        description: "Specialized booking for dermatologists",
        badge: "Popular",
        badgeColor: "bg-blue-500",
        features: ["Consultation scheduling", "Treatment planning", "Patient notifications"]
      },
      {
        title: "Practice Analytics",
        description: "Insights for your dermatology practice",
        badge: "Essential",
        badgeColor: "bg-purple-500",
        features: ["Performance tracking", "Patient analytics", "Treatment outcomes"]
      }
    ]
  };

  return (
    <header className="bg-white shadow-sm header-fixed border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <img src="/logo.png" alt="Logo" className="h-20 w-auto sm:h-24 md:h-28 lg:h-32 rounded-lg object-contain" />
              {/* <span className="ml-2 text-2xl font-bold text-gray-900">Glame</span> */}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary font-medium transition-colors py-2 px-1"
            >
              Home
            </Link>
            
            {/* Services with Mega Menu */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesMenuOpen(true)}
              onMouseLeave={() => setIsServicesMenuOpen(false)}
            >
              <button
                onClick={() => scrollToSection("services")}
                className="flex items-center text-gray-700 hover:text-primary font-medium transition-colors py-2 px-1"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {/* Mega Menu Dropdown */}
              {isServicesMenuOpen && (
                <div className="mega-menu-dropdown mt-1 bg-white rounded-lg shadow-xl border border-gray-200 opacity-100 animate-in fade-in-0 zoom-in-95 duration-200 overflow-hidden">

                  
                  
                  <div className="flex">
                    {/* Left Sidebar */}
                    <div className="w-1/3 bg-gray-50 rounded-l-lg p-4 border-r border-gray-200">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">SERVICES</h3>
                      <div className="space-y-2">
                        {serviceCategories.map((category) => (
                          <Link
                            key={category.id}
                            href={category.href}
                            onMouseEnter={() => setSelectedCategory(category.id)}
                            className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-left transition-colors hover:bg-gray-100 ${
                              selectedCategory === category.id
                                ? 'bg-primary text-black'
                                : 'text-gray-700'
                            }`}
                            onClick={() => {
                              setIsServicesMenuOpen(false);
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            {category.icon}
                            <span className="font-medium">{category.name}</span>
                          </Link>
                        ))}
                      </div>
                                             <div className="mt-6 pt-4 border-t border-gray-200">
                         <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">QUICK LINKS</h4>
                         <div className="space-y-1">
                           <Link 
                             href="/pricing" 
                             className="block text-sm text-gray-600 hover:text-black py-1 transition-colors"
                             onClick={() => {
                               setIsServicesMenuOpen(false);
                               setIsMobileMenuOpen(false);
                             }}
                           >
                             Pricing Plans
                           </Link>
                           <Link 
                             href="#demo" 
                             className="block text-sm text-gray-600 hover:text-black py-1 transition-colors"
                             onClick={() => {
                               setIsServicesMenuOpen(false);
                               setIsMobileMenuOpen(false);
                             }}
                           >
                             Request Demo
                           </Link>
                           <Link 
                             href="/features" 
                             className="block text-sm text-gray-600 hover:text-black py-1 transition-colors"
                             onClick={() => {
                               setIsServicesMenuOpen(false);
                               setIsMobileMenuOpen(false);
                             }}
                           >
                             Features Overview
                           </Link>
                           <Link 
                             href="/testimonials" 
                             className="block text-sm text-gray-600 hover:text-black py-1 transition-colors"
                             onClick={() => {
                               setIsServicesMenuOpen(false);
                               setIsMobileMenuOpen(false);
                             }}
                           >
                             Customer Reviews
                           </Link>
                           <Link 
                             href="/contact" 
                             className="block text-sm text-gray-600 hover:text-black py-1 transition-colors"
                             onClick={() => {
                               setIsServicesMenuOpen(false);
                               setIsMobileMenuOpen(false);
                             }}
                           >
                             Contact Sales
                           </Link>
                         </div>
                       </div>
                    </div>

                    {/* Main Content */}
                    <div className="w-2/3 p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        {serviceCategories.find(cat => cat.id === selectedCategory)?.name} Solutions
                      </h3>
                                             <div className="grid grid-cols-1 gap-4">
                         {serviceOfferings[selectedCategory]?.map((offering: any, index: number) => (
                           <Link
                             key={index}
                             href={serviceCategories.find(cat => cat.id === selectedCategory)?.href || "#"}
                             className="block p-4 border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all duration-200 cursor-pointer"
                             onClick={() => {
                               setIsServicesMenuOpen(false);
                               setIsMobileMenuOpen(false);
                             }}
                           >
                             <div className="flex items-start justify-between mb-2">
                               <div>
                                 <h4 className="font-semibold text-gray-900">{offering.title}</h4>
                                 <p className="text-sm text-gray-600">{offering.description}</p>
                               </div>
                               <span className={`text-xs px-2 py-1 rounded-full text-white font-medium ${offering.badgeColor}`}>
                                 {offering.badge}
                               </span>
                             </div>
                             <div className="flex flex-wrap gap-2 mt-2">
                               {offering.features.map((feature: string, idx: number) => (
                                 <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                   {feature}
                                 </span>
                               ))}
                             </div>
                           </Link>
                         ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <Link 
                          href={serviceCategories.find(cat => cat.id === selectedCategory)?.href || "#"}
                          onClick={() => {
                            setIsServicesMenuOpen(false);
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700">
                            Get Started Today
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/pricing"
              className="text-gray-700 hover:text-primary font-medium transition-colors py-2 px-1"
            >
              Pricing
            </Link>
            <Link 
              href="/features"
              className="text-gray-700 hover:text-primary font-medium transition-colors py-2 px-1"
            >
              Features
            </Link>
            <Link 
              href="/testimonials"
              className="text-gray-700 hover:text-primary font-medium transition-colors py-2 px-1"
            >
              Testimonials
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary font-medium transition-colors py-2 px-1">
              Contact
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3 lg:space-x-4">
            <Link href="/signup" >
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 font-medium">
              Start Free Trial
            </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <>
            {/* Mobile Menu Backdrop */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-25 z-[52] md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>
            
            <div className="md:hidden mobile-menu py-4">
              <div className="space-y-2">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary font-medium"
              >
                Home
              </Link>
              
              {/* Mobile Services with Submenu */}
              <div className="space-y-2">
                <button
                  onClick={() => {
                    setIsServicesMenuOpen(!isServicesMenuOpen);
                  }}
                  className="flex items-center justify-between w-full text-left px-3 py-2 text-gray-700 hover:text-primary font-medium"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transform transition-transform ${isServicesMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesMenuOpen && (
                  <div className="pl-4 space-y-1">
                    {serviceCategories.map((category) => (
                      <Link
                        key={category.name}
                        href={category.href}
                        className="block w-full text-left px-3 py-2 text-gray-600 hover:text-primary text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                href="/pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary font-medium"
              >
                Pricing
              </Link>
              <Link 
                href="/features"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary font-medium"
              >
                Features
              </Link>
              <Link 
                href="/testimonials"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary font-medium"
              >
                Testimonials
              </Link>
              <Link 
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary font-medium"
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <Link href="/signup">
                  <Button className="w-full justify-start bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700" onClick={() => setIsMobileMenuOpen(false)}>
                    Start Free Trial
                  </Button>
                </Link>
              </div>
            </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
