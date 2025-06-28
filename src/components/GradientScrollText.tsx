import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type GradientScrollTextProps = React.HTMLAttributes<HTMLElement> & {
  as?: React.ElementType;
  children: React.ReactNode;
  variant?: "default" | "apple" | "purple" | "cyber";
  scrollEffect?: boolean;
  glow?: boolean;
};

export default function GradientScrollText({
  as: Tag = "span",
  className = "",
  children,
  style,
  variant = "default",
  scrollEffect = true,
  glow = false,
  ...rest
}: GradientScrollTextProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (ref.current && scrollEffect) {
      // Create scroll-triggered animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
          onEnter: () => setIsInView(true),
          onLeave: () => setIsInView(false),
          onEnterBack: () => setIsInView(true),
          onLeaveBack: () => setIsInView(false),
        },
      });

      // Animate background position for gradient effect based on scroll
      tl.to(ref.current, {
        backgroundPosition: "100% 50%",
        ease: "none",
        duration: 1,
      });

      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, [scrollEffect]);

  // Get the appropriate gradient class based on variant
  const getGradientClass = () => {
    switch (variant) {
      case "apple":
        return "gradient-text-apple-scroll";
      case "purple":
        return "gradient-text-purple-scroll";
      case "cyber":
        return "gradient-text-cyber-scroll";
      default:
        return "gradient-scroll-text";
    }
  };

  // Get glow class if enabled
  const getGlowClass = () => {
    if (!glow) return "";
    switch (variant) {
      case "apple":
        return "gradient-glow";
      case "purple":
        return "gradient-glow-purple";
      case "cyber":
        return "gradient-glow-cyber";
      default:
        return "gradient-glow";
    }
  };

  return (
    <Tag
      ref={ref}
      className={`${getGradientClass()} ${getGlowClass()} ${className}`}
      style={{ 
        backgroundPosition: scrollEffect ? "0% 50%" : "50% 50%",
        ...style 
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
} 