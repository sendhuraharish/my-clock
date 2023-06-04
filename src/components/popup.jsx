import  { useState } from 'react';
import Clock from './clock';
import svgImage from '../assets/clock.png';
const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <img 
        src={svgImage} 
        alt="Clock" 
        onClick={togglePopup}
        // height="200"
        width="30"
        />
      {showPopup && (
        <div className="popup">
          <Clock />
        </div>
      )}
    </div>
  );
};

export default Popup;
