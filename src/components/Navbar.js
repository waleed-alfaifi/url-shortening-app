import React from 'react';
import logo from '../images/logo.svg';

const Navbar = () => {
  return (
    <div>
      <img src={logo} alt="Shortly Logo" />
      <nav>
        <ul className="main-navigation">
          <li className="main-navigation__item">Features</li>
          <li className="main-navigation__item">Pricing</li>
          <li className="main-navigation__item">Resources</li>
          <a href="#" className="btn">
            Login
          </a>
          <a href="#" className="btn btn--primary">
            Sign Up
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
