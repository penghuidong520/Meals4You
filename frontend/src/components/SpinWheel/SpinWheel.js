import './SpinWheel.css'; 
import { useState, useRef } from 'react';
import React from 'react';
import { useSelector } from 'react-redux'
import welcomeInfo from '../../images/welcome-info.png';
// import introGif from '../../images/intro-gif.gif';
import spoonFork from '../../images/spoon-and-fork.png';

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
  };


  
  const wheelVars = {
    "--nb-item": items.length,
    "--selected-item": selectedItem
  };

  const spinning = selectedItem !== null ? "spinning" : "";
  
  return (
    <div className='spin-container'>
        <div className='left-column'>
          <div className='welcome-mess'>
            <div className='intro1'>Click SpinWheel <br/> </div>
            <div className='intro2'>Choose <br /> Meals for You</div>
          </div>
          <div className='selected-result'>
            <div className='result-img'>
              <img id='result-img' src={spoonFork} alt="" />
            </div>
            {selectedItem !== null && (
            <div className='result-text'>
                {items[selectedItem]}
            </div>)}
          </div>
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
        <div className='reset-button1'onClick={handleReset}>
            <p>Reset</p>
          {/* <button id="reset-button1" onClick={handleReset}>
            <p id="reset-text1">Reset</p>
          </button> */}
        </div>
      )}
      </div>
      </div>
    </div>
  );
}

export default SpinWheel; 