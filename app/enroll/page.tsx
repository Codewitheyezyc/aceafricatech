import PaymentProofForm from '@/components/enroll/PaymentProofForm';
import { ShieldCheck, HelpCircle } from 'lucide-react';

export default function EnrollPage() {
  return (
    <div className="space-y-12 pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#0B0757] text-white py-16 px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold text-[#EF7F1A] uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/10">
          Manual Bank Transfer Checkout
        </span>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight">
          Enrollment & Payment Confirmation
        </h1>
        <p className="text-slate-300 text-base max-w-2xl mx-auto">
          Transfer tuition of ₦25,000 directly to our official bank account and upload your payment receipt below for instant verification.
        </p>
      </section>

      {/* Payment Confirmation Form & Details Component */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PaymentProofForm />
      </section>

    </div>
  );
}
