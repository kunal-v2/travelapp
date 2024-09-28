import React, { useState } from "react";
import '../component/Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="header-content">
        <div className="logo">
          <img src={require('../assets/images/abc.png')} alt="logo" />
        </div>
        <div className="CompanyName">
          <h1>Mountaineers</h1>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
      </div>

      <div className={`menu-container ${isMenuOpen ? 'show-menu' : ''}`}>
        <ul className="menu">
          <li><b><a href="#Home">Home</a></b></li>
          <li><b><a href="#Ticket">Ticket</a></b></li>
          <li><b><a href="#Explore">Explore</a></b></li>
          <li><b><a href="#Activity">Activity</a></b></li>
          <li><b><Link to="/contact">Contact</Link></b></li>
        </ul>
        <button className="login-button"><b>Login</b></button>
      </div>
    </nav>
  );
}

export default Header;
