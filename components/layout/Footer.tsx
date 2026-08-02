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
          <p className="text-slate-600 text-sm leading-relaxed font-medium">
            Empowering Africans with the digital skills, career clarity, and professional confidence to access global remote work opportunities — one graduate at a time.
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
          
          {/* Column 1 — Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#EF7F1A] uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2 text-slate-600 font-medium">
              <li><Link href="/" className="hover:text-[#0B0757] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#0B0757] transition-colors">About Awanger</Link></li>
              <li><Link href="/services" className="hover:text-[#0B0757] transition-colors">Curriculum</Link></li>
              <li><Link href="/#pricing" className="hover:text-[#0B0757] transition-colors">Pricing</Link></li>
              <li><Link href="/#testimonials" className="hover:text-[#0B0757] transition-colors">Success Stories</Link></li>
              <li><Link href="/faq" className="hover:text-[#0B0757] transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Column 2 — Skills We Teach */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#EF7F1A] uppercase tracking-widest">Skills We Teach</h4>
            <ul className="space-y-2 text-slate-600 font-medium text-xs sm:text-sm">
              <li>Virtual Assistance & Operations</li>
              <li>Customer Service & Technical Support</li>
              <li>CRM, Automation & Project Management</li>
              <li>Email Marketing & Lead Generation</li>
              <li>AI Tools & Content Creation</li>
              <li>CV, LinkedIn & Job Pitching</li>
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#EF7F1A] uppercase tracking-widest">Contact</h4>
            <div className="space-y-2.5 text-slate-600 font-medium">
              <p className="flex items-center justify-center md:justify-start space-x-2">
                <MapPin className="w-4 h-4 text-[#EF7F1A] shrink-0" />
                <span>No 165, CBN Estate, Lokogoma, Abuja, Nigeria</span>
              </p>
              <p className="flex items-center justify-center md:justify-start space-x-2">
                <Clock className="w-4 h-4 text-[#EF7F1A] shrink-0" />
                <span>Mon–Fri: 7am–9pm | Sat–Sun: 10am–5pm</span>
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
          <p>© {new Date().getFullYear()} AceAfrica Tech Support Skills Limited. All rights reserved. Registered in Nigeria.</p>
        </div>

      </div>
    </footer>
  );
}
