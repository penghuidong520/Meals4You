import { useDispatch } from "react-redux";
import { updateContents } from "../../store/contents";
import { deleteWheel } from "../../store/wheels";
import "./FavoratedWheels.css"
import favorate from "../../images/favorites.png"
import deleteIcon from "../../images/delete.png";
import EditWheelModal from "../NewWheelModal/EditWheelModal";


const FavoratedWheelsItem = ({wheel}) => {
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
        <div className="fav-wheel-item-container" >
            <div className="fav-wheel-icon">
                <img src={favorate} alt="" /> 
            </div>
            <div className="fav-wheel-item-title-container" onClick={handleClickTitle} >
                <h1>{wheel.title}</h1>
            </div>
            {/* <button className="editButton" > */}
                {/* <EditWheelModal wheel={wheel} /> */}
            {/* </button> */}
            <button className="deleteButton" onClick={handleDelete} >
                <img id="deleteIcon" src={deleteIcon} alt=""/>

            </button>
        </div>
    )
}

export default FavoratedWheelsItem;