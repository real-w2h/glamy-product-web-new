"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

// Design 1: Modern Minimalist
export const ModernMinimalistSpinner = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const wheelRef = useRef<HTMLDivElement>(null);

  const prizes = [
    { text: "FREE 1 MONTH", color: "from-emerald-500 to-teal-500", bg: "bg-emerald-50" },
    { text: "50% OFF", color: "from-blue-500 to-indigo-500", bg: "bg-blue-50" },
    { text: "25% OFF", color: "from-purple-500 to-pink-500", bg: "bg-purple-50" },
    { text: "10% OFF", color: "from-orange-500 to-red-500", bg: "bg-orange-50" }
  ];

  const spinWheel = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    
    const spins = 5 + Math.random() * 5;
    const finalRotation = spins * 360 + Math.random() * 360;
    
    if (wheelRef.current) {
      wheelRef.current.style.transition = 'transform 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      wheelRef.current.style.transform = `rotate(${finalRotation}deg)`;
    }
    
    setTimeout(() => setIsSpinning(false), 3000);
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-2xl">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Modern Spinner</h3>
      
      <div className="relative flex justify-center items-center mb-8">
        <div 
          ref={wheelRef}
          className="w-48 h-48 relative"
          style={{ transform: 'rotate(0deg)' }}
        >
          {/* Wheel Segments */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            {prizes.map((segment, index) => (
              <div
                key={index}
                className={`absolute w-full h-full bg-gradient-to-r ${segment.color} flex items-center justify-center`}
                style={{
                  transform: `rotate(${index * 90}deg)`,
                  clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%)'
                }}
              >
                <span 
                  className="text-white text-sm font-semibold text-center"
                  style={{ transform: `rotate(-${index * 90}deg)` }}
                >
                  {segment.text}
                </span>
              </div>
            ))}
          </div>
          
          {/* Center */}
          <div className="absolute inset-6 bg-white rounded-full flex items-center justify-center shadow-lg">
            <motion.button
              className="w-16 h-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={spinWheel}
              disabled={isSpinning}
            >
              SPIN
            </motion.button>
          </div>
          
          {/* Pointer */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-b-8 border-transparent border-b-gray-800"></div>
        </div>
      </div>
      
      {isSpinning && (
        <div className="text-center text-gray-600">Spinning...</div>
      )}
    </div>
  );
};

// Design 2: Neon Glow
export const NeonGlowSpinner = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const wheelRef = useRef<HTMLDivElement>(null);

  const prizes = [
    { text: "FREE PRO", color: "from-cyan-400 to-blue-500", glow: "shadow-cyan-500/50" },
    { text: "50% OFF", color: "from-pink-400 to-purple-500", glow: "shadow-pink-500/50" },
    { text: "25% OFF", color: "from-green-400 to-emerald-500", glow: "shadow-green-500/50" },
    { text: "10% OFF", color: "from-yellow-400 to-orange-500", glow: "shadow-yellow-500/50" }
  ];

  const spinWheel = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    
    const spins = 5 + Math.random() * 5;
    const finalRotation = spins * 360 + Math.random() * 360;
    
    if (wheelRef.current) {
      wheelRef.current.style.transition = 'transform 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      wheelRef.current.style.transform = `rotate(${finalRotation}deg)`;
    }
    
    setTimeout(() => setIsSpinning(false), 3000);
  };

  return (
    <div className="bg-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-700">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">Neon Glow</h3>
      
      <div className="relative flex justify-center items-center mb-8">
        <div 
          ref={wheelRef}
          className="w-48 h-48 relative"
          style={{ transform: 'rotate(0deg)' }}
        >
          {/* Outer Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-20 blur-xl"></div>
          
          {/* Wheel Segments */}
          <div className="absolute inset-2 rounded-full overflow-hidden">
            {prizes.map((segment, index) => (
              <div
                key={index}
                className={`absolute w-full h-full bg-gradient-to-r ${segment.color} flex items-center justify-center ${segment.glow}`}
                style={{
                  transform: `rotate(${index * 90}deg)`,
                  clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%)'
                }}
              >
                <span 
                  className="text-white text-sm font-bold text-center drop-shadow-lg"
                  style={{ transform: `rotate(-${index * 90}deg)` }}
                >
                  {segment.text}
                </span>
              </div>
            ))}
          </div>
          
          {/* Center */}
          <div className="absolute inset-8 bg-gray-800 rounded-full flex items-center justify-center shadow-2xl border border-gray-600">
            <motion.button
              className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cyan-500/50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={spinWheel}
              disabled={isSpinning}
            >
              GO
            </motion.button>
          </div>
          
          {/* Pointer */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-12 border-transparent border-b-cyan-400 drop-shadow-lg"></div>
        </div>
      </div>
      
      {isSpinning && (
        <div className="text-center text-cyan-400 font-semibold">Spinning...</div>
      )}
    </div>
  );
};

