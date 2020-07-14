import React from 'react';
import logo from '../images/logo-white.svg';
import FooterList from '../components/FooterList';

// Social icons
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import pinterest from '../images/icon-pinterest.svg';
import instagram from '../images/icon-instagram.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Shortly" className="footer__logo" />
      <FooterList
        heading="Features"
        items={['Link Shortening', 'Branded Links', 'Analytics']}
        order="1"
      />
      <FooterList
        heading="Resources"
        items={['Blog', 'Developers', 'Support']}
        order="2"
      />
      <FooterList
        heading="Company"
        items={['About', 'Our Team', 'Careers', 'Contact']}
        order="3"
      />
      <ul className="footer__social-list">
        <li className="footer__social-list__icon">
          <a href="https://www.facebook.com">
            <img src={facebook} alt="Facebook" />
          </a>
        </li>
        <li className="footer__social-list__icon">
          <a href="https://www.twitter.com">
            <img src={twitter} alt="Twitter" />
          </a>
        </li>
        <li className="footer__social-list__icon">
          <a href="https://www.pinterest.com">
            <img src={pinterest} alt="Pinterest" />
          </a>
        </li>
        <li className="footer__social-list__icon">
          <a href="https://www.instagram.com">
            <img src={instagram} alt="Instrgram" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
