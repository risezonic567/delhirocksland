import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';

export default function Navbar({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collections', href: '#collections' },
    { name: 'Applications', href: '#applications' },
    { name: 'Why DelhiRocks', href: '#why-us' },
   
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0F1115]/90 backdrop-blur-md py-4 border-b border-[#2A2E35]'
          : 'bg-gradient-to-b from-[#0F1115]/80 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        <a href="#hero" className="flex items-center gap-2 group">
       <img
  src="/Images/logo/delhi-rock-logo1.png"
  alt="DelhiRocks"
  className="h-7 sm:h-8 md:h-8 lg:h-9 w-auto object-contain"
/>
        </a>

        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest text-[#d6dae5] hover:text-[#E5E1D8] transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="https://wa.me/919999999999?text=Hello%20DelhiRocks,%20I%20want%20to%20enquire%20about%20natural%20stones."
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-[#2A2E35] text-[#bdc2cd] hover:text-[#25D366] hover:border-[#25D366] transition-all"
            aria-label="WhatsApp Us"
          >
            <MessageSquare size={18} />
          </a>
          <button
            onClick={onOpenQuote}
            className="px-5 py-2.5 bg-[#C5A059] hover:bg-[#B38F48] text-[#0F1115] text-xs font-semibold uppercase tracking-wider transition-all rounded-sm shadow-md"
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center space-x-3">
          <button
            onClick={onOpenQuote}
            className="px-3.5 py-1.5 bg-[#C5A059] text-[#0F1115] text-xs font-semibold uppercase tracking-wider rounded-sm"
          >
            Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#E5E1D8] p-2 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0F1115] border-b border-[#2A2E35] px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm uppercase tracking-wider text-[#A0A5B1] hover:text-[#C5A059] transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-[#2A2E35] flex flex-col gap-3">
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 border border-[#25D366] text-[#25D366] text-xs font-semibold uppercase tracking-wider rounded-sm"
            >
              <MessageSquare size={16} /> WhatsApp Inquiry
            </a>
          </div>
        </div>
      )}
    </header>
  );
}