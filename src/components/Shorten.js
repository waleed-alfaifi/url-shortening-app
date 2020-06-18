import React from 'react';

const Shorten = () => {
  return (
    <div className="shorten-container">
      <input
        type="text"
        placeholder="Shorten a link here..."
        className="input"
      />
      <button className="btn btn--primary btn--squared">Shorten it</button>
    </div>
  );
};

export default Shorten;
