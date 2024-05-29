import React from 'react';

const ExitButton = () => {
    return (
      <div className="thumbnail-container">
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            loading="lazy"
            src="/img/exit-btn.png"
            className="thumbnail"
            alt="Exit to Google"
          />
        </a>
      </div>
    );
  };
  
  export default ExitButton;