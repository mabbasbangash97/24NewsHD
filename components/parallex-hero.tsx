"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface ParallaxHeroProps {
  imageUrl: string;
  title: string;
  subtitle: string;
}

export function ParallaxHero({ imageUrl, title, subtitle }: ParallaxHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = hero.offsetHeight;
      const parallaxEffect = scrollPosition * 0.4; // Adjust this value to change the parallax intensity

      hero.style.transform = `translateY(${parallaxEffect}px)`;
      hero.style.opacity = `${1 - scrollPosition / heroHeight}`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative h-screen overflow-hidden custom-scrollbar w-screen"
      ref={heroRef}
    >
      <Image
        src={imageUrl}
        alt="Hero Image"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#001B39]/70 to-[#001B39]" />
      <div className="absolute bottom-32 left-0 p-8 text-white max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="text-sm font-medium mb-2">{subtitle}</div>
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
        </div>
      </div>
    </div>
  );
}
