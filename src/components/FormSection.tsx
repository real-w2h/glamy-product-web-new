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
      {/* Discover More New Features Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-4">
          {/* Left Side */}
          <div>
            <h2 className="text-5xl font-extrabold text-[#23235f] mb-10 leading-tight">
              Discover more new<br />features
            </h2>
            <div className="space-y-10 mb-12">
              {/* Feature 1 */}
              <div className="flex items-start gap-5">
                <svg width="40" height="40" fill="none" stroke="#ad46ff" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                <div>
                  <div className="font-bold text-lg text-[#23235f] mb-1">Business Strategy</div>
                  <div className="text-gray-500 max-w-md">Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer took a galley of type and scrambled it to make.</div>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="flex items-start gap-5">
                <svg width="40" height="40" fill="none" stroke="#ad46ff" strokeWidth="2.5" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 12h8"/></svg>
                <div>
                  <div className="font-bold text-lg text-[#23235f] mb-1">Business Strategy</div>
                  <div className="text-gray-500 max-w-md">Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer took a galley of type and scrambled it to make.</div>
                </div>
              </div>
            </div>
            <button className="mt-2 px-10 py-4 rounded-full bg-[#ffd34e] text-[#23235f] font-semibold text-lg shadow-md hover:bg-yellow-400 transition">Learn More</button>
          </div>
          {/* Right Side: Dashboard Image */}
          <div className="flex justify-center items-center relative">
            <img src="/attached_assets/Banner.png" alt="Dashboard" className="w-full max-w-xl rounded-2xl shadow-2xl" />
          </div>
        </div>
        {/* Yellow Accent Shape */}
        <div className="absolute left-0 bottom-0 w-1/3 h-48 bg-[#ffd34e] rounded-tr-full opacity-60 -z-10" style={{clipPath: 'ellipse(60% 100% at 0% 100%)'}} />
      </section>
    </>
  );
} 