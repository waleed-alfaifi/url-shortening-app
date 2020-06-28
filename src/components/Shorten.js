import React from 'react';

const Shorten = () => {
  return (
    <div className="container shorten-container">
      <form className="shorten">
        <input
          type="text"
          placeholder="Shorten a link here..."
          className="input shorten__input mr-3"
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
      <div className="shortened-url">
        <div className="shortened-url__original">
          <a
            href="https://www.waleedalfaifi.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.waleedalfaifi.com
          </a>
        </div>
        <div className="shortened-url__action-area">
          <div className="shortened-url__result">
            <a
              href="https://rel.ink/k4lKyk"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://rel.ink/k4lKyk
            </a>
          </div>
          <button className="btn btn--copy">Copy</button>
        </div>
      </div>
      <div className="shortened-url">
        <div className="shortened-url__original">
          <a
            href="https://www.waleedalfaifi.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.waleedalfaifi.com
          </a>
        </div>
        <div className="shortened-url__action-area">
          <div className="shortened-url__result">
            <a
              href="https://rel.ink/k4lKyk"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://rel.ink/k4lKyk
            </a>
          </div>
          <button className="btn btn--copy">Copy</button>
        </div>
      </div>
      <div className="shortened-url">
        <div className="shortened-url__original">
          <a
            href="https://www.waleedalfaifi.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.waleedalfaifi.com
          </a>
        </div>
        <div className="shortened-url__action-area">
          <div className="shortened-url__result">
            <a
              href="https://rel.ink/k4lKyk"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://rel.ink/k4lKyk
            </a>
          </div>
          <button className="btn btn--copy">Copy</button>
        </div>
      </div>
    </div>
  );
};

export default Shorten;
