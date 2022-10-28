import './ProfileSpin.css'; 
import { useState, useRef } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import left from "../../images/left.png";
import right from "../../images/right.png";


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
      <div className='result-container'>
      {selectedItem !== null && (
        <div className='reslt-and-img-container'>
        <div className='selete-result-text'> 
           <img className='result-icon-img' src={left} alt="" /> 
         </div>
        <div className='selete-result-text'> {items[selectedItem]} </div>
          <div className='selete-result-text'>
            <img className='result-icon-img' src={right} alt="" />
          </div>
        </div>
        
        )}
      </div> 
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
    <div className='profile-reset-containor' >
      {selectedItem !== null && (
        <div className='profile-reset-button' onClick={handleReset} >
            <p>Reset</p>
        </div>
      )}
      </div>
      </div>
    </div>
  );
}
export default ProfileSpin; 