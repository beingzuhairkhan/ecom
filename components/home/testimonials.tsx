"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import { TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#122B5F] mb-3">What Our Users Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied customers and vendors about their experience with Paymitra
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-[350px] md:h-[280px] overflow-hidden rounded-xl bg-white shadow-lg">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "absolute inset-0 p-8 md:p-12 transition-all duration-500 ease-in-out",
                  index === currentIndex
                    ? "opacity-100 translate-x-0"
                    : index < currentIndex
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                )}
              >
                <div className="flex flex-col md:flex-row md:items-center h-full">
                  <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                    <div className="relative h-24 w-24 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-[#F4A826]">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1 relative">
                    <Quote className="absolute text-[#F4A826]/20 h-16 w-16 -top-3 -left-3 transform -rotate-12" />
                    
                    <blockquote className="text-gray-700 italic mb-6 relative z-10">
                      "{testimonial.comment}"
                    </blockquote>
                    
                    <div className="flex flex-col">
                      <span className="font-bold text-[#122B5F]">{testimonial.name}</span>
                      <span className="text-sm text-gray-600">{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-8 gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrev}
              className="rounded-full border-[#122B5F] text-[#122B5F] hover:bg-[#122B5F] hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all",
                  index === currentIndex
                    ? "bg-[#F4A826] scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full border-[#122B5F] text-[#122B5F] hover:bg-[#122B5F] hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}