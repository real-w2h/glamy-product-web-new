import React from "react";
import Image from "next/image";
import ImageSlider from "@/components/image-slider";

const Hero2Banner = () => {
  return (
    <div className="hero2-banner">
      <div className="hero2-content">
        <div className="hero2-title-group">
          <h1 className="main-title">
          Grow your <br />
            Salon Business <br />
            <span className="highlight">with Glame CRM</span>
        </h1>
          <p className="subtitle">
            Boost your online presence, and attract the right audience<br />
            to grow your business successfully.
          </p>
          <div className="hero2-buttons">
            <button className="hero2-btn primary">GET STARTED</button>
            <button className="hero2-btn secondary">
              HOW IT WORKS <span className="arrow">↗</span>
          </button>
        </div>
      </div>
        <div className="hero2-image-group">
          <ImageSlider />
          {/* Placeholder badge */}
          {/* <div className="seo-badge">
            <span>SEO MARKETING</span>
            <span className="star">✦</span>
          </div> */}
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
          background: #ffffff;
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
      `}</style>
    </div>
  );
};

export default Hero2Banner; 