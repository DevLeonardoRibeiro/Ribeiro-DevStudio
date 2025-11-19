import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../App.css';

const WhatsAppButton = ({ isPortuguese }) => {
  const openWhatsApp = () => {
    const phoneNumber = '5513996832036'; // Replace with actual phone number
    const message = isPortuguese ? 'Olá! Gostaria de saber mais sobre seus serviços.' : 'Hello! I would like to know more about your services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button className="whatsapp-button" onClick={openWhatsApp} aria-label={isPortuguese ? "Falar no WhatsApp" : "Chat on WhatsApp"}>
      <FaWhatsapp />
    </button>
  );
};

export default WhatsAppButton;
