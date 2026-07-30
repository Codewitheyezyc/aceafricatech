"use client";

import { useState } from 'react';
import { uploadPaymentProof } from '@/lib/supabase';
import { CheckCircle2, UploadCloud, AlertCircle, Copy, Check, MessageCircle, ShieldCheck, Loader2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PaymentProofForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [copiedAccount, setCopiedAccount] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Official Bank Details
  const bankDetails = {
    bankName: "Guaranty Trust Bank (GTBank)",
    accountName: "AceAfrica Tech Support Skills Limited",
    accountNumber: "0847291048",
    amount: "₦25,000"
  };

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(bankDetails.accountNumber);
    setCopiedAccount(true);
    setTimeout(() => setCopiedAccount(false), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName || !email || !phone) {
      setErrorMsg('Please fill in your full name, email address, and phone number.');
      return;
    }

    if (!file) {
      setErrorMsg('Please attach your proof of payment screenshot or bank receipt.');
      return;
    }

    setLoading(true);

    try {
      // 1. Upload proof screenshot to Supabase Storage
      const proofPublicUrl = await uploadPaymentProof(file, fullName);

      // 2. Call API handler to dispatch Resend notification email
      const res = await fetch('/api/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          proofUrl: proofPublicUrl
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit payment confirmation.');
      }

      setLoading(false);
      setSuccess(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err: any) {
      console.error('Submission error:', err);
      setLoading(false);
      setErrorMsg(err.message || 'An error occurred while uploading. You can also send your proof via WhatsApp below.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      
      {/* 1. Price & Bank Transfer Banner */}
      <div className="bg-gradient-to-r from-[#0B0757] to-[#060436] text-white p-8 sm:p-10 rounded-3xl shadow-2xl border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#EF7F1A]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-white/15">
          <div>
            <span className="inline-block bg-[#EF7F1A] text-white text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full mb-2">
              Full Program Access
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              One-Time Tuition Fee
            </h2>
            <p className="text-slate-300 text-sm mt-1">
              Covers complete live training, ATS CV rewrite, tools & job placement support.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/15 text-center">
            <span className="text-xs uppercase text-slate-300 font-semibold block">Total Amount</span>
            <span className="text-3xl sm:text-4xl font-black text-[#EF7F1A]">{bankDetails.amount}</span>
          </div>
        </div>

        {/* Bank Details Display */}
        <div className="pt-8 space-y-4">
          <div className="flex items-center space-x-2 text-[#EF7F1A]">
            <ShieldCheck className="w-5 h-5" />
            <h3 className="font-bold text-lg text-white">Official Bank Account for Transfer</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
            <div>
              <span className="text-xs text-slate-400 block font-medium">Bank Name</span>
              <span className="font-bold text-white text-base">{bankDetails.bankName}</span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block font-medium">Account Name</span>
              <span className="font-bold text-white text-base leading-snug">{bankDetails.accountName}</span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block font-medium">Account Number</span>
              <div className="flex items-center space-x-2 mt-1">
                <span className="font-black text-[#EF7F1A] text-xl tracking-wider">{bankDetails.accountNumber}</span>
                <button
                  onClick={handleCopyAccount}
                  className="p-1.5 rounded-md bg-white/10 hover:bg-[#EF7F1A] transition-colors text-white"
                  title="Copy Account Number"
                >
                  {copiedAccount ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedAccount && <span className="text-[10px] text-emerald-400 font-medium">Copied to clipboard!</span>}
            </div>
          </div>

          {/* Strict Payment Policy Explainer */}
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-xs text-amber-200 leading-relaxed flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-[#EF7F1A] shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold text-amber-100 block mb-0.5">Important Access Policy:</strong>
              Class access and onboarding materials are issued strictly upon full payment of ₦25,000. Partial payments or installment arrangements are not eligible for training access.
            </div>
          </div>
        </div>
      </div>

      {/* 2. What Happens After You Pay */}
      <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
        <h3 className="text-lg font-bold text-[#0B0757] flex items-center space-x-2">
          <span>What Happens After You Transfer Payment?</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
            <div className="w-7 h-7 rounded-full bg-[#0B0757] text-white flex items-center justify-center text-xs font-bold">1</div>
            <h4 className="font-bold text-slate-900">Submit Your Proof</h4>
            <p className="text-xs text-slate-600">Fill out the confirmation form below with your payment screenshot or transfer receipt.</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
            <div className="w-7 h-7 rounded-full bg-[#0B0757] text-white flex items-center justify-center text-xs font-bold">2</div>
            <h4 className="font-bold text-slate-900">Verification (2-4 Hrs)</h4>
            <p className="text-xs text-slate-600">Our accounts team verifies your transfer against bank records.</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
            <div className="w-7 h-7 rounded-full bg-[#EF7F1A] text-white flex items-center justify-center text-xs font-bold">3</div>
            <h4 className="font-bold text-slate-900">Instant Onboarding</h4>
            <p className="text-xs text-slate-600">You receive your student dashboard login and WhatsApp class group invite link.</p>
          </div>
        </div>
      </div>

      {/* 3. PRIMARY: Payment Confirmation Form */}
      <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h3 className="text-xl font-bold text-[#0B0757]">Payment Confirmation Form</h3>
          <p className="text-xs text-slate-500 mt-1">
            Enter your details below and upload your bank transfer receipt/screenshot.
          </p>
        </div>

        {success ? (
          <div className="text-center py-8 space-y-4 animate-fadeIn">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-extrabold text-[#0B0757]">Proof Submitted Successfully!</h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              We have received your payment proof screenshot. Our team will verify your transfer and send your class onboarding email within <strong>2 to 4 hours</strong>.
            </p>
            <div className="pt-4">
              <a
                href="https://wa.me/+2349060001468"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl text-sm shadow-md transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Notify Admin on WhatsApp Now</span>
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {errorMsg && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                Full Name (as used on bank transfer) *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Blessing Okeke"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B0757] text-slate-900"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="blessing@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B0757] text-slate-900"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+234 801 234 5678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B0757] text-slate-900"
                />
              </div>
            </div>

            {/* Proof Upload Dropzone */}
            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                Upload Proof of Payment Screenshot (PNG, JPG, PDF) *
              </label>
              <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6 text-center hover:border-[#EF7F1A] transition-colors bg-slate-50 cursor-pointer">
                <input
                  type="file"
                  accept="image/*,.pdf"
                  required
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer space-y-2 block">
                  <UploadCloud className="w-10 h-10 text-[#EF7F1A] mx-auto" />
                  {file ? (
                    <div className="text-sm font-semibold text-slate-800">
                      Selected: <span className="text-[#0B0757] font-bold">{file.name}</span> ({(file.size / 1024 / 1024).toFixed(2)} MB)
                    </div>
                  ) : (
                    <>
                      <p className="text-sm font-medium text-slate-700">Click to select screenshot or drag & drop file here</p>
                      <p className="text-xs text-slate-400">Supported formats: JPG, PNG, WEBP, PDF (Max 10MB)</p>
                    </>
                  )}
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#EF7F1A] hover:bg-[#D96E0F] text-white font-extrabold py-4 rounded-xl text-base shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Uploading Proof to Server...</span>
                </>
              ) : (
                <>
                  <span>Submit Payment Proof (₦25,000)</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        )}
      </div>

      {/* 4. BACKUP: WhatsApp direct link */}
      <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-200 text-center space-y-3">
        <h4 className="font-bold text-emerald-950 text-base">Prefer WhatsApp to send your payment proof?</h4>
        <p className="text-xs text-emerald-800">
          If you encounter any upload issues, you can send your receipt directly to our official WhatsApp support number.
        </p>
        <a
          href="https://wa.me/+2349060001468?text=Hello%20AceAfrica,%20I%20have%20made%20my%20tuition%20payment%20of%20N25,000.%20Here%20is%20my%20proof%20of%20payment."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl text-sm shadow-md transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Send Proof via WhatsApp (+234 906 000 1468)</span>
        </a>
      </div>

    </div>
  );
}
