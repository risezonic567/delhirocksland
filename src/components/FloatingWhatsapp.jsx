import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const phoneNumber = "9289207505";

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${phoneNumber}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <button
      onClick={handleWhatsApp}
      aria-label="Chat with us on WhatsApp"
      className="
        fixed
        right-5
        bottom-5
        sm:right-7
        sm:bottom-7
        z-50
        w-14
        h-14
        sm:w-16
        sm:h-16
        rounded-full
        bg-[#25D366]
        text-white
        flex
        cursor-pointer
        items-center
        justify-center
        shadow-[0_8px_30px_rgba(37,211,102,0.30)]
        transition-all
        duration-300
        hover:scale-110
        hover:shadow-[0_12px_35px_rgba(37,211,102,0.40)]
      "
    >
      <FaWhatsapp
        size={27}
        strokeWidth={2}
        fill="white"
        className="text-[#25D366] "
      />

      {/* Pulse */}
      <span
        className="
          absolute
          inset-0
          rounded-full
          border-2
          border-[#25D366]
          animate-ping
          opacity-20
          pointer-events-none
        "
      />
    </button>
  );
}

