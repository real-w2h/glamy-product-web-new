import React from "react";
import Image from "next/image";
import ImageSlider from "@/components/image-slider";
import ScrollTriggeredPopup from "@/components/ScrollTriggeredPopup";

const Hero2Banner = () => {
  return (
    <section className="hero2-banner bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 w-full py-20">
      <ScrollTriggeredPopup autoOpen={true} />
      <div className="hero2-content" style={{ flexWrap: 'wrap', gap: '48px', background: 'transparent' }}>
        <div className="hero2-title-group" style={{ minWidth: 320, flex: 1 }}>
          <h1 className="main-title">
          Grow your <br />
            Salon Business <br />
            <span className="highlight">with Glame CRM</span>
        </h1>
          <ul className="mb-8 space-y-3">
            <li className="flex items-center text-base" style={{ color: '#000' }}><span className="mr-2 text-yellow-400">★</span> Trusted by beauty professionals</li>
            <li className="flex items-center text-base" style={{ color: '#000' }}><span className="mr-2 text-green-400">⏱️</span> Setup in under 10 minutes</li>
          </ul>
          <div className="hero2-buttons">
            <button
              className="hero2-btn primary transition-transform duration-200 ease-in-out"
              style={{ willChange: 'transform' }}
              onMouseDown={e => e.currentTarget.style.transform = 'scale(0.95)'}
              onMouseUp={e => e.currentTarget.style.transform = 'scale(1.08)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
            >
              START FREE TRIAL
            </button>
            <button className="hero2-btn secondary">
              HOW IT WORKS <span className="arrow">↗</span>
            </button>
          </div>
        </div>
        <div className="hero2-image-group" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', maxWidth: 600, minWidth: 320, flex: 1 }}>
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
      </div>
      {/* Decorative elements (optional) */}
      {/* <span className="corner-star">✦</span> */}
      {/* <span className="arrow-curve"></span> */}
      {/* <span className="pin"></span> */}
      <style jsx>{`
        .main-title {
          font-size: 65px;
          line-height: 1.1;
          color: #000;
          font-family: 'GeneralSans-Bold', Arial, sans-serif;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .main-title .highlight {
          background: #f6339a;
          color: #fff;
          padding: 0 12px;
          display: inline-block;
          border-radius: 6px;
          margin-top: 8px;
        }
        .subtitle {
          font-size: 22px;
          color: #222;
          margin-bottom: 40px;
          font-family: 'GeneralSans-Regular', Arial, sans-serif;
          font-weight: 400;
        }
        .hero2-banner {
          padding: 60px 0 0 0;
          position: relative;
          font-family: 'GeneralSans-Bold', Arial, sans-serif;
          overflow: hidden;
        }
        .hero2-content {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .hero2-title-group {
          flex: 1;
          margin-top: 40px;
          margin-bottom: 0;
        }
        .hero2-buttons {
          display: flex;
          gap: 24px;
          margin-bottom: 0;
        }
        .hero2-btn {
          padding: 18px 36px;
          border-radius: 50px;
          font-size: 18px;
          font-family: 'GeneralSans-Bold', Arial, sans-serif;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: none;
          border: none;
          background: #fff;
          color: #1a1a1a;
        }
        .hero2-btn.primary {
          background: linear-gradient(to right, #9333ea, #ec4899);
          color: #fff;
          box-shadow: 0 10px 25px rgba(147, 51, 234, 0.3);
          border: none;
        }
        .hero2-btn.secondary {
          background: #fff;
          color: #1a1a1a;
          border: 2px solid #e2e8f0;
          box-shadow: none;
        }
        .hero2-btn .arrow {
          font-size: 22px;
          transition: transform 0.3s ease;
        }
        .hero2-image-group {
          position: relative;
          width: 540px;
          height: 576px;
          margin-left: 40px;
          padding-left: 20px;
          flex-shrink: 0;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          overflow: hidden;
        }
        .hero2-image-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #f6339a;
          border-radius: 40px;
          z-index: 1;
          border: 3px solid #000;
        }
        .hero2-image-full {
          width: 100%;
          height: auto;
          max-width: 1080px;
          max-height: 960px;
          object-fit: contain;
          border-radius: 40px;
          border: 3px solid #000;
          background: transparent;
          z-index: 2;
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
        }
        .seo-badge {
          position: absolute;
          bottom: 24px;
          right: -40px;
          width: 140px;
          height: 140px;
          background: #fff;
          border-radius: 50%;
          border: 6px solid #000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 3;
          font-family: 'GeneralSans-Bold', Arial, sans-serif;
          font-size: 18px;
          color: #000;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
        }
        .seo-badge .star {
          font-size: 32px;
          margin-top: 4px;
        }
        @media (max-width: 1024px) {
          .hero2-content {
            flex-direction: column;
            align-items: center;
            gap: 40px;
            padding: 0 16px;
          }
          .hero2-image-group {
            max-width: 100vw;
            min-width: 0;
            width: 100%;
            justify-content: center;
            margin-left: 0;
            padding-left: 0;
          }
        }
        @media (max-width: 768px) {
          .main-title {
            font-size: 36px;
          }
          .hero2-image-group > div {
            max-width: 100vw;
            min-width: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero2Banner; 