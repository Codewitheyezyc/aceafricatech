import { audienceCards } from '@/data/audience';
import { Target, CheckCircle2, UserCheck, Briefcase, Plane, Repeat } from 'lucide-react';

const icons = [UserCheck, Briefcase, Plane, Repeat];

export default function WhoThisIsFor() {
  return (
    <section className="bg-[#0B0757] text-white py-20 px-4 sm:px-6 lg:px-8 border-y border-white/10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EF7F1A]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#EF7F1A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="mb-2">
            <span className="inline-block text-xs font-extrabold text-[#EF7F1A] uppercase tracking-widest bg-white/10 px-5 py-2 rounded-full border border-white/15">
              Who AceAfrica Is For
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Whether You're Starting Out or Starting Over — <br className="hidden sm:inline" />
            <span className="text-[#EF7F1A]">There's a Path for You</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            AceAfrica has trained over 5,000 students across every stage of their career. Here's how we help each one.
          </p>
        </div>

        {/* 4 Audience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {audienceCards.map((card, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={card.id}
                className="bg-white/95 text-slate-900 p-8 sm:p-10 rounded-3xl border border-white/20 shadow-xl flex flex-col justify-between space-y-6 hover:border-[#EF7F1A] transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#0B0757] text-[#EF7F1A] flex items-center justify-center font-bold shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-[#0B0757]">{card.title}</h3>
                      <p className="text-xs font-bold text-[#EF7F1A] mt-0.5">{card.subtitle}</p>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2 text-slate-700 text-sm leading-relaxed">
                    <p className="font-normal text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                      {card.problem}
                    </p>
                    <p className="font-medium text-slate-800">
                      {card.solution}
                    </p>
                  </div>
                </div>

                {/* Outcome Footer */}
                <div className="pt-4 border-t border-slate-200 mt-auto bg-emerald-50/80 p-4 rounded-xl border-emerald-200 flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-xs font-bold text-emerald-950 leading-snug">
                    {card.outcome}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
