import React from 'react';
import showcaseImage from '../images/illustration-working.svg';

const Showcase = () => {
  return (
    <section className="showcase">
      <h1 className="heading-primary">More than just shorter links</h1>
      <p className="showcase__main-text">
        Build your brand’s recognition and get detailed insights on how your
        links are performing.
      </p>
      <a href="#" className="btn btn--primary">
        Get Started
      </a>
      <img src={showcaseImage} alt="Working" />
    </section>
  );
};

export default Showcase;
