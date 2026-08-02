import { audienceCards } from '@/data/audience';
import { Sparkles, Briefcase, Globe, TrendingUp, CheckCircle2 } from 'lucide-react';

const cardConfigs = [
  {
    icon: Sparkles,
    iconBg: "bg-amber-100 text-[#EF7F1A] border-amber-200",
  },
  {
    icon: Briefcase,
    iconBg: "bg-blue-100 text-[#0B0757] border-blue-200",
  },
  {
    icon: Globe,
    iconBg: "bg-indigo-100 text-indigo-700 border-indigo-200",
  },
  {
    icon: TrendingUp,
    iconBg: "bg-emerald-100 text-emerald-700 border-emerald-200",
  }
];

export default function WhoThisIsFor() {
  return (
    <section className="bg-[#0B0757] text-white py-20 px-4 sm:px-6 lg:px-8 border-y border-white/10 relative overflow-hidden">
      {/* Background Ambient Glow */}
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {audienceCards.map((card, idx) => {
            const config = cardConfigs[idx % cardConfigs.length];
            const Icon = config.icon;

            return (
              <div
                key={card.id}
                className="bg-white/95 text-slate-900 p-6 sm:p-9 rounded-3xl border border-white/20 shadow-xl flex flex-col justify-between space-y-6 hover:border-[#EF7F1A] transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Icon & Title Header (Mobile-Optimized Responsive Layout) */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <div className={`w-12 h-12 rounded-2xl ${config.iconBg} border flex items-center justify-center font-bold shadow-sm shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-[#0B0757] leading-snug">{card.title}</h3>
                      <p className="text-xs font-extrabold text-[#EF7F1A] mt-0.5 leading-snug">{card.subtitle}</p>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2 text-slate-700 text-xs sm:text-sm leading-relaxed">
                    <p className="font-normal text-slate-600 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                      {card.problem}
                    </p>
                    <p className="font-medium text-slate-800">
                      {card.solution}
                    </p>
                  </div>
                </div>

                {/* Outcome Footer */}
                <div className="pt-4 border-t border-slate-200 mt-auto bg-emerald-50/90 p-4 rounded-2xl border border-emerald-200/80 flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0 mt-0.5" />
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
