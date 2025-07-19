import React from "react";
import './Footer.css'
function  Footer(){


return  <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>Company</h3>
          <p>YourCompany is a modern web development agency building fast, responsive websites.</p>
        </div>

        <div className="footer-section">
          <h3>Menu</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#career">Careers</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>Email: info@yourcompany.com</li>
            <li>Phone: +91-1234567890</li>
            <li>Address: New Delhi, India</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
      </div>
    </footer>

}export default Footer;