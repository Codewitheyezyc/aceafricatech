import Link from 'next/link';
import { pricingTiers } from '@/data/pricing';
import { CheckCircle2, ArrowRight, Star, ShieldCheck, Sparkles } from 'lucide-react';

export default function PricingSection() {
  return (
    <section id="pricing" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="mb-2">
          <span className="inline-block text-xs font-extrabold text-[#EF7F1A] uppercase tracking-widest bg-amber-50 px-5 py-2 rounded-full border border-amber-200/80">
            Choose Your Path
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-[#0B0757] tracking-tight">
          Two Ways to Train. One Goal: Getting You Hired.
        </h2>
        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
          Whether you prefer to learn at your own pace or want live, interactive coaching — we have a path for you.
        </p>
      </div>

      {/* 2 Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
        {pricingTiers.map((tier) => (
          <div
            key={tier.id}
            className={`relative bg-white rounded-3xl p-8 sm:p-10 border flex flex-col justify-between space-y-8 transition-all duration-300 ${
              tier.isPopular
                ? 'border-2 border-[#EF7F1A] shadow-2xl ring-4 ring-[#EF7F1A]/10 scale-[1.02]'
                : 'border-slate-200 shadow-md hover:border-slate-300'
            }`}
          >
            {tier.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#EF7F1A] text-white text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md flex items-center space-x-1">
                <Star className="w-3.5 h-3.5 fill-white" />
                <span>MOST POPULAR</span>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#EF7F1A] bg-amber-50 px-3 py-1 rounded-md border border-amber-200 inline-block mb-3">
                  {tier.tag}
                </span>
                <h3 className="text-2xl font-black text-[#0B0757]">{tier.name}</h3>
                <div className="mt-4 flex items-baseline space-x-2">
                  <span className="text-4xl sm:text-5xl font-black text-[#0B0757] tracking-tight">{tier.priceFormatted}</span>
                  <span className="text-xs text-slate-500 font-bold uppercase">One-time payment</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 font-medium bg-slate-50 p-3 rounded-xl border border-slate-200">
                <strong>Best for:</strong> {tier.bestFor}
              </p>

              {/* Features List */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block">What's included:</span>
                <ul className="space-y-2.5">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <Link
                href={`/enroll?tier=${tier.id}`}
                className={`w-full py-4 rounded-xl font-extrabold text-sm sm:text-base flex items-center justify-center space-x-2 transition-all shadow-md ${
                  tier.isPopular
                    ? 'bg-[#EF7F1A] hover:bg-[#D96E0F] text-white hover:scale-[1.02]'
                    : 'bg-[#0B0757] hover:bg-[#EF7F1A] text-white hover:scale-[1.02]'
                }`}
              >
                <span>{tier.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        ))}
      </div>

      <p className="text-center text-xs text-slate-500 font-medium max-w-xl mx-auto">
        <em>Note: Live cohort enrolment opens periodically. Join the waitlist or enrol now to reserve your spot for the upcoming cohort.</em>
      </p>

    </section>
  );
}
