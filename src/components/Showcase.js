import React from 'react';
import showcaseImage from '../images/illustration-working.svg';

const Showcase = () => {
  return (
    <section className="showcase">
      <div className="showcase__content">
        <h1 className="heading-primary">More than just shorter links</h1>
        <p className="showcase__main-text mb-2">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <a href="#" className="btn btn--primary btn--md">
          Get Started
        </a>
      </div>
      <div className="showcase__img-container">
        <img src={showcaseImage} alt="Working" />
      </div>
    </section>
  );
};

export default Showcase;
