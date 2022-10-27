import { useSelector, useDispatch } from "react-redux";
import { createDish, getDishes } from "../../store/dishes";
import DishItem from "./DishItem";
import { useState } from "react";
import "./DishIndex.css"

const DishIndex = () => {
    const dispatch = useDispatch();
    const dishes = useSelector(getDishes);
    const dishList = dishes.map((dish, index) => <DishItem key={index} dish={dish} />)
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleAddDish = (e) => {
        e.preventDefault();
        dispatch(createDish({name, description}));
    }

    return (
        <div className="dishes-container" >
            <div className="saved-dish-top">
                <span>
                    Saved Dishes
                </span>
                <div className="dishes-list" >
                    {dishList}
                </div>
                <br />
            </div>
            <hr id="saved-dish-divider"/>
            <div className="dish-edit-container">
                <label>Name for the Dish
                    <input className="add-dishes" type="text" value={name} onChange={e => setName(e.target.value)} />
                </label>

                <label>Description
                    <textarea className="add-dishes"  placeholder="Add notes(optional)" value={description}  onChange={e => setDescription(e.target.value)} 
                    cols="5" rows="5"/>
                </label>
            </div>
                <button className="dishes-action-button" onClick={handleAddDish} >Add More</button>
        </div>
    )
}

export default DishIndex;