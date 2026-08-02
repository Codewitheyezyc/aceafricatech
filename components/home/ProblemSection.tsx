import { Globe } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-slate-50 p-8 sm:p-14 rounded-3xl border border-slate-200/90 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left: Bold Statement */}
        <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
          <div className="inline-flex items-center space-x-2 bg-amber-100/80 px-4 py-1.5 rounded-full">
            <Globe className="w-4 h-4 text-[#EF7F1A]" />
            <span className="text-xs font-extrabold text-[#EF7F1A] uppercase tracking-widest">The Problem We Solve</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B0757] leading-tight tracking-tight">
            Talent is everywhere in Africa. <br />
            <span className="text-[#EF7F1A]">Opportunity isn't.</span>
          </h2>
        </div>

        {/* Right: Paragraph */}
        <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-200 shadow-xs text-slate-700 text-base leading-relaxed space-y-4">
          <p>
            Millions of skilled Africans are locked out of the global economy — not because they lack ability, but because no one showed them the path.
          </p>
          <p className="font-semibold text-[#0B0757]">
            AceAfrica exists to close that gap. We teach the exact digital skills that international companies are hiring for right now, and we walk you from zero to job-ready in 30 days.
          </p>
        </div>

      </div>
    </section>
  );
}
