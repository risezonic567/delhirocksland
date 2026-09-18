import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  X,
  Send,
  CheckCircle2,
  Loader2,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function QuoteFormModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    projectType: "Residential",
    location: "Gurugram",
    stoneRequirement: "Marble",
    approxArea: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          projectType: formData.projectType,
          location: formData.location,
          stoneRequirement: formData.stoneRequirement,
          approxArea: formData.approxArea,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY"
      );

      setSubmitted(true);

      setFormData({
        fullName: "",
        phone: "",
        email: "",
        projectType: "Residential",
        location: "Gurugram",
        stoneRequirement: "Marble",
        approxArea: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3500);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError(
        "Something went wrong while sending your enquiry. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div className="relative w-full max-w-xl my-4 bg-[#b1b5bd] border border-[#2A2E35] rounded-lg shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()} >

        <div className="h-[2px] w-full bg-[#C5A059]" />

        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 z-10 w-9 h-9 flex items-center justify-center rounded-full border border-[#2A2E35] text-[#38393c] hover:text-white hover:border-[#C5A059] transition-all"
          aria-label="Close Form"
        >
          <X size={18} />
        </button>

        {submitted ? (<div className="px-6 py-14 text-center"> <CheckCircle2 size={42} className="text-[#C5A059] mx-auto mb-4" /> <h3 className="font-serif text-2xl text-[#E5E1D8] mb-2"> Quote Request Received </h3>
          <p className="text-xs text-[#A0A5B1]"> Our Delhi NCR stone specialist will contact you within 24 hours. </p> </div>) :
          (<>

            <div className="px-6 sm:px-7 pt-6 pb-4 border-b border-[#2A2E35]"> <span className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[#c09340]"> DIRECT ENQUIRY </span> <h3 className="font-serif text-2xl sm:text-3xl text-[#E5E1D8] mt-1"> Get Your Stone Quote </h3> <p className="text-[11px] text-[#65666a] mt-1"> Share your project details and we'll get back to you shortly. </p>

            </div>

            <form onSubmit={handleSubmit} className="px-6 sm:px-7 text-[10px] py-5 space-y-3" >

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <FormField label="Full Name" labelClassName="text-black" required> <input required name="fullName" type="text" placeholder="Your Name " value={formData.fullName} onChange={handleChange} className="input-style" /> </FormField>

                <FormField label="Phone Number" labelClassName="text-black" required> <input required name="phone" type="tel" placeholder="+91 98765 *****" value={formData.phone} onChange={handleChange} className="input-style" />
                </FormField> </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <FormField label="Email" labelClassName="text-black"> <input name="email" type="email" placeholder="@gmail.com" value={formData.email} onChange={handleChange} className="input-style" />

                </FormField>
                <FormField label="Project Location" labelClassName="text-black"> <input name="location" type="text" placeholder="South Delhi / Gurugram" value={formData.location} onChange={handleChange} className="input-style" /> </FormField>
              </div>

       
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3"> <FormField label="Project Type" labelClassName="text-black"> <select name="projectType" value={formData.projectType} onChange={handleChange} className="input-style" > <option value="Residential">Residential</option> <option value="Apartment">Apartment</option> <option value="Hotel">Hotel / Hospitality</option> <option value="Office">Corporate Office</option> <option value="Commercial">Commercial</option> <option value="Other">Other</option> </select> </FormField>

                <FormField label="Stone Requirement" labelClassName="text-black"> <select name="stoneRequirement" value={formData.stoneRequirement} onChange={handleChange} className="input-style" > <option value="Marble">Marble</option> <option value="Granite">Granite</option> <option value="Quartzite">Quartzite</option> <option value="Onyx">Onyx / Exotic</option> <option value="Sandstone">Sandstone</option> <option value="Imported">Imported Stone</option> <option value="Not Sure">Need Advice</option> </select>

                </FormField>

              </div>
              
               <FormField label="Approx. Area (Sq. Ft.)" labelClassName="text-black"> <input name="approxArea" type="text" placeholder="e.g. 2,500 sq. ft." value={formData.approxArea} onChange={handleChange} className="input-style" />

              </FormField>

              <FormField label="Message / Notes" labelClassName="text-black"> <textarea name="message" rows={2} placeholder="Tell us your stone, finish or design requirements..." value={formData.message} onChange={handleChange} className="input-style resize-none" /> </FormField>

              {error && (<p className="text-[10px] text-red-400"> {error} </p>)} {/* Submit */} <button type="submit" disabled={loading} className="w-full py-3 bg-[#C5A059] hover:bg-[#B38F48] disabled:opacity-60 text-[#0F1115] text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm transition-all flex items-center justify-center gap-2" > {loading ? (<> <Loader2 size={14} className="animate-spin" /> Sending... </>) : (<> <Send size={13} /> Request My Quote </>)} </button> <p className="text-[9px] text-center text-[#666B75]"> Your details are used only to respond to your enquiry. </p> </form> </>)}
      </div>

      <style>{` .input-style { width: 100%; background: #b1b5bd; border: 1px solid #2A2E35; border-radius: 4px; padding: 9px 11px; font-size: 14px; color: black; outline: none; transition: all 0.2s ease; } .input-style::placeholder { color: black;  } .input-style:focus { border-color: #C5A059; } .input-style option { background: #111318; color: #E5E1D8; text-color:black; }   `}</style>
    </div>
  );
}

/* Reusable Form Field */
function FormField({ label, required, children, labelClassName = "" }) {
  return (
    <div>
      <label
        className={`block text-[10px] font-semibold uppercase tracking-[0.15em] mb-2 ${labelClassName || "text-[#9297A3]"}`}
      >
        {label} {required && <span className="text-[#C5A059]">*</span>}
      </label>

      {children}
    </div>

  );
}

