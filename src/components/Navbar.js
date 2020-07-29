import React, { useState } from 'react';
import logo from '../images/logo.svg';
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <img src={logo} alt="Shortly Logo" className="header__logo" />
      <nav className="navbar">
        <ul className="navbar__list ml-5">
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              Features
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              Pricing
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              Resources
            </a>
          </li>
        </ul>
        <ul className="navbar__list ml-auto">
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              Login
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="btn btn--primary">
              Sign Up
            </a>
          </li>
        </ul>
        <button
          className="navbar__menu__toggler ml-auto mr-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <i className="las la-times"></i>
          ) : (
            <i className="las la-bars"></i>
          )}
        </button>

        {menuOpen && <ResponsiveMenu />}
      </nav>
    </header>
  );
};

export default Navbar;
