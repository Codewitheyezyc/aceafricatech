"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Globe2, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';

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
    }, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[620px] sm:min-h-[680px] flex items-center justify-center overflow-hidden bg-[#060436]">
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
            alt="Remote Tech Career Background"
            fill
            className="object-cover object-center"
            priority={currentSlide === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Overlay for High Contrast & Professional Aesthetics */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0757]/85 via-[#0B0757]/80 to-[#060436]/90 backdrop-blur-[2px]" />

      {/* Centered Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-8">
        
        {/* Top Announcement Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg"
        >
          <Sparkles className="w-4 h-4 text-[#EF7F1A]" />
          <span className="text-xs font-bold text-white uppercase tracking-widest">
            Nigeria's Premier Remote Career Academy
          </span>
        </motion.div>

        {/* Main Hero Centered Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.15]"
        >
          Land High-Paying Remote Jobs & <br className="hidden sm:inline" />
          <span className="text-[#EF7F1A]">Earn in Foreign Currency</span>
        </motion.h1>

        {/* Subtitle Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-slate-200 font-normal leading-relaxed max-w-3xl mx-auto"
        >
          We train everyday Nigerians in high-demand remote skills — <strong className="text-white">Technical Customer Support, Virtual Assistance, IT Support & Tech Sales</strong> — and guide you step-by-step to land dollar-paying jobs with global companies.
        </motion.p>

        {/* Action Buttons Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2"
        >
          <Link
            href="/enroll"
            className="w-full sm:w-auto bg-[#EF7F1A] hover:bg-[#D96E0F] text-white font-extrabold px-8 py-4 rounded-xl text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-3"
          >
            <span>Enroll in Training (₦25,000)</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/webinar"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-4 rounded-xl text-base border border-white/25 backdrop-blur-md transition-all flex items-center justify-center space-x-2"
          >
            <Globe2 className="w-5 h-5 text-[#EF7F1A]" />
            <span>Join Free Webinar</span>
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
            <span>5,000+ Nigerians Trained</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-[#EF7F1A] shrink-0" />
            <span>₦25,000 One-Time Fee</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>No Prior Tech Experience Needed</span>
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
