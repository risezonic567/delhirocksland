
import React, { useState } from "react";
import { FAQS } from "../data/stoneData";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

export default function FAQSection({onOpenQuote}) {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section
      id="faqs"
      className="relative  bg-[#F8F6F1] overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute -left-40 top-20 w-80 h-80 rounded-full bg-[#EAE3D7]/50 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ================= HEADER ================= */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-24 items-end mb-14 sm:mb-20">

          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-[#A68A5B]" />

              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#967B4E]">
                Frequently Asked Questions
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[62px] font-normal leading-[1] tracking-tight text-[#292722]">
              Clear answers.
              <span className="block italic text-[#967B4E]">
                Better decisions.
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="text-sm sm:text-base text-[#77736C] font-light leading-7 max-w-lg">
              Choosing natural stone is an important part of any project.
              Find answers to common questions about our collections,
              finishes, applications, sourcing, and project support.
            </p>
          </div>

        </div>

        {/* ================= FAQ ================= */}
        <div className="border-t border-[#DCD5C9]">

          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className={`
                  border-b border-[#DCD5C9]
                  transition-colors
                  duration-300
                  ${isOpen ? "bg-white" : "bg-transparent"}
                `}
              >
                <button
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="
                    w-full
                    px-2
                    sm:px-5
                    py-6
                    sm:py-7
                    text-left
                    flex
                    items-center
                    gap-5
                    sm:gap-8
                    focus:outline-none
                  "
                >

                  {/* Number */}
                  <span
                    className={`
                      hidden
                      sm:block
                      w-10
                      shrink-0
                      text-[10px]
                      font-mono
                      tracking-[0.15em]
                      transition-colors
                      duration-300
                      ${isOpen ? "text-[#A0804F]" : "text-[#AAA398]"}
                    `}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  {/* Question */}
                  <span
                    className={`
                      flex-1
                      font-serif
                      text-lg
                      sm:text-xl
                      lg:text-[23px]
                      font-normal
                      leading-tight
                      transition-colors
                      duration-300
                      ${
                        isOpen
                          ? "text-[#8F744A]"
                          : "text-[#302D28]"
                      }
                    `}
                  >
                    {faq.question}
                  </span>

                  {/* Icon */}
                  <span
                    className={`
                      w-10
                      h-10
                      sm:w-11
                      sm:h-11
                      rounded-full
                      border
                      flex
                      items-center
                      justify-center
                      shrink-0
                      transition-all
                      duration-300
                      ${
                        isOpen
                          ? "bg-[#292722] border-[#292722] text-white"
                          : "border-[#D5CEC1] text-[#6D665C]"
                      }
                    `}
                  >
                    {isOpen ? (
                      <Minus size={17} strokeWidth={1.5} />
                    ) : (
                      <Plus size={17} strokeWidth={1.5} />
                    )}
                  </span>

                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="px-2 sm:px-5 pb-7 sm:pb-8">
                    <div className="sm:ml-[72px] max-w-3xl border-l border-[#CBB99A] pl-5 sm:pl-6">
                      <p className="text-sm text-[#77736C] font-light leading-7">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}

              </div>
            );
          })}

        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="mt-12 sm:mt-16 p-7 sm:p-9 bg-[#292722] rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-7">

          <div>
            <span className="text-[9px] uppercase tracking-[0.22em] text-[#B99A63]">
              Still Have Questions?
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#F2EFE8] mt-2">
              Let's discuss your stone requirement.
            </h3>

            <p className="text-xs sm:text-sm text-[#9B978F] font-light mt-2">
              Our team can help you shortlist materials for your project.
            </p>
          </div>

          <button
          onClick={onOpenQuote}
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-3
              px-6
              py-3.5
              cursor-pointer
              rounded-full
              bg-[#F1EEE7]
              text-[#292722]
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.17em]
              hover:bg-[#B99A63]
              hover:text-white
              transition-all
              duration-300
              shrink-0
            "
          >
            Talk to an Expert

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

