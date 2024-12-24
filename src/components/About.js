import React from 'react';
import './About.css'; // Import custom CSS

const About = () => {
  return (
    <div className="about-wrapper">
      <section id="about" className="p-5 bg-light text-center about-box">
        <h2>About PalmPay</h2>
        <p className="lead">
          PalmPay is a revolutionary platform designed to improve online payments
          through cutting-edge technology. With our innovative palm scanning and AI-powered solutions, we provide secure, seamless, and personalized financial experiences.
        </p>
        <p>
          Say goodbye to traditional payment methods. Embrace the future of payments where convenience meets security.
          PalmPay ensures fraud detection and better financial management, empowering you to make smarter choices.
        </p>
      </section>
    </div>
  );
};

export default About;
