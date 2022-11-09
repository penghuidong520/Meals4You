import { useEffect, useState } from "react";
import Modal from '@mui/material/Modal';
import "./YelpModal.css";
import CloseIcon from '@mui/icons-material/Close';
import YelpList from "./YelpList";
import axios from 'axios';

const YelpModal = ({ item }) => {

    const [openModal, setOpenModal] = useState(false);
    const [restaurants, setRestaurants] = useState([])
    const [loaded, setLoaded] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    

    useEffect(() => {
        const fetchRest = async () => {
            const data = await axios
            .get(
                `${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=nyc`, {
                    headers: {
                        Authorization: `Bearer lwP3BHKGDyMyjAEaSTV7CVWpnJyQYLH0CAVGzRxdxrwgPbV0GK52UBmBIRbRTcletnrfIVukKlseH5ze2Xojp8wr8alq9GVOFXITEyLBh2h9RS3445nZmUW6t7JpY3Yx`,
                    },
                    params: {
                        term: `${item}`
                    },
                },
            )
            .then(json => {
                setRestaurants(json.data.businesses);
                setLoaded(true);
            })
            .catch(err => {
                console.log(err)
            })
        }
        fetchRest();
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
                    {loaded ? <YelpList item={item}/> : 
                        <div className="yelp-loading">
                            Please wait while we load the restaurant nearby...
                        </div>
                    }
                </div>
            </Modal>
        </div>
    );
}
 
export default YelpModal;