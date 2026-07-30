"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { testimonials } from '@/data/testimonials';
import { Star, ChevronLeft, ChevronRight, Quote, Award } from 'lucide-react';

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-4">
      <div className="relative bg-[#0B0757] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/10 overflow-hidden">
        {/* Background ambient glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#EF7F1A]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#EF7F1A]/10 rounded-full blur-3xl pointer-events-none" />

        <Quote className="w-16 h-16 text-[#EF7F1A]/20 absolute top-6 right-8 pointer-events-none" />

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-6 relative z-10"
          >
            {/* Rating Stars */}
            <div className="flex items-center space-x-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#EF7F1A] text-[#EF7F1A]" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="text-lg sm:text-2xl font-medium text-slate-100 leading-relaxed italic">
              "{current.content}"
            </p>

            {/* Author Meta & Student Photo */}
            <div className="flex items-center space-x-4 pt-6 border-t border-white/10">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#EF7F1A] shadow-md shrink-0">
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-lg text-white leading-snug">{current.name}</h4>
                <div className="inline-flex items-center space-x-1.5 bg-[#EF7F1A] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                  <Award className="w-3 h-3" />
                  <span>{current.badge}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-8 pt-4">
          <div className="flex space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-8 bg-[#EF7F1A]' : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex space-x-3">
            <button
              onClick={prevTestimonial}
              className="p-2.5 rounded-full bg-white/10 hover:bg-[#EF7F1A] transition-colors text-white border border-white/10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2.5 rounded-full bg-white/10 hover:bg-[#EF7F1A] transition-colors text-white border border-white/10"
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
