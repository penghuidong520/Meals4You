import { useDispatch, useSelector } from "react-redux";
import { updateContents } from "../../store/contents";
import { deleteWheel } from "../../store/wheels";
import "./SavedWheels.css"
import savedWheelIcon from "../../images/tableware.png"
import deleteIcon from "../../images/delete.png";
import EditWheelModal from "../NewWheelModal/EditWheelModal";
import React, {useState} from "react";
import unfav from "../../images/fav.png";
import fav from "../../images/unfav.png";
import { createFavorite } from "../../store/favoriteWheel";
import { RECEIVE_USER_LOGOUT } from "../../store/session";
import { getFavorites } from "../../store/favoriteWheel";
import { useEffect } from "react";


const SavedWheelsItem = ({wheel}) => {
    const dispatch = useDispatch();
    // const [icoStatus, setIconStatus] = useState(true)
    // const iconFavorate = (e, props) => {
    //     setIconStatus(!icoStatus)
    // }
    let [test, setTest] = useState(false); 

    const favorites = useSelector(getFavorites);
    // favorites.forEach(favorite => {
    //     if (favorite.wheelId === wheel._id) {
    //         test= true;
    //     } else {
    //         test = false;
    //     }
    // })

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteWheel(wheel._id))
    }

    const handleClickTitle = (e) => {
        e.preventDefault();
        dispatch(updateContents({title: wheel.title, contents: wheel.contents}));
    }
        
    useEffect(()=>{
        favorites.forEach(favorite => {
            if (favorite.wheelId === wheel._id) {
                setTest(true);
            } else {
                setTest(false);
            }
        })
    }, [])

    const handleFavorate = (e) => {

        e.preventDefault();
        dispatch(createFavorite(wheel));
        if (test){
            setTest(false);
        }
        else{
            setTest(true);
        }
    }
    

    return (
        <div className="wheel-item-container" >
            <button className="saved-wheel-icon" onClick={handleFavorate}>
               {test && <img className="favIcon favorated" src={unfav} alt="" />}
               {!test && <img className="favIcon" src={unfav} alt="" />}
            </button>
            <div className="wheel-item-title-container" onClick={handleClickTitle} >
                <h1>{wheel.title}</h1>
            </div>
            
            <button className="editButton" >
                <EditWheelModal wheel={wheel} />
            </button>
            <button className="deleteButton" onClick={handleDelete} >
                <img id="deleteIcon" src={deleteIcon} alt=""/>
            </button>
           
            


        </div>
    )
}

export default SavedWheelsItem;