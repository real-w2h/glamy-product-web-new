"use client";

import React, { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const BusinessManagementSection = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinResult, setSpinResult] = useState<string | null>(null);
  const wheelRef = useRef<HTMLDivElement>(null);

  const prizes = [
    { text: "FREE 1 MONTH PRO", color: "from-yellow-400 to-orange-400", probability: 0.25 },
    { text: "20% OFF", color: "from-white to-gray-100", probability: 0.2 },
    { text: "10% OFF", color: "from-yellow-300 to-yellow-400", probability: 0.2 },
    { text: "10% OFF", color: "from-white to-gray-100", probability: 0.2 },
    { text: "NO LUCKY TODAY", color: "from-yellow-300 to-yellow-400", probability: 0.1 },
    { text: "30% OFF", color: "from-white to-gray-100", probability: 0.05 }
  ];

  const spinWheel = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setSpinResult(null);
    
    // Random number of spins (5-10 full rotations)
    const spins = 5 + Math.random() * 5;
    const finalRotation = spins * 360 + Math.random() * 360;
    
    if (wheelRef.current) {
      wheelRef.current.style.transition = 'transform 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      wheelRef.current.style.transform = `rotate(${finalRotation}deg)`;
    }
    
    // Determine result after animation
    setTimeout(() => {
      const result = Math.floor(Math.random() * prizes.length);
      setSpinResult(prizes[result].text);
      setIsSpinning(false);
    }, 3000);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Complete Business Management
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to run your salon efficiently, from marketing to customer management
          </p>
        </motion.div>

        {/* Top Calendar Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-6 max-w-md mx-auto shadow-xl"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-white text-lg">Today's Appointments</h3>
            <span className="text-blue-100 text-sm font-medium">12:00 - 12:15 PM</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-lg font-bold border-2 border-white/30">
              AC
            </div>
            <div>
              <p className="font-semibold text-white text-lg">Alaina Clark</p>
              <p className="text-blue-100">Customized Pedicure - 75 Min</p>
            </div>
          </div>
        </motion.div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
                        {/* Mighty Marketing Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-purple-50 overflow-hidden hover:shadow-3xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                  />
                  <CardTitle className="text-2xl font-bold flex items-center gap-3 relative z-10">
                    <motion.div 
                      className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                      </svg>
                    </motion.div>
                    Mighty Marketing
                  </CardTitle>
                  <p className="text-purple-100 relative z-10">
                    Maximize profits and customer satisfaction with powerful tailored campaigns.
                  </p>
                  <motion.a 
                    href="#" 
                    className="text-white font-medium hover:text-purple-200 inline-flex items-center transition-colors relative z-10"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Learn More <span className="ml-1">→</span>
                  </motion.a>
                </CardHeader>
                <CardContent className="p-6">
                                     <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                    <div className="relative">
                      {/* Client Messages Card */}
                                                                    <motion.div 
                         className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-purple-100"
                         whileHover={{ 
                           scale: 1.1, 
                           rotate: 5,
                           transition: { duration: 0.3 }
                         }}
                       >
                         <p className="text-sm font-semibold text-gray-800">Client Messages</p>
                         <motion.p 
                           className="text-2xl font-bold text-purple-600"
                           animate={{ scale: [1, 1.1, 1] }}
                           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                         >
                           16
                         </motion.p>
                         <div className="flex -space-x-2 mt-2">
                           {[0, 1, 2].map((index) => (
                             <motion.div 
                               key={index}
                               className="w-6 h-6 bg-blue-400 rounded-full border-2 border-white"
                               animate={{ 
                                 y: [0, -5, 0],
                                 scale: [1, 1.2, 1]
                               }}
                               transition={{ 
                                 duration: 1.5, 
                                 repeat: Infinity, 
                                 delay: index * 0.2,
                                 ease: "easeInOut"
                               }}
                             />
                           ))}
                         </div>
                       </motion.div>
                      
                      {/* Central Logo */}
                                                                    <div className="flex justify-center items-center mb-8 pt-8">
                         <motion.div 
                           className="w-28 h-28 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-xl border-4 border-white"
                           whileHover={{ 
                             scale: 1.2, 
                             rotate: 360,
                             transition: { duration: 0.6 }
                           }}
                           animate={{ 
                             y: [0, -10, 0],
                             boxShadow: [
                               "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                               "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                               "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                             ]
                           }}
                           transition={{ 
                             duration: 3, 
                             repeat: Infinity, 
                             ease: "easeInOut"
                           }}
                         >
                           <motion.span 
                             className="text-white font-bold text-2xl"
                             animate={{ scale: [1, 1.1, 1] }}
                             transition={{ duration: 1.5, repeat: Infinity }}
                           >
                             P
                           </motion.span>
                         </motion.div>
                       </div>
                      
                      {/* Marketing Tools */}
                                             <div className="grid grid-cols-3 gap-4">
                         {[
                           { icon: "🏢", label: "Web Builder" },
                           { icon: "🎯", label: "Current Promotions" },
                           { icon: "📱", label: "Social Media Reviews" }
                         ].map((tool, index) => (
                           <motion.div 
                             key={index} 
                             className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                             whileHover={{ 
                               scale: 1.05, 
                               y: -5,
                               transition: { duration: 0.3 }
                             }}
                             whileTap={{ scale: 0.95 }}
                             initial={{ opacity: 0, y: 20 }}
                             animate={{ opacity: 1, y: 0 }}
                             transition={{ delay: index * 0.1 }}
                           >
                             <motion.div 
                               className="text-2xl mb-2"
                               whileHover={{ rotate: 360, scale: 1.2 }}
                               transition={{ duration: 0.5 }}
                             >
                               {tool.icon}
                             </motion.div>
                             <p className="text-xs font-semibold text-gray-700">{tool.label}</p>
                           </motion.div>
                         ))}
                       </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

                        {/* Better Business Management Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-purple-50 overflow-hidden hover:shadow-3xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                  />
                  <CardTitle className="text-2xl font-bold flex items-center gap-3 relative z-10">
                    <motion.div 
                      className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </motion.div>
                    Better Business Management
                  </CardTitle>
                  <p className="text-purple-100 relative z-10">
                    Streamline your salon operations with Glame CRM - appointment scheduling, customer management, inventory tracking, and comprehensive reporting all in one platform.
                  </p>
                  <motion.a 
                    href="#" 
                    className="text-white font-medium hover:text-purple-200 inline-flex items-center transition-colors relative z-10"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Learn More <span className="ml-1">→</span>
                  </motion.a>
                </CardHeader>
                <CardContent className="p-6">
                                     <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                                         <div className="grid grid-cols-2 gap-4 mb-6">
                       {/* CRM Dashboard Preview */}
                       <motion.div 
                         className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                         whileHover={{ 
                           scale: 1.05, 
                           y: -5,
                           transition: { duration: 0.3 }
                         }}
                         whileTap={{ scale: 0.95 }}
                       >
                         <div className="text-center">
                           <motion.img 
                             src="/attached_assets/GlameBeauty-4.png" 
                             alt="Glame CRM Dashboard" 
                             className="w-full h-24 object-cover rounded-lg mb-3"
                             whileHover={{ scale: 1.1 }}
                             transition={{ duration: 0.3 }}
                           />
                           <div className="text-sm font-semibold text-gray-800">CRM Dashboard</div>
                         </div>
                       </motion.div>
                       
                       {/* Appointment Calendar */}
                       <motion.div 
                         className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                         whileHover={{ 
                           scale: 1.05, 
                           y: -5,
                           transition: { duration: 0.3 }
                         }}
                         whileTap={{ scale: 0.95 }}
                       >
                         <div className="text-center">
                           <motion.img 
                             src="/attached_assets/section_image.png" 
                             alt="Appointment Calendar" 
                             className="w-full h-24 object-cover rounded-lg mb-3"
                             whileHover={{ scale: 1.1 }}
                             transition={{ duration: 0.3 }}
                           />
                           <div className="text-sm font-semibold text-gray-800">Smart Calendar</div>
                         </div>
                       </motion.div>
                     </div>
                    
                    {/* CRM Features Grid */}
                    <div className="grid grid-cols-3 gap-3">
                                                                    {[
                         { icon: "📅", label: "Appointments", color: "from-purple-500 to-purple-600" },
                         { icon: "👥", label: "Customers", color: "from-pink-500 to-pink-600" },
                         { icon: "📦", label: "Inventory", color: "from-purple-600 to-pink-600" }
                       ].map((feature, index) => (
                         <motion.div 
                           key={index} 
                           className="bg-white rounded-xl p-3 text-center shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                           whileHover={{ 
                             scale: 1.08, 
                             y: -3,
                             transition: { duration: 0.3 }
                           }}
                           whileTap={{ scale: 0.95 }}
                           initial={{ opacity: 0, scale: 0.8 }}
                           animate={{ opacity: 1, scale: 1 }}
                           transition={{ delay: index * 0.1 }}
                         >
                           <motion.div 
                             className={`w-10 h-10 bg-gradient-to-r ${feature.color} rounded-full mx-auto mb-2 flex items-center justify-center text-white text-lg`}
                             whileHover={{ rotate: 360, scale: 1.2 }}
                             transition={{ duration: 0.5 }}
                           >
                             {feature.icon}
                           </motion.div>
                           <p className="text-xs font-semibold text-gray-700">{feature.label}</p>
                         </motion.div>
                       ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
                        {/* Glame CRM Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="border-0 shadow-2xl bg-white overflow-hidden hover:shadow-3xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                  />
                  <CardTitle className="text-2xl font-bold flex items-center gap-3 relative z-10">
                    <motion.div 
                      className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                      </svg>
                    </motion.div>
                    Glame CRM
                  </CardTitle>
                  <p className="text-purple-100 relative z-10">
                    Your complete salon management solution - from appointments to analytics, everything you need to grow your business.
                  </p>
                  <motion.a 
                    href="#" 
                    className="text-white font-medium hover:text-purple-200 inline-flex items-center transition-colors relative z-10"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Learn More <span className="ml-1">→</span>
                  </motion.a>
                </CardHeader>
                 <CardContent className="p-8">
                   <div className="bg-white rounded-xl p-8">
                     {/* Spin Game Section */}
                     <div className="text-center mb-8 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-6 relative overflow-hidden">
                       {/* Background Decorations */}
                       <div className="absolute inset-0 opacity-20">
                         <div className="absolute top-4 left-4 w-8 h-8 bg-purple-300 rounded-full"></div>
                         <div className="absolute top-8 right-6 w-6 h-6 bg-pink-300 rounded-full"></div>
                         <div className="absolute bottom-6 left-8 w-4 h-4 bg-yellow-300 rounded-full"></div>
                         <div className="absolute bottom-4 right-4 w-6 h-6 bg-purple-300 rounded-full"></div>
                       </div>
                       
                       <h3 className="text-2xl font-bold text-purple-800 mb-2 relative z-10">🎯 SPIN TO WIN!</h3>
                       <p className="text-sm text-purple-600 mb-6 relative z-10">Spin the wheel to win amazing Glame prizes!</p>
                       
                       <div className="relative flex justify-center items-center mb-6">
                         {/* Purple Pedestal */}
                         <div className="absolute -bottom-2 w-48 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg"></div>
                         <div className="absolute -bottom-4 w-40 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-md"></div>
                         
                         {/* Spinning Wheel */}
                         <div 
                           ref={wheelRef}
                           className="w-44 h-44 relative spinning-wheel"
                           style={{ transform: 'rotate(0deg)' }}
                         >
                           {/* Outer Rim with Dots */}
                           <div className="absolute inset-0 rounded-full border-8 border-pink-300 bg-pink-200">
                             {Array.from({ length: 12 }).map((_, i) => (
                               <div
                                 key={i}
                                 className="absolute w-2 h-2 bg-yellow-300 rounded-full"
                                 style={{
                                   top: '50%',
                                   left: '50%',
                                   transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-88px)`
                                 }}
                               />
                             ))}
                           </div>
                           
                           {/* Wheel Segments */}
                           <div className="absolute inset-4 rounded-full overflow-hidden">
                             {prizes.map((segment, index) => (
                               <div
                                 key={index}
                                 className={`absolute w-full h-full bg-gradient-to-r ${segment.color} flex items-center justify-center border border-gray-200`}
                                 style={{
                                   transform: `rotate(${index * 60}deg)`,
                                   clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%)'
                                 }}
                               >
                                 <span 
                                   className="text-purple-800 text-xs font-bold text-center leading-tight"
                                   style={{ 
                                     transform: `rotate(-${index * 60}deg)`,
                                     maxWidth: '60px'
                                   }}
                                 >
                                   {segment.text}
                                 </span>
                               </div>
                             ))}
                           </div>
                           
                           {/* Center Button */}
                           <div className="absolute inset-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                             <motion.button
                               className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                               whileHover={{ scale: 1.1 }}
                               whileTap={{ scale: 0.95 }}
                               onClick={spinWheel}
                               disabled={isSpinning}
                             >
                               GO
                             </motion.button>
                           </div>
                           
                           {/* Pointer */}
                           <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-b-10 border-transparent border-b-pink-400 z-10 drop-shadow-lg"></div>
                         </div>
                       </div>
                       
                       {/* Spin Status */}
                       {isSpinning && (
                         <motion.div
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           className="mt-4 p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white text-center"
                         >
                           <p className="font-semibold">🎰 SPINNING...</p>
                         </motion.div>
                       )}
                       
                       {/* Result Display */}
                       {spinResult && (
                         <motion.div
                           initial={{ opacity: 0, scale: 0.8 }}
                           animate={{ opacity: 1, scale: 1 }}
                           className="mt-4 p-6 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl text-white text-center relative overflow-hidden"
                         >
                           {/* Background Pattern */}
                           <div className="absolute inset-0 opacity-10">
                             <div className="absolute top-2 right-2 w-4 h-4 bg-white rounded-full"></div>
                             <div className="absolute bottom-2 left-2 w-3 h-3 bg-white rounded-full"></div>
                             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full opacity-20"></div>
                           </div>
                           
                           <div className="relative z-10">
                             <h4 className="font-bold text-xl mb-3">Thank you for playing!</h4>
                             <p className="text-sm mb-4 opacity-90">Enter your email to claim your prize.</p>
                             
                             <div className="space-y-3">
                               <input
                                 type="email"
                                 placeholder="Enter your email address"
                                 className="w-full px-4 py-3 rounded-lg text-white placeholder-white/70 bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50"
                               />
                               <motion.button
                                 className="w-full bg-purple-500 hover:bg-purple-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                                 whileHover={{ scale: 1.02 }}
                                 whileTap={{ scale: 0.98 }}
                               >
                                 Claim your prize now!
                               </motion.button>
                             </div>
                             
                             <p className="text-xs mt-3 opacity-75">You won: <span className="font-bold">{spinResult}</span></p>
                           </div>
                         </motion.div>
                       )}
                       
                       <p className="text-xs text-gray-500 mt-3">*Limited time offer. Terms apply.</p>
                     </div>
                     
                     {/* Glame Features */}
                     <div className="grid grid-cols-2 gap-6">
                       {[
                         { icon: "⏰", label: "Smart Scheduling", color: "from-purple-500 to-pink-500" },
                         { icon: "🎧", label: "Customer Care", color: "from-pink-500 to-purple-500" }
                       ].map((feature, index) => (
                         <motion.div 
                           key={index} 
                           className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                           whileHover={{ 
                             scale: 1.05, 
                             y: -5,
                             transition: { duration: 0.3 }
                           }}
                           whileTap={{ scale: 0.95 }}
                           initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                           animate={{ opacity: 1, x: 0 }}
                           transition={{ delay: index * 0.2 }}
                         >
                           <motion.div 
                             className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl`}
                             whileHover={{ rotate: 360, scale: 1.2 }}
                             transition={{ duration: 0.5 }}
                           >
                             {feature.icon}
                           </motion.div>
                           <p className="text-base font-semibold text-gray-700">{feature.label}</p>
                         </motion.div>
                       ))}
                     </div>
                   </div>
                 </CardContent>
               </Card>
            </motion.div>

            {/* Business Management Dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
                             <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-purple-50 overflow-hidden">
                <CardContent className="p-0">
                                     <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                    {/* Review Section */}
                    <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl p-4 mb-6 text-white shadow-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-lg">
                          L
                        </div>
                        <div>
                          <p className="font-semibold text-lg">Let's review</p>
                          <p className="text-pink-100 text-sm">Your business insights</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Navigation Tabs */}
                    <div className="bg-white rounded-xl p-4 mb-6 shadow-md">
                      <div className="flex space-x-6 border-b">
                        {["Products", "Clients", "Sales", "Services", "Employees", "Accounts"].map((tab, index) => (
                                                     <button 
                             key={index} 
                             className={`text-sm pb-2 font-medium transition-colors ${
                               tab === "Clients" 
                                 ? "text-purple-600 border-b-2 border-purple-600" 
                                 : "text-gray-500 hover:text-gray-700"
                             }`}
                           >
                            {tab}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Clients Table */}
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <h4 className="font-bold text-gray-800 mb-4 text-lg">Clients</h4>
                      <div className="space-y-4">
                        {[
                          { name: "Amanda John", email: "amanda@email.com", initials: "AJ", color: "bg-blue-500" },
                          { name: "Anna Jackson", email: "anna@email.com", initials: "AJ", color: "bg-green-500" },
                          { name: "Brandy Jacobs", email: "brandy@email.com", initials: "BJ", color: "bg-purple-500" }
                        ].map((client, index) => (
                          <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                            <div className={`w-10 h-10 ${client.color} rounded-full flex items-center justify-center text-white font-semibold shadow-md`}>
                              {client.initials}
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold text-gray-800">{client.name}</p>
                              <p className="text-sm text-gray-600">{client.email}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessManagementSection; 