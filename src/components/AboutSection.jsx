import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const STONE_COLLECTIONS = [
  {
    id: "01",
    name: "Marble",
    badge: "CLASSIC",
    count: "25+ Varieties",
    varieties: ["Statuario", "Calacatta Gold", "Bottochino", "Italian Grey"],
    description: "Timeless elegance defined by soft veining patterns and high-gloss polish for luxury living floors and feature walls.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "02",
    name: "Granite",
    badge: "DURABLE",
    count: "18+ Varieties",
    varieties: ["Black Galaxy", "Tan Brown", "Blue Pearl", "Steel Grey"],
    description: "Dense, scratch-resistant natural stone engineered for high-traffic flooring, kitchen countertops, and exterior facades.",
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "03",
    name: "Quartzite",
    badge: "RARE",
    count: "12+ Varieties",
    varieties: ["Kandla Lining", "Roma Grey", "Sea Shell", "Woodland"],
    description: "Natural crystalline strength combining the subtle organic beauty of marble with the durability of granite.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "04",
    name: "Limestone & Sandstone",
    badge: "ARCHITECTURAL",
    count: "14+ Varieties",
    varieties: ["Jaisalmer Yellow", "Kota Stone", "Kandla Grey", "Bansi Pink"],
    description: "Earthy organic textures ideal for courtyard architecture, outdoor steps, and weather-resistant wall cladding.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "05",
    name: "Onyx & Exotic",
    badge: "STATEMENT",
    count: "8+ Varieties",
    varieties: ["Honey Onyx", "Emerald Green", "Tiger Onyx", "Travertine"],
    description: "Translucent natural slabs designed to illuminate under backlight for bars, powder rooms, and reception consoles.",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=85"
  }
];

