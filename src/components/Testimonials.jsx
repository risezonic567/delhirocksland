import React, { useState } from "react";
import { TESTIMONIALS } from "../data/stoneData";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  ArrowUpRight,
} from "lucide-react";

export default function Testimonials({onOpenQuote}) {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent(
      current === 0 ? TESTIMONIALS.length - 1 : current - 1
    );

  const next = () =>
    setCurrent(
      current === TESTIMONIALS.length - 1 ? 0 : current + 1
    );

  const testimonial = TESTIMONIALS[current];

  return (
    <section
      id="testimonials"
      className="relative py-24 sm:py-32 lg:py-40 bg-[#F8F6F1] overflow-hidden"
    >
  
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#E9E2D5]/50 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

     
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-16">

          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-[#A68A5B]" />

              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#967B4E]">
                Client Experiences
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1] tracking-tight text-[#292722]">
              Spaces made
              <span className="block italic text-[#967B4E]">
                memorable.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#77736C] font-light leading-7">
            From private residences to commercial spaces, our clients
            choose DelhiRocks for thoughtful stone selection and dependable
            project support.
          </p>
        </div>

        <div className="relative border border-[#DDD6CA] bg-white rounded-2xl overflow-hidden">

          <div className="grid lg:grid-cols-[0.8fr_1.7fr]">

            <div className="relative bg-[#F2EEE6] p-8 sm:p-12 lg:p-14 flex flex-col justify-between min-h-[330px]">

              <div>
                <div className="w-14 h-14 rounded-full bg-white border border-[#DDD6CA] flex items-center justify-center text-[#A0804F]">
                  <Quote size={24} strokeWidth={1.4} />
                </div>

                <p className="mt-8 text-[10px] uppercase tracking-[0.22em] text-[#9B8051]">
                  Client Review
                </p>
              </div>

              <div className="mt-12 lg:mt-0">
                <span className="font-mono text-[11px] tracking-[0.15em] text-[#918A7E]">
                  {String(current + 1).padStart(2, "0")}{" "}
                  /{" "}
                  {String(TESTIMONIALS.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            <div className="p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-center">

              <blockquote
                key={current}
                className="font-serif text-[23px] sm:text-3xl lg:text-[38px] font-normal leading-[1.35] text-[#302D27]"
              >
                “{testimonial.quote}”
              </blockquote>

              <div className="mt-10 sm:mt-12 pt-7 border-t border-[#E6E0D6] flex flex-col sm:flex-row sm:items-end justify-between gap-6">

                <div>
                  <h4 className="font-serif text-xl sm:text-2xl text-[#292722]">
                    {testimonial.name}
                  </h4>

                  <p className="mt-2 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#967B4E]">
                    {testimonial.role}
                    <span className="mx-2 text-[#C5B99F]">•</span>
                    {testimonial.location}
                  </p>
                </div>

                <div className="flex items-center gap-2">

                  <button
                    onClick={prev}
                    aria-label="Previous Testimonial"
                    className="
                      w-11
                      h-11
                      rounded-full
                      border
                      border-[#D8D0C2]
                      flex
                      items-center
                      justify-center
                      text-[#5F5A51]
                      transition-all
                      duration-300
                      hover:bg-[#292722]
                      hover:border-[#292722]
                      hover:text-white
                    "
                  >
                    <ChevronLeft size={18} strokeWidth={1.5} />
                  </button>

                  <button
                    onClick={next}
                    aria-label="Next Testimonial"
                    className="
                      w-11
                      h-11
                      rounded-full
                      border
                      border-[#D8D0C2]
                      flex
                      items-center
                      justify-center
                      text-[#5F5A51]
                      transition-all
                      duration-300
                      hover:bg-[#292722]
                      hover:border-[#292722]
                      hover:text-white
                    "
                  >
                    <ChevronRight size={18} strokeWidth={1.5} />
                  </button>

                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5">

          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-[#C8B99E]" />

            <span className="text-[10px] uppercase tracking-[0.18em] text-[#8B8376]">
              Trusted by homeowners, designers & project teams
            </span>
          </div>

          <button
           onClick={onOpenQuote}
            className="
              group
              inline-flex
              items-center
              gap-2
              text-[13px]
              font-semibold
              uppercase
              tracking-[0.17em]
              text-[#5D4C32]
              hover:text-[#A0804F]
              transition-colors
            "
          >
            Explore Our Collections

            <ArrowUpRight
              size={14}
              strokeWidth={1.6}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </button>

        </div>

      </div>
    </section>
  );
}

