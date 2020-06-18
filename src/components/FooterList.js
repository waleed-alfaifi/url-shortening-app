import React from 'react';

const FooterList = ({ heading, items = [] }) => {
  return (
    <ul className="footer__list">
      <h5 className="footer__list__heading">{heading}</h5>
      {items.map((item, index) => (
        <li className="footer__list__item" key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default FooterList;
