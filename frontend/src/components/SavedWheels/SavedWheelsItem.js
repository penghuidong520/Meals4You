import { useDispatch } from "react-redux";
import { updateContents } from "../../store/contents";
import { deleteWheel } from "../../store/wheels";
import "./SavedWheels.css"
import savedWheelIcon from "../../images/tableware.png"
import deleteIcon from "../../images/delete.png";
import EditWheelModal from "../NewWheelModal/EditWheelModal";
import React, {useState} from "react";
import unfav from "../../images/fav.png";
import fav from "../../images/unfav.png";


const SavedWheelsItem = ({wheel}) => {
    const dispatch = useDispatch();
    // const [icoStatus, setIconStatus] = useState(true)
    // const iconFavorate = (e, props) => {
    //     setIconStatus(!icoStatus)
    // }

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteWheel(wheel._id))
    }

    const handleClickTitle = (e) => {
        e.preventDefault();
        dispatch(updateContents({title: wheel.title, contents: wheel.contents}));
    }
        
    let [test, setTest] = useState(false); 

    const handleFavorate = (e) => {

        e.preventDefault();
        if (test){
            setTest(false);
            // console.log(test)
        }
        else{
            setTest(true);
            // console.log(test)
        }
    }
    // style:{ "background-color":"red" }
    

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