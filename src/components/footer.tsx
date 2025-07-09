import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 items-start gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
            <img src="/logo.png" alt="Logo" className="w-40 h-10 rounded-lg object-cover" />
            </div>
            <p className="text-gray-400 mb-6">
              Empowering beauty professionals with cutting-edge technology to grow their business and delight their customers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => scrollToSection("home")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("features")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Resources</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">API Reference</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-purple-400 mr-3" />
                <a href="mailto:hello@glame.com" className="text-gray-400 hover:text-white transition-colors">
                  hello@glame.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-purple-400 mr-3" />
                <a href="tel:+919650833553" className="text-gray-400 hover:text-white transition-colors">
                  +91 9650833553
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 text-purple-400 mr-3 mt-1" />
                <span className="text-gray-400">
                  4th,443 Cloud 9 Vaishali Sector 1 Ghaziabad 201010
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center mt-8">
          <p className="text-gray-400">
            © 2025 Glame. All rights reserved. Made with <span className="text-red-500">♥</span> Futuremeservices
          </p>
        </div>
      </div>
    </footer>
  );
}
