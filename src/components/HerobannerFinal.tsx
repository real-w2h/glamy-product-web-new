import React, { useState, useEffect } from "react";
import Image from "next/image";
import Lottie from "lottie-react";

const HerobannerFinal = () => {
  const [sparkleAnimation, setSparkleAnimation] = useState(null);
  const [beautyPulseAnimation, setBeautyPulseAnimation] = useState(null);
  const [floatingHeartAnimation, setFloatingHeartAnimation] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Image slider data
  const sliderImages = [
    {
      src: "/attached_assets/business.webp",
      alt: "Salon Management Platform"
    },
    {
      src: "/attached_assets/1_1750152529582.jpg",
      alt: "Salon Services"
    },
    {
      src: "/attached_assets/3_1750152529582.jpg",
      alt: "Beauty Management"
    },
    {
      src: "/attached_assets/4_1750152529582.jpg",
      alt: "CRM Solutions"
    },
    {
      src: "/attached_assets/10_1750152529582.jpg",
      alt: "Business Growth"
    }
  ];

  useEffect(() => {
    // Load Lottie animations
    const loadAnimations = async () => {
      try {
        const [sparkle, beautyPulse, floatingHeart] = await Promise.all([
          fetch('/lottie/sparkle.json').then(res => res.json()),
          fetch('/lottie/beauty-pulse.json').then(res => res.json()),
          fetch('/lottie/floating-heart.json').then(res => res.json())
        ]);
        
        setSparkleAnimation(sparkle);
        setBeautyPulseAnimation(beautyPulse);
        setFloatingHeartAnimation(floatingHeart);
      } catch (error) {
        console.error('Error loading Lottie animations:', error);
      }
    };

    loadAnimations();
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(slideInterval);
  }, [sliderImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="herobanner-final">
      <div className="hero-final-content">
        <div className="hero-final-title-group">
          {/* Floating Animation Elements */}
          <div className="floating-elements">
            <div className="floating-element element-1">
              {sparkleAnimation && (
                <Lottie 
                  animationData={sparkleAnimation} 
                  loop={true} 
                  autoplay={true}
                  style={{ width: 40, height: 40 }}
                />
              )}
            </div>
            <div className="floating-element element-2">
              {beautyPulseAnimation && (
                <Lottie 
                  animationData={beautyPulseAnimation} 
                  loop={true} 
                  autoplay={true}
                  style={{ width: 35, height: 35 }}
                />
              )}
            </div>
            <div className="floating-element element-3">
              {floatingHeartAnimation && (
                <Lottie 
                  animationData={floatingHeartAnimation} 
                  loop={true} 
                  autoplay={true}
                  style={{ width: 30, height: 30 }}
                />
              )}
            </div>
            <div className="floating-element element-4">
              {sparkleAnimation && (
                <Lottie 
                  animationData={sparkleAnimation} 
                  loop={true} 
                  autoplay={true}
                  style={{ width: 32, height: 32 }}
                />
              )}
            </div>
            <div className="floating-element element-5">
              {beautyPulseAnimation && (
                <Lottie 
                  animationData={beautyPulseAnimation} 
                  loop={true} 
                  autoplay={true}
                  style={{ width: 38, height: 38 }}
                />
              )}
            </div>
            <div className="floating-element element-6">
              {floatingHeartAnimation && (
                <Lottie 
                  animationData={floatingHeartAnimation} 
                  loop={true} 
                  autoplay={true}
                  style={{ width: 28, height: 28 }}
                />
              )}
            </div>
          </div>
          
          <h1 className="hero-final-main-title">
            Transform Your <br />
            Salon Business <br />
            <span className="hero-final-highlight">With Glame CRM</span>
          </h1>
          <p className="hero-final-subtitle">
            Streamline operations, enhance customer experience, and scale your salon<br />
            with our comprehensive management platform.
          </p>
          <div className="hero-final-buttons">
            <button className="hero-final-btn primary">START FREE TRIAL</button>
            <button className="hero-final-btn secondary">
              WATCH DEMO <span className="hero-final-arrow">→</span>
            </button>
          </div>
          {/* <div className="hero-final-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Salons Trust Us</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Satisfaction Rate</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </div> */}
        </div>
        <div className="hero-final-image-group">
          <div className="hero-final-image-container">
            {/* Image Slider */}
            <div className="image-slider">
              <div className="slider-container">
                {sliderImages.map((image, index) => (
                  <div
                    key={index}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="slider-image"
                    />
                  </div>
                ))}
              </div>
              
              {/* Navigation Arrows */}
              <button className="slider-nav prev" onClick={prevSlide}>
                ‹
              </button>
              <button className="slider-nav next" onClick={nextSlide}>
                ›
              </button>
              
              {/* Dots Indicator */}
              <div className="slider-dots">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="floating-card card-1">
              <div className="card-icon">📊</div>
              <div className="card-content">
                <span className="card-title">Analytics</span>
                <span className="card-subtitle">Real-time insights</span>
              </div>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">📱</div>
              <div className="card-content">
                <span className="card-title">Mobile App</span>
                <span className="card-subtitle">Manage on the go</span>
              </div>
            </div>
            <div className="floating-card card-3 payments-card">
              <div className="card-icon payments-icon">💳</div>
              <div className="card-content">
                <span className="card-title">💳 Payments</span>
                <span className="card-subtitle">Secure & fast</span>
              </div>
              <div className="secure-badge">🔒</div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .herobanner-final {
          background: #fdf1ed;
          min-height: 100vh;
          padding: 50px 0 60px 0;
          position: relative;
          font-family: 'GeneralSans-Bold', Arial, sans-serif;
          overflow: hidden;
        }
        
        .hero-final-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          gap: 60px;
        }
        
        .hero-final-title-group {
          flex: 1;
          max-width: 600px;
          position: relative;
        }
        
        .floating-elements {
          position: absolute;
          top: -80px;
          left: 0;
          right: 0;
          height: 80px;
          pointer-events: none;
        }
        
        .floating-element {
          position: absolute;
          animation: floatGently 6s ease-in-out infinite;
        }
        
        .element-1 {
          top: 10px;
          left: 20px;
          animation-delay: 0s;
        }
        
        .element-2 {
          top: 25px;
          left: 120px;
          animation-delay: 1s;
        }
        
        .element-3 {
          top: 5px;
          left: 220px;
          animation-delay: 2s;
        }
        
        .element-4 {
          top: 30px;
          left: 320px;
          animation-delay: 3s;
        }
        
        .element-5 {
          top: 15px;
          left: 420px;
          animation-delay: 4s;
        }
        
        .element-6 {
          top: 35px;
          left: 500px;
          animation-delay: 5s;
        }
        
        .hero-final-main-title {
          font-size: 72px;
          line-height: 1.1;
          color: #1a1a1a;
          font-family: 'GeneralSans-Bold', Arial, sans-serif;
          font-weight: 700;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }
        
        .hero-final-highlight {
          background: #f6339a;
          color: #fff;
          padding: 0 16px;
          display: inline-block;
          border-radius: 8px;
          margin-top: 8px;
          box-shadow: 0 4px 20px rgba(246, 51, 154, 0.3);
        }
        
        .hero-final-subtitle {
          font-size: 24px;
          color: #4a5568;
          margin-bottom: 48px;
          font-family: 'GeneralSans-Regular', Arial, sans-serif;
          font-weight: 400;
          line-height: 1.5;
        }
        
        .hero-final-buttons {
          display: flex;
          gap: 20px;
          margin-bottom: 60px;
        }
        
        .hero-final-btn {
          padding: 18px 36px;
          border-radius: 50px;
          font-size: 18px;
          font-family: 'GeneralSans-Bold', Arial, sans-serif;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .hero-final-btn.primary {
          background: linear-gradient(to right, #9333ea, #ec4899);
          color: #fff;
          box-shadow: 0 10px 25px rgba(147, 51, 234, 0.3);
        }
        
        .hero-final-btn.primary:hover {
          background: linear-gradient(to right, #7c3aed, #db2777);
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(147, 51, 234, 0.4);
        }
        
        .hero-final-btn.secondary {
          background: #fff;
          color: #1a1a1a;
          border: 2px solid #e2e8f0;
        }
        
        .hero-final-btn.secondary:hover {
          border-color: #667eea;
          color: #667eea;
        }
        
        .hero-final-arrow {
          font-size: 20px;
          transition: transform 0.3s ease;
        }
        
        .hero-final-btn.secondary:hover .hero-final-arrow {
          transform: translateX(4px);
        }
        
        .hero-final-image-group {
          flex: 1;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 60px;
        }
        
        .hero-final-image-container {
          position: relative;
          width: 800px;
          height: 800px;
        }
        
        .image-slider {
          width: 100%;
          height: 100%;
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        }
        
        .slider-container {
          width: 100%;
          height: 100%;
          position: relative;
        }
        
        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
        }
        
        .slide.active {
          opacity: 1;
        }
        
        .slider-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        
        .slider-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.9);
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          font-size: 24px;
          font-weight: bold;
          color: #333;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .slider-nav:hover {
          background: white;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }
        
        .slider-nav.prev {
          left: 20px;
        }
        
        .slider-nav.next {
          right: 20px;
        }
        
        .slider-dots {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 10;
        }
        
        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .dot.active {
          background: #f6339a;
          transform: scale(1.2);
        }
        
        .dot:hover {
          background: rgba(255, 255, 255, 0.8);
        }
        
        .floating-card {
          position: absolute;
          background: #fff;
          border-radius: 16px;
          padding: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          gap: 12px;
          animation: float 6s ease-in-out infinite;
          z-index: 5;
        }
        
        .card-1 {
          top: 10%;
          left: -20%;
          animation-delay: 0s;
        }
        
        .card-2 {
          top: 60%;
          right: -15%;
          animation-delay: 2s;
        }
        
        .card-3 {
          top: 50%;
          right: -25%;
          animation-delay: 1s;
          transform: translateY(-50%);
        }
        
        .payments-card {
          background: linear-gradient(135deg, #00c9ff 0%, #92fe9d 100%);
          border: 2px solid #00c9ff;
          box-shadow: 0 12px 40px rgba(0, 201, 255, 0.3);
          animation: paymentSlideIn 4s ease-in-out infinite;
          position: relative;
          overflow: hidden;
        }
        
        .payments-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          animation: shimmer 2s infinite;
        }
        
        .payments-icon {
          font-size: 28px;
          animation: pulse 2s infinite;
        }
        
        .payments-card .card-title {
          color: #fff;
          font-weight: 800;
          font-size: 16px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .payments-card .card-subtitle {
          color: #fff;
          font-weight: 600;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }
        
        .secure-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          background: #4CAF50;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          animation: bounce 2s infinite;
        }
        
        .card-icon {
          font-size: 24px;
        }
        
        .card-content {
          display: flex;
          flex-direction: column;
        }
        
        .card-title {
          font-size: 14px;
          font-weight: 700;
          color: #1a1a1a;
          font-family: 'GeneralSans-Bold', Arial, sans-serif;
        }
        
        .card-subtitle {
          font-size: 12px;
          color: #718096;
          font-family: 'GeneralSans-Regular', Arial, sans-serif;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes paymentSlideIn {
          0% {
            transform: translateY(-50%) translateX(50px);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-50%) translateX(-10px);
            opacity: 1;
          }
          100% {
            transform: translateY(-50%) translateX(0px);
            opacity: 1;
          }
        }
        
        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }
        
        @keyframes floatGently {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.7;
          }
          25% {
            transform: translateY(-8px) rotate(2deg);
            opacity: 0.9;
          }
          50% {
            transform: translateY(-15px) rotate(-1deg);
            opacity: 1;
          }
          75% {
            transform: translateY(-8px) rotate(1deg);
            opacity: 0.9;
          }
        }
        
        @media (max-width: 1024px) {
          .hero-final-content {
            flex-direction: column;
            text-align: center;
            gap: 40px;
          }
          
          .hero-final-main-title {
            font-size: 56px;
          }
          
          .hero-final-subtitle {
            font-size: 20px;
          }
          
          .hero-final-buttons {
            justify-content: center;
          }
          
          .hero-final-image-container {
            width: 600px;
            height: 600px;
          }
          
          .floating-card {
            display: none;
          }
          
          .floating-elements {
            display: none;
          }
        }
        
        @media (max-width: 768px) {
          .herobanner-final {
            padding: 60px 0 40px 0;
          }
          
          .hero-final-content {
            padding: 0 20px;
          }
          
          .hero-final-main-title {
            font-size: 42px;
          }
          
          .hero-final-subtitle {
            font-size: 18px;
          }
          
          .hero-final-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .hero-final-image-container {
            width: 400px;
            height: 400px;
          }
        }
      `}</style>
    </div>
  );
};

export default HerobannerFinal; 