import { useSelector, useDispatch } from "react-redux";
import { createDish, getDishes } from "../../store/dishes";
import DishItem from "./DishItem";
import { useState } from "react";

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
            <div className="dishes-list" >
                {dishList}
            </div>
            <br />
            <label>Name for the Dish
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </label>

            <label>Description
                <textarea placeholder="Optional..." value={description} onChange={e => setDescription(e.target.value)} />
            </label>

            <button className="dishes-action-button" onClick={handleAddDish} >Add More</button>
        </div>
    )
}

export default DishIndex;