export default function InteractiveStoneShowcase({ onOpenQuote }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-index'));
          if (!isNaN(index)) {
            setActiveIdx(index);
          }
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const activeStone = STONE_COLLECTIONS[activeIdx];

  return (
    <section className="py-24 sm:py-32 bg-[#FBF9F5] text-[#0F1115] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 max-w-2xl">
           {/* <span className="w-9 h-px bg-[#B69A68]" /> */}
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#C5A059]">
            CURATED SELECTION
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1A1D24] leading-tight mt-2">
            Explore Stone Categories
          </h2>
          <p className="text-sm text-[#5A606D] font-light mt-3">
            Scroll to inspect natural stone variants, finishes, and architectural applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">
          
          <div className="lg:col-span-5 space-y-24 py-8">
            {STONE_COLLECTIONS.map((item, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={item.id}
                  data-index={idx}
                  ref={(el) => (sectionRefs.current[idx] = el)}
                  onClick={() => setActiveIdx(idx)}
                  className={`cursor-pointer p-6 rounded-sm border transition-all duration-300 ${
                    isActive
                      ? 'bg-white border-[#C5A059] shadow-xl translate-x-2'
                      : 'bg-white/60 border-[#E2DFD7] hover:border-[#C5A059]/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-serif text-xs font-semibold text-[#C5A059]">
                      {item.id}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-[#F3EFE6] text-[#8C6D2D]">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className={`font-serif text-2xl sm:text-3xl font-normal transition-colors ${
                    isActive ? 'text-[#0F1115]' : 'text-[#6C727F]'
                  }`}>
                    {item.name}
                  </h3>

                  <p className="text-xs text-[#5A606D] font-light leading-relaxed mt-3 mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[#F0ECE1]">
                    {item.varieties.map((v, vIdx) => (
                      <span
                        key={vIdx}
                        className={`text-[11px] font-medium transition-colors ${
                          isActive ? 'text-[#333742]' : 'text-[#8D93A0]'
                        }`}
                      >
                        {v}{vIdx < item.varieties.length - 1 ? ' •' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          
<div className="lg:col-span-7 sticky top-24 self-start">
  <div className="relative overflow-hidden rounded-2xl bg-[#F7F4EE] border border-[#E4DED2] shadow-[0_20px_60px_rgba(42,38,30,0.10)]">

    {/* Top Header */}
    <div className="relative px-6 sm:px-8 py-6 border-b border-[#E5DED2] bg-white/70">

      <div className="flex items-center justify-between gap-4">

        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-px bg-[#B69A68]" />

            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#8B7552]">
              DELHI<span className="text-[#B69A68]">ROCKS</span>
            </span>

            <span className="w-8 h-px bg-[#B69A68]" />
          </div>

          <p className="text-[11px] tracking-[0.18em] uppercase text-[#8D8981]">
            Curated Stone Collection
          </p>
        </div>

        {/* Badge */}
        <span className="shrink-0 inline-flex items-center px-3 py-1.5 rounded-full bg-[#EFE7D8] border border-[#DDD0B8] text-[9px] font-semibold tracking-[0.16em] uppercase text-[#806A45]">
          {activeStone.badge}
        </span>

      </div>
    </div>


    {/* Main Image */}
    <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-[#E9E4DA]">

      {/* Soft background glow */}
      <div className="absolute -top-20 -left-20 w-56 h-56 bg-[#D5C09A]/20 blur-3xl rounded-full pointer-events-none" />

      <img
        key={activeStone.id}
        src={activeStone.image}
        alt={`${activeStone.name} natural stone`}
        className="
          relative z-10
          w-full h-full
          object-cover
          transition-all duration-700 ease-out
          hover:scale-[1.035]
        "
      />

      {/* Soft bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/45 via-black/10 to-transparent z-20 pointer-events-none" />

      {/* Image Label */}
      <div className="absolute bottom-5 left-5 sm:left-7 z-30">
        <span className="text-[9px] uppercase tracking-[0.22em] text-white/80">
          Natural Stone
        </span>

        <h3 className="mt-1 text-xl sm:text-2xl font-serif text-white tracking-wide">
          {activeStone.name}
        </h3>
      </div>

      {/* Image Counter */}
      <div className="absolute top-5 right-5 z-30 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm">
        <span className="text-[10px] font-medium tracking-widest text-[#4B4740]">
          {String(activeIdx + 1).padStart(2, "0")} /{" "}
          {String(STONE_COLLECTIONS.length).padStart(2, "0")}
        </span>
      </div>

    </div>


    {/* Stone Information */}
    <div className="px-6 sm:px-8 py-6 bg-white">

      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">

        <div>

          <p className="text-[10px] uppercase tracking-[0.2em] text-[#A18A63] mb-2">
            Featured Collection
          </p>

          <h4 className="font-serif text-2xl sm:text-3xl text-[#25231F] font-normal">
            {activeStone.name}
          </h4>

          <p className="mt-2 text-sm text-[#817C73] leading-relaxed max-w-md">
            {activeStone.count} carefully selected slabs available for
            physical inspection and project requirements.
          </p>

        </div>


        <a
          href='tel:+919289207505'
          className="
            group
            shrink-0
            inline-flex items-center justify-center gap-3
            px-6 py-3.5
            rounded-full
            bg-[#24231F]
            text-white
            text-[13px]
            font-semibold
            uppercase
            tracking-[0.16em]
            transition-all duration-300
            hover:bg-[#B69A68]
            hover:text-white
            hover:shadow-lg
          "
        >
          Explore Stone

          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>

      </div>

    </div>


    {/* Bottom Slider Navigation */}
    <div className="px-6 sm:px-8 py-4 bg-[#F7F4EE] border-t border-[#E6DFD4]">

      <div className="flex items-center justify-between gap-5">

        {/* Progress */}
        <div className="flex items-center gap-1.5">
          {STONE_COLLECTIONS.map((_, dotIdx) => (
            <span
              key={dotIdx}
              className={`
                h-1 rounded-full
                transition-all duration-500
                ${
                  activeIdx === dotIdx
                    ? "w-8 bg-[#B69A68]"
                    : "w-2 bg-[#D5CEC2]"
                }
              `}
            />
          ))}
        </div>

        {/* Collection Label */}
        <span className="hidden sm:block text-[9px] uppercase tracking-[0.2em] text-[#9A948A]">
          Explore Collection
        </span>

      </div>

    </div>

  </div>
</div>



        </div>

      </div>
    </section>
  );
}