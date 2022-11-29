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
import YelpZipList from "./YelpZipList";

const YelpModal = ({ item, lat, log }) => {

    const [openModal, setOpenModal] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);
    // const [restaurants, setRestaurants] = useState([])
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();
    const restaurants = useSelector(getRestaurants)
    //         .sort((a, b) => (
    //     a.distance - b.distance
    // ))
    const [zipcode, setZipcode] = useState("")

    const handleCurrentOpen = () => {  
        dispatch(fetchRestaurants({item: item, lat: lat, log: log}))
        setLoaded(true);  
        setOpenModal(true);
    }
    const handleClose = () => setOpenModal(false);
    const handleClose2 = () => setOpenModal2(false);


    // useEffect(() => {
    //     if (lat) {
    //         dispatch(fetchRestaurants({item: item, lat: lat, log: log}))
    //         setLoaded(true);
    //     }
    // },[openModal])

    const handleZipcode = e => {
        setZipcode(e.target.value)
    }

    const handleOpen = () => {
        if (zipcode.length !== 5) {
            alert("Please type in a valid zip code")
        } else {
            dispatch(fetchRestaurants({item: item, zipcode: zipcode}))
            setLoaded(true)
            setOpenModal2(true);
        }
    }


    return (
        <div className="yelp-modal-container">
            <input type="text" 
                id="zipcode-input"
                value={zipcode} 
                placeholder=" Search by ZIP, City or State"
                onChange={handleZipcode}
             />
             <div className="current-box">
                <button id="current-location-button" onClick={handleCurrentOpen}>Search nearby my location</button>
             </div>
            <button className="yelp-button-box" onClick={handleOpen}>Search by Location</button>
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
            <Modal
            open={openModal2}
            onClose={handleClose2}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <div className="yelp-modal">
                    <div className="close-button-container">
                        <button onClick={handleClose2} id="yelp-close-button"><CloseIcon/></button>
                    </div>
                    {loaded ? <YelpZipList item={item} zipcode={zipcode} restaurants={restaurants}/> : 
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
