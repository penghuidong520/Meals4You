import './NewSpinWheel.css'; 
import { useState, useRef } from 'react';
import React from 'react';
import { useSelector } from 'react-redux'


const NewSpinWheel = () => {

  const [selectedItem, setSelectedItem] = useState(null);
  const wheelRef = useRef();
  const [arr, setArr] = useState([]);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const onClick = (e) => {
    const tmp = arr;
    tmp.push(value);
    setArr(tmp);
    setValue("");
  };

  const handleClear = (e) => {
    setArr([])
  }

  
  const selectItem = (e)=> {
    if (selectedItem === null) {
      setSelectedItem(Math.floor(Math.random() * arr.length))
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
    "--nb-item": arr.length,
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
          {arr.map((ele, index) => (
            <div
            className="wheel-item"
            key={index}
            style={{ "--item-nb": index }}
            >
              {ele}
            </div>
          ))}
        </div>
          <div className='submit-containor'>
          <h1>ADD NEW ITEM</h1>
          <p>New Odds:</p>
          <input id='newItem-input'
            type="text"
            value={value}
            onChange={handleChange}
          />
          <div className='submit-clear-containor'>
          <div className='newItem-submit-button'
            onClick={onClick}
            value="Submit"
          >
            Submit
          </div>
          <div className='submit-clear-button'
            onClick={handleClear}
            value="Clear"
          >
            Clear
          </div>
          </div>
          </div>
      </div>
    </div>
    <div className='reset-containor'>
      {selectedItem !== null && (
        <div className='reset-button'>
          <button id="reset-button" onClick={handleReset}>
            <p id="text2">Click Me Reset</p>
          </button>
        </div>
      )}
      
      </div>
    </div>
  );
}

export default NewSpinWheel;