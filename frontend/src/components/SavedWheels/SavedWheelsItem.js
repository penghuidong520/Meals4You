import { useDispatch } from "react-redux";
import { updateContents } from "../../store/contents";
import { deleteWheel } from "../../store/wheels";
import "./SavedWheels.css"
import savedWheelIcon from "../../images/tableware.png"
import deleteIcon from "../../images/delete.png";

const SavedWheelsItem = ({wheel}) => {
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteWheel(wheel._id))
    }

    const handleClickTitle = (e) => {
        e.preventDefault();
        dispatch(updateContents({title: wheel.title, contents: wheel.contents}));
    }

    return (
        <div className="wheel-item-container" >
            <div className="saved-wheel-icon">
                <img src={savedWheelIcon} alt="" />
            </div>
            <div className="wheel-item-title-container" onClick={handleClickTitle} >
                <h1>{wheel.title}</h1>
            </div>
            <button className="deleteButton" onClick={handleDelete} >
                <img id="deleteIcon" src={deleteIcon} alt=""/>
            </button>
        </div>
    )
}

export default SavedWheelsItem;