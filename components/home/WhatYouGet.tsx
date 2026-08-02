import { Compass, Laptop, FileCheck, Linkedin, FileText, Cpu, MessageSquare, Users, Award } from 'lucide-react';

const deliverables = [
  {
    title: "Career Path Discovery",
    icon: Compass,
    iconBg: "bg-amber-100 text-[#EF7F1A] border-amber-200",
    description: "We help you identify your natural strengths, give them their professional names, and map out the exact remote career path that fits who you are. Most people skip this step. It's the most important one."
  },
  {
    title: "Practical Skills Training",
    icon: Laptop,
    iconBg: "bg-blue-100 text-[#0B0757] border-blue-200",
    description: "Live Zoom sessions or full recorded library — covering every skill track from VA and customer support to CRM, automation, AI tools, and beyond. Every session is practical, not theoretical."
  },
  {
    title: "ATS-Optimised CV",
    icon: FileCheck,
    iconBg: "bg-emerald-100 text-emerald-700 border-emerald-200",
    description: "A professionally built CV designed to pass applicant tracking systems and land in front of human recruiters — whether you're applying for remote roles or corporate positions in the UK, US, or Canada."
  },
  {
    title: "LinkedIn Profile Optimisation",
    icon: Linkedin,
    iconBg: "bg-sky-100 text-sky-700 border-sky-200",
    description: "Your LinkedIn rewritten to attract inbound opportunities. Recruiters search LinkedIn every day for people with your skills — we make sure they find you."
  },
  {
    title: "Proposal & Cover Letter Scripts",
    icon: FileText,
    iconBg: "bg-indigo-100 text-indigo-700 border-indigo-200",
    description: "Exact copy frameworks that our graduates use to win clients on Upwork, Contra, and LinkedIn, and to land interviews for full-time remote roles."
  },
  {
    title: "AI Job Application Training",
    icon: Cpu,
    iconBg: "bg-purple-100 text-purple-700 border-purple-200",
    description: "We show you how to train AI tools to apply for the right roles on your behalf — smartly, strategically, and at scale. This alone puts you ahead of 90% of applicants."
  },
  {
    title: "Real Talk from Corporate World",
    icon: MessageSquare,
    iconBg: "bg-rose-100 text-rose-700 border-rose-200",
    description: "Awanger shares real stories from her career — the struggles, the wins, and the unwritten rules of navigating international workplaces as an African professional. Because cultural fluency in a global workplace is a skill too."
  },
  {
    title: "Student Community & Job Leads",
    icon: Users,
    iconBg: "bg-amber-100 text-[#EF7F1A] border-amber-200",
    description: "Join a private WhatsApp and Telegram network of 5,000+ AceAfrica alumni sharing remote job leads, mock interview practice, and ongoing support — long after training ends."
  },
  {
    title: "Certificate of Completion",
    icon: Award,
    iconBg: "bg-emerald-100 text-emerald-700 border-emerald-200",
    description: "Issued on graduation and signed by Awanger Agena, Founder & Lead Trainer. Recognised within the AceAfrica alumni network and presentable to employers."
  }
];

export default function WhatYouGet() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="mb-2">
          <span className="inline-block text-xs font-extrabold text-[#EF7F1A] uppercase tracking-widest bg-amber-50 px-5 py-2 rounded-full border border-amber-200/80">
            Everything Included
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-[#0B0757] tracking-tight">
          You're Not Just Paying for Classes. You're Paying for a Career.
        </h2>
        <p className="text-slate-600 text-base sm:text-lg">
          Every enrolment — prerecorded or live — includes everything you need to go from training to employed.
        </p>
      </div>

      {/* 9 Deliverables Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {deliverables.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-md space-y-3.5 hover:border-[#EF7F1A] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                <div className={`w-12 h-12 rounded-2xl ${item.iconBg} border flex items-center justify-center font-bold shadow-xs shrink-0`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-[#0B0757] leading-snug">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
