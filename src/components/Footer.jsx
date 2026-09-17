
import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

export default function Footer({ onOpenQuote }) {
  const collectionLinks = [
    "Italian & Indian Marble",
    "Architectural Granite",
    "Quartzite Slabs",
    "Onyx & Exotic Stones",
    "Flooring & Wall Cladding",
  ];

  const companyLinks = [
    { label: "About DelhiRocks", href: "#hero" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Featured Projects", href: "#projects" },
    { label: "FAQs", href: "#faqs" },
  ];

  return (
    <footer className="bg-[#0B0B0A]/90 text-[#f4f2ed]">

      <div className="border-b bg-[#F8F6F1] border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">

            <div className="max-w-3xl">


              <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1] text-black">
                The right stone
                <span className="block italic text-[#B99A63]">
                  changes everything.
                </span>
              </h2>
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
                py-4
                rounded-full
                bg-[#ddd5c1]
                text-[#1C1B18]
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.17em]
                transition-all
                duration-300
                hover:bg-[#B99A63]
                hover:text-white
                shrink-0
              "
            >
              Request a Quote
              <ArrowUpRight
                size={15}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

          </div>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_0.8fr_1.1fr] gap-12 lg:gap-16">

          <div>
            <a
              href="#hero"
              className="inline-block font-serif text-3xl sm:text-4xl tracking-[0.08em] text-[#F2EFE8]"
            >
              <img
                src="/Images/logo/delhi-rock-logo1.png"
                alt="DelhiRocks"
                className="h-7 sm:h-8 md:h-9 lg:h-10 w-auto object-contain"
              />
            </a>

            <div className="w-12 h-px bg-[#B99A63] my-6" />

            <p className="max-w-sm text-sm text-[#efeeea] font-light leading-7">
              Premium marble, granite, quartzite, onyx, and exotic natural
              stones curated for distinctive architectural spaces across
              Delhi NCR.
            </p>

            <div className="flex items-center gap-3 mt-7 text-[10px] uppercase tracking-[0.18em] text-[#efeeea]">
              <span>Delhi</span>
              <span className="w-1 h-1 rounded-full bg-[#B99A63]" />
              <span>Gurugram</span>
              <span className="w-1 h-1 rounded-full bg-[#B99A63]" />
              <span>Noida</span>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#F0EDE5] mb-6">
              Collections
            </h4>

            <ul className="space-y-3.5">
              {collectionLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#collections"
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-light
                      text-[#efeeea]
                      hover:text-[#B99A63]
                      transition-colors
                    "
                  >
                    <span>{item}</span>
                    <ArrowUpRight
                      size={12}
                      className="
                        opacity-0
                        -translate-x-1
                        transition-all
                        duration-300
                        group-hover:opacity-100
                        group-hover:translate-x-0
                      "
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#F0EDE5] mb-6">
              Company
            </h4>

            <ul className="space-y-3.5">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="
                      text-sm
                      font-light
                      text-[#efeeea]
                      hover:text-[#B99A63]
                      transition-colors
                    "
                  >
                    {item.label}
                  </a>
                </li>
              ))}

              <li>
                <button
                  onClick={onOpenQuote}
                  className="
                    text-sm
                    font-light
                    text-[#efeeea]
                    hover:text-[#B99A63]
                    transition-colors
                  "
                >
                  Request Quote
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#F0EDE5] mb-6">
              Get In Touch
            </h4>

            <div className="space-y-5">

              <div className="flex items-start gap-3.5">
                <MapPin
                  size={16}
                  strokeWidth={1.4}
                  className="text-[#B99A63] mt-0.5 shrink-0"
                />

                <div>
                  <p className="text-sm text-[#efeeea] font-light">
                  GURUGRAM, HARYANA
                  </p>
                  <p className="text-xs text-[#efeeea] mt-1 leading-5">
                   PLOT NUMBER 54(P), 52, 53(P) AND 58, SECTOR 72A SECTOR 72, GURUGRAM, HARYANA 122002
                  </p>
                </div>
              </div>

              <a
                href="tel:+919289207505"
                className="flex items-center gap-3.5 group"
              >
                <Phone
                  size={16}
                  strokeWidth={1.4}
                  className="text-[#B99A63] shrink-0"
                />

                <span className="text-sm font-light text-[#efeeea] group-hover:text-[#B99A63] transition-colors">
                  +91 92892 07505
                </span>
              </a>

              <a
                href="mailto:info@dimgroup.in"
                className="flex items-center gap-3.5 group"
              >
                <Mail
                  size={16}
                  strokeWidth={1.4}
                  className="text-[#B99A63] shrink-0"
                />

                <span className="text-sm font-light text-[#efeeea] group-hover:text-[#B99A63] transition-colors break-all">
                  info@dimgroup.in
                </span>
              </a>

              <button
                onClick={() => {
                  window.open(
                    "https://wa.me/+919289207505",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className="
                  inline-flex
                  items-center
                  gap-2.5
                  text-sm
                  font-light
                  text-[#efeeea]
                  hover:text-[#B99A63]
                  transition-colors
                  cursor-pointer
                "
              >
                <MessageCircle
                  size={16}
                  strokeWidth={1.4}
                  className="text-[#B99A63]"
                />
                WhatsApp Support
              </button>

            </div>
          </div>

        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-16 pt-7 border-t border-white/10">

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">

            <p className="text-[15px] sm:text-[15px] text-[#efeeea] font-light tracking-wide">
              © 2026 DelhiRocks. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-[15px] sm:text-[15px] text-[#efeeea]">
              <a
                href="#faqs"
                className="hover:text-[#B99A63] transition-colors"
              >
                Privacy Policy
              </a>

              <span className="w-px h-3 bg-white/10" />

              <a
                href="#faqs"
                className="hover:text-[#B99A63] transition-colors"
              >
                Terms & Conditions
              </a>
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}

