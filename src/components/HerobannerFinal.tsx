import React, { useState, useEffect } from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import WorkProcessSection from "./WorkProcessSection";
import Link from "next/link";

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

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="herobanner-final" style={{
      background: '#ffffff',
      minHeight: '100vh',
      padding: '50px 0 20px 0', // bottom padding remains, left/right 0
      position: 'relative',
      fontFamily: 'GeneralSans-Bold, Arial, sans-serif',
      overflow: 'hidden'
    }}>
      <div className="hero-final-content" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1600px',
        margin: '0 auto',
        padding: '0', // left/right padding removed
        gap: '40px',
        flexDirection: 'row-reverse'
      }}>
        <div className="hero-final-title-group" style={{
          flex: 1,
          maxWidth: '600px',
          position: 'relative'
        }}>
          {/* Floating Animation Elements */}
          <div className="floating-elements" style={{
            position: 'absolute',
            top: '-80px',
            left: 0,
            right: 0,
            height: '80px',
            pointerEvents: 'none'
          }}>
            <div className="floating-element element-1" style={{
              position: 'absolute',
              top: '10px',
              left: '20px',
              animation: 'floatGently 6s ease-in-out infinite'
            }}>
              {sparkleAnimation && (
                <Lottie 
                  animationData={sparkleAnimation} 
                  loop={true} 
                  autoplay={true}
                  style={{ width: 40, height: 40 }}
                />
              )}
            </div>
            <div className="floating-element element-2" style={{
              position: 'absolute',
              top: '25px',
              left: '120px',
              animation: 'floatGently 6s ease-in-out infinite 1s'
            }}>
              {beautyPulseAnimation && (
                <Lottie 
                  animationData={beautyPulseAnimation} 
                  loop={true} 
                  autoplay={true}
                  style={{ width: 35, height: 35 }}
                />
              )}
            </div>
            <div className="floating-element element-3" style={{
              position: 'absolute',
              top: '5px',
              left: '220px',
              animation: 'floatGently 6s ease-in-out infinite 2s'
            }}>
              {floatingHeartAnimation && (
                <Lottie 
                  animationData={floatingHeartAnimation} 
                  loop={true} 
                  autoplay={true}
                  style={{ width: 30, height: 30 }}
                />
              )}
            </div>
            <div className="floating-element element-4" style={{
              position: 'absolute',
              top: '30px',
              left: '320px',
              animation: 'floatGently 6s ease-in-out infinite 3s'
            }}>
              {sparkleAnimation && (
                <Lottie 
                  animationData={sparkleAnimation} 
                  loop={true} 
                  autoplay={true}
                  style={{ width: 32, height: 32 }}
                />
              )}
            </div>
            <div className="floating-element element-5" style={{
              position: 'absolute',
              top: '15px',
              left: '420px',
              animation: 'floatGently 6s ease-in-out infinite 4s'
            }}>
              {beautyPulseAnimation && (
                <Lottie 
                  animationData={beautyPulseAnimation} 
                  loop={true} 
                  autoplay={true}
                  style={{ width: 38, height: 38 }}
                />
              )}
            </div>
            <div className="floating-element element-6" style={{
              position: 'absolute',
              top: '35px',
              left: '500px',
              animation: 'floatGently 6s ease-in-out infinite 5s'
            }}>
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
          
          <h1 className="hero-final-main-title" style={{
            fontSize: '72px',
            lineHeight: 1.1,
            color: '#1a1a1a',
            fontFamily: 'GeneralSans-Bold, Arial, sans-serif',
            fontWeight: 700,
            marginBottom: '24px',
            letterSpacing: '-0.02em'
          }}>
            Transform Your <br />
            Salon Business <br />
            <span className="hero-final-highlight" style={{
              background: '#f6339a',
              color: '#fff',
              padding: '0 16px',
              display: 'inline-block',
              borderRadius: '8px',
              marginTop: '8px',
              boxShadow: '0 4px 20px rgba(246, 51, 154, 0.3)'
            }}>With Glame CRM</span>
          </h1>
          <p className="hero-final-subtitle" style={{
            fontSize: '24px',
            color: '#4a5568',
            marginBottom: '48px',
            fontFamily: 'GeneralSans-Regular, Arial, sans-serif',
            fontWeight: 400,
            lineHeight: 1.5
          }}>
            Streamline operations, enhance customer experience, and scale your salon<br />
            with our comprehensive management platform.
          </p>
          <div className="hero-final-buttons" style={{
            display: 'flex',
            gap: '20px',
            marginBottom: '60px'
          }}>
            <Link href="/signup">
              <button className="hero-final-btn primary" style={{
                padding: '18px 36px',
                borderRadius: '50px',
                fontSize: '18px',
                fontFamily: 'GeneralSans-Bold, Arial, sans-serif',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'linear-gradient(to right, #9333ea, #ec4899)',
                color: '#fff',
                boxShadow: '0 10px 25px rgba(147, 51, 234, 0.3)'
              }}>START FREE TRIAL</button>
            </Link>
            <button className="hero-final-btn secondary" style={{
              padding: '18px 36px',
              borderRadius: '50px',
              fontSize: '18px',
              fontFamily: 'GeneralSans-Bold, Arial, sans-serif',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              border: '2px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: '#fff',
              color: '#1a1a1a'
            }}>
              WATCH DEMO <span className="hero-final-arrow" style={{
                fontSize: '20px',
                transition: 'transform 0.3s ease'
              }}>→</span>
            </button>
          </div>
        </div>
        <div className="hero-final-image-group" style={{
          flex: 1,
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '60px',
          paddingLeft: '20px'
        }}>
          <div className="hero-final-image-container" style={{
            position: 'relative',
            width: '800px',
            height: '800px'
          }}>
            {/* Main Banner Image */}
            <Image
              src="/Salon_Banner.png"
              alt="Salon Management Platform"
              width={800}
              height={800}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '20px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)'
              }}
              priority
            />
          </div>
        </div>
      </div>
      {/* WorkProcessSection ko yahan second position pe add kar rahe hain */}
      <WorkProcessSection />

      <style jsx>{`
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