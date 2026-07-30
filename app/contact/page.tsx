import ContactForm from '@/components/contact/ContactForm';
import { MapPin, Clock, Phone, Mail, MessageCircle, Facebook, Instagram, ShieldCheck, Sparkles } from 'lucide-react';

export default function ContactPage() {
  const whatsappUrl = "https://wa.me/+2349060001468";
  const instagramUrl = "https://www.instagram.com/aceafricatech?igsh=MXJqZW1xamx2ZGgxbQ==";
  const facebookUrl = "https://www.facebook.com/share/1EUim4cBWs/";

  return (
    <div className="space-y-20 bg-white pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#0B0757] text-white py-16 px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="mb-2">
          <span className="inline-block text-xs font-extrabold text-[#EF7F1A] uppercase tracking-widest bg-white/10 px-5 py-2 rounded-full border border-white/15">
            Get in Touch
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
          Contact AceAfrica Team
        </h1>
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Have questions about our remote job training, tuition, schedule, or mentorship? We are here to help.
        </p>
      </section>

      {/* Main Contact Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Office & Social Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#EF7F1A] uppercase tracking-widest">Reach Us Directly</span>
              <h2 className="text-3xl font-extrabold text-[#0B0757]">Official Contacts & Location</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Connect with our team via WhatsApp, phone, email, or visit our office in Abuja.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-2xs flex items-start space-x-4">
                <div className="w-11 h-11 rounded-xl bg-[#0B0757] text-[#EF7F1A] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B0757] text-sm">Physical Office Address</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    No 165, CBN Estate, Lokogoma, Abuja, Nigeria
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-2xs flex items-start space-x-4">
                <div className="w-11 h-11 rounded-xl bg-[#0B0757] text-[#EF7F1A] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B0757] text-sm">Working Hours</h4>
                  <p className="text-xs text-slate-600 mt-1">Monday – Friday: 7:00 AM – 9:00 PM</p>
                  <p className="text-xs text-slate-500">Weekend: 10:00 AM – 5:00 PM</p>
                </div>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-2xs flex items-start space-x-4">
                <div className="w-11 h-11 rounded-xl bg-[#0B0757] text-[#EF7F1A] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B0757] text-sm">Phone & WhatsApp Support</h4>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#EF7F1A] hover:underline block mt-1"
                  >
                    +234 906 000 1468
                  </a>
                </div>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-2xs flex items-start space-x-4">
                <div className="w-11 h-11 rounded-xl bg-[#0B0757] text-[#EF7F1A] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B0757] text-sm">Official Email</h4>
                  <a
                    href="mailto:support@aceafricatech.com"
                    className="text-xs font-semibold text-slate-700 hover:text-[#EF7F1A] block mt-1"
                  >
                    support@aceafricatech.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Connect Links (Fixed Responsive Pill Layout) */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <h4 className="text-xs font-bold text-[#0B0757] uppercase tracking-wider">Connect on Social Media</h4>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-[#0B0757] text-slate-800 hover:text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-all border border-slate-200 flex items-center space-x-1.5 shadow-2xs"
                >
                  <Facebook className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Facebook</span>
                </a>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-[#0B0757] text-slate-800 hover:text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-all border border-slate-200 flex items-center space-x-1.5 shadow-2xs"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-600 shrink-0" />
                  <span>Instagram</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-[#0B0757] text-slate-800 hover:text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-all border border-slate-200 flex items-center space-x-1.5 shadow-2xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-black text-[#0B0757]">Send Us a Message</h3>
              <p className="text-xs text-slate-600">
                Have questions about our training modules, schedule, or remote career path? Reach out to us below.
              </p>
            </div>

            <ContactForm />
          </div>

        </div>
      </section>

    </div>
  );
}
