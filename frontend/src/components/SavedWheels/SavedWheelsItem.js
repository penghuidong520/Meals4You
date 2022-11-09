import { useDispatch } from "react-redux";
import { updateContents } from "../../store/contents";
import { deleteWheel } from "../../store/wheels";
import "./SavedWheels.css"
import savedWheelIcon from "../../images/tableware.png"
import deleteIcon from "../../images/delete.png";
import EditWheelModal from "../NewWheelModal/EditWheelModal";
import React, {useState} from "react";


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

    // <script typet="text/javascript" src="http://libs.baidu.com/jquery/1.9.1/jquery.min.js"></script>
    // const onClick=()=>{

    // }
    {/* $(function () {            
            $(".like").click(function () {
                $(this).toggleClass('cs');                
            })
        }) */}

    return (
        <div className="wheel-item-container" >
            <div className="saved-wheel-icon">
                <img src={savedWheelIcon} alt="" />
            </div>
            <div className="wheel-item-title-container" onClick={handleClickTitle} >
                <h1>{wheel.title}</h1>
            </div>
            
            <button className="editButton" >
                <EditWheelModal wheel={wheel} />
            </button>
            <button className="deleteButton" onClick={handleDelete} >
                <img id="deleteIcon" src={deleteIcon} alt=""/>
            </button>
            
            {/* <botton class="fav-bot">fav</botton> */}
            


        </div>
    )
}

export default SavedWheelsItem;