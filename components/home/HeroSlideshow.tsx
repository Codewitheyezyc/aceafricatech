"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

const heroImages = [
  '/hero1.png',
  '/hero2.png',
  '/hero3.jpg',
  '/hero4.jpg',
  '/hero5.jpg',
];

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[600px] sm:min-h-[660px] flex items-center justify-center overflow-hidden bg-[#060436]">
      {/* Background Images Slideshow with Crossfade */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={heroImages[currentSlide]}
            alt="Remote Work Career Background"
            fill
            className="object-cover object-center"
            priority={currentSlide === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0757]/85 via-[#0B0757]/80 to-[#060436]/90 backdrop-blur-[2px]" />

      {/* Centered Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-8">
        
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg"
        >
          <Sparkles className="w-4 h-4 text-[#EF7F1A]" />
          <span className="text-xs font-extrabold text-white uppercase tracking-widest">
            Africa's Remote Work EdTech Platform
          </span>
        </motion.div>

        {/* Main Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.15]"
        >
          We Train Africans to <br className="hidden sm:inline" />
          <span className="text-[#EF7F1A]">Work for the World</span>
        </motion.h1>

        {/* Subheadline from PDF */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-slate-200 font-normal leading-relaxed max-w-3xl mx-auto"
        >
          AceAfrica is a digital skills academy helping everyday Africans — whether you're just starting out, already working, or rebuilding your career in a new country — break into high-paying remote roles with international companies, earning in <strong className="text-white">dollars, pounds, and euros</strong> from wherever you are.
        </motion.p>

        {/* Single CTA Button: Enrol Now */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center items-center pt-2"
        >
          <Link
            href="/enroll"
            className="bg-[#EF7F1A] hover:bg-[#D96E0F] text-white font-extrabold px-9 py-4 rounded-xl text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-3"
          >
            <span>Enrol Now</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Centered Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-6 flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-xs text-slate-300 border-t border-white/15 max-w-3xl mx-auto"
        >
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>5,000+ Students Trained</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-[#EF7F1A] shrink-0" />
            <span>100% Practical Training</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>No Prior Tech Background Needed</span>
          </div>
        </motion.div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 pt-4">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'w-8 bg-[#EF7F1A]' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to hero slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
