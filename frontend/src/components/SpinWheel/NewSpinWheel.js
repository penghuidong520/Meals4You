import './NewSpinWheel.css'; 
import { useState, useRef, useEffect } from 'react';
import React from 'react';
import { useSelector } from 'react-redux'


const NewSpinWheel = ({setContents}) => {

  const [selectedItem, setSelectedItem] = useState(null);
  const wheelRef = useRef();
  const [arr, setArr] = useState([]);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();
    const tmp = arr;
    tmp.push(value);
    setArr(tmp);
    setContents(tmp);
    setValue("");
  };

  const handleClear = (e) => {
    setArr([]);
    setContents([]);
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
    <div className='create-spin-container'>
    <div className='create-spinwheel-box'>
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
          <p>New Odds:</p>
          <input id='newItem-input'
            placeholder='add a new item ... '
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
            Clear Board
          </div>
          </div>
          </div>
      </div>
    </div>
    <div className='create-reset-containor'>
      {selectedItem !== null && (
        <div className='create-reset-button'>
          <button id="create-reset-button" onClick={handleReset}>
            <p id="create-text">Reset</p>
          </button>
        </div>
      )}
      
      </div>
    </div>
  );
}

export default NewSpinWheel;