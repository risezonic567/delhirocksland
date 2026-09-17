import React, { useState } from 'react';
import { MATERIAL_COMPARISON } from '../data/stoneData';
import { Check, ArrowRight } from 'lucide-react';

export default function MaterialComparison({ onOpenQuote }) {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <section className="py-24 sm:py-32 bg-[#14171D] border-y border-[#2A2E35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#C5A059]">
            MATERIAL GUIDE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#E5E1D8] leading-tight mt-2 mb-4">
            Not Sure Which Stone Is Right for You?
          </h2>
          <p className="text-sm sm:text-base text-[#A0A5B1] font-light">
            Every architectural project has distinct requirements. Compare natural materials based on aesthetic finish, durability, and maintenance.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-12 flex-wrap">
          {MATERIAL_COMPARISON.map((mat, idx) => (
            <button
              key={mat.material}
              onClick={() => setSelectedIdx(idx)}
              className={`px-6 py-3 text-xs uppercase tracking-widest rounded-sm font-medium transition-all ${
                selectedIdx === idx
                  ? 'bg-[#C5A059] text-[#0F1115] shadow-md'
                  : 'bg-[#0F1115] text-[#A0A5B1] hover:text-[#E5E1D8] border border-[#2A2E35]'
              }`}
            >
              {mat.material}
            </button>
          ))}
        </div>

        {/* Selected Material Card */}
        <div className="max-w-4xl mx-auto bg-[#0F1115] border border-[#2A2E35] p-8 sm:p-12 rounded-sm">
          <div className="flex items-center justify-between border-b border-[#2A2E35] pb-6 mb-8">
            <h3 className="font-serif text-3xl text-[#E5E1D8]">
              {MATERIAL_COMPARISON[selectedIdx].material} Overview
            </h3>
            <span className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold border border-[#C5A059]/30 px-3 py-1 rounded-sm">
              Architectural Grade
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div>
              <h4 className="text-xs uppercase tracking-wider text-[#A0A5B1] font-semibold mb-2">Best Suited For</h4>
              <p className="text-sm text-[#E5E1D8] font-light leading-relaxed">{MATERIAL_COMPARISON[selectedIdx].bestFor}</p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider text-[#A0A5B1] font-semibold mb-2">Aesthetic & Character</h4>
              <p className="text-sm text-[#E5E1D8] font-light leading-relaxed">{MATERIAL_COMPARISON[selectedIdx].look}</p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider text-[#A0A5B1] font-semibold mb-2">Durability Rating</h4>
              <p className="text-sm text-[#E5E1D8] font-light leading-relaxed">{MATERIAL_COMPARISON[selectedIdx].durability}</p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider text-[#A0A5B1] font-semibold mb-2">Maintenance Profile</h4>
              <p className="text-sm text-[#E5E1D8] font-light leading-relaxed">{MATERIAL_COMPARISON[selectedIdx].maintenance}</p>
            </div>
          </div>

          <div className="pt-6 border-t border-[#2A2E35] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#A0A5B1]">Want to compare physical slab samples?</span>
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] hover:underline"
            >
              Talk to a Stone Expert <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}