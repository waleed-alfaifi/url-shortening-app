import React from 'react';
import logo from '../images/logo.svg';

const Navbar = () => {
  return (
    <header className="container header">
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
        <ul className="navbar__list ml-auto mr-lg-4">
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
      </nav>
    </header>
  );
};

export default Navbar;
