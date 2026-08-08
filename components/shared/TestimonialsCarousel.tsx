"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/data/testimonials';
import { Star, ChevronLeft, ChevronRight, Quote, Award, User } from 'lucide-react';

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 10000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const current = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-4">
      <div className="relative bg-[#0B0757] text-white rounded-3xl p-6 sm:p-12 shadow-2xl border border-white/10 overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#EF7F1A]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#EF7F1A]/10 rounded-full blur-3xl pointer-events-none" />

        <Quote className="w-14 h-14 sm:w-16 sm:h-16 text-[#EF7F1A]/20 absolute top-6 right-8 pointer-events-none" />

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35 }}
            className="space-y-6 relative z-10"
          >
            {/* Rating Stars */}
            <div className="flex items-center space-x-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#EF7F1A] text-[#EF7F1A]" />
              ))}
            </div>

            {/* Testimonial Story Body */}
            <div className="max-h-[360px] sm:max-h-[320px] overflow-y-auto pr-3 space-y-3">
              <p className="whitespace-pre-line text-sm sm:text-base font-normal text-slate-100 leading-relaxed italic">
                "{current.content}"
              </p>
            </div>

            {/* Author Meta & Person Icon Avatar at Bottom */}
            <div className="flex items-center space-x-4 pt-6 border-t border-white/10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#EF7F1A]/20 border-2 border-[#EF7F1A] text-[#EF7F1A] flex items-center justify-center shrink-0 shadow-md">
                <User className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-base sm:text-lg text-white leading-snug">{current.name}</h4>
                <div className="inline-flex items-center space-x-1.5 bg-[#EF7F1A] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                  <Award className="w-3 h-3" />
                  <span>{current.badge}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-8 pt-4 border-t border-white/10 relative z-10">
          <div className="flex items-center space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex ? 'w-8 bg-[#EF7F1A]' : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex space-x-3">
            <button
              onClick={prevTestimonial}
              className="p-2.5 rounded-full bg-white/10 hover:bg-[#EF7F1A] transition-colors text-white border border-white/10 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2.5 rounded-full bg-white/10 hover:bg-[#EF7F1A] transition-colors text-white border border-white/10 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
