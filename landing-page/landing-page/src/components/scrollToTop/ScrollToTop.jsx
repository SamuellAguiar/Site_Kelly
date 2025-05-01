// ScrollToTop.jsx
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './ScrollToTop.css';

function ScrollToTop() {
     const [visible, setVisible] = useState(false);

     const toggleVisibility = () => {
          if (window.scrollY > 300) {
               setVisible(true);
          } else {
               setVisible(false);
          }
     };

     const scrollToTop = () => {
          window.scrollTo({
               top: 0,
               behavior: 'smooth',
          });
     };

     useEffect(() => {
          window.addEventListener('scroll', toggleVisibility);
          return () => window.removeEventListener('scroll', toggleVisibility);
     }, []);

     return (
          visible && (
               <button className="scroll-to-top" onClick={scrollToTop}>
                    <FaArrowUp size={10} />
               </button>
          )
     );
}

export default ScrollToTop;
