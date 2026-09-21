import React from "react";
import { APPLICATIONS } from "../data/stoneData";
import { ArrowUpRight } from "lucide-react";

export default function Applications({ onOpenQuote }) {
  // Only show first 3 applications
  const visibleApplications = APPLICATIONS.slice(0, 3);

  return (
    <section id="applications" className="mt-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 sm:mb-16">

          <div className="max-w-2xl">

            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-px bg-[#B69A68]" />

              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9B8051]">
                Architectural Applications
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#25231F] leading-[1.05] tracking-tight">
              Designed for
              <span className="block text-[#8F7751]">
                Every Surface.
              </span>
            </h2>

          </div>

          <p className="text-sm sm:text-base text-[#77736C] font-light leading-7 max-w-md">
            From elegant flooring to statement walls and custom surfaces,
            discover how natural stone transforms everyday spaces.
          </p>

        </div>


        {/* Applications - ONLY 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">

          {visibleApplications.map((app, index) => (

            <article
              key={app.id}
              className="
                group
                relative
                bg-white
                border border-[#E1DBD0]
                rounded-xl
                overflow-hidden
                transition-all duration-500
                hover:-translate-y-1
                hover:border-[#C7B28A]
                hover:shadow-[0_20px_45px_rgba(55,48,37,0.10)]
              "
            >

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#E9E4DA]">

                <img
                  src={app.image}
                  alt={app.title}
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

                {/* Soft overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                {/* Number */}
                <span
                  className="
                    absolute
                    top-5
                    left-5
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


                {/* Arrow */}
                <div
                  className="
                    absolute
                    top-5
                    right-5
                    w-10
                    h-10
                    rounded-full
                    bg-white/90
                    backdrop-blur-sm
                    flex
                    items-center
                    justify-center
                    text-[#37342E]
                    opacity-0
                    translate-y-2
                    transition-all
                    duration-400
                    group-hover:opacity-100
                    group-hover:translate-y-0
                  "
                >
                  <ArrowUpRight size={17} strokeWidth={1.7} />
                </div>

              </div>


              {/* Content */}
              <div className="p-6 sm:p-7">

                <span className="text-[9px] uppercase tracking-[0.2em] text-[#A28B64]">
                  Application
                </span>

                <h3
                  className="
                    mt-2
                    font-serif
                    text-2xl
                    sm:text-[26px]
                    font-normal
                    text-[#292722]
                    leading-tight
                    transition-colors
                    duration-300
                    group-hover:text-[#9A7D4D]
                  "
                >
                  {app.title}
                </h3>

                <p className="mt-3 text-sm text-[#858078] font-light leading-6">
                  {app.description}
                </p>


                {/* CTA */}
                <div className="mt-6 pt-5 border-t border-[#E8E2D8]">

                  <button
                   onClick={onOpenQuote}
                    className="
                      group/btn
                      inline-flex
                      items-center
                      cursor-pointer
                      gap-2
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-[#5D4C32]
                      transition-colors
                      hover:text-[#A0804F]
                    "
                  >
                    Enquire Now

                    <ArrowUpRight
                      size={14}
                      className="
                        transition-transform
                        duration-300
                        group-hover/btn:translate-x-1
                        group-hover/btn:-translate-y-1
                      "
                    />
                  </button>

                </div>

              </div>

            </article>

          ))}

        </div>


        {/* Bottom CTA */}
        <div
          className="
            mt-12
            px-6
            sm:px-8
            mb-5
            py-7
            rounded-xl
            border border-[#DED7CA]
            bg-[#F7F4EE]
            flex
            flex-col
            md:flex-row
            md:items-center
            justify-between
            gap-6
          "
        >

          <div className="flex items-start gap-4">

            <div className="hidden sm:flex w-10 h-10 rounded-full bg-white border border-[#E1DBD0] items-center justify-center text-[#A0804F]">
              <ArrowUpRight size={17} />
            </div>

            <div>
              <h4 className="font-serif text-xl sm:text-2xl text-[#292722]">
                Have a custom requirement?
              </h4>

              <p className="text-xs sm:text-sm text-[#858078] font-light mt-1">
                Talk to our stone consultants about measurements,
                material suitability and project requirements.
              </p>
            </div>

          </div>


          <button
            onClick={onOpenQuote}
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-3
              cursor-pointer
              px-6
              py-3.5
              rounded-full
              bg-[#292722]
              text-white
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.16em]
              transition-all
              duration-300
              hover:bg-[#B69A68]
              hover:shadow-lg
              shrink-0
            "
          >
            Discuss Your Project

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