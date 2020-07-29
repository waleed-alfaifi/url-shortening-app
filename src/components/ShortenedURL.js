import React from 'react';

const ShortenedURL = ({ originalLink, result, classes }) => {
  const className = classes ? ` animate__animated ${classes}` : '';

  return (
    <div className={`shortened-url${className}`}>
      <div className="shortened-url__original">
        <a href={originalLink} target="_blank" rel="noopener noreferrer">
          {originalLink}
        </a>
      </div>
      <span className="shortened-url__underline"></span>
      <div className="shortened-url__action-area">
        <div className="shortened-url__result">
          <a href={result} target="_blank" rel="noopener noreferrer">
            {result}
          </a>
        </div>
        <button className="btn btn--copy" data-clipboard-text={result}>
          Copy
        </button>
      </div>
    </div>
  );
};

export default ShortenedURL;
