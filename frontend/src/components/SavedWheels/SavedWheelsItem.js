import { useDispatch } from "react-redux";
import { updateContents } from "../../store/contents";
import { deleteWheel } from "../../store/wheels";

const SavedWheelsItem = ({wheel}) => {
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteWheel(wheel._id))
    }

    const handleClickTitle = (e) => {
        e.preventDefault();
        dispatch(updateContents(wheel.contents));
    }

    return (
        <div className="wheel-item-container" >
            <div className="wheel-item-title-container" onClick={handleClickTitle} >
                <h1>{wheel.title}</h1>
            </div>
            <button onClick={handleDelete} >Delete</button>
        </div>
    )
}

export default SavedWheelsItem;