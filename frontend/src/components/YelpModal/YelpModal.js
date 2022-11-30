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
import GpsFixedIcon from '@mui/icons-material/GpsFixed';

const YelpModal = ({ item, lat, log }) => {

    const [openModal, setOpenModal] = useState(false);
    const [zipcode, setZipcode] = useState("");
    const [placeholderText, setPlaceHolder] = useState(" Search by Zip, City, or State")
    const [location, setLocation] = useState("your current location")
    // const [restaurants, setRestaurants] = useState([])
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();
    const restaurants = useSelector(getRestaurants)

    const handleCurrentOpen = () => {  
        setLoaded(true);  
        setOpenModal(true);
    }
    const handleClose = () => setOpenModal(false);


    const handleZipcode = (e) => {
        setZipcode(e.target.value)
    }

    const handleUpdate = () => {
        dispatch(fetchRestaurants({ item: item, zipcode: zipcode }))
        setLocation(zipcode)
    }

    const handleGPS = () => {
        if (lat && log) {
            dispatch(fetchRestaurants({ item: item, lat: lat, log: log }))
        } else {
            navigator.geolocation.getCurrentPosition(function(pos) {
                dispatch(fetchRestaurants({ item: item, lat: pos.coords.latitude, log: pos.coords.longitude }))
            })
        }
        setPlaceHolder("Current Location")
    }

    return (
        <div className="yelp-modal-container">
             <div className="current-box">
                <button className="yelp-button-box" onClick={handleCurrentOpen}>Find Restaurants</button>
             </div>
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
                    <div className="yelp-modal-title">
                        {item} near {location}
                    </div>
                    <div className="update-location">
                        <div className="location-search">
                            <input type="text" 
                            onChange={handleZipcode} 
                            value={zipcode} 
                            placeholder={placeholderText}
                            id="location-search"
                            />
                            <button onClick={handleGPS} id="gps-button"><GpsFixedIcon /></button>
                        </div>
                        <button onClick={handleUpdate} id="update-button">Update Location</button>
                    </div>
                    <YelpList restaurants={restaurants}/>
                </div>
            </Modal>
        </div>
    );
}
 
export default YelpModal;
