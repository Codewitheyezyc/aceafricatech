"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/data/testimonials';
import { Star, User, ChevronDown, Award, Sparkles } from 'lucide-react';

export default function TestimonialsCarousel() {
  const [openIds, setOpenIds] = useState<string[]>(['1']); // First testimonial open by default

  const toggleTestimonial = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setOpenIds(testimonials.map((t) => t.id));
  };

  const collapseAll = () => {
    setOpenIds([]);
  };

  const isAllExpanded = openIds.length === testimonials.length;

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {/* Top Controls Bar */}
      <div className="flex items-center justify-between px-2 pb-2">
        <div className="flex items-center space-x-2 text-xs font-extrabold text-[#0B0757] uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-[#EF7F1A]" />
          <span>{testimonials.length} Verified Student Stories</span>
        </div>
        <button
          onClick={isAllExpanded ? collapseAll : expandAll}
          className="text-xs font-bold text-[#EF7F1A] hover:text-[#0B0757] transition-colors underline cursor-pointer"
        >
          {isAllExpanded ? 'Collapse All' : 'Expand All Stories'}
        </button>
      </div>

      {/* Testimonials Accordion List */}
      <div className="space-y-3.5">
        {testimonials.map((t, idx) => {
          const isOpen = openIds.includes(t.id);

          return (
            <div
              key={t.id}
              className={`rounded-2xl border transition-all duration-200 bg-white overflow-hidden ${
                isOpen
                  ? 'border-[#EF7F1A]/70 shadow-md ring-1 ring-[#EF7F1A]/20'
                  : 'border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-sm'
              }`}
            >
              {/* Accordion Trigger Header */}
              <button
                onClick={() => toggleTestimonial(t.id)}
                className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer focus:outline-hidden"
                aria-expanded={isOpen}
              >
                <div className="flex items-start space-x-3.5 sm:space-x-4 min-w-0">
                  {/* Person Icon Avatar */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-orange-50 text-[#EF7F1A] border border-orange-200/80 flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                    <User className="w-5 h-5" />
                  </div>

                  {/* Name, Tag, Rating & Headline */}
                  <div className="space-y-1.5 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="font-extrabold text-base sm:text-lg text-[#0B0757] leading-tight">
                        {t.name}
                      </h4>
                      <span className="inline-flex items-center space-x-1 bg-amber-100/80 text-[#B85600] border border-amber-200/70 text-[10px] sm:text-[11px] font-extrabold px-2.5 py-0.5 rounded-full">
                        <Award className="w-3 h-3" />
                        <span>{t.badge}</span>
                      </span>
                      <div className="flex items-center space-x-0.5 ml-auto sm:ml-0">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#EF7F1A] text-[#EF7F1A]" />
                        ))}
                      </div>
                    </div>

                    {t.headline && (
                      <p className="text-xs sm:text-sm font-semibold text-slate-700 line-clamp-1">
                        {t.headline}
                      </p>
                    )}
                  </div>
                </div>

                {/* Chevron Toggle Icon */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-[#0B0757] text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {/* Accordion Content Body */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1">
                      <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border-l-4 border-[#EF7F1A] text-slate-700 text-xs sm:text-sm leading-relaxed whitespace-pre-line space-y-3 font-normal">
                        {t.content}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
