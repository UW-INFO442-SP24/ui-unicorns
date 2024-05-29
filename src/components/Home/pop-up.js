import React, { useState, useEffect } from 'react';

const PopButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Automatically open the popup when the component mounts
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={`popup-container ${isOpen ? 'open' : ''}`}>
      {isOpen && (
        <>
          <div className="popup-overlay" onClick={handleClose} />
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="alert-header">
              Here's the thing
            </div>
            <div className="alert-text-first">
              Your internet activity might be monitored. This can be a concern, especially if you're seeking help with domestic violence.
            </div>
            <div className="alert-text-second">
              If you’re concerned, use a safe device, clear your browsing history, or try going on an incognito browser.
            </div>
            <div className="alert-text-third">
              Click <a className="popup-link" href="https://www.rainn.org/articles/safe-web-browsing" target="blank"><strong><u>here</u></strong> </a>
              to learn more about safe web browsing.
            </div>

            <div className="alert-text-fourth">
              Click the “<b>Exit</b>” button in the upper right-hand corner to leave the website immediately
            </div>

            <div className="popup-button-container">
              <button className="popup-button" onClick={handleClose}>OK</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PopButton;
