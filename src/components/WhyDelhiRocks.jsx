import React from "react";
import {
  Layers,
  Eye,
  Award,
  SlidersHorizontal,
  MapPin,
  Headphones,
  ArrowUpRight,
} from "lucide-react";

export default function WhyDelhiRocks() {
  const usps = [
    {
      icon: Layers,
      number: "01",
      title: "Curated Stone Selection",
      desc: "Carefully hand-selected natural stones for refined residential, commercial, hospitality, and architectural spaces.",
    },
    {
      icon: Eye,
      number: "02",
      title: "Expert Guidance",
      desc: "Practical recommendations based on application, durability, design intent, maintenance, and project requirements.",
    },
    {
      icon: Award,
      number: "03",
      title: "Quality-Focused Sourcing",
      desc: "Every selection is evaluated for stone quality, character, consistency, finish, and suitability for the intended space.",
    },
    {
      icon: SlidersHorizontal,
      number: "04",
      title: "Custom Solutions",
      desc: "Cut-to-size and project-specific requirements can be coordinated around drawings, measurements, and design specifications.",
    },
    {
      icon: MapPin,
      number: "05",
      title: "Gurugram Focus",
      desc: "Dedicated logistical support for projects across Gurugram and surrounding areas.",
    },
    {
      icon: Headphones,
      number: "06",
      title: "End-to-End Support",
      desc: "From initial selection and slab inspection to quantity planning and delivery coordination, we simplify the process.",
    },
  ];

  return (
    <section
      id="why-us"
      className="relative py-24 sm:py-32 lg:py-40 bg-[#F8F6F1]/50 overflow-hidden"
    >

      <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full bg-[#E9E2D5]/40 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        <div className="grid lg:grid-cols-[1fr_0.75fr] gap-10 lg:gap-20 items-end mb-16 sm:mb-20">

          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-[#A68A5B]" />

              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#967B4E]">
                The DelhiRocks Difference
              </span>
            </div>

            <h2 className="font-serif text-[42px] sm:text-5xl lg:text-[68px] font-normal leading-[0.98] tracking-tight text-[#292722]">
              Selected with
              <span className="block italic text-[#967B4E]">
                intention.
              </span>
              Delivered with
              <span className="block">
                confidence.
              </span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="text-sm sm:text-base text-[#77736C] font-light leading-7 max-w-lg">
              Natural stone is more than a surface, It influences the
              character, longevity, and atmosphere of an entire space.
              DelhiRocks brings thoughtful selection and practical expertise
              to every project.
            </p>

            <div className="flex items-center gap-3 mt-7">
              <span className="w-8 h-px bg-[#C9B99D]" />
              <span className="text-[10px] uppercase tracking-[0.18em] text-[#8C806D]">
                Natural Stone · Architectural Surfaces
              </span>
            </div>
          </div>
        </div>

        {/* ================= USP GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#DED8CC]">
          {usps.map((usp, index) => {
            const Icon = usp.icon;

            return (
              <article
                key={usp.number}
                className="
                  group
                  relative
                  min-h-[300px]
                  p-7
                  sm:p-9
                  lg:p-10
                  bg-[#F8F6F1]
                  border-r
                  border-b
                  border-[#DED8CC]
                  transition-all
                  duration-500
                  hover:bg-white
                "
              >
                {/* Number */}
                <div className="flex items-start justify-between mb-12">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-[#A18A64]">
                    {usp.number}
                  </span>

                  <div
                    className="
                      w-11
                      h-11
                      rounded-full
                      border
                      border-[#D8D0C1]
                      flex
                      items-center
                      justify-center
                      text-[#8E7956]
                      transition-all
                      duration-500
                      group-hover:bg-[#292722]
                      group-hover:text-white
                      group-hover:border-[#292722]
                    "
                  >
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3
                    className="
                      font-serif
                      text-[24px]
                      sm:text-[26px]
                      font-normal
                      leading-tight
                      text-[#2D2A25]
                      transition-colors
                      duration-300
                      group-hover:text-[#92764A]
                    "
                  >
                    {usp.title}
                  </h3>

                  <p className="mt-4 text-[13px] text-[#77736C] font-light leading-6 max-w-sm">
                    {usp.desc}
                  </p>
                </div>

                {/* Bottom arrow */}
                <div
                  className="
                    absolute
                    bottom-8
                    right-8
                    opacity-0
                    translate-y-2
                    transition-all
                    duration-400
                    group-hover:opacity-100
                    group-hover:translate-y-0
                  "
                >
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                    className="text-[#A0804F]"
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* ================= BOTTOM STATEMENT ================= */}
        <div className="mt-16 sm:mt-20 flex flex-col md:flex-row md:items-center justify-between gap-8">

          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-[#292722] text-white flex items-center justify-center shrink-0">
              <Layers size={21} strokeWidth={1.4} />
            </div>

            <div>
              <p className="font-serif text-xl sm:text-2xl text-[#292722]">
                Stone selected for your space.
              </p>

              <p className="text-xs sm:text-sm text-[#858078] mt-1 font-light">
                Tell us about your project and let our specialists guide you.
              </p>
            </div>
          </div>

          <a
            href="tel:+919289207505"
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-3
              px-7
              py-3.5
              rounded-full
              bg-[#292722]
              text-white
              text-[13px]
              font-semibold
              uppercase
              tracking-[0.18em]
              transition-all
              duration-300
              hover:bg-[#A0804F]
              hover:shadow-[0_12px_30px_rgba(65,55,40,0.15)]
              shrink-0
            "
          >
            Talk to a Stone Expert

            <ArrowUpRight
              size={15}
              strokeWidth={1.6}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </a>
        </div>

      </div>
    </section>
  );
}

