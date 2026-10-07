import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const phoneNumber = '+237 696127469';

  const message =
    'Bonjour je souhaite avoir plus d informations.';

  const whatsappurl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="fixed bottom-10 left-6 z-50">
  {/* Première onde */}
  <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30 [animation-duration:5s]" />

  {/* Deuxième onde : démarre 1 seconde plus tard */}
  <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 [animation-duration:5s] [animation-delay:1s]" />

  {/* Bouton */}
  <a
    href={whatsappurl}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Nous contacter par WhatsApp"
     className="relative flex gap-1 h-13 w-40 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600"
   
  >  <FaWhatsapp size={36} /> 
Ecrivez moi
  </a>
</div>
  );
}