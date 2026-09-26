import React from "react";
import { FEATURED_STONES } from "../data/stoneData";
import { ArrowUpRight } from "lucide-react";

export default function FeaturedStones({ onOpenQuote }) {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 sm:mb-16 gap-6">

          <div className="max-w-2xl">

            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-px bg-[#B69A68]" />

              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9B8051]">
                Product Showcase
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#25231F] leading-[1.05] tracking-tight">
              Featured
              <span className="block text-[#8F7751]">
                Natural Stones
              </span>
            </h2>

          </div>

          <p className="text-sm sm:text-base text-[#77736C] font-light leading-7 max-w-md">
            Some stones don't simply complete a space. They define it.
            Discover distinctive materials curated for refined interiors
            and architectural projects.
          </p>

        </div>


        {/* Stones Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">

          {FEATURED_STONES.map((stone, index) => (

            <article
              key={stone.id}
              className="
                group
                bg-white
                border border-[#E1DBD0]
                rounded-xl
                overflow-hidden
                transition-all duration-500
                hover:-translate-y-1
                hover:border-[#C7B28A]
                hover:shadow-[0_18px_45px_rgba(55,48,37,0.10)]
              "
            >

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#E9E4DA]">

                <img
                  src={stone.image}
                  alt={`${stone.name} natural stone`}
                  loading="lazy"
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.06]
                  "
                />

                {/* Soft Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-70" />

                {/* Number */}
                <span
                  className="
                    absolute
                    top-4
                    left-4
                    w-9
                    h-9
                    flex
                    items-center
                    justify-center
                    rounded-full
                    bg-white/90
                    backdrop-blur-sm
                    border border-white
                    text-[9px]
                    font-semibold
                    tracking-widest
                    text-[#66553A]
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>


                {/* Badge */}
                <span
                  className="
                    absolute
                    top-4
                    right-4
                    px-3
                    py-1.5
                    rounded-full
                    bg-white/90
                    backdrop-blur-sm
                    border border-white
                    text-[9px]
                    uppercase
                    font-semibold
                    tracking-[0.14em]
                    text-[#6D5939]
                  "
                >
                  {stone.badge}
                </span>


                {/* Hover Arrow */}
                <div
                  className="
                    absolute
                    bottom-4
                    right-4
                    w-10
                    h-10
                    rounded-full
                    bg-white/95
                    flex
                    items-center
                    justify-center
                    text-[#37342E]
                    opacity-0
                    translate-y-2
                    transition-all duration-400
                    group-hover:opacity-100
                    group-hover:translate-y-0
                  "
                >
                  <ArrowUpRight size={17} strokeWidth={1.7} />
                </div>

              </div>


              {/* Content */}
              <div className="p-6 sm:p-7">

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#A28B64] mb-2">
                      Featured Stone
                    </p>

                    <h3
                      className="
                        font-serif
                        text-2xl
                        sm:text-[26px]
                        font-normal
                        text-[#292722]
                        leading-tight
                        transition-colors duration-300
                        group-hover:text-[#9A7D4D]
                      "
                    >
                      {stone.name}
                    </h3>

                  </div>

                </div>


                {/* Stone Details */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-3 text-xs text-[#858078]">

                  <span>{stone.origin}</span>

                  <span className="w-1 h-1 rounded-full bg-[#C8C0B4]" />

                  <span>{stone.finish}</span>

                </div>


                {/* Bottom CTA */}
                {/* <div className="mt-6 pt-5 border-t border-[#E8E2D8] flex items-center justify-between gap-4"> */}

                  {/* <span className="text-[11px] text-[#99938A] font-light">
                    Available for enquiry
                  </span> */}

                  {/* <button
                    onClick={onOpenQuote}
                    className="
                      group/btn
                      inline-flex
                      items-center
                      gap-2
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-[#5D4C32]
                      transition-colors
                      hover:text-[#A0804F]
                    "
                  >
                    Request Quote

                    <ArrowUpRight
                      size={13}
                      className="
                        transition-transform duration-300
                        group-hover/btn:translate-x-0.5
                        group-hover/btn:-translate-y-0.5
                      "
                    />
                  </button> */}

               

              </div>

            </article>

          ))}

        </div>


        {/* Bottom Section CTA */}
        <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-5">

          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-[#C8B38D]" />

            <p className="text-xs text-[#858078]">
              Can't find the stone you're looking for?
            </p>
          </div>

          <button
          onClick={onOpenQuote}
            className="
              inline-flex
              items-center
              gap-2
              text-[13px]
              cursor-pointer
              uppercase
              tracking-[0.16em]
              font-semibold
              text-[#5D4C32]
              border-b
              border-[#B69A68]
              pb-1.5
              hover:text-[#9A7D4D]
              transition-colors
            "
          >
            Speak With Our Stone Expert
            <ArrowUpRight size={14} />
          </button>

        </div>

      </div>
    </section>
  );
}

