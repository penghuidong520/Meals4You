import { useState, useRef } from 'react';
import React from 'react';
// import { useDispatch } from 'react-redux'
import deleteIcon from "../../images/delete.png";
import './NewSpinWheel.css'; 
import './EditSpinWheel.css'


const EditSpinWheel = ({contents, setContents}) => {
  // const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState(null);
  const wheelRef = useRef();
  const [arr, setArr] = useState(contents);
  const [value, setValue] = useState("");
  const [dishErr, setDishErr] = useState(false);

  
  const handleRemoveItem = (e) => {
    e.preventDefault();
    let tmp = arr
    tmp = arr.filter(ele => {
        
        return ele !== e.target.name;
      })
    setArr(tmp);
    setContents(tmp);
  };

  const itemList = arr.map(item => 
    (
      <div className='one-dish' key={item} >
        <li className="new-dish-name">
          {item}
        </li>
        < button className='delete-added-dish' value={item} name={item} onClick={handleRemoveItem}>
          <img id='delete-added-dish-img' src={deleteIcon} value={item} name={item} onClick={handleRemoveItem} />
        </button>
      </div>
    )
  )

  

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const onClick = (e) => {
    // e.preventDefault();
    if (value) {
      const tmp = arr;
      tmp.push(value);
      setArr(tmp);
      setContents(tmp);
      setValue("");
      setDishErr(false);
    } else {
      setDishErr(true);
    }
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

  const handleKey = e => {
    let code = e.keyCode || e.which
    // console.log(code)
    // console.log(e.target.value)
    if (code === 13) {
      onClick(e.target.value)
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
      <div className="wheel-container11">
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
            <p className="add-dish-text">Add Your New Dish:</p> 
            <div className='new-dish-index'>
              {itemList}
            </div>
            <input id='newItem-input'
              placeholder=' add a new item ... '
              type="text"
              value={value}
              onChange={handleChange}
              onKeyPress={handleKey}
            />
            {dishErr && <span id="dish-name-err">Invalid item name</span>}

            <div className='submit-clear-box'>
            <div className='submit-clear-containor'>
              <div className='newItem-submit-button'
                onClick={onClick}
                value="Submit"
              >
              Add Dish
            </div>
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

export default EditSpinWheel;