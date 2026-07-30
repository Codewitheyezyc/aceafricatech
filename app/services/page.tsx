import Link from 'next/link';
import { curriculumModules } from '@/data/curriculum';
import { CheckCircle2, Laptop, Wrench, Sparkles, ArrowRight, ShieldCheck, Target, Users, BookOpen, Clock, Award } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="space-y-20 bg-white pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#0B0757] text-white py-16 px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="mb-2">
          <span className="inline-block text-xs font-extrabold text-[#EF7F1A] uppercase tracking-widest bg-white/10 px-5 py-2 rounded-full border border-white/15">
            Full Training & Services Roadmap
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
          Comprehensive Remote Job Skills & Curriculum
        </h1>
        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Everything you need to transform from a beginner into a job-ready candidate for international remote roles in Technical Customer Support, Virtual Assistance, and Tech Sales.
        </p>
      </section>

      {/* Program Highlights Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#0B0757] text-[#EF7F1A] flex items-center justify-center mx-auto mb-3">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#0B0757] text-base">100% Practical Training</h3>
            <p className="text-xs text-slate-600">Hands-on experience with active software tools used by foreign companies.</p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#0B0757] text-[#EF7F1A] flex items-center justify-center mx-auto mb-3">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#0B0757] text-base">Mentorship & Job Leads</h3>
            <p className="text-xs text-slate-600">Access to supportive alumni communities, job search groups, and live guidance.</p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#0B0757] text-[#EF7F1A] flex items-center justify-center mx-auto mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#0B0757] text-base">Full Career Launchpad</h3>
            <p className="text-xs text-slate-600">ATS CV revamp, LinkedIn optimization, interview prep & Upwork pitching.</p>
          </div>
        </div>
      </section>

      {/* 5 Course Modules Breakdown */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-8">
          <div className="mb-2">
            <span className="inline-block text-xs font-extrabold text-[#EF7F1A] uppercase tracking-widest bg-amber-50 px-5 py-2 rounded-full border border-amber-200/80">
              Curriculum Breakdown
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B0757] tracking-tight">
            5 Core Training Modules
          </h2>
          <p className="text-slate-600 text-base">
            Each module is structured to build real-world competency and confidence.
          </p>
        </div>

        <div className="space-y-8">
          {curriculumModules.map((module, index) => (
            <div
              key={module.id}
              className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:border-[#EF7F1A] transition-all duration-200"
            >
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 rounded-full bg-[#0B0757] text-white font-bold flex items-center justify-center text-xs">
                    0{index + 1}
                  </span>
                  <span className="text-xs font-extrabold uppercase text-[#EF7F1A] tracking-wider bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
                    {module.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-[#0B0757] leading-tight">
                  {module.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {module.description}
                </p>

                {/* Software & Tools Mastered */}
                <div className="pt-2">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2.5 flex items-center space-x-1.5">
                    <Wrench className="w-3.5 h-3.5 text-[#EF7F1A]" />
                    <span>Software & Tools You Master:</span>
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {module.tools.map((tool) => (
                      <span key={tool} className="bg-slate-100 text-slate-800 text-xs font-semibold px-3 py-1 rounded-lg border border-slate-200/60">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Skills Taught */}
              <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4">
                <h4 className="font-bold text-slate-900 text-base flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-[#EF7F1A]" />
                  <span>Key Skills Covered in This Module:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {module.skills.map((skill) => (
                    <div key={skill} className="flex items-start space-x-2.5 bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-slate-800 leading-snug">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enrollment Call to Action */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-gradient-to-r from-[#0B0757] to-[#060436] text-white p-10 sm:p-14 rounded-3xl space-y-6 shadow-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#EF7F1A]/20 rounded-full blur-3xl pointer-events-none" />

          <h2 className="text-3xl sm:text-5xl font-black text-white">Get Access to the Complete Training</h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            All 5 modules, live cohort classes, ATS CV templates, Upwork scripts, and lifetime mentorship access are included for a one-time tuition fee of ₦25,000.
          </p>
          <div className="pt-2">
            <Link
              href="/enroll"
              className="inline-flex items-center space-x-2 bg-[#EF7F1A] hover:bg-[#D96E0F] text-white font-extrabold px-8 py-4 rounded-xl text-base shadow-xl transition-all hover:scale-105"
            >
              <span>Enroll Now — ₦25,000</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
