import './SpinWheel.css'; 
import { useState, useRef } from 'react';
import React from 'react';
import { useSelector } from 'react-redux'


const SpinWheel = () => {
    const sessionUser = useSelector(state => state.session.user)



  const items = ["Peter", "Paython", "Yanxi", "Ivy", "Ronny",  "Kin", "Acye"];  

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
    if(sessionUser){
      wheelRef.current.addEventListener('click', selectItem);
      setSelectedItem(null);
    }else{
      window.location.assign("/login")
    }
  };
  
  const wheelVars = {
    "--nb-item": items.length,
    "--selected-item": selectedItem
  };

  const spinning = selectedItem !== null ? "spinning" : "";
  

  return (
    <div className='spin-container'>
    <div className='spinwheel-box'>
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
    </div>
    <div className='reset-containor'>
      {selectedItem !== null && (
        <div className='reset-button'>
          <button id="reset-button" onClick={handleReset}>
            <p id="text1" >Don't Like {items[selectedItem]}?</p>
            <p id="text2">Click Me Reset</p>
          </button>
        </div>
      )}
      </div>
    </div>
  );
}

export default SpinWheel; 