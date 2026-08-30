import { FaWhatsapp } from "react-icons/fa6";

//import React from 'react'
const WhatsappButton = () => {
  const phoneNumber = "2348031234567"; // <-- CLIENT'S NUMBER
  const message = "Hello DYP Plumbing Services, I need plumbing services from your website";
  
  return (
    <a 
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};
export default WhatsappButton;