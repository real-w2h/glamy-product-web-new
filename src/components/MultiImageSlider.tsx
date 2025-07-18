"use client";

import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

interface MultiImageSliderProps {
  background?: string;
  images?: string[];
  marqueeText?: string;
}

const defaultImages = [
  "/attached_assets/1_1750152529582.jpg",
  "/attached_assets/10_1750152529582.jpg",
  "/attached_assets/3_1750152529582.jpg",
  "/attached_assets/4_1750152529582.jpg",
];

export default function MultiImageSlider({ 
  background = "", 
  images = defaultImages,
  marqueeText = "Experience the Glame Dashboard • Transform Your Business • Book Your Free Demo Today • Experience the Glame Dashboard • Transform Your Business • Book Your Free Demo Today • Experience the Glame Dashboard • Transform Your Business • Book Your Free Demo Today • Experience the Glame Dashboard • Transform Your Business • Book Your Free Demo Today"
}: MultiImageSliderProps) {
  return (
    <div className={`w-full flex flex-col justify-center items-center pt-2.5 pb-0 -mt-8 ${background}`}>
      <div className="relative w-full max-w-[1600px]">
        <Carousel opts={{ align: "start", slidesToScroll: 1, loop: true }}>
          <CarouselContent className="-ml-4">
            {images.map((src, idx) => (
              <CarouselItem
                key={idx}
                className="pl-4 basis-1/3 flex flex-col items-center justify-center"
              >
                <div className="w-full flex items-center justify-center">
                  <Image
                    src={src}
                    alt={`slide-${idx}`}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-xl shadow-md object-contain"
                    sizes="(max-width: 1200px) 100vw, 33vw"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-6 z-10" />
          <CarouselNext className="-right-6 z-10" />
        </Carousel>
      </div>
      
      {/* Marquee Section */}
      <div className="w-full bg-white mt-2 py-4 relative overflow-hidden">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="animate-marquee inline-block">
            <span className="text-lg md:text-xl font-bold mx-8 font-sans bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent tracking-wide">
              {marqueeText}
            </span>
          </div>
          <div className="animate-marquee2 inline-block">
            <span className="text-lg md:text-xl font-bold mx-8 font-sans bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent tracking-wide">
              {marqueeText}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 