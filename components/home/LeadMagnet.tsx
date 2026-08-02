"use client";

import { useState } from 'react';
import { FileText, Send, CheckCircle2, AlertCircle, Loader2, Sparkles, ShieldCheck } from 'lucide-react';

export default function LeadMagnet() {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState(''); // Spam protection honeypot
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic client-side validation
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setError('Please enter your email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: trimmedEmail,
          honeypot: honeypot, // Silent bot trap
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to request guide. Please try again.');
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error('Lead magnet submission error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B0757] via-[#100C6B] to-[#060436] p-8 sm:p-12 lg:p-14 text-white shadow-2xl border border-amber-500/30">
        {/* Background Decorative Accents */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#EF7F1A]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Heading & Copy */}
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
              <Sparkles className="w-4 h-4 text-[#EF7F1A]" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-300">
                Free Instant Download
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white">
              Get Our Free Cover Letter Writing Guide
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
              Learn the exact 4-step framework used by 5,000+ Africans to craft winning cover letters for high-paying global remote roles.
            </p>

            <div className="pt-1 flex flex-wrap justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-300">
              <span className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-[#EF7F1A]" />
                <span>100% Free PDF</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <FileText className="w-4 h-4 text-[#EF7F1A]" />
                <span>Instant Email Delivery</span>
              </span>
            </div>
          </div>

          {/* Right Column: Form or Success Card */}
          <div className="lg:col-span-5 bg-white/5 backdrop-blur-xl p-5 sm:p-8 rounded-2xl border border-white/15 shadow-xl">
            {submitted ? (
              <div className="text-center space-y-4 py-3 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-extrabold text-white">Check Your Inbox!</h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  We've sent your free <strong>Cover Letter Writing Guide PDF</strong> to <span className="text-amber-300 font-semibold">{email}</span>.
                </p>
                <p className="text-xs text-slate-400">
                  (Don't see it? Please check your spam or promotions folder.)
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Honeypot Field for Bot Spam Protection (Hidden from human users) */}
                <div className="opacity-0 absolute -z-50 pointer-events-none h-0 w-0 overflow-hidden">
                  <label htmlFor="b_hp_field">Do not fill this out if you are human</label>
                  <input
                    type="text"
                    id="b_hp_field"
                    name="b_hp_field"
                    tabIndex={-1}
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label htmlFor="lead-magnet-email" className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-2">
                    Enter Your Email Address
                  </label>
                  <input
                    id="lead-magnet-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. awanger@example.com"
                    disabled={loading}
                    className="w-full px-4 py-3.5 text-sm text-slate-900 bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#EF7F1A] placeholder:text-slate-400 font-medium"
                  />
                </div>

                {error && (
                  <div className="bg-red-500/10 border border-red-400/30 p-3 rounded-xl text-xs text-red-200 flex items-start space-x-2">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 sm:py-4 px-4 sm:px-6 rounded-xl font-black text-xs xs:text-sm sm:text-base bg-[#EF7F1A] hover:bg-[#D96E0F] text-white transition-all shadow-lg hover:shadow-amber-500/20 active:scale-95 disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center space-x-2 whitespace-nowrap"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin shrink-0" />
                      <span>Sending Your Guide...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 shrink-0" />
                      <span>Get Free Cover Letter Guide</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-slate-400">
                  🔒 We respect your privacy. Zero spam, unsubscribe anytime.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
