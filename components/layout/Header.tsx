"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ArrowRight, Sparkles } from 'lucide-react';

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
      {/* Top Banner Announcement */}
      <div className="bg-[#0B0757] text-white text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="bg-[#EF7F1A] text-white text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full">
              Africa's Remote Work EdTech Platform
            </span>
            <span className="hidden sm:inline text-slate-200">
              We Train Africans to Work for the World — Dollars, Pounds & Euros.
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="https://wa.me/+2349060001468" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-slate-200 hover:text-[#EF7F1A] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#EF7F1A]" />
              <span>+234 906 000 1468</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Clean White Modern Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100'
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Brand Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="flex items-center justify-center group-hover:scale-105 transition-transform">
                <Image
                  src="/logo.png"
                  alt="ACEAfrica Tech Support Skills Limited"
                  width={170}
                  height={42}
                  className="h-9 sm:h-10 w-auto object-contain"
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

            {/* Primary Action Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/enroll"
                className="bg-[#0B0757] hover:bg-[#EF7F1A] text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 shadow-sm hover:shadow-md flex items-center space-x-2"
              >
                <span>Enrol Now</span>
                <ArrowRight className="w-4 h-4 text-[#EF7F1A]" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <Link
                href="/enroll"
                className="bg-[#EF7F1A] text-white px-3.5 py-1.5 rounded-lg text-xs font-bold"
              >
                Enrol
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-3 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-base font-semibold transition-colors ${
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
                className="w-full text-center bg-[#EF7F1A] text-white font-extrabold py-3 rounded-xl text-sm shadow-md"
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
