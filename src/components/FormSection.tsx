import React from "react";

export default function FormSection() {
  return (
    <>
      <section className="relative py-20 px-4 flex items-center justify-center min-h-[80vh] bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="relative z-10 max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-purple-600 inline-block">
              Ready to Transform Your Beauty Business?
            </h2>
            <p className="mb-6 max-w-md" style={{ color: '#000' }}>
              Join thousands of beauty professionals who have already streamlined their operations and boosted their revenue with <span className="text-pink-400 font-bold">Glame</span>. See how our platform can work for your specific needs.
            </p>
            <ul className="mb-8 space-y-3">
              <li className="flex items-center text-base" style={{ color: '#000' }}><span className="mr-2 text-yellow-400">★</span> Trusted by beauty professionals</li>
              <li className="flex items-center text-base" style={{ color: '#000' }}><span className="mr-2 text-green-400">⏱️</span> Setup in under 10 minutes</li>
              <li className="flex items-center text-base" style={{ color: '#000' }}><span className="mr-2 text-blue-400">🛡️</span> Bank-level security</li>
            </ul>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all flex items-center gap-2">
              Book a Free Demo <span>📅</span>
            </button>
          </div>
          {/* Right Side - Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg ml-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Get Started Today</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300" />
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300" />
              <input type="text" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300" />
              <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300 text-gray-500">
                <option value="">Select your business type</option>
                <option value="salon">Salon</option>
                <option value="makeup_artist">Makeup Artist</option>
                <option value="dermatologist">Dermatologist</option>
                <option value="spa">Spa</option>
                <option value="barber_shop">Barber Shop</option>
                <option value="nail_salon">Nail Salon</option>
                <option value="other">Other</option>
              </select>
              <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded-lg shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all mt-2 text-lg">Start Free Trial</button>
              <p className="text-xs text-gray-500 text-center mt-2">No credit card required. 14-day free trial.</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
} 