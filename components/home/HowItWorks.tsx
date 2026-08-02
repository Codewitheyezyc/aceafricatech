import { Compass, BookOpen, Layers, Briefcase } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Step 1: Discover",
    icon: Compass,
    description: "Before we teach you anything, we help you understand yourself. What are you naturally good at? What do those skills look like in the global job market? What career path fits your personality, your lifestyle, and your goals? This is where most courses skip ahead. We don't."
  },
  {
    number: "02",
    title: "Step 2: Learn",
    icon: BookOpen,
    description: "Four weeks of practical, hands-on training — either live on Zoom with Awanger and your cohort, or through the full recorded library at your own pace. Every session covers real tools, real workflows, and real scenarios from international workplaces."
  },
  {
    number: "03",
    title: "Step 3: Build",
    icon: Layers,
    description: "Your ATS-optimised CV. Your LinkedIn profile, rewritten to attract inbound recruiters. Your cover letter and proposal scripts. Your job application strategy. By the time you finish, you don't just have skills — you have a complete professional identity ready to present to the world."
  },
  {
    number: "04",
    title: "Step 4: Get Hired",
    icon: Briefcase,
    description: "Apply with confidence. Our student community shares live remote job leads daily. We show you exactly where to look, what to say, and how to apply in a way that gets responses — including for corporate roles in the UK, US, and Canada."
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 border-y border-slate-200">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="mb-2">
            <span className="inline-block text-xs font-extrabold text-[#EF7F1A] uppercase tracking-widest bg-amber-100/80 px-5 py-2 rounded-full border border-amber-200">
              The Process
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B0757] tracking-tight">
            From Enrolment to Employment — Here's How It Works
          </h2>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:shadow-lg hover:border-[#EF7F1A] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#0B0757] text-[#EF7F1A] flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-300">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0B0757]">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
