"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ButtonGradient } from "@/components/ui/button-gradient";

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  cta: {
    text: string;
    link: string;
  };
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Discover Amazing Products",
    subtitle: "Shop the latest trends with exclusive offers",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1200",
    cta: {
      text: "Shop Now",
      link: "/shop",
    },
  },
  {
    id: 2,
    title: "Become a Vendor",
    subtitle: "Start selling your products to millions of customers",
    image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1200",
    cta: {
      text: "Join Now",
      link: "/vendor/register",
    },
  },
  {
    id: 3,
    title: "Fast & Secure Delivery",
    subtitle: "Get your products delivered safely and on time",
    image: "https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=1200",
    cta: {
      text: "Learn More",
      link: "/about",
    },
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Handle manual navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-[600px] md:h-[650px] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
                priority={index === 0}
                className="brightness-[0.85]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#122B5F]/70 to-transparent" />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 h-full flex items-center relative z-20">
              <div className="max-w-xl text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 opacity-90">
                  {slide.subtitle}
                </p>
                <Link href={slide.cta.link}>
                  <ButtonGradient variant="yellow" size="lg" className="group">
                    {slide.cta.text}
                    <ChevronRight className="ml-2 h-5 w-5 inline transition-transform group-hover:translate-x-1" />
                  </ButtonGradient>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/70"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}