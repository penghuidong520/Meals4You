import { useEffect, useState } from "react";
import Modal from '@mui/material/Modal';
import "./YelpModal.css";
import CloseIcon from '@mui/icons-material/Close';
import YelpList from "./YelpList";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "../../store/yelp";
import { getRestaurants } from "../../store/yelp";
import CircularProgress from '@mui/material/CircularProgress';

const YelpModal = ({ item, lat, log }) => {

    const [openModal, setOpenModal] = useState(false);
    // const [restaurants, setRestaurants] = useState([])
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();
    const restaurants = useSelector(getRestaurants)

    const handleOpen = () => {
        
        setOpenModal(true);
    }
    const handleClose = () => setOpenModal(false);


    useEffect(() => {
        dispatch(fetchRestaurants({item: item, lat: lat, log: log}))
        setLoaded(true);
    },[openModal])


    return (
        <div>
            <button onClick={handleOpen}>Explore nearby restaurant</button>
            <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <div className="yelp-modal">
                    <div className="close-button-container">
                        <button onClick={handleClose} id="yelp-close-button"><CloseIcon/></button>
                    </div>
                    {loaded ? <YelpList item={item} restaurants={restaurants}/> : 
                        <div className="yelp-loading">
                            Please wait while we load the restaurant nearby...
                            <CircularProgress style={{marginTop: "60px"}}/>
                        </div>
                    }
                </div>
            </Modal>
        </div>
    );
}
 
export default YelpModal;
