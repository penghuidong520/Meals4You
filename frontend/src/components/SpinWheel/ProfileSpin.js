import './ProfileSpin.css'; 
import { useState, useRef } from 'react';
import React from 'react';
import { useSelector } from 'react-redux'


const ProfileSpin = ({wheel}) => {
  const sessionUser = useSelector(state => state.session.user)

  const items = wheel.contents;  

  const [selectedItem, setSelectedItem] = useState(null);
  const wheelRef = useRef();
  
  const selectItem = (e)=> {
    if (selectedItem === null) {
      setSelectedItem(Math.floor(Math.random() * items.length))
    }
    
    if (wheelRef.current) {
      wheelRef.current.removeEventListener('click', selectItem);
    }
  }

  const handleReset = e => {
      wheelRef.current.addEventListener('click', selectItem);
      setSelectedItem(null);
  };

  const wheelVars = {
    "--nb-item": items.length,
    "--selected-item": selectedItem
  };

  const spinning = selectedItem !== null ? "spinning" : "";
  
  return (
    <div className='profile-spin-container'>
        <span>Congracts you chose {items[selectedItem]}</span>
    <div className='profile-spinwheel-box'>
      <div className="wheel-container">
        <div
          className={`wheel ${spinning}`}
          style={wheelVars}
          ref={wheelRef}
          onClick={selectItem}
        >
          {items.map((item, index) => (
            <div
              className="wheel-item"
              key={index}
              style={{ "--item-nb": index }}
              >
              {item}
            </div>
          ))}
        </div>
      </div>
    <div className='profile-reset-containor'>
      {selectedItem !== null && (
        <div className='profile-reset-button'>
          <button id="profile-reset-button" onClick={handleReset}>
            <p id="reset-text">Reset</p>
          </button>
        </div>
      )}
      </div>
      </div>
    </div>
  );
}
export default ProfileSpin; 