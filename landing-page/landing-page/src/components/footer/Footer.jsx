import React from 'react';
import { Instagram, Email, Language } from '@mui/icons-material';
import './Footer.css';

function Footer() {
     return (
          <footer className="footer">
               <div className="footer-icons">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                         <Instagram />
                    </a>
                    <a href="mailto:example@email.com">
                         <Email />
                    </a>
                    <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
                         <Language />
                    </a>
               </div>
               <p className="footer-text">All Rights Reserved © 2025</p>
          </footer>
     );
}

export default Footer;
