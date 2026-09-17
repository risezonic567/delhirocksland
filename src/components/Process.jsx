import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Process({ onOpenQuote }) {
  const steps = [
    {
      num: "01",
      title: "Tell Us Your Requirement",
      desc: "Share your project type, floor area requirements, preferred stone type, or design drawings."
    },
    {
      num: "02",
      title: "Shortlist Your Stone",
      desc: "Explore suitable colors, veining patterns, finishes, and slab lots curated for your design theme."
    },
    {
      num: "03",
      title: "Confirm Your Selection",
      desc: "Review physical slab lots, exact cut-sizes, quantity planning, and site delivery terms."
    },
    {
      num: "04",
      title: "Move Forward With Confidence",
      desc: "Proceed with material dispatch, backed by full technical support across Delhi NCR."
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#14171D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#C5A059]">
            SEAMLESS PROCUREMENT
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#E5E1D8] leading-tight mt-2 mb-4">
            From Selection to Your Space.
          </h2>
          <p className="text-sm sm:text-base text-[#A0A5B1] font-light">
            A simplified 4-step process designed to remove ambiguity from natural stone sourcing.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative bg-[#0F1115] border border-[#2A2E35] p-6 rounded-sm flex flex-col justify-between">
              <div>
                <span className="text-3xl font-serif text-[#C5A059] block mb-4 font-light">
                  {step.num}
                </span>
                <h3 className="font-serif text-lg font-normal text-[#E5E1D8] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[#A0A5B1] font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-[#2A2E35]">
                  <ArrowRight size={16} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Process CTA */}
        <div className="text-center mt-16">
          <button
            onClick={onOpenQuote}
            className="px-8 py-4 bg-[#C5A059] hover:bg-[#B38F48] text-[#0F1115] text-xs font-semibold uppercase tracking-widest transition-all rounded-sm shadow-md"
          >
            Start Your Project →
          </button>
        </div>

      </div>
    </section>
  );
}