import './AccordionWheels.css';
import { useState, useRef } from 'react';
import React from 'react';

const SpinWheel = ({wheel}) => {
  // console.log(wheel)
  // const items = ["Pizza", "Halal", "Bagel", "Chicken Over Rice", "Sandwich",  "Ramen", "Dumpling"];  
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
    <div className='spin-container5'>
    <div className='spinwheel-box5'>
      <div className="wheel-container5">
        <div
          className={`wheel5 ${spinning}`}
          style={wheelVars}
          ref={wheelRef}
          onClick={selectItem}
        >
          {items.map((item, index) => (
            <div
              className="wheel-item5"
              key={index}
              style={{ "--item-nb": index }}
              >
              {item}
            </div>
          ))}
        </div>
      </div>
    <div className='reset-containor5'>
      {selectedItem !== null && (
        <div className='reset-button5'>
          <button id="reset-button5" onClick={handleReset}>
            <p id="reset-text5">Reset</p>
          </button>
        </div>
      )}
      </div>
      </div>
    </div>
  );
}

export default SpinWheel; 