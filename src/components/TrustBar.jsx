import React from 'react';
import { ShieldCheck, Gem, MapPin, Layers } from 'lucide-react';

export default function TrustBar() {
  const stats = [
    { icon: Gem, title: "Curated Stone Collection", desc: "100+ Indian & Imported Slabs" },
    { icon: MapPin, title: "Delhi NCR Coverage", desc: "Dedicated Regional Delivery" },
    { icon: Layers, title: "Custom Solutions", desc: "Cut-to-size Architectural Cuts" },
    { icon: ShieldCheck, title: "Project Support", desc: "Technical & Quantity Planning" },
  ];

  return (
    <section className="bg-[#14171D] border-y border-[#2A2E35] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="flex items-center gap-4">
                <div className="p-3 bg-[#0F1115] border border-[#2A2E35] rounded-sm text-[#C5A059] shrink-0">
                  <IconComponent size={20} />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#E5E1D8]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#A0A5B1] font-light mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}