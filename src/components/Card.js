import React from 'react';

const Card = ({ image, imageAlt, title, text }) => {
  return (
    <div className="card">
      <div className="card__image-container">
        <img src={image} alt={imageAlt} className="card__image" />
      </div>
      <h3 className="card__heading">{title}</h3>
      <p className="card__text">{text}</p>
    </div>
  );
};

export default Card;
