import React from "react";
import Image from "next/image";

export default function TopHeroBanner() {
  return (
    <section className="relative bg-[#fff6f7] py-20 lg:py-32 overflow-visible px-4 flex flex-col items-center justify-center min-h-[90vh]">
      {/* Top Badge */}
      <div className="mb-6 flex justify-center">
        <span className="bg-pink-100 text-pink-700 px-4 py-1 rounded-full text-sm font-semibold shadow-sm flex items-center gap-2">
          Top #1 SEO & Marketing Agency
        </span>
      </div>
      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-4 leading-tight relative bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-600 bg-clip-text text-transparent">
        Drive Your Business Forward <br />
        With Our Expert <span className="inline-block align-middle mx-2">
          <Image src="/attached_assets/user-icons.png" alt="User Icons" width={60} height={32} className="inline-block align-middle rounded-full" />
        </span>
        <span className="relative inline-block text-pink-500">
          Digital Marketing
          <span className="absolute left-0 right-0 -bottom-2 w-full h-2">
            <svg viewBox="0 0 320 18" width="100%" height="18"><path d="M5 15 Q160 25 315 10" stroke="#ef476f" strokeWidth="3" fill="none" /></svg>
          </span>
        </span> Solutions
      </h1>
      {/* Subheading */}
      <p className="text-lg sm:text-xl text-gray-600 text-center max-w-2xl mb-8">
        Welcome to SEOC where we specialize in revolutionizing your online presence through expert SEO and digital marketing solutions.
      </p>
      {/* Call to Action Buttons */}
      <div className="flex flex-row gap-6 justify-center items-center w-full max-w-2xl mx-auto mb-8">
        <button className="rounded-full bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 shadow-lg transition-all text-base border-2 border-pink-500">START RANKING NOW</button>
        <button className="rounded-full bg-white border-2 border-black text-black font-semibold px-8 py-3 shadow-lg transition-all text-base hover:bg-gray-100">GET STARTED NOW</button>
      </div>
      {/* Decorative/Stat Images */}
      {/* Left curly arrow and user-with-icons */}
      <div className="absolute left-10 top-32 flex flex-col items-center z-10">
        <Image src="/attached_assets/curly-arrow.png" alt="Curly Arrow" width={120} height={80} className="mb-2" />
        <Image src="/attached_assets/user-icons.png" alt="User with Icons" width={120} height={120} className="rounded-full shadow-lg" />
      </div>
      {/* Left straight arrow and stat card */}
      <div className="absolute left-24 bottom-32 flex flex-col items-center z-10">
        <Image src="/attached_assets/straight-arrow.png" alt="Straight Arrow" width={120} height={80} className="mb-2" />
        <Image src="/attached_assets/stat-card.png" alt="Stat Card" width={120} height={60} className="rounded-lg shadow-lg" />
      </div>
      {/* Right plus, megaphone, and Sudan stat card */}
      <div className="absolute right-16 top-24 flex flex-col items-center z-10">
        <span className="text-pink-500 text-4xl font-bold mb-2">+</span>
        <svg width="60" height="60" fill="none" viewBox="0 0 80 80" className="mb-2"><g stroke="#ec4899" strokeWidth="4"><rect x="30" y="30" width="20" height="20" rx="5" fill="none" /><path d="M50 40 l20 -10" /><path d="M50 40 l20 10" /><path d="M30 40 l-10 10" /></g></svg>
        <Image src="/attached_assets/sudan-card.png" alt="Sudan Stat Card" width={120} height={60} className="rounded-lg shadow-lg" />
      </div>
      {/* Centered main person image */}
      <div className="relative z-20 mt-12 flex justify-center">
        <Image src="/attached_assets/person-laptop.png" alt="Person with Laptop" width={320} height={320} className="rounded-full shadow-2xl" />
      </div>
    </section>
  );
} 