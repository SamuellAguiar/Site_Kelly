import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './ScrollToTop.css';

function ScrollToTop() {
     const [visible, setVisible] = useState(false);

     const toggleVisibility = () => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
          if (scrollTop > 100) {
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
          const handleScroll = () => {
               toggleVisibility();
          };
          
          window.addEventListener('scroll', handleScroll, { passive: true });
          
          setTimeout(() => {
               toggleVisibility();
          }, 100);
          
          return () => {
               window.removeEventListener('scroll', handleScroll);
          };
     }, []);

     return (
          visible && (
               <button className="scroll-to-top" onClick={scrollToTop}>
                    <FaArrowUp size={20} />
               </button>
          )
     );
}

export default ScrollToTop;
