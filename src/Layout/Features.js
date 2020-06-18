import React from 'react';
import Card from '../components/Card';

// Cards images
import brandRecognition from '../images/icon-brand-recognition.svg';
import detailedRecords from '../images/icon-detailed-records.svg';
import fullyCustomizable from '../images/icon-fully-customizable.svg';

const Features = () => {
  return (
    <section className="features">
      <h2>Advanced Statistics</h2>
      <p className="features__text">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className="some-type-of-container-here">
        <Card
          image={brandRecognition}
          title="Brand Recognition"
          text="Boost your brand recognition with each click. Generic links don’t 
        mean a thing. Branded links help instil confidence in your content."
        />
        <Card
          image={detailedRecords}
          title="Detailed Records"
          text="Gain insights into who is clicking your links. Knowing when and where 
        people engage with your content helps inform better decisions."
        />
        <Card
          image={fullyCustomizable}
          title="Fully Customizable"
          text="Improve brand awareness and content discoverability through customizable 
        links, supercharging audience engagement."
        />
      </div>
    </section>
  );
};

export default Features;
