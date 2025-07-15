"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import MultiImageSlider from "@/components/MultiImageSlider";
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
  ArrowRight
} from "lucide-react";

export default function SalonManagementPage() {
  const features = [
    {
      icon: <Calendar className="w-8 h-8 text-purple-600" />,
      title: "Effortless Appointment Booking",
      description: "Clients easily online book kar sakein, aur aap har booking ka record ek jagah dekh sakein."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Client History aur Preferences",
      description: "Kya client ko balayage pasand tha ya koi specific stylist? Sab kuch track rahega taaki har visit personalized lage."
    },
    {
      icon: <Bell className="w-8 h-8 text-purple-600" />,
      title: "Automated Reminders aur Notifications",
      description: "No-shows kam ho jaayenge kyunki reminders timely jaayenge."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: "Staff Performance Tracking",
      description: "Kaun stylist sabse zyada busy hai? Kya trend ho raha hai? Sab pata chalega simple dashboard par."
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: "Operations manage kar sakein"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: "Zyada time apni creativity pe de sakein"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: "Har client ka personal touch"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: "Modern solution for salon owners"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Header />
      
      <div className="pt-20">
        {/* Top Image Slider Section */}
        <section className="py-10 px-4">
          <div className="max-w-6xl mx-auto">
            <MultiImageSlider 
              background=""
              images={[
                "/attached_assets/Salon_Section_Slide_1.png",
                "/attached_assets/Salon_Section_Slider.png",
                "/attached_assets/Salon_img.png"
              ]}
            />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Glame CRM salon owners ke liye design kiya gaya hai
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  {benefit.icon}
                  <span className="text-lg">{benefit.text}</span>
                </div>
              ))}
            </div>
            <p className="text-xl mb-8 opacity-90">
              Taaki aap operations manage kar sakein aur zyada time apni creativity pe de sakein.
            </p>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-yellow-500 mr-2" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Apne Salon ya Studio ka Smart Manager
              </h1>
            </div>
            <p className="text-2xl md:text-3xl text-gray-700 mb-8">
              Glame CRM ke saath
            </p>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                Salon aur studio chalana sirf appointments lene ka kaam nahi hai — yeh ek art hai jahan aapko har client ka personal touch dena hota hai. Glame CRM yahin help karta hai:
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-white rounded-xl shadow-md">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        📅 {feature.title}:
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Glame CRM in Action
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Dekhen kaise Glame CRM salon management ko simple aur effective banata hai
            </p>
            <MultiImageSlider background="" />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-yellow-500 mr-3 animate-pulse" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 animate-bounce">
                  UNLOCK YOUR 1MONTH TRAIL
                </h2>
                <Sparkles className="w-8 h-8 text-yellow-500 ml-3 animate-pulse" />
              </div>
              <p className="text-xl text-gray-600 mb-8 animate-fade-in">
                Aaj hi explore karein aur apne business ko next level pe le jaayein
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group transform hover:scale-110 animate-pulse">
                  <Star className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-300" />
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center justify-center group transform hover:scale-110">
                  <BookOpen className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Learn More
                  <Heart className="w-5 h-5 ml-2 group-hover:scale-125 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Elements */}
        <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Scissors className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Professional Tools</h3>
                <p className="text-gray-600">Advanced features for salon professionals</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Smart Analytics</h3>
                <p className="text-gray-600">Data-driven insights for better business decisions</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Customer Care</h3>
                <p className="text-gray-600">Keep your clients happy and coming back</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
} 