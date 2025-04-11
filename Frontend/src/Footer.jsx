import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>Contact us</h2>
        <p>Providing healthcare solutions with ease.</p>
        <a href="/contact" className="contact-btn">Get in Touch →</a>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-section">
          <h3>OHMS</h3>
          <p>Bringing smart hospital management to your fingertips.</p>
        </div>
        
        <div className="footer-section">
          <h3>Head Office</h3>
          <p>Email: support@ohms.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>123 Health Street, Hyderabad, India</p>
          <a href="https://maps.google.com">See on Map →</a>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="/about">About Us</a>  
          <a href="/privacy">Privacy Policy</a>
        </div>
        
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>
            <a href="#">Facebook</a> | 
            <a href="#">Twitter</a> | 
            <a href="#">Instagram</a> | 
            <a href="#">LinkedIn</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
