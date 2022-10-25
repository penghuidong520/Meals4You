import { useDispatch } from "react-redux";
import { deleteDish } from "../../store/dishes";

const DishItem = ({dish}) => {
    const dispatch = useDispatch();

    const handleDelete = e => {
        // e.preventDefault();
        dispatch(deleteDish(dish._id));
    }

    return (
        <div className="dish-item">
            <h1>{dish.name}</h1>
            <button className="dish-item-delete-button" onClick={handleDelete} >Delete Dish</button>
        </div>
    )
}

export default DishItem;