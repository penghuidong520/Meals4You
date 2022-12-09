import { useEffect, useState } from "react";
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import YelpList from "./YelpList";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "../../store/yelp";
import { getRestaurants } from "../../store/yelp";
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import "./YelpModal.css";

const YelpModal = ({ item, outLog, outLat }) => {

    const [openModal, setOpenModal] = useState(false);
    const [zipcode, setZipcode] = useState("");
    const [placeholderText, setPlaceHolder] = useState(" Search by Zip, City, or State")
    const [location, setLocation] = useState("your current location")
    // const [restaurants, setRestaurants] = useState([])
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();
    const restaurants = useSelector(getRestaurants)
    const [searchByGPS, setSearchByGPS] = useState(false)
    const [log, setLog] = useState(outLog);
    const [lat, setLat] = useState(outLat);
    console.log(log, lat)

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
        setSearchByGPS(false)
    }

    const handleGPS = () => {
        if (lat && log) {
            dispatch(fetchRestaurants({ item: item, lat: lat, log: log }))
        } else {
            navigator.geolocation.getCurrentPosition(function(pos) {
                if (!lat || !log) {
                    setLat(pos.coords.latitude)
                    setLog(pos.coords.longitude)
                }
                dispatch(fetchRestaurants({ item: item, lat: pos.coords.latitude, log: pos.coords.longitude }))
            })
        }
        setPlaceHolder("Current Location")
        setSearchByGPS(true)
    }

    useEffect(() => {
        if (lat && log) {
            dispatch(fetchRestaurants({ item: item, lat: lat, log: log }))
        } else {
            navigator.geolocation.getCurrentPosition(function(pos) {
                if (!lat || !log) {
                    setLat(pos.coords.latitude)
                    setLog(pos.coords.longitude)
                }
                dispatch(fetchRestaurants({ item: item, lat: pos.coords.latitude, log: pos.coords.longitude }))
            })
        }
    },[])

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
                    {(log && lat) ? <YelpList restaurants={restaurants}/> : 
                    <div className="getting-location">
                        <div className="loc-1">Please share your location with us by pressing the allow button that popped up on </div>
                        <div className="loc-2">the upper left corner, you should see the restaurants after few seconds!!</div>
                        <div className="loc-3">If you did not see the pop up, try clicking the locate button<GpsFixedIcon id="gps-icon"/> above.</div>
                    </div>
                    }
                    
                </div>
            </Modal>
        </div>
    );
}
 
export default YelpModal;
