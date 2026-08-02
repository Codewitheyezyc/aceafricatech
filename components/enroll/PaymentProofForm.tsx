"use client";

import { useState } from 'react';
import { PricingTier } from '@/data/pricing';
import { Upload, CheckCircle2, AlertCircle, Loader2, MessageCircle } from 'lucide-react';

export default function PaymentProofForm({ selectedTier }: { selectedTier: PricingTier }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [senderBank, setSenderBank] = useState('');
  const [proofFile, setProofFile] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const whatsappBackupUrl = `https://wa.me/+2349060001468?text=${encodeURIComponent(
    `Hello AceAfrica Team, I just enrolled for the ${selectedTier.name} (${selectedTier.priceFormatted}). My name is ${fullName || 'Student'}. Please verify my payment.`
  )}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Simulate/Trigger API submission endpoint
      const response = await fetch('/api/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          senderBank,
          tierName: selectedTier.name,
          tierPrice: selectedTier.priceFormatted,
        }),
      });

      if (!response.ok) {
        throw new Error('Form submission failed. You can also send your proof directly on WhatsApp.');
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Submission error. Please send proof via WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 p-7 rounded-2xl border border-emerald-200 text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-black text-emerald-950">Payment Proof Received!</h3>
        <p className="text-xs text-emerald-900 leading-relaxed">
          Thank you for enrolling in the <strong>{selectedTier.name}</strong> ({selectedTier.priceFormatted}). Our onboarding team is verifying your payment and will send your access details to <strong>{email}</strong> shortly.
        </p>

        <div className="pt-2">
          <a
            href={whatsappBackupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-sm transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Send Instant Proof on WhatsApp</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      
      {error && (
        <div className="bg-red-50 p-4 rounded-xl border border-red-200 text-xs text-red-700 flex items-start space-x-2">
          <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      <div>
        <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-1">
          Selected Option
        </label>
        <div className="bg-slate-100 p-3 rounded-xl border border-slate-200 font-extrabold text-xs text-[#0B0757] flex justify-between items-center">
          <span>{selectedTier.name}</span>
          <span className="text-[#EF7F1A] font-black">{selectedTier.priceFormatted}</span>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="e.g. Awanger Agena"
          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B0757]"
        />
      </div>

      <div>
        <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-1">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="e.g. awanger@example.com"
          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B0757]"
        />
      </div>

      <div>
        <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-1">
          Phone / WhatsApp Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="e.g. +234 906 000 1468"
          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B0757]"
        />
      </div>

      <div>
        <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-1">
          Sender Bank Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          required
          value={senderBank}
          onChange={(e) => setSenderBank(e.target.value)}
          placeholder="e.g. Kuda Bank, Zenith, FirstBank"
          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B0757]"
        />
      </div>

      <div>
        <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-1">
          Upload Payment Receipt (Optional)
        </label>
        <input
          type="file"
          accept="image/*,.pdf"
          onChange={(e) => setProofFile(e.target.files?.[0] || null)}
          className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 bg-slate-50 text-slate-600 file:mr-3 file:py-1 file:px-2.5 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-[#0B0757] file:text-white"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 rounded-xl font-extrabold text-xs sm:text-sm bg-[#EF7F1A] hover:bg-[#D96E0F] text-white transition-all shadow-md flex items-center justify-center space-x-2"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Submitting Receipt...</span>
          </>
        ) : (
          <>
            <Upload className="w-4 h-4" />
            <span>Confirm Enrollment — {selectedTier.priceFormatted}</span>
          </>
        )}
      </button>

      <div className="pt-2 text-center">
        <a
          href={whatsappBackupUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-600 hover:underline"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Or send payment proof directly on WhatsApp (+234 906 000 1468)</span>
        </a>
      </div>

    </form>
  );
}
