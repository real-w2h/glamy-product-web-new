"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import MultiImageSlider from "@/components/MultiImageSlider";
import { 
  Calendar, 
  Users, 
  Bell, 
  TrendingUp, 
  Stethoscope, 
  Star,
  CheckCircle,
  Clock,
  Heart,
  Sparkles,
  BarChart3,
  UserCheck,
  BookOpen,
  ArrowRight,
  FileText,
  ClipboardList,
  Activity,
  Shield,
  Leaf,
  User,
  AlertCircle
} from "lucide-react";

export default function DermatologyPage() {
  const features = [
    {
      icon: <Calendar className="w-8 h-8 text-green-600" />,
      title: "Easy Scheduling & Booking",
      description: "Patients apne convenience par slots book kar sakein aur schedule aapke control me ho."
    },
    {
      icon: <FileText className="w-8 h-8 text-green-600" />,
      title: "Detailed Patient Records",
      description: "Skin concerns, ongoing treatments, aur prescriptions ka pura digital record."
    },
    {
      icon: <Bell className="w-8 h-8 text-green-600" />,
      title: "Follow-up Reminders",
      description: "Patients ko timely follow-up reminders bhejna ab automatic hai."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-600" />,
      title: "Practice Insights",
      description: "Track karein ki kaunse services sabse demand me hain aur practice ka performance analyze karein."
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: "Skin treatment history track kar sakein"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: "Patient skin concerns ka detailed record"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: "Automatic follow-up reminders"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: "Practice performance insights"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: "Paperwork aur admin work reduce"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: "Patient care me focus kar sakein"
    }
  ];

  const sliderImages = [
    "/attached_assets/Salon_Section_Slide_1.png",
    "/attached_assets/Salon_Section_Slider.png",
    "/attached_assets/Salon_img.png"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Leaf className="w-12 h-12 text-green-600 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                For Dermatologists Who Want to Focus on Care, Not Admin Work
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Dermatology practice me har patient ka accurate record rakhna aur personalized care dena zaroori hota hai. 
              Glame CRM aapke liye hai — tailored for dermatologists
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Dermatology Practice ke liye Smart Features
            </h2>
            <p className="text-lg text-gray-600">
              Aap apne patients par focus karein — paperwork aur admin hum sambhalen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Kyun Choose Karein Glame CRM?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Dermatology clinics ke liye ek smart assistant, Glame CRM ka experience lijiye
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      {benefit.icon}
                      <span className="ml-3 text-gray-700">{benefit.text}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-8 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
              <div className="lg:pl-8">
                <MultiImageSlider images={sliderImages} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Dermatologists Trust Glame CRM
            </h2>
            <p className="text-lg text-gray-600">
              Thousands of dermatology practices are already using Glame CRM to streamline their operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Dermatology Clinics</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">50K+</div>
              <div className="text-gray-600">Happy Patients</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600">Patient Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Dermatology Practice?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join thousands of dermatologists who are already using Glame CRM to focus more on patient care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 