import { useEffect, useState } from "react";
import Modal from '@mui/material/Modal';
import "./YelpModal.css";
import CloseIcon from '@mui/icons-material/Close';

const YelpModal = ({ item }) => {

    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    const YELP = process.env.YELP_API;
    
    useEffect(() => {
        
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
                    <div className="yelp-modal-content">
                        <div className="yelp-modal-title">
                            Find {item} nearby your location
                        </div>
                        <div className="yelp-box">
                            <div className="yelp-list">

                            </div>
                            <div className="yelp-selected-business">

                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
 
export default YelpModal;