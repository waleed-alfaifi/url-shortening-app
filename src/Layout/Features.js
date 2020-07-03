import React, { useState } from 'react';
import Card from '../components/Card';
import Shorten from '../components/Shorten';

// Cards images
import brandRecognition from '../images/icon-brand-recognition.svg';
import detailedRecords from '../images/icon-detailed-records.svg';
import fullyCustomizable from '../images/icon-fully-customizable.svg';

const featuresCards = [
  {
    title: 'Brand Recognition',
    text: `Boost your brand recognition with each click. Generic links don’t 
    mean a thing. Branded links help instil confidence in your content.`,
    image: brandRecognition,
  },
  {
    title: 'Detailed Records',
    text: `Gain insights into who is clicking your links. Knowing when and where 
    people engage with your content helps inform better decisions.`,
    image: detailedRecords,
  },
  {
    title: 'Fully Customizable',
    text: `Improve brand awareness and content discoverability through customizable 
    links, supercharging audience engagement.`,
    image: fullyCustomizable,
  },
];

const Features = () => {
  return (
    <div className="features">
      <Shorten />
      <section className="container">
        <div className="features__header">
          <h2 className="features__heading">Advanced Statistics</h2>
          <p className="features__text">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="cards-container">
          {featuresCards.map((feature, index) => {
            const { title, text, image } = feature;
            return (
              <Card
                key={index}
                title={feature.title}
                text={text}
                image={image}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Features;
