import React from 'react';

const FooterList = ({ heading, items = [], order }) => {
  return (
    <ul className={`footer__list footer__list--${order}`}>
      <h5 className="footer__list__heading">{heading}</h5>
      {items.map((item, index) => (
        <li className="footer__list__item" key={index}>
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  );
};

export default FooterList;
