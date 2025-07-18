"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/signup" 
            className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Signup
          </Link>
          
          <div className="text-center">
            <img src="/logo.png" alt="Glame Logo" className="w-32 h-auto mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
            <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900">Terms of Service</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <div className="space-y-6 text-gray-700">
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using Glame's beauty business management platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Description of Service</h2>
                <p>
                  Glame provides a comprehensive business management platform designed specifically for beauty and wellness businesses, including but not limited to:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Appointment scheduling and management</li>
                  <li>Client relationship management</li>
                  <li>Inventory tracking and management</li>
                  <li>Financial reporting and analytics</li>
                  <li>Staff management and scheduling</li>
                  <li>Marketing and promotional tools</li>
                  <li>Online booking and payment processing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">3. User Accounts</h2>
                <p>
                  To access certain features of the service, you must create an account. You are responsible for:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Providing accurate and complete information during registration</li>
                  <li>Notifying us immediately of any unauthorized use of your account</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Subscription and Payment</h2>
                <p>
                  Glame offers various subscription plans with different features and pricing. By subscribing to our service:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>You agree to pay all fees associated with your chosen plan</li>
                  <li>Fees are billed in advance on a monthly or annual basis</li>
                  <li>All payments are non-refundable except as required by law</li>
                  <li>We reserve the right to modify pricing with 30 days notice</li>
                  <li>Free trial periods are available for new users</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Acceptable Use</h2>
                <p>You agree not to use the service to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Transmit harmful, offensive, or inappropriate content</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with the proper functioning of the service</li>
                  <li>Use the service for any illegal or unauthorized purpose</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Data and Privacy</h2>
                <p>
                  Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms of Service by reference.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Intellectual Property</h2>
                <p>
                  The service and its original content, features, and functionality are owned by Glame and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Termination</h2>
                <p>
                  We may terminate or suspend your account and access to the service immediately, without prior notice, for any reason, including breach of these Terms of Service. Upon termination, your right to use the service will cease immediately.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Limitation of Liability</h2>
                <p>
                  In no event shall Glame, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Disclaimer</h2>
                <p>
                  The service is provided on an "AS IS" and "AS AVAILABLE" basis. Glame makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">11. Governing Law</h2>
                <p>
                  These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which Glame operates, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">12. Changes to Terms</h2>
                <p>
                  We reserve the right to modify or replace these Terms of Service at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">13. Contact Information</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                  <p><strong>Email:</strong> legal@glame.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Address:</strong> 123 Beauty Street, Suite 100, New York, NY 10001</p>
                </div>
              </section>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8">
          <Link 
            href="/signup" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
          >
            Return to Signup
          </Link>
        </div>
      </div>
    </div>
  );
} 