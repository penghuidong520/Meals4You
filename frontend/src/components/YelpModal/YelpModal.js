import { useEffect, useState } from "react";
import Modal from '@mui/material/Modal';
import "./YelpModal.css";
import CloseIcon from '@mui/icons-material/Close';
import YelpList from "./YelpList";

const YelpModal = ({ item }) => {

    const [openModal, setOpenModal] = useState(false);
    const [restaurants, setRestaurants] = useState([])
    const [loading, setLoading] = useState(true);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    const url2 = `https://api.yelp.com/v3/businesses/search?term=${item}&location=nyc`;
    // const url1 = 'https://cors-anywhere.herokuapp.com/';
    const url = url2;
    

    useEffect(() => {
        const fetchRes = async () => {
            try{
                const res = await fetch(url, {
                    mode: 'no-cors',
                    headers: {
                        // 'Access-Control-Allow-Origin': true,
                        'Content-Type': 'application/json',
                        'Authorization' : 'Bearer lwP3BHKGDyMyjAEaSTV7CVWpnJyQYLH0CAVGzRxdxrwgPbV0GK52UBmBIRbRTcletnrfIVukKlseH5ze2Xojp8wr8alq9GVOFXITEyLBh2h9RS3445nZmUW6t7JpY3Yx'
                    }
                })
                const data = await res.json();
                console.log(data)
                setRestaurants(data.businesses)
            } catch(errors) {
                console.log(errors)
            }
        }
        fetchRes();
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