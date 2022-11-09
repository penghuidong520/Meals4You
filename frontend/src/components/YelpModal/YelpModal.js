import { useEffect, useState } from "react";
import Modal from '@mui/material/Modal';
import "./YelpModal.css";
import CloseIcon from '@mui/icons-material/Close';
import YelpList from "./YelpList";
import axios from 'axios';

const YelpModal = ({ item }) => {

    const [openModal, setOpenModal] = useState(false);
    const [restaurants, setRestaurants] = useState([])
    const [loading, setLoading] = useState(true);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    
    
    // axios({
    //     method: 'POST',
    //     url: `${backend}api/search/`,
    //     headers: {'Content-Type': 'application/json',
    //             "Access-Control-Allow-Origin": "*",
    //             "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    //     },
    //     withCredentials: true,
    //     data: item
    // })
    // .then(response => {
    //     setRestaurants(response.data)
    // })
    // .catch(err => {
    //     console.log(err)
    // })

    let backend
    if (document.location.hostname === 'localhost') {
        backend = 'http://localhost:5000/'
    } else {
        backend = 'https://meals4yo.herokuapp.com/'
    }

    useEffect(() => {
        fetch(`${backend}api/search/`, {
            method: 'post',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
                
            },
            body: JSON.stringify({term: item})
        })
        .then(response => response.json())
        .catch(err => {
            console.log(err)
        })
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