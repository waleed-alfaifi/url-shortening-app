import React from 'react';

const ResponsiveMenu = () => {
  return (
    <>
      <div className="navbar__menu">
        <ul className="navbar__menu__list navbar__menu__list--1">
          <li className="navbar__menu__item ">
            <a href="#">Features</a>
          </li>
          <li className="navbar__menu__item">
            <a href="#">Pricing</a>
          </li>
          <li className="navbar__menu__item">
            <a href="#">Resources</a>
          </li>
        </ul>

        <ul className="navbar__menu__list navbar__menu__list--2">
          <li className="navbar__menu__item">
            <a href="#">Login</a>
          </li>
          <li className="navbar__menu__item">
            <a href="#" className="btn btn--primary w-100">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ResponsiveMenu;
