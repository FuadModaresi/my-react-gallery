import React from 'react';
// import './Footer.css'; // Import the CSS file for styling


const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <a href="https://facebook.com" className="social-icon">
          <img src="../images/facebook logo_icon.png" alt="Facebook" />
        </a>
        <a href="https://twitter.com" className="social-icon">
          <img src="../images/twitter logo_icon.png" alt="Twitter" />
        </a>
        <a href="https://instagram.com/f_fuad_d?igshid=NGExMml2YTkyZg==" className="social-icon">
          <img src="../images/instagram logo_icon.png" alt="Instagram" />
        </a>
      </div>
      <div className="links">
        <a href="/about" className="link">About</a>
        <a href="/contact" className="link">Contact</a>
        <a href="/privacy" className="link">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
