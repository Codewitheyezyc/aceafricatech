import HeroSlideshow from '@/components/home/HeroSlideshow';
import StatsCounters from '@/components/home/StatsCounters';
import LeadMagnet from '@/components/home/LeadMagnet';
import ProblemSection from '@/components/home/ProblemSection';
import WhoThisIsFor from '@/components/home/WhoThisIsFor';
import PricingSection from '@/components/home/PricingSection';
import HowItWorks from '@/components/home/HowItWorks';
import FounderSection from '@/components/home/FounderSection';
import WhatYouGet from '@/components/home/WhatYouGet';
import TestimonialsCarousel from '@/components/shared/TestimonialsCarousel';
import FaqAccordion from '@/components/shared/FaqAccordion';
import Link from 'next/link';
import { curriculumModules } from '@/data/curriculum';
import { ArrowRight, CheckCircle2, Wrench, Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-20 bg-white pb-20 overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <HeroSlideshow />

      {/* 2. Stats Bar */}
      <section className="-mt-12 relative z-20 px-4">
        <StatsCounters />
      </section>

      {/* 3. Free Cover Letter Guide Lead Magnet */}
      <LeadMagnet />

      {/* 4. The Problem We Solve */}
      <ProblemSection />


      {/* 4. What We Teach (6 Skill Cards) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="mb-2">
            <span className="inline-block text-xs font-extrabold text-[#EF7F1A] uppercase tracking-widest bg-amber-50 px-5 py-2 rounded-full border border-amber-200/80">
              Our Curriculum
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B0757] tracking-tight">
            This Is More Than a Course. It's a Career Transformation.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Most training programmes teach you tools. We teach you how to discover your strengths, name them professionally, and build a career around them — then give you everything you need to land the job.
          </p>
        </div>

        {/* Intro Paragraphs */}
        <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 text-slate-700 text-sm leading-relaxed space-y-4 max-w-4xl mx-auto">
          <p>
            A lot of people come to AceAfrica not knowing what they should learn, what roles to apply for, or even what their natural skills are worth professionally. That's where we start. Before we teach you a single tool, we help you understand who you are in the workplace — the skills you already have, what they're called in the global job market, and which career path is the right fit for you. Then we build from there.
          </p>
          <p className="font-medium text-[#0B0757]">
            If you're already working — in Nigeria, in the UK, in the US, anywhere — we don't ask you to start over. We look at what you already have, give it its proper professional name, and build from there. Whether you're a corporate employee wanting to go remote, an immigrant who came here overqualified and ended up underemployed, or someone who's simply ready for a completely new direction — AceAfrica has a path for you.
          </p>
        </div>

        {/* 6 Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {curriculumModules.map((module) => (
            <div
              key={module.id}
              className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl hover:border-[#EF7F1A] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#EF7F1A] bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
                    {module.badge}
                  </span>
                </div>

                <h3 className="text-xl font-black text-[#0B0757] leading-snug">
                  {module.title}
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed">
                  {module.description}
                </p>

                {/* Key Skills */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-extrabold text-slate-700 uppercase tracking-wider block">Key Skills Taught:</span>
                  <div className="space-y-1.5">
                    {module.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs font-semibold text-slate-700 leading-snug">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tools Mastered */}
              <div className="pt-4 border-t border-slate-100 mt-6">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2 flex items-center space-x-1">
                  <Wrench className="w-3 h-3 text-[#EF7F1A]" />
                  <span>Tools Covered:</span>
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {module.tools.map((tool) => (
                    <span key={tool} className="bg-slate-100 text-slate-700 text-[11px] font-semibold px-2.5 py-0.5 rounded-md">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="bg-amber-50/80 p-6 rounded-2xl border border-amber-200 text-center max-w-3xl mx-auto text-xs sm:text-sm font-semibold text-[#0B0757] leading-relaxed">
          And throughout the entire training, Awanger shares real stories from her own career — the struggles, the wins, and the unwritten rules of navigating international corporate environments as an African professional. Because knowing the tools is one thing. Knowing how to show up in a global workplace is another.
        </div>
      </section>

      {/* 5. Who This Is For (NEW SECTION) */}
      <WhoThisIsFor />

      {/* 6. Pricing (NEW SECTION) */}
      <PricingSection />

      {/* 7. How It Works */}
      <HowItWorks />

      {/* 8. Founder Section */}
      <FounderSection />

      {/* 9. What You Get */}
      <WhatYouGet />

      {/* 10. Student Success Stories */}
      <section id="testimonials" className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 border-y border-slate-200">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="mb-2">
              <span className="inline-block text-xs font-extrabold text-[#EF7F1A] uppercase tracking-widest bg-white px-5 py-2 rounded-full border border-slate-200">
                Verified Student Reviews
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0B0757]">Student Success Stories</h2>
            <p className="text-slate-600 text-base">Real experiences from AceAfrica alumni landing international remote roles.</p>
          </div>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* 11. FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <div className="mb-2">
            <span className="inline-block text-xs font-extrabold text-[#EF7F1A] uppercase tracking-widest bg-amber-50 px-5 py-2 rounded-full border border-amber-200/80">
              Got Questions?
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B0757]">Frequently Asked Questions</h2>
          <p className="text-slate-600 text-base">Everything you need to know about AceAfrica training and enrollment.</p>
        </div>

        <FaqAccordion />
      </section>

      {/* 12. Final CTA Section */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-gradient-to-r from-[#0B0757] to-[#060436] text-white p-10 sm:p-14 rounded-3xl space-y-6 shadow-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#EF7F1A]/20 rounded-full blur-3xl pointer-events-none" />

          <h2 className="text-3xl sm:text-5xl font-black text-white">Your First Remote Job Starts Here</h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Over 5,000 Africans have already made the move. The only thing between you and your first dollar-paying remote job is the right training — and the right guide.
          </p>

          <div className="pt-2 flex justify-center">
            <Link
              href="/enroll"
              className="inline-flex items-center space-x-2 bg-[#EF7F1A] hover:bg-[#D96E0F] text-white font-extrabold px-9 py-4 rounded-xl text-base sm:text-lg shadow-xl hover:scale-105 transition-all text-center"
            >
              <span>Enrol Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
