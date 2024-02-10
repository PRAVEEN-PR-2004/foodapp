import React from 'react';
import "./Footer.css";

import instagram_icon from "../assets/instagram_icon.png";
import pintester_icon from "../assets/pintester_icon.png";
import whatsapp_icon from "../assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <p>I <i className="bi bi-heart-fill"></i> BIRIYANI</p>
      </div>
      <ul className="footer-link">
        <li><a href="#home">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#musttry">Must try</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons">
          <img src={instagram_icon} alt="Instagram" />
        </div>
        <div className="footer-icons">
          <img src={pintester_icon} alt="Pinterest" />
        </div>
        <div className="footer-icons">
          <img src={whatsapp_icon} alt="WhatsApp" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
