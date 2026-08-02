"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Awanger', href: '/about' },
    { name: 'Curriculum', href: '/services' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* 1. Top Announcement Bar Header */}
      <div className="bg-[#0B0757] text-white text-xs py-2 px-3 sm:px-6 border-b border-white/10 relative z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center space-x-2">
          
          {/* Left: Platform Badge & Tagline */}
          <div className="flex items-center space-x-2 min-w-0">
            <span className="bg-[#EF7F1A] text-white text-[9px] sm:text-[10px] uppercase font-extrabold px-2 sm:px-2.5 py-0.5 rounded-full shrink-0 whitespace-nowrap tracking-wider">
              <span className="inline sm:hidden">AceAfrica</span>
              <span className="hidden sm:inline">Africa's Remote Work EdTech Platform</span>
            </span>
            <span className="hidden md:inline text-slate-200 text-xs truncate">
              We Train Africans to Work for the World — Dollars, Pounds & Euros.
            </span>
          </div>

          {/* Right: Phone / WhatsApp Direct Link */}
          <div className="flex items-center shrink-0">
            <a 
              href="https://wa.me/+2349060001468" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-slate-200 hover:text-[#EF7F1A] transition-colors text-[11px] sm:text-xs font-semibold whitespace-nowrap"
            >
              <Phone className="w-3 h-3 text-[#EF7F1A] shrink-0" />
              <span>+234 906 000 1468</span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. Main Navigation Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 sm:py-3 border-b border-slate-100'
            : 'bg-white py-3 sm:py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Brand Logo */}
            <Link href="/" className="flex items-center space-x-3 group shrink-0">
              <div className="flex items-center justify-center group-hover:scale-105 transition-transform">
                <Image
                  src="/logo.png"
                  alt="ACEAfrica Tech Support Skills Limited"
                  width={170}
                  height={42}
                  className="h-8 sm:h-10 w-auto object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-7">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-semibold transition-colors hover:text-[#EF7F1A] relative py-1 ${
                      isActive ? 'text-[#0B0757]' : 'text-slate-600'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#EF7F1A] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/enroll"
                className="bg-[#0B0757] hover:bg-[#EF7F1A] text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 shadow-sm hover:shadow-md flex items-center space-x-2"
              >
                <span>Enrol Now</span>
                <ArrowRight className="w-4 h-4 text-[#EF7F1A]" />
              </Link>
            </div>

            {/* Mobile Action Buttons (Enrol + Hamburger Menu) */}
            <div className="md:hidden flex items-center space-x-2">
              <Link
                href="/enroll"
                className="bg-[#EF7F1A] hover:bg-[#D96E0F] active:scale-95 text-white px-3.5 py-1.5 rounded-xl text-xs font-black tracking-wide shadow-xs transition-all flex items-center justify-center"
              >
                Enrol
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-xl text-[#0B0757] hover:bg-slate-100 active:scale-95 transition-all flex items-center justify-center border border-slate-200/80"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-3 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3.5 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                  pathname === link.href
                    ? 'bg-[#0B0757] text-white'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-slate-100 flex flex-col space-y-2">
              <Link
                href="/enroll"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-[#EF7F1A] text-white font-black py-3 rounded-xl text-sm shadow-md"
              >
                Enrol Now
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
