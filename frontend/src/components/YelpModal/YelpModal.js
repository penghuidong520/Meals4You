import { useEffect, useState } from "react";
import Modal from '@mui/material/Modal';
import "./YelpModal.css";
import CloseIcon from '@mui/icons-material/Close';
import YelpList from "./YelpList";

const YelpModal = ({ item }) => {

    const [openModal, setOpenModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    const YELP = process.env.YELP_API;

    useEffect(() => {
        fetch(`https://api.yelp.com/v3/businesses/search?term=${item}&location=nyc`)
            .then()
            .then(setLoading(true))
    },[])

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
                    {loading ? <YelpList /> : 
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