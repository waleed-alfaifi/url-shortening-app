import React from 'react';
import logo from '../images/logo.svg';
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
      />
      <FooterList
        heading="Resources"
        items={['Blog', 'Developers', 'Support']}
      />
      <FooterList
        heading="Company"
        items={['About', 'Our Team', 'Careers', 'Contact']}
      />
      <ul className="footer__social-list">
        <li className="footer__social-list__icon">
          <img src={facebook} alt="Facebook" />
        </li>
        <li className="footer__social-list__icon">
          <img src={twitter} alt="Twitter" />
        </li>
        <li className="footer__social-list__icon">
          <img src={pinterest} alt="Pinterest" />
        </li>
        <li className="footer__social-list__icon">
          <img src={instagram} alt="Instrgram" />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
