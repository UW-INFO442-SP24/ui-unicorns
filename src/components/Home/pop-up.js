import React, { useState } from 'react';

// Security Alert: Pop-Up Button Component
 const PopButton = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleClick = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={`pop-button-container ${isOpen ? 'open' : ''}`}>
        {isOpen && (
          <div className="security-alert">
            <div className='alert-text-first'>
            Here's the thing: Your internet activity might be monitored. This can be a concern, 
            especially if you're seeking help with domestic violence. <br/>
            </div>

            <div className='alert-text-second'>
            If you’re concerned, use a safe device, clear your browsing history, or try going on an i
            ncognito browser. Click here to learn more about safe web browsing. <br/>
            </div>

            <div className='alert-text-third'>
            Click the <strong>“Exit”</strong> button in the upper right hand corner to leave the website
            immediately <br />
            </div>
            
            <button className='alert-button' onClick={handleClick}>Ok</button>
          </div>
        )}
      </div>
    );
  };

export default PopButton;