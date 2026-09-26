import React from "react";
import { COLLECTIONS } from "../data/stoneData";
import { ArrowUpRight } from "lucide-react";

export default function Collections({ onOpenQuote }) {
  return (
    <section id="collections" className="mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl mb-14 sm:mb-16">

          <div className="flex items-center gap-3 mb-4">
            <span className="w-9 h-px bg-[#B69A68]" />

            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9B8051]">
              Curated Categories
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#25231F] leading-[1.05] tracking-tight">
            Explore Our
            <span className="block text-[#8F7751]">
              Stone Collections
            </span>
          </h2>

          <p className="mt-5 text-sm sm:text-base text-[#77736C] font-light leading-7 max-w-2xl">
            Natural materials chosen with care for architectural spaces
            that deserve more than ordinary surfaces.
          </p>

        </div>


        {/* Collection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">

          {COLLECTIONS.map((item, index) => (

            <div
              key={item.id}
              onClick={onOpenQuote}
              className="
                group
                relative
                h-[420px]
                sm:h-[440px]
                overflow-hidden
                rounded-xl
                cursor-pointer
                bg-[#E8E3DA]
                border border-[#DDD6C9]
                transition-all duration-500
                hover:-translate-y-1
                hover:shadow-[0_20px_45px_rgba(50,45,35,0.14)]
              "
            >

              {/* Image */}
              <div className="absolute inset-0 overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-1000
                    ease-out
                    group-hover:scale-[1.06]
                  "
                />

                {/* Light Editorial Overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-[#171613]/75
                    via-[#171613]/15
                    to-transparent
                    opacity-90
                    transition-opacity
                    duration-500
                    group-hover:from-[#171613]/80
                  "
                />

              </div>


              {/* Top Content */}
              <div className="relative z-10 flex items-start justify-between p-5 sm:p-6">

                {/* Number */}
                <span
                  className="
                    inline-flex
                    items-center
                    justify-center
                    min-w-[42px]
                    h-8
                    px-2.5
                    rounded-full
                    bg-white/90
                    backdrop-blur-sm
                    border border-white/60
                    text-[10px]
                    font-semibold
                    tracking-[0.15em]
                    text-[#62533B]
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>


                {/* Arrow */}
                <span
                  className="
                    flex
                    items-center
                    justify-center
                    w-10
                    h-10
                    rounded-full
                    bg-white/90
                    backdrop-blur-sm
                    border border-white/70
                    text-[#38352F]
                    transition-all
                    duration-400
                    group-hover:bg-[#B69A68]
                    group-hover:text-white
                    group-hover:border-[#B69A68]
                    group-hover:rotate-45
                  "
                >
                  <ArrowUpRight size={17} strokeWidth={1.7} />
                </span>

              </div>


              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-7">

                {/* Small Label */}
                <div className="flex items-center gap-2 mb-2">

                  <span className="w-5 h-px bg-[#D4B77F]" />

                  <span className="text-[9px] uppercase tracking-[0.2em] text-white/70">
                    Natural Stone
                  </span>

                </div>


                {/* Title */}
                <h3
                  className="
                    font-serif
                    text-2xl
                    sm:text-3xl
                    font-normal
                    text-white
                    leading-tight
                    transition-transform
                    duration-500
                    group-hover:-translate-y-1
                  "
                >
                  {item.title}
                </h3>


                {/* Description */}
                <p
                  className="
                    mt-2
                    max-w-sm
                    text-xs
                    sm:text-sm
                    text-white/75
                    font-light
                    leading-relaxed
                    line-clamp-2
                  "
                >
                  {item.description}
                </p>


                {/* CTA */}
                <div className="mt-4 flex items-center gap-2">

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-[#E0C58F]
                    "
                  >
                    {item.cta}
                  </span>

                  <ArrowUpRight
                    size={13}
                    className="
                      text-[#E0C58F]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />

                </div>

              </div>

            </div>

          ))}

        </div>


        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border-t border-[#E2DCD1] pt-7">

          <p className="text-sm text-[#77736C] font-light">
            Looking for something specific?
            <span className="text-[#4C4943] ml-1">
              Let our stone experts help you find it.
            </span>
          </p>

          <button
            onClick={onOpenQuote}
            className="
              group
              inline-flex
              items-center
              gap-2
              cursor-pointer
              text-[13px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-[#514530]
              border-b
              border-[#B69A68]
              pb-1.5
              transition-all
              hover:text-[#9B8051]
            "
          >
            Talk to a Stone Expert

            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>

        </div>

      </div>
    </section>
  );
}

