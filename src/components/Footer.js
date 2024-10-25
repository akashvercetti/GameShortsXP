import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/contact-us" className="footer-link">Contact Us</a>
        <span> | </span> {/* Separator */}
        <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
