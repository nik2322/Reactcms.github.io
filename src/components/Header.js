import React from 'react';
import './Header.css'

function Header() {
  return <div className="header">
      <a href="#default" className="logo">CompanyLogo</a>
      <input type="checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>

      <div className="header-right">
        <a className="active" href="#home">Home</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
}

export default Header;
