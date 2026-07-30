import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Clock, Phone, Mail, Facebook, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  const facebookUrl = "https://www.facebook.com/share/1EUim4cBWs/";
  const instagramUrl = "https://www.instagram.com/aceafricatech?igsh=MXJqZW1xamx2ZGgxbQ==";
  const whatsappUrl = "https://wa.me/+2349060001468";

  return (
    <footer className="bg-slate-50/90 text-slate-800 border-t border-slate-200/80 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Centered Brand Statement & Logo */}
        <div className="text-center space-y-5 max-w-2xl mx-auto pb-10 border-b border-slate-200/80">
          <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
            <Image
              src="/logo.png"
              alt="ACEAfrica Tech Support Skills Limited"
              width={220}
              height={55}
              className="h-11 sm:h-12 w-auto object-contain"
            />
          </Link>
          <p className="text-slate-600 text-sm leading-relaxed">
            Empowering everyday Nigerians with in-demand digital support skills (Customer Support, Virtual Assistance, IT Technical Support & Tech Sales) to land international remote jobs paying in foreign currency.
          </p>
          <div className="flex justify-center items-center space-x-3 pt-2">
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white hover:bg-[#EF7F1A] hover:text-white text-[#0B0757] flex items-center justify-center transition-colors border border-slate-200 shadow-xs"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white hover:bg-[#EF7F1A] hover:text-white text-[#0B0757] flex items-center justify-center transition-colors border border-slate-200 shadow-xs"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white hover:bg-[#EF7F1A] hover:text-white text-[#0B0757] flex items-center justify-center transition-colors border border-slate-200 shadow-xs"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 3 Column Balanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left text-sm">
          
          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#EF7F1A] uppercase tracking-widest">Quick Navigation</h4>
            <ul className="space-y-2 text-slate-600 font-medium">
              <li><Link href="/" className="hover:text-[#0B0757] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#0B0757] transition-colors">About Awanger & Company</Link></li>
              <li><Link href="/services" className="hover:text-[#0B0757] transition-colors">Training Curriculum</Link></li>
              <li><Link href="/enroll" className="text-[#EF7F1A] font-bold hover:underline">Enrollment (₦25,000)</Link></li>
              <li><Link href="/faq" className="hover:text-[#0B0757] transition-colors">Frequently Asked Questions</Link></li>
              <li><Link href="/webinar" className="hover:text-[#0B0757] transition-colors">Free Webinar Landing Page</Link></li>
            </ul>
          </div>

          {/* Skills We Teach */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#EF7F1A] uppercase tracking-widest">Skills We Teach</h4>
            <ul className="space-y-2 text-slate-600 font-medium">
              <li>Technical Customer Support</li>
              <li>Virtual Assistance & Admin</li>
              <li>Tech Sales & Outbound Prospecting</li>
              <li>AI Productivity Tools</li>
              <li>ATS CV & Cover Letter Architecture</li>
              <li>Upwork, Contra & LinkedIn Pitching</li>
            </ul>
          </div>

          {/* Office & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#EF7F1A] uppercase tracking-widest">Office & Contact</h4>
            <div className="space-y-2.5 text-slate-600 font-medium">
              <p className="flex items-center justify-center md:justify-start space-x-2">
                <MapPin className="w-4 h-4 text-[#EF7F1A] shrink-0" />
                <span>No 165, CBN Estate, Lokogoma, Abuja</span>
              </p>
              <p className="flex items-center justify-center md:justify-start space-x-2">
                <Clock className="w-4 h-4 text-[#EF7F1A] shrink-0" />
                <span>Mon – Fri: 7am–9pm | Sat-Sun: 10am–5pm</span>
              </p>
              <p className="flex items-center justify-center md:justify-start space-x-2">
                <Phone className="w-4 h-4 text-[#EF7F1A] shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#0B0757] transition-colors">+234 906 000 1468</a>
              </p>
              <p className="flex items-center justify-center md:justify-start space-x-2">
                <Mail className="w-4 h-4 text-[#EF7F1A] shrink-0" />
                <a href="mailto:support@aceafricatech.com" className="hover:text-[#0B0757] transition-colors">support@aceafricatech.com</a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Line */}
        <div className="pt-8 border-t border-slate-200/80 text-center text-xs text-slate-500 space-y-1">
          <p>© {new Date().getFullYear()} AceAfrica Tech Support Skills Limited. All rights reserved.</p>
          <p className="text-slate-400">Rebuilt with Next.js App Router, TypeScript & Tailwind CSS.</p>
        </div>

      </div>
    </footer>
  );
}
