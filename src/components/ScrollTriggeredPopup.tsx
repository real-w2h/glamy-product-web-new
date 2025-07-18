"use client";

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

export default function ScrollTriggeredPopup({ autoOpen = false }: { autoOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    phoneNumber: "",
  });

  useEffect(() => {
    if (autoOpen && !hasShown) {
      setIsOpen(true);
      setHasShown(true);
      return;
    }
    if (!autoOpen) {
      const handleScroll = () => {
        if (hasShown) return;
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        if (scrollPercent >= 60 && !hasShown) {
          setIsOpen(true);
          setHasShown(true);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [hasShown, autoOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className="max-w-[65vw] w-full p-0 rounded-2xl shadow-2xl border-0 flex flex-col md:flex-row overflow-hidden bg-white"
        style={{
          maxWidth: '65vw',
          width: '100%',
          borderRadius: 16,
          boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
          padding: 0,
        }}
      >
        {/* Left: Image */}
        <div className="hidden md:block md:w-1/2 h-full min-h-[400px] p-0 m-0 popup-image-section relative">
          <Image
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80"
            alt="Beautiful woman in spa wellness setting"
            fill
            className="object-cover w-full h-full"
            priority
          />
          {/* Overlay gradient for better text readability if needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
        {/* Right: Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12 bg-white relative">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <Image
              src="/logo.png"
              alt="Glame Logo"
              width={80}
              height={80}
              className="object-contain"
              priority
            />
          </div>
          {/* Heading */}
          <DialogHeader className="w-full">
            <DialogTitle className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Unlock your 1Month FREE Trial
            </DialogTitle>
          </DialogHeader>
          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <Label htmlFor="username" className="text-base font-medium text-gray-700">
                Name
              </Label>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="Enter your name"
                value={formData.username}
                onChange={handleInputChange}
                required
                className="w-full text-base px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="phoneNumber" className="text-base font-medium text-gray-700">
                Phone Number
              </Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
                className="w-full text-base px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <Link href="/signup">
              <Button
                type="submit"
                className="w-full mt-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 shadow-md"
              >
                Start Free Trial
              </Button>
            </Link>
          </form>
          {/* Bottom text */}
          <p className="text-xs text-gray-500 text-center mt-6">
            No credit card required • Cancel anytime
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
} 