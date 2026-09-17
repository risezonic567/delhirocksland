import React, { useState } from 'react';
import { PROJECTS } from '../data/stoneData';
import { MapPin, ArrowUpRight } from 'lucide-react';

export default function Projects({ onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Residential", "Luxury Interiors", "Hospitality", "Commercial"];

  const filteredProjects = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#0F1115]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#C5A059]">
            PORTFOLIO OF INSPIRATION
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#E5E1D8] leading-tight mt-2 mb-4">
            Spaces That Speak Through Stone.
          </h2>
          <p className="text-sm sm:text-base text-[#A0A5B1] font-light">
            Explore how premium marble and natural stone elevate high-end residential and commercial environments in Delhi NCR.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-[#2A2E35] pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-wider rounded-sm transition-all ${
                activeCategory === cat
                  ? 'bg-[#C5A059] text-[#0F1115] font-semibold'
                  : 'text-[#A0A5B1] hover:text-[#E5E1D8] bg-[#14171D]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={onOpenQuote}
              className="group relative bg-[#14171D] border border-[#2A2E35] rounded-sm overflow-hidden cursor-pointer h-[360px] flex flex-col justify-end p-6"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-[#0F1115]/40 to-transparent" />

              <div className="relative z-10">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-medium">
                    {proj.category}
                  </span>
                  <span className="p-2 rounded-full bg-[#0F1115]/80 text-[#E5E1D8] group-hover:bg-[#C5A059] group-hover:text-[#0F1115] transition-colors">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
                <h3 className="font-serif text-xl font-normal text-[#E5E1D8] mb-1">
                  {proj.title}
                </h3>
                <p className="text-xs text-[#A0A5B1] flex items-center gap-1 font-light">
                  <MapPin size={12} className="text-[#C5A059]" /> {proj.location}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}