import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './ScrollToTop.css';

function ScrollToTop() {
     // Substitua o número abaixo pelo seu número do WhatsApp com DDI e DDD, exemplo: 5511999999999
     const whatsappNumber = '+5532984680550';
     const whatsappMessage = encodeURIComponent('Olá, tenho interesse na inscrição do curso e gostaria de mais informações. Obrigado!');
     const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

     return (
          <a
               className="scroll-to-top whatsapp-btn"
               href={whatsappLink}
               target="_blank"
               rel="noopener noreferrer"
               aria-label="Fale comigo no WhatsApp"
          >
               <FaWhatsapp size={28} />
          </a>
     );
}

export default ScrollToTop;
