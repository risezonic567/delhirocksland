import React from "react";
import { ChevronDown } from "lucide-react";

export default function Hero({ onOpenQuote }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=90"
          alt="Luxurious marble interior with natural stone textures"
          loading="lazy"
          className="w-full h-full object-cover scale-105 animate-pulse-slow opacity-80"
          style={{ animationDuration: "20s" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1115]/60 via-[#0F1115]/40 to-[#0F1115]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-start">
        {/* Heading */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-[#E5E1D8] leading-[1.1] max-w-4xl tracking-tight mb-6">
          Where Natural Stone <br />
          <span className="italic font-light text-[#C5A059]">
            Becomes Architecture.
          </span>
        </h1>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-16">
          <a
            href="#collections"
            className="px-8 py-4 bg-[#C5A059] hover:bg-[#B38F48] text-[#0F1115] text-xs font-semibold uppercase tracking-widest rounded-sm shadow-lg hover:shadow-[#C5A059]/20 transition-all text-center"
          >
            Explore Collection
          </a>

          <button
            onClick={onOpenQuote}
            className="px-8 py-4 border cursor-pointer border-[#E5E1D8]/30 hover:border-[#E5E1D8] text-[#E5E1D8] text-xs font-semibold uppercase tracking-widest rounded-sm backdrop-blur-sm transition-all text-center"
          >
            Get Free Quote
          </button>
        </div>

        <div className="border-t border-[#2A2E35] pt-6 flex flex-wrap gap-6 text-xs uppercase tracking-wider text-white">
          <span className="flex items-center gap-2">
            <span className="text-[#C5A059]">✓</span> Premium Materials
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[#C5A059]">✓</span> Expert Selection
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[#C5A059]">✓</span> Delhi NCR Project Support
          </span>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-widest text-[#A0A5B1]">
          SCROLL TO EXPLORE
        </span>
        <ChevronDown size={14} className="text-[#C5A059] animate-bounce" />
      </div>
    </section>
  );
}