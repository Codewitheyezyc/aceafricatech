import FaqAccordion from '@/components/shared/FaqAccordion';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function FaqPage() {
  return (
    <div className="space-y-16 pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#0B0757] text-white py-16 px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold text-[#EF7F1A] uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/10">
          Knowledge Base & Help Center
        </span>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-slate-300 text-base max-w-2xl mx-auto">
          Find answers to common questions about tuition, course schedule, certification, and remote job placement.
        </p>
      </section>

      {/* Accordion Component with Search */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FaqAccordion showSearch={true} />
      </section>

      {/* Still Have Questions CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 space-y-4">
          <h3 className="text-2xl font-bold text-[#0B0757]">Still Have Unanswered Questions?</h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto">
            Our career advisors are available on WhatsApp to answer your specific questions in real time.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/+2349060001468"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl text-sm shadow-md transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat with Us on WhatsApp</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-[#0B0757] hover:bg-[#060436] text-white font-bold px-6 py-3.5 rounded-xl text-sm shadow-md transition-colors"
            >
              <span>Go to Contact Form</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
