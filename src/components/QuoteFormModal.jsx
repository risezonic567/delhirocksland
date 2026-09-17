import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

export default function QuoteFormModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    projectType: 'Residential',
    location: 'Gurugram',
    stoneRequirement: 'Marble',
    approxArea: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4  backdrop-blur-md overflow-y-auto">
      <div className="relative  border border-[#2A2E35] w-full max-w-2xl rounded-sm p-6 sm:p-10 my-8 shadow-2xl">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#A0A5B1] hover:text-[#E5E1D8] p-2"
          aria-label="Close Form"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="text-center py-12">
            <CheckCircle2 size={48} className="text-[#C5A059] mx-auto mb-4" />
            <h3 className="font-serif text-2xl text-[#E5E1D8] mb-2">Quote Request Received</h3>
            <p className="text-xs text-[#A0A5B1]">Our Delhi NCR stone specialist will review your project requirements and contact you within 24 hours.</p>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#C5A059]">DIRECT ENQUIRY</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#E5E1D8] mt-1">Get Your Stone Quote</h3>
              <p className="text-xs text-[#A0A5B1] font-light mt-1">Fill out your project specifications for tailored rate cards and slab availability.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#A0A5B1] mb-1">Full Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Rajesh Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#0F1115] border border-[#2A2E35] px-3.5 py-2.5 text-xs text-[#E5E1D8] rounded-sm focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#A0A5B1] mb-1">Phone Number *</label>
                  <input
                    required
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#0F1115] border border-[#2A2E35] px-3.5 py-2.5 text-xs text-[#E5E1D8] rounded-sm focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#A0A5B1] mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0F1115] border border-[#2A2E35] px-3.5 py-2.5 text-xs text-[#E5E1D8] rounded-sm focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#A0A5B1] mb-1">Project Location</label>
                  <input
                    type="text"
                    placeholder="e.g. South Delhi / Gurugram"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-[#0F1115] border border-[#2A2E35] px-3.5 py-2.5 text-xs text-[#E5E1D8] rounded-sm focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#A0A5B1] mb-1">Project Type</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#0F1115] border border-[#2A2E35] px-3.5 py-2.5 text-xs text-[#E5E1D8] rounded-sm focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="Residential">Residential Villa / Floor</option>
                    <option value="Apartment">Apartment Interior</option>
                    <option value="Hotel">Hotel / Hospitality</option>
                    <option value="Office">Corporate Office</option>
                    <option value="Commercial">Retail / Commercial</option>
                    <option value="Other">Other Project</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#A0A5B1] mb-1">Stone Requirement</label>
                  <select
                    value={formData.stoneRequirement}
                    onChange={(e) => setFormData({ ...formData, stoneRequirement: e.target.value })}
                    className="w-full bg-[#0F1115] border border-[#2A2E35] px-3.5 py-2.5 text-xs text-[#E5E1D8] rounded-sm focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="Marble">Marble (Italian / Indian)</option>
                    <option value="Granite">Granite</option>
                    <option value="Quartzite">Quartzite</option>
                    <option value="Onyx">Onyx / Exotic Stone</option>
                    <option value="Sandstone">Sandstone</option>
                    <option value="Imported">Imported Stones</option>
                    <option value="Not Sure">Not Sure / Need Advice</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#A0A5B1] mb-1">Approximate Area (Sq. Ft.)</label>
                <input
                  type="text"
                  placeholder="e.g. 2,500 sq. ft."
                  value={formData.approxArea}
                  onChange={(e) => setFormData({ ...formData, approxArea: e.target.value })}
                  className="w-full bg-[#0F1115] border border-[#2A2E35] px-3.5 py-2.5 text-xs text-[#E5E1D8] rounded-sm focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#A0A5B1] mb-1">Message / Notes</label>
                <textarea
                  rows={3}
                  placeholder="Mention any specific finish preference or CAD design specifications..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#0F1115] border border-[#2A2E35] px-3.5 py-2.5 text-xs text-[#E5E1D8] rounded-sm focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#C5A059] hover:bg-[#B38F48] text-[#0F1115] text-xs font-semibold uppercase tracking-widest transition-all rounded-sm flex items-center justify-center gap-2"
                >
                  <Send size={14} /> Request My Quote
                </button>
                <p className="text-[10px] text-center text-[#A0A5B1] mt-3">We'll use your details only to respond to your specific enquiry.</p>
              </div>
            </form>
          </>
        )}

      </div>
    </div>
  );
}