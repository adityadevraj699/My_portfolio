/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaSun, FaMoon, FaTimes, FaBars } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-brand">Aditya Kumar</div>
      </div>
      <div className={`navbar-nav ${isOpen ? 'show' : ''}`}>
        <ul className="nav-links">
          <li><Link className="nav-link" to="/">Home</Link></li>
          <li><Link className="nav-link" to="/about">About</Link></li>
          <li><Link className="nav-link" to="/skills">Skills</Link></li>
          <li><Link className="nav-link" to="/portfolio">Portfolio</Link></li>
          <li><Link className="nav-link" to="/contact">Contact</Link></li>
        </ul>
        <button className="theme-toggle-item" onClick={toggleTheme}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
      <button className="navbar-toggler" onClick={handleToggle}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

Navbar.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};
<script src="Script.js"></script>
export default Navbar;
