import React from 'react';

export default function FinalCTA({ onOpenQuote }) {
  return (
    <section className="py-24 sm:py-32 bg-[#0F1115] border-t border-[#2A2E35] text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-4xl sm:text-6xl font-normal text-[#E5E1D8] leading-tight mb-6">
          Your Space Deserves <br />
          <span className="italic font-light text-[#C5A059]">The Right Stone.</span>
        </h2>
        <p className="text-sm sm:text-base text-[#A0A5B1] font-light max-w-xl mx-auto mb-10">
          Let’s find the material that brings your architectural vision to life. Get in touch with our Delhi NCR consultants today.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto px-9 py-4 bg-[#C5A059] hover:bg-[#B38F48] text-[#0F1115] text-xs font-semibold uppercase tracking-widest transition-all rounded-sm shadow-xl"
          >
            Get Free Quote
          </button>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-9 py-4 border border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 text-xs font-semibold uppercase tracking-widest transition-all rounded-sm"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}