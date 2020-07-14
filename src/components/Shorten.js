import React from 'react';
import ShortenedURL from './ShortenedURL';

const Shorten = () => {
  return (
    <div className="container shorten-container">
      <form className="shorten">
        <input
          type="text"
          placeholder="Shorten a link here..."
          className="input shorten__input"
          required
        />
        <span className="validation__error"></span>
        <button
          className="btn btn--primary btn--squared shorten__button"
          type="submit"
        >
          Shorten it
        </button>
      </form>

      <ShortenedURL
        originalLink="https://www.twitter.com/waleed-alfaifi/waleed-alfaifi/waleed-alfaifi/waleed-alfaifi/waleed-alfaifi"
        result="https://rel.ink/k4lKyk"
      />
      <ShortenedURL
        originalLink="https://www.frontendmentor.io"
        result="https://rel.ink/k4lKyk"
      />
      <ShortenedURL
        originalLink="https://www.frontendmentor.io"
        result="https://rel.ink/k4lKyk"
      />
    </div>
  );
};

export default Shorten;