// Design 3: Retro Arcade
export const RetroArcadeSpinner = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const wheelRef = useRef<HTMLDivElement>(null);

  const prizes = [
    { text: "JACKPOT", color: "from-red-500 to-pink-500", bg: "bg-red-100" },
    { text: "BIG WIN", color: "from-yellow-400 to-orange-500", bg: "bg-yellow-100" },
    { text: "WIN", color: "from-green-500 to-emerald-500", bg: "bg-green-100" },
    { text: "TRY AGAIN", color: "from-blue-500 to-indigo-500", bg: "bg-blue-100" }
  ];

  const spinWheel = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    
    const spins = 5 + Math.random() * 5;
    const finalRotation = spins * 360 + Math.random() * 360;
    
    if (wheelRef.current) {
      wheelRef.current.style.transition = 'transform 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      wheelRef.current.style.transform = `rotate(${finalRotation}deg)`;
    }
    
    setTimeout(() => setIsSpinning(false), 3000);
  };

  return (
    <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-8 shadow-2xl border-4 border-yellow-300">
      <h3 className="text-3xl font-bold text-white mb-6 text-center drop-shadow-lg">🎰 ARCADE SPIN 🎰</h3>
      
      <div className="relative flex justify-center items-center mb-8">
        {/* Arcade Frame */}
        <div className="absolute inset-0 bg-black rounded-full p-2">
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center">
            <div 
              ref={wheelRef}
              className="w-44 h-44 relative"
              style={{ transform: 'rotate(0deg)' }}
            >
              {/* Wheel Segments */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-yellow-400">
                {prizes.map((segment, index) => (
                  <div
                    key={index}
                    className={`absolute w-full h-full bg-gradient-to-r ${segment.color} flex items-center justify-center`}
                    style={{
                      transform: `rotate(${index * 90}deg)`,
                      clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%)'
                    }}
                  >
                    <span 
                      className="text-white text-lg font-bold text-center drop-shadow-lg"
                      style={{ transform: `rotate(-${index * 90}deg)` }}
                    >
                      {segment.text}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Center */}
              <div className="absolute inset-6 bg-yellow-400 rounded-full flex items-center justify-center border-4 border-yellow-300">
                <motion.button
                  className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={spinWheel}
                  disabled={isSpinning}
                >
                  SPIN
                </motion.button>
              </div>
              
              {/* Pointer */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-12 border-transparent border-b-yellow-400 drop-shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
      
      {isSpinning && (
        <div className="text-center text-white font-bold text-xl">🎰 SPINNING... 🎰</div>
      )}
    </div>
  );
};

// Design 4: Elegant Glass
export const ElegantGlassSpinner = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const wheelRef = useRef<HTMLDivElement>(null);

  const prizes = [
    { text: "PREMIUM", color: "from-purple-400 to-pink-400", bg: "bg-purple-50/20" },
    { text: "PLUS", color: "from-blue-400 to-cyan-400", bg: "bg-blue-50/20" },
    { text: "BASIC", color: "from-green-400 to-emerald-400", bg: "bg-green-50/20" },
    { text: "TRIAL", color: "from-orange-400 to-red-400", bg: "bg-orange-50/20" }
  ];

  const spinWheel = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    
    const spins = 5 + Math.random() * 5;
    const finalRotation = spins * 360 + Math.random() * 360;
    
    if (wheelRef.current) {
      wheelRef.current.style.transition = 'transform 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      wheelRef.current.style.transform = `rotate(${finalRotation}deg)`;
    }
    
    setTimeout(() => setIsSpinning(false), 3000);
  };

  return (
    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">Elegant Glass</h3>
      
      <div className="relative flex justify-center items-center mb-8">
        <div 
          ref={wheelRef}
          className="w-48 h-48 relative"
          style={{ transform: 'rotate(0deg)' }}
        >
          {/* Glass Effect */}
          <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"></div>
          
          {/* Wheel Segments */}
          <div className="absolute inset-2 rounded-full overflow-hidden">
            {prizes.map((segment, index) => (
              <div
                key={index}
                className={`absolute w-full h-full bg-gradient-to-r ${segment.color} flex items-center justify-center backdrop-blur-sm`}
                style={{
                  transform: `rotate(${index * 90}deg)`,
                  clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%)'
                }}
              >
                <span 
                  className="text-white text-sm font-semibold text-center drop-shadow-lg"
                  style={{ transform: `rotate(-${index * 90}deg)` }}
                >
                  {segment.text}
                </span>
              </div>
            ))}
          </div>
          
          {/* Center */}
          <div className="absolute inset-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
            <motion.button
              className="w-16 h-16 bg-gradient-to-r from-white/30 to-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-lg border border-white/30"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={spinWheel}
              disabled={isSpinning}
            >
              SPIN
            </motion.button>
          </div>
          
          {/* Pointer */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-b-8 border-transparent border-b-white/60"></div>
        </div>
      </div>
      
      {isSpinning && (
        <div className="text-center text-white/80 font-medium">Spinning...</div>
      )}
    </div>
  );
};

// Main component to showcase all designs
export const SpinnerDesigns = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Spinner Design Variations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ModernMinimalistSpinner />
          <NeonGlowSpinner />
          <RetroArcadeSpinner />
          <ElegantGlassSpinner />
        </div>
      </div>
    </div>
  );
}; 