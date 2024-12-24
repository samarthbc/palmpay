import React from 'react';
import './Footer.css'; // Import custom CSS for styling

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white text-center py-3" style={{height:"100px"}}>
      <div className="container">
        <p className="mb-1">
          &copy; {new Date().getFullYear()} PalmPay. All Rights Reserved.
        </p>
        <p className="footer-links">
          <a href="#about" className="text-decoration-none text-white mx-2">
            About
          </a>
          <a href="#features" className="text-decoration-none text-white mx-2">
            Features
          </a>
          <a
            href="#contact"
            className="text-decoration-none text-white mx-2"
          >
            Contact
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
