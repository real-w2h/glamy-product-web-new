"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, ArrowRight, Crown, Zap, Shield } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  const pricingPlans = [
    {
      name: "Starter",
      price: "₹2,499",
      period: "month",
      description: "Perfect for small salons and beauty practices",
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      badge: "",
      badgeColor: "",
      features: [
        "Up to 3 staff members",
        "Basic appointment booking",
        "Client management",
        "SMS notifications",
        "Basic reporting",
        "Mobile app access",
        "Email support"
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Professional",
      price: "₹6,599",
      period: "month",
      description: "Best for growing salons and clinics",
      icon: <Crown className="w-6 h-6 text-purple-600" />,
      badge: "Most Popular",
      badgeColor: "bg-gradient-to-r from-purple-600 to-pink-600",
      features: [
        "Up to 10 staff members",
        "Advanced booking system",
        "Client management & history",
        "SMS & email notifications",
        "Inventory management",
        "Advanced reporting & analytics",
        "Payment processing",
        "Staff scheduling",
        "Marketing tools",
        "Priority support"
      ],
      buttonText: "Get Started",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹12,499",
      period: "month",
      description: "For large businesses and multi-location chains",
      icon: <Shield className="w-6 h-6 text-green-600" />,
      badge: "Best Value",
      badgeColor: "bg-gradient-to-r from-green-600 to-emerald-600",
      features: [
        "Unlimited staff members",
        "Multi-location management",
        "Advanced client management",
        "Custom notifications",
        "Full inventory control",
        "Advanced analytics & insights",
        "Multiple payment gateways",
        "Staff performance tracking",
        "Advanced marketing suite",
        "White-label options",
        "API access",
        "24/7 dedicated support"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
      popular: false
    }
  ];

  const features = [
    {
      title: "All-in-One Solution",
      description: "Everything you need to manage your beauty business in one platform"
    },
    {
      title: "No Setup Fees",
      description: "Get started immediately with no hidden costs or setup charges"
    },
    {
      title: "30-Day Free Trial",
      description: "Try all features risk-free for 30 days with no credit card required"
    },
    {
      title: "24/7 Support",
      description: "Get help whenever you need it with our dedicated support team"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50">
      <Header />
      
      <div className="pt-32 pb-20">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Choose Your Perfect
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Plan</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Select the plan that fits your business needs. All plans include our core features with no hidden fees.
          </p>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="text-gray-700">Trusted by 10,000+ beauty businesses worldwide</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative overflow-hidden ${plan.popular ? 'border-2 border-purple-500 shadow-2xl transform scale-105' : 'border border-gray-200 shadow-lg'}`}>
                {plan.badge && (
                  <div className={`absolute top-0 right-0 ${plan.badgeColor} text-white px-3 py-1 text-sm font-medium rounded-bl-lg`}>
                    {plan.badge}
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </CardTitle>
                  <p className="text-gray-600 text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">
                      /{plan.period}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/signup">
                    <Button 
                      variant={plan.buttonVariant}
                      className={`w-full py-3 font-semibold transition-all duration-300 ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5' 
                          : 'hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white'
                      }`}
                    >
                      {plan.buttonText}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Glame?
            </h2>
            <p className="text-xl text-gray-600">
              More than just pricing - we provide exceptional value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Join thousands of beauty professionals already using Glame to grow their business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 font-semibold transition-all duration-300 transform hover:-translate-y-0.5">
                  Start Your Free Trial
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-white text-purple-600 bg-white hover:bg-gray-100 hover:text-purple-700 px-8 py-3 font-semibold transition-all duration-300">
                  Talk to Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 