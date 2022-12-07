import { useDispatch, useSelector } from "react-redux";
import { updateContents } from "../../store/contents";
import { deleteWheel } from "../../store/wheels";
import deleteIcon from "../../images/delete.png";
import EditWheelModal from "../NewWheelModal/EditWheelModal";
import React, {useState} from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { createFavorite, deleteFavorite } from "../../store/favoriteWheel";
import { getFavorites } from "../../store/favoriteWheel";
import { useEffect } from "react";
import "./SavedWheels.css"


const SavedWheelsItem = ({wheel}) => {
    const dispatch = useDispatch();
    // const [icoStatus, setIconStatus] = useState(true)
    // const iconFavorate = (e, props) => {
    //     setIconStatus(!icoStatus)
    // }
    // const [faved, setFaved] = useState(false);
    let fav = false;
    const favorites = useSelector(getFavorites);
    favorites.forEach(favorite => {
        if (favorite.wheelId === wheel._id) {
            // setFaved(true);
            fav = true;
        }
    })

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteWheel(wheel._id))
    }

    const handleClickTitle = (e) => {
        e.preventDefault();
        dispatch(updateContents({title: wheel.title, contents: wheel.contents}));
    }

    const handleFavorate = (e) => {
        e.preventDefault();
        const favId = favorites.filter(favorite => 
            (
                favorite.wheelId === wheel._id
            )
        )
        if (fav){
            dispatch(deleteFavorite(favId[0]._id));
        } else {
            dispatch(createFavorite(wheel));
        }
        // else{
        //     setFaved(true);
        // }
    }
    

    return (
        <div className="wheel-item-container" >
            <button className="saved-wheel-icon" onClick={handleFavorate}>
               {fav && <FavoriteIcon style={{color: "red"}}/>}
               {!fav && <FavoriteBorderIcon />}
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