import './SpinWheel.css'; 
import { useState, useRef } from 'react';


const SpinWheel = () => {

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
    console.log(items[selectedItem]);

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
      {selectedItem !== null && (
        <div className='reset-button'>
          <button id="reset-button" onClick={handleReset}>
            <p id="text1">👈 Don't Like it?</p>
            <p id="text2">Spin Again</p>
            </button>
        </div>
      )}
      </div>
  );
}

export default SpinWheel; 