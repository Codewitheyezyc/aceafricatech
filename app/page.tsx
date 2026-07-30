import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Globe2, ShieldCheck, Award, Laptop, Zap, Star, Users, Target, Wrench } from 'lucide-react';
import HeroSlideshow from '@/components/home/HeroSlideshow';
import StatsCounters from '@/components/home/StatsCounters';
import TestimonialsCarousel from '@/components/shared/TestimonialsCarousel';
import FaqAccordion from '@/components/shared/FaqAccordion';

export default function HomePage() {
  return (
    <div className="space-y-24 bg-white pb-20">
      
      {/* 1. Hero Section with Background Slideshow & Centered Text */}
      <HeroSlideshow />

      {/* 2. Animated Stats Counters (Centered Container) */}
      <section className="-mt-16 relative z-20 max-w-6xl mx-auto px-4">
        <StatsCounters />
      </section>

      {/* 3. "What We Do" Services Overview (Clean White Theme, Centered Layout) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-12">
          <div className="mb-4">
            <span className="inline-block text-xs font-extrabold text-[#EF7F1A] uppercase tracking-widest bg-amber-50 px-5 py-2 rounded-full border border-amber-200/80 shadow-xs">
              What We Do
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B0757] tracking-tight leading-tight">
            High-Demand Remote Skills We Teach
          </h2>
          <p className="text-slate-600 text-base leading-relaxed max-w-2xl mx-auto">
            We focus strictly on practical, non-coding digital support skills that international employers are actively hiring for right now.
          </p>
        </div>

        {/* 4 Equal Height Cards Grid with Aligned Bottom Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          
          {/* Card 1: Technical Customer Support */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#EF7F1A] transition-all duration-300 flex flex-col justify-between text-center group h-full">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#0B0757] text-[#EF7F1A] flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-md">
                <Laptop className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#0B0757]">Customer & Tech Support</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Master Zendesk, Freshdesk, email triage, live chat, and SLA ticket management to resolve client issues with foreign support teams.
              </p>
            </div>
            <div className="pt-6 mt-auto border-t border-slate-100">
              <Link href="/services" className="text-xs font-bold text-[#EF7F1A] hover:underline inline-flex items-center space-x-1.5">
                <span>View Curriculum</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: Virtual Assistant */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#EF7F1A] transition-all duration-300 flex flex-col justify-between text-center group h-full">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#0B0757] text-[#EF7F1A] flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-md">
                <Globe2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#0B0757]">Virtual Assistant (VA)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Learn calendar management, inbox zero, executive administration, research, travel scheduling, and Google Workspace tools.
              </p>
            </div>
            <div className="pt-6 mt-auto border-t border-slate-100">
              <Link href="/services" className="text-xs font-bold text-[#EF7F1A] hover:underline inline-flex items-center space-x-1.5">
                <span>View Curriculum</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 3: Tech Sales */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#EF7F1A] transition-all duration-300 flex flex-col justify-between text-center group h-full">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#0B0757] text-[#EF7F1A] flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-md">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#0B0757]">Tech Sales & SDR</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Master lead generation, cold email prospecting, CRM pipeline management (HubSpot), and discovery call pitching to foreign clients.
              </p>
            </div>
            <div className="pt-6 mt-auto border-t border-slate-100">
              <Link href="/services" className="text-xs font-bold text-[#EF7F1A] hover:underline inline-flex items-center space-x-1.5">
                <span>View Curriculum</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 4: Platform Pitching & ATS CV */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#EF7F1A] transition-all duration-300 flex flex-col justify-between text-center group h-full">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#0B0757] text-[#EF7F1A] flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-md">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#0B0757]">ATS CV & Job Pitching</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Build an ATS-optimized CV, optimize your LinkedIn profile for inbound recruiters, and write winning proposals on Upwork & Contra.
              </p>
            </div>
            <div className="pt-6 mt-auto border-t border-slate-100">
              <Link href="/services" className="text-xs font-bold text-[#EF7F1A] hover:underline inline-flex items-center space-x-1.5">
                <span>View Curriculum</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Founder Story Section with CEO Photo */}
      <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 border-y border-slate-200">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="mb-2">
            <span className="inline-block text-xs font-extrabold text-[#EF7F1A] uppercase tracking-widest bg-amber-100/80 px-5 py-2 rounded-full">
              Leadership & Founder Story
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B0757] tracking-tight">
            Led by Awanger Agena — Founder & CEO
          </h2>

          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-lg text-left grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-4 text-center space-y-3">
              <div className="relative w-36 h-36 rounded-3xl overflow-hidden shadow-xl border-4 border-[#EF7F1A] mx-auto">
                <Image
                  src="/founder.png"
                  alt="Awanger Agena - Founder & CEO"
                  fill
                  sizes="144px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div>
                <h3 className="font-extrabold text-xl text-[#0B0757]">Awanger Agena</h3>
                <p className="text-xs font-bold text-[#EF7F1A]">Founder & CEO</p>
                <p className="text-xs text-slate-500 mt-0.5">Toronto, Ontario, Canada</p>
              </div>
            </div>

            <div className="md:col-span-8 space-y-4 text-slate-700 text-sm leading-relaxed">
              <p>
                AceAfrica Tech Support Skills Limited is led by Founder & CEO <strong>Awanger Agena</strong>, who brings over 8 years of combined global experience in sales, marketing, and customer support across international technology firms.
              </p>
              <p>
                Currently working active practitioner roles in Toronto, Canada, Awanger brings real-world corporate support strategies into the course curriculum — preparing everyday Nigerians to work with international teams.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-800">
                <div className="flex items-center space-x-1.5 bg-slate-100 px-3.5 py-2 rounded-xl">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>5,000+ Students Trained</span>
                </div>
                <div className="flex items-center space-x-1.5 bg-slate-100 px-3.5 py-2 rounded-xl">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Active Practitioner Mentorship</span>
                </div>
              </div>
            </div>

          </div>

          <div className="pt-4">
            <Link
              href="/about"
              className="inline-flex items-center space-x-2 bg-[#0B0757] hover:bg-[#EF7F1A] text-white font-bold px-8 py-4 rounded-xl text-sm shadow-md transition-colors"
            >
              <span>Read Full Founder Story & Mission</span>
              <ArrowRight className="w-4 h-4 text-[#EF7F1A]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Perks Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="mb-2">
            <span className="inline-block text-xs font-extrabold text-[#EF7F1A] uppercase tracking-widest bg-amber-50 px-5 py-2 rounded-full border border-amber-200/80">
              We Give More
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B0757] tracking-tight">
            Included Career Bonuses & Perks
          </h2>
          <p className="text-slate-600 text-base">
            When you register for ₦25,000, you don't just get classes — you receive a complete remote career launch toolkit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md space-y-3 hover:border-[#EF7F1A] transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#0B0757] text-[#EF7F1A] flex items-center justify-center font-bold text-lg mx-auto">
              1
            </div>
            <h3 className="text-lg font-bold text-[#0B0757]">ATS CV & Cover Letter Architecture</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Receive customizable, recruiter-tested ATS CV templates optimized specifically for customer support, VA, and tech sales remote roles.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md space-y-3 hover:border-[#EF7F1A] transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#0B0757] text-[#EF7F1A] flex items-center justify-center font-bold text-lg mx-auto">
              2
            </div>
            <h3 className="text-lg font-bold text-[#0B0757]">Winning Upwork & LinkedIn Scripts</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Get exact proposal copy scripts that our top students use to land client interviews on Upwork, Contra, and LinkedIn.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md space-y-3 hover:border-[#EF7F1A] transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#0B0757] text-[#EF7F1A] flex items-center justify-center font-bold text-lg mx-auto">
              3
            </div>
            <h3 className="text-lg font-bold text-[#0B0757]">Lifetime Student Network Access</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Join our private Telegram & WhatsApp student network to share remote job leads, practice mock interviews, and receive continuous support.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Testimonials Carousel Section */}
      <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 border-y border-slate-200">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="mb-2">
              <span className="inline-block text-xs font-extrabold text-[#EF7F1A] uppercase tracking-widest bg-amber-100/80 px-5 py-2 rounded-full">
                Student Success Stories
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0B0757] tracking-tight">
              What Our Graduates Say
            </h2>
            <p className="text-slate-600 text-base">
              Real stories from everyday Nigerians who transformed their careers through AceAfrica training.
            </p>
          </div>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="mb-2">
            <span className="inline-block text-xs font-extrabold text-[#EF7F1A] uppercase tracking-widest bg-amber-50 px-5 py-2 rounded-full border border-amber-200/80">
              Got Questions?
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B0757] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <FaqAccordion showSearch={false} />

        <div className="text-center pt-4">
          <Link
            href="/faq"
            className="inline-flex items-center space-x-2 text-sm font-bold text-[#0B0757] hover:text-[#EF7F1A] transition-colors"
          >
            <span>View All FAQs & Search Questions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 8. Final Centered CTA Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0B0757] to-[#060436] text-white rounded-3xl p-10 sm:p-16 text-center space-y-6 shadow-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#EF7F1A]/20 rounded-full blur-3xl pointer-events-none" />

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight max-w-3xl mx-auto leading-tight">
            Ready to Start Earning in Dollars from Home?
          </h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            Join over 5,000+ successful graduates. Enroll today for a one-time fee of ₦25,000 and start your remote tech career.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/enroll"
              className="bg-[#EF7F1A] hover:bg-[#D96E0F] text-white font-extrabold px-8 py-4 rounded-xl text-base shadow-xl transition-all hover:scale-105"
            >
              Enroll Now (₦25,000)
            </Link>
            <Link
              href="/webinar"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl text-base border border-white/20 backdrop-blur-md transition-colors"
            >
              Join Free Webinar
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
