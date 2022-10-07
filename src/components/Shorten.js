import React, { useState, useEffect, useRef } from 'react';
import ClipboardJS from 'clipboard';
import ShortenedURL from './ShortenedURL';

const Shorten = () => {
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [shortenedUrls, setShortenedUrls] = useState([]);
  const [success, setSuccess] = useState(false);
  const [validationMsg, setValidationMsg] = useState('');

  const urlInput = useRef(null);

  useEffect(() => {
    const storedUrls = localStorage.getItem('urls');

    if (storedUrls) {
      try {
        setShortenedUrls(JSON.parse(storedUrls));
      } catch (error) {
        console.error('Error while fetching stored urls', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('urls', JSON.stringify(shortenedUrls));
  }, [shortenedUrls]);

  // Initialize clipboard.js
  useEffect(() => {
    const clipboard = new ClipboardJS('.btn--copy');

    clipboard.on('success', (e) => {
      e.trigger.classList.add('copied');
      e.trigger.innerHTML = 'Copied!';

      setTimeout(() => {
        e.trigger.classList.remove('copied');
        e.trigger.innerHTML = 'Copy';
      }, 5000);
    });
  }, []);

  useEffect(() => {
    if (urlInput.current) {
      setValidationMsg(urlInput.current.validationMessage);
    }
  }, [urlInput.current]);

  useEffect(() => {
    setValidationMsg(urlInput.current.validationMessage);
  }, [shortenedUrl]);

  useEffect(() => {
    if (success === true) {
      setTimeout(() => {
        setSuccess(false);
      }, 1500);
    }
  }, [success]);

  const updateShortenedUrls = (url) => {
    const { code, original_link } = url;
    const filteredUrls = shortenedUrls.filter(
      (url) => url.code === code || url.original_link === original_link
    );

    // i.e. url does not exist already
    if (filteredUrls.length === 0) {
      setShortenedUrls((prevUrls) => [url, ...prevUrls]);
    }
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const baseAPIUrl = 'https://api.shrtco.de/v2/';

      const res = await fetch(`${baseAPIUrl}shorten?url=${shortenedUrl}`);

      const data = await res.json();

      setShortenedUrl('');

      if (data.ok) {
        const {
          result: { code, original_link },
        } = data;
        const url = {
          code,
          original_link,
        };

        updateShortenedUrls(url);
        setSuccess(true);
      } else {
        const { error } = data;
        alert(error);
        console.log('data', data);
      }
    } catch (error) {
      console.error('Error shortening url', error);
    }
  };

  return (
    <div className="container shorten-container">
      <form className="shorten" onSubmit={onSubmitForm}>
        <input
          type="url"
          placeholder="Shorten a link here..."
          className="input shorten__input"
          required
          value={shortenedUrl}
          onChange={(e) => setShortenedUrl(e.target.value)}
          ref={urlInput}
        />
        <small className="shorten__input__validation">{validationMsg}</small>
        <button
          className="btn btn--primary btn--squared shorten__button"
          type="submit"
        >
          Shorten it
        </button>
      </form>

      {shortenedUrls.map((url, index) => {
        const { original_link, code } = url;
        const result = `https://shrtco.de/${code}`;

        return (
          <ShortenedURL
            key={index}
            originalLink={original_link}
            result={result}
            classes={success ? 'animate__headShake' : ''}
          />
        );
      })}
    </div>
  );
};

export default Shorten;
