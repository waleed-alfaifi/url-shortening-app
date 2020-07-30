import React, { useState, useEffect, useRef } from 'react';
import ClipboardJS from 'clipboard';
import ShortenedURL from './ShortenedURL';

const Shorten = () => {
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [shortenedUrls, setShortenedUrls] = useState([]);
  const [currentResultUrl, setCurrentResultUrl] = useState('');
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
    const { hashid } = url;
    setCurrentResultUrl(hashid);
    const filteredUrls = shortenedUrls.filter((url) => url.hashid === hashid);

    if (filteredUrls.length === 0) {
      setShortenedUrls((prevUrls) => [...prevUrls, url]);
    }
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = JSON.stringify({
        url: shortenedUrl,
      });

      const res = await fetch('https://rel.ink/api/links/', {
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();

      setShortenedUrl('');

      if (res.ok) {
        updateShortenedUrls(data);
        setSuccess(true);
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
        const { url: originalLink, hashid } = url;
        const result = `https://rel.ink/${hashid}`;

        return (
          <ShortenedURL
            key={index}
            originalLink={originalLink}
            result={result}
            classes={
              currentResultUrl === hashid
                ? 'animate__flash'
                : success
                ? 'animate__headShake'
                : ''
            }
          />
        );
      })}
    </div>
  );
};

export default Shorten;
