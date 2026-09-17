import React from 'react';
import { MessageSquare, Phone, Send } from 'lucide-react';

export default function ConsultationCTA({ onOpenQuote }) {
  return (
    <section className="relative py-24 sm:py-32 bg-[#0F1115] overflow-hidden">
      {/* Background Subtle Marble Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80"
          alt="Marble texture background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0F1115]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-[#C5A059]">
          LET'S BUILD SOMETHING BEAUTIFUL
        </span>
        <h2 className="font-serif text-3xl sm:text-6xl font-normal text-[#E5E1D8] leading-tight mt-3 mb-6">
          Have a Space in Mind?
        </h2>
        <p className="text-base sm:text-lg text-[#A0A5B1] font-light max-w-2xl mx-auto leading-relaxed mb-10">
          Tell us what you're building and our team of stone specialists will help you find the right material, quantity estimates, and competitive quotations.
        </p>

        {/* Primary CTA Cluster */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto px-8 py-4 bg-[#C5A059] hover:bg-[#B38F48] text-[#0F1115] text-xs font-semibold uppercase tracking-widest transition-all rounded-sm shadow-xl"
          >
            Get a Free Quote
          </button>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/50 text-[#25D366] text-xs font-semibold uppercase tracking-widest transition-all rounded-sm"
          >
            <MessageSquare size={16} /> WhatsApp Us
          </a>
          <a
            href="tel:+919999999999"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#2A2E35] hover:border-[#E5E1D8] text-[#E5E1D8] text-xs font-semibold uppercase tracking-widest transition-all rounded-sm"
          >
            <Phone size={16} /> Call Now
          </a>
        </div>
      </div>
    </section>
  );
}