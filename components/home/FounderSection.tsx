import Image from 'next/image';
import { Quote, Award, Sparkles } from 'lucide-react';

export default function FounderSection() {
  return (
    <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 border-y border-slate-200">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="mb-2">
            <span className="inline-block text-xs font-extrabold text-[#EF7F1A] uppercase tracking-widest bg-amber-100/80 px-5 py-2 rounded-full border border-amber-200">
              Our Founder
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B0757] tracking-tight">
            Built by Someone Who's Done It — and Keeps Doing It
          </h2>
        </div>

        {/* Founder Story Grid */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Photo & Profile Card */}
          <div className="lg:col-span-5 text-center space-y-4">
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#EF7F1A] mx-auto">
              <Image
                src="/founder.png"
                alt="Awanger Agena - Founder & CEO"
                fill
                sizes="208px"
                className="object-cover object-top"
                priority
              />
            </div>
            <div>
              <h3 className="font-extrabold text-2xl text-[#0B0757]">Awanger Agena</h3>
              <p className="text-xs font-extrabold text-[#EF7F1A] uppercase tracking-wider mt-1">Founder and CEO. AceAfrica</p>
              <p className="text-xs text-slate-500 font-medium mt-1">London UK</p>
            </div>
          </div>

          {/* Story Body Copy */}
          <div className="lg:col-span-7 space-y-4 text-slate-700 text-sm leading-relaxed">
            <p>
              AceAfrica was founded by <strong>Awanger Agena</strong> — a remote work professional with over 5 years of hands-on experience across remote operations, sales systems, and support infrastructure for international tech companies.
            </p>
            <p>
              Awanger didn't start with a tech background. Her degree is in Accounting. She transitioned into remote work in Nigeria in 2021 — learning, applying, and building her career entirely through the skills she now teaches. That journey took her from working remotely in Nigeria to corporate London, where she works with a fintech company — proof that the path she maps out for her students is one she has walked herself.
            </p>
            <p>
              She built AceAfrica because that training didn't exist when she needed it. Everything taught here comes from real experience — not textbooks, not theory, but years of actually working with international clients and navigating global corporate environments as an African professional.
            </p>
            <p>
              She is also deeply passionate about the immigrant experience. Having navigated the challenges of building a career in a new country herself, she understands what it means to be overqualified, overlooked, and underestimated. AceAfrica exists to change that — for Africans on the continent and in the diaspora.
            </p>
          </div>

        </div>

        {/* Pull Quote */}
        <div className="bg-gradient-to-r from-[#0B0757] to-[#060436] text-white p-8 sm:p-12 rounded-3xl shadow-xl relative overflow-hidden text-center space-y-4 border border-white/10">
          <Quote className="w-10 h-10 text-[#EF7F1A] mx-auto opacity-80" />
          <blockquote className="text-base sm:text-xl font-medium italic max-w-3xl mx-auto leading-relaxed text-slate-100">
            "I didn't start with connections or a tech degree. I started with the right skills and the willingness to show up. If I could make it from Nigeria to corporate London without a tech background — anyone who understands what to do can do the same. That's exactly why I started AceAfrica."
          </blockquote>
          <cite className="block text-xs font-extrabold text-[#EF7F1A] uppercase tracking-widest not-italic pt-2">
            — Awanger Agena, Founder and CEO. AceAfrica
          </cite>
        </div>

      </div>
    </section>
  );
}
