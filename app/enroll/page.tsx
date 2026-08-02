"use client";

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import PaymentProofForm from '@/components/enroll/PaymentProofForm';
import { pricingTiers } from '@/data/pricing';
import { ShieldCheck, CheckCircle2, Building, ArrowRight, Star, Copy, Check } from 'lucide-react';

function EnrollContent() {
  const searchParams = useSearchParams();
  const initialTierId = searchParams.get('tier') || 'live-cohort';

  const [selectedTierId, setSelectedTierId] = useState(initialTierId);
  const [copiedAccount, setCopiedAccount] = useState(false);

  const selectedTier = pricingTiers.find(t => t.id === selectedTierId) || pricingTiers[1];

  const handleCopy = () => {
    navigator.clipboard.writeText("0847291048");
    setCopiedAccount(true);
    setTimeout(() => setCopiedAccount(false), 2500);
  };

  return (
    <div className="space-y-16 bg-white pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#0B0757] text-white py-16 px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="mb-2">
          <span className="inline-block text-xs font-extrabold text-[#EF7F1A] uppercase tracking-widest bg-white/10 px-5 py-2 rounded-full border border-white/15">
            Instant Enrollment & Access
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
          Complete Your Training Enrollment
        </h1>
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Select your preferred training track below, complete the bank transfer, and upload your payment proof to get instant access.
        </p>
      </section>

      {/* Main Container */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Tier Selector Toggle */}
        <div className="space-y-4 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-[#0B0757]">Select Training Option</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-2 bg-slate-100 rounded-2xl border border-slate-200">
            {pricingTiers.map((tier) => (
              <button
                key={tier.id}
                onClick={() => setSelectedTierId(tier.id)}
                className={`p-4 rounded-xl font-extrabold text-xs sm:text-sm transition-all text-center flex flex-col items-center justify-center space-y-1 border ${
                  selectedTierId === tier.id
                    ? 'bg-[#0B0757] text-white border-[#0B0757] shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center space-x-1.5">
                  <span>{tier.name}</span>
                  {tier.isPopular && <Star className="w-3.5 h-3.5 fill-[#EF7F1A] text-[#EF7F1A]" />}
                </div>
                <span className={selectedTierId === tier.id ? 'text-[#EF7F1A] text-lg font-black' : 'text-[#0B0757] text-lg font-black'}>
                  {tier.priceFormatted}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Tier Highlights & Bank Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Bank Account Details */}
          <div className="lg:col-span-6 bg-slate-50 p-7 sm:p-9 rounded-3xl border border-slate-200/90 shadow-md space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-extrabold text-[#EF7F1A] uppercase tracking-widest">Step 1: Bank Transfer</span>
              <h3 className="text-xl sm:text-2xl font-black text-[#0B0757]">Official Payment Account</h3>
              <p className="text-xs text-slate-600">Transfer the exact tuition fee to our registered corporate bank account below.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-xs">
              <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#EF7F1A] flex items-center justify-center font-bold">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Bank Name</span>
                  <p className="font-extrabold text-[#0B0757] text-base">Guaranty Trust Bank (GTBank)</p>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Account Name</span>
                <p className="font-extrabold text-slate-900 text-sm">AceAfrica Tech Support Skills Limited</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Account Number</span>
                  <p className="font-black text-[#0B0757] text-2xl tracking-wider">0847291048</p>
                </div>
                <button
                  onClick={handleCopy}
                  className="bg-[#0B0757] hover:bg-[#EF7F1A] text-white px-3 py-2 rounded-lg text-xs font-bold transition-colors flex items-center space-x-1.5 shadow-xs"
                >
                  {copiedAccount ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedAccount ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs font-bold text-slate-700">
                <span>Selected Track Tuition:</span>
                <span className="text-xl font-black text-[#EF7F1A]">{selectedTier.priceFormatted}</span>
              </div>
            </div>

            {/* Included Track Summary */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Selected Track Includes:</span>
              <ul className="space-y-1.5">
                {selectedTier.features.slice(0, 4).map((f, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs text-slate-600 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Payment Proof Upload Form */}
          <div className="lg:col-span-6 bg-white p-7 sm:p-9 rounded-3xl border border-slate-200 shadow-xl space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-extrabold text-[#EF7F1A] uppercase tracking-widest">Step 2: Confirm Payment</span>
              <h3 className="text-xl sm:text-2xl font-black text-[#0B0757]">Upload Payment Proof</h3>
              <p className="text-xs text-slate-600">Submit your receipt details to receive your access and onboarding instructions.</p>
            </div>

            <PaymentProofForm selectedTier={selectedTier} />
          </div>

        </div>

      </section>

    </div>
  );
}

export default function EnrollPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-slate-500">Loading enrollment options...</div>}>
      <EnrollContent />
    </Suspense>
  );
}
