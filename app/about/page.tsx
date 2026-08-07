import Link from 'next/link';
import Image from 'next/image';
import { Target, Eye, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="space-y-20 bg-white pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#0B0757] text-white py-16 px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="mb-2">
          <span className="inline-block text-xs font-extrabold text-[#EF7F1A] uppercase tracking-widest bg-white/10 px-5 py-2 rounded-full border border-white/15">
            About AceAfrica
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
          Our Story & Leadership
        </h1>
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Transforming lives by bridging the gap between everyday Nigerian talent and international remote employers.
        </p>
      </section>

      {/* Founder Profile Section (Centered Container Layout) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        <div className="space-y-4 max-w-3xl mx-auto mb-8">
          <div className="mb-2">
            <span className="inline-block text-xs font-extrabold text-[#EF7F1A] uppercase tracking-widest bg-amber-50 px-5 py-2 rounded-full border border-amber-200/80">
              Founder and CEO. AceAfrica
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B0757]">
            Awanger Agena
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Founder and CEO. AceAfrica based in London UK with over 5 years of hands-on experience across remote operations, sales systems, and support infrastructure for international tech companies.
          </p>
        </div>

        <div className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-lg text-left grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
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
              <p className="text-xs font-bold text-[#EF7F1A]">Founder and CEO. AceAfrica</p>
              <p className="text-xs text-slate-500 font-medium mt-0.5">London UK</p>
            </div>
          </div>

          <div className="md:col-span-8 space-y-4 text-slate-700 text-sm leading-relaxed">
            <p>
              AceAfrica Tech Support Skills Limited is led by Founder & CEO <strong>Awanger Agena</strong>, who brings over 5 years of hands-on experience across remote operations, sales systems, and support infrastructure for international tech companies.
            </p>
            <p>
              Currently based in London UK, Awanger brings active practitioner knowledge and experience across remote operations, sales systems, and support infrastructure into the curriculum.
            </p>
            <p>
              Having trained over 5,000 everyday Africans, AceAfrica focuses on actionable, practical skills rather than abstract theory — teaching you how foreign support teams operate, how to handle customer tickets, and how to pitch your skills confidently on Upwork, Contra, and LinkedIn.
            </p>
          </div>
        </div>

        {/* Compact Resized Cohort Button */}
        <div className="pt-2 flex justify-center">
          <Link
            href="/enroll"
            className="inline-flex items-center justify-center space-x-2 bg-[#EF7F1A] hover:bg-[#D96E0F] text-white font-bold px-6 py-3 rounded-xl text-sm sm:text-base shadow-md transition-all hover:scale-105"
          >
            <span>Join Next Training Cohort</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-200">
        <div className="max-w-5xl mx-auto space-y-12 text-center">
          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl font-black text-[#0B0757]">Our Core Mission & Vision</h2>
            <p className="text-slate-600 text-sm">Guided by a clear mission to unlock global career opportunities for Africans.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-md space-y-4 hover:border-[#EF7F1A] hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#0B0757] border border-blue-200 flex items-center justify-center font-bold shadow-xs shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-[#0B0757]">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                To provide individuals with the tools, resources, and hands-on mentorship needed to succeed in today's digital world. Through our expertly crafted courses and personalized guidance, we aim to bridge the skills gap and empower our students to reach new heights in their professional journeys.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-md space-y-4 hover:border-[#EF7F1A] hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-[#EF7F1A] border border-amber-200 flex items-center justify-center font-bold shadow-xs shrink-0">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-[#0B0757]">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                At AceAfrica, our vision is simple: to empower everyday people with digital support skills that help them stand out and thrive while working remotely, no matter where they are in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
