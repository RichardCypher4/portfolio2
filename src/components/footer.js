// Footer.jsx
import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="copyright">
          <span>2024</span>
          <span className="brand">Oladayorichard® 2025</span>
        </div>
        
        <div className="social-links">
          <a href="https://github.com/RichardCypher4" target="_blank" rel="noopener noreferrer">
            <svg className="icon github-icon" />
          </a>
          <a href="https://x.com/richardc85973?s=21" target="_blank" rel="noopener noreferrer">
            <svg className="icon x-icon"  />
          </a>
          <a href="mailto:oladayorichard1@gmail.com">
            <svg className="icon email-icon"  />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;