import Link from 'next/link';
import TestimonialsCarousel from '@/components/shared/TestimonialsCarousel';
import { CheckCircle2, MessageCircle, Sparkles, Zap, ArrowRight, ShieldCheck, Users } from 'lucide-react';

export default function WebinarPage() {
  const whatsappGroupUrl = "https://chat.whatsapp.com/LAJWSREyp5zHyIL5LabGqG";

  const learningPoints = [
    "How to find and apply for remote jobs that pay directly in USD, GBP, or CAD",
    "The top in-demand non-coding skills that can get you hired fast",
    "How to leverage AI productivity tools (ChatGPT, Claude) to land remote jobs",
    "How to pitch for jobs effectively on LinkedIn, Contra, and Upwork",
    "How to build an ATS-friendly CV that gets callbacks from foreign recruiters",
    "How to write a killer cover letter and high-converting client proposal"
  ];

  return (
    <div className="space-y-20 bg-white pb-20">
      
      {/* 1. Webinar Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0B0757] via-[#0B0757] to-[#060436] text-white pt-14 pb-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#EF7F1A]/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-5 relative z-10">
          <div className="mb-2">
            <span className="inline-block text-xs font-extrabold text-slate-200 uppercase tracking-widest bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15">
              Exclusive Free Masterclass
            </span>
          </div>

          <h1 className="text-2xl sm:text-5xl font-black tracking-tight leading-tight">
            Learn How to Earn in Dollars from Home <br className="hidden sm:inline" />
            <span className="text-[#EF7F1A]">No Experience Needed!</span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Tired of struggling to make ends meet? Discover how everyday Nigerians are landing high-paying remote jobs with international companies and earning in foreign currencies from home.
          </p>

          <div className="pt-2 flex justify-center">
            <a
              href={whatsappGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-[#EF7F1A] hover:bg-[#D96E0F] text-white font-bold px-6 py-3 rounded-xl text-sm sm:text-base shadow-lg hover:scale-105 transition-all text-center"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span>Join Free WhatsApp Webinar</span>
            </a>
          </div>

          <p className="text-xs text-slate-400 font-medium">
            ⚡ Limited spots available in this cohort's WhatsApp group. Reserve your spot now!
          </p>
        </div>
      </section>

      {/* 2. What You Will Learn */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-8">
          <div className="mb-2">
            <span className="inline-block text-xs font-extrabold text-[#EF7F1A] uppercase tracking-widest bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200/80">
              Webinar Curriculum
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B0757]">
            What You Will Learn in This Free Training
          </h2>
          <p className="text-slate-600 text-sm">
            Step-by-step roadmap to start your remote career from Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {learningPoints.map((point, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-start space-x-3.5 hover:border-[#EF7F1A] transition-colors"
            >
              <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">{point}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Social Proof / Student Testimonials */}
      <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-200">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B0757]">What People Are Saying</h2>
            <p className="text-slate-600 text-sm">Real proof from Nigerians who attended our previous webinar sessions.</p>
          </div>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* 4. Single Clear CTA Section */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-gradient-to-r from-[#0B0757] to-[#060436] text-white p-8 sm:p-12 rounded-3xl space-y-5 shadow-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#EF7F1A]/20 rounded-full blur-3xl pointer-events-none" />

          <h2 className="text-2xl sm:text-4xl font-black text-white">Count Me In!</h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto">
            Join our free webinar today and learn how to make money in dollars from home. Space is limited, so sign up now to reserve your spot.
          </p>

          <div className="pt-2 flex justify-center">
            <a
              href={whatsappGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-[#EF7F1A] hover:bg-[#D96E0F] text-white font-bold px-6 py-3 rounded-xl text-sm sm:text-base shadow-lg hover:scale-105 transition-all text-center"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span>Join WhatsApp Group Now</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
