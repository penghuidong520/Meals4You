import './SpinWheel.css'; 
import { useState, useRef } from 'react';
import React from 'react';
import { useSelector } from 'react-redux'
import welcomeInfo from '../../images/welcome-info.png';
import introGif from '../../images/intro-gif.gif';


const SpinWheel = () => {
    const sessionUser = useSelector(state => state.session.user)
    console.log(sessionUser)


  const items = ["Pizza", "Halal", "Bagel", "Chicken Over Rice", "Sandwich",  "Ramen", "Dumpling"];  

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
    // else{
    //   window.location.assign("/login")
    // }
  };


  const welcomeMessage = (sessionUser) ? 'Saved wheel' :'Click the SpinWheel \r\n Choose Meals for You';
  
  const wheelVars = {
    "--nb-item": items.length,
    "--selected-item": selectedItem
  };

  const spinning = selectedItem !== null ? "spinning" : "";
  
  return (
    <div className='spin-container'>
        <div className='left-column'>
          <div className='intro1'>{welcomeMessage}</div>
          {sessionUser == null && (
            <div className='welcomeInfo-icon'>
              <img id='welcomeInfo-icon' src={welcomeInfo} alt="" />
              < img id='intro-gif' src={introGif} alt="" />
            </div>
             )}
        </div> 
    <div className='spinwheel-box1'>
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
    <div className='reset-containor1'>
      {selectedItem !== null && (
        <div className='reset-button1'>
          <button id="reset-button1" onClick={handleReset}>
            <p id="reset-text1">Reset</p>
          </button>
        </div>
      )}
      </div>
      </div>
    </div>
  );
}

export default SpinWheel; 