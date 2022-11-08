import { useEffect, useState } from "react";
import Modal from '@mui/material/Modal';
import "./YelpModal.css";
import CloseIcon from '@mui/icons-material/Close';
import YelpList from "./YelpList";

const YelpModal = ({ item }) => {

    const [openModal, setOpenModal] = useState(false);
    const [restaurants, setRestaurants] = useState([])
    const [loading, setLoading] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    const YELP = process.env.YELP_API;

    useEffect(() => {
        const res = fetch(`https://api.yelp.com/v3/businesses/search?term=${item}&location=nyc`, {
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': true,
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${YELP}`
            }   
        })
        .then(res => res.json())
        .then(setLoading(true))
    },[])

    console.log(res)

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
                    {loading ? <YelpList item={item}/> : 
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