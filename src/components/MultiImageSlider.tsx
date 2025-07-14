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

const images = [
  "/attached_assets/1_1750152529582.jpg",
  "/attached_assets/10_1750152529582.jpg",
  "/attached_assets/3_1750152529582.jpg",
  "/attached_assets/4_1750152529582.jpg",
  "/attached_assets/5.png",
  "/attached_assets/6.png",
  "/attached_assets/7.png",
];

export default function MultiImageSlider() {
  return (
    <div className="w-full flex justify-center items-center py-8 bg-white">
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
    </div>
  );
} 