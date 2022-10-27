import Modal from '@mui/material/Modal';
import { useState } from 'react';
import './NewWheelModal.css';
import NewSpinWheel from '../SpinWheel/NewSpinWheel'
import { useDispatch } from 'react-redux';
import { createWheel } from '../../store/wheels';
import { updateContents } from '../../store/contents';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const AddNewWheelModal = () => {
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    const [contents, setContents] = useState([]);
    const [title, setTitle] = useState([]);
    
    const handleSaveWheel = (e) => {
        e.preventDefault();
        dispatch(createWheel({title, contents}));
        dispatch(updateContents({title, contents}));
    }

    return (
        <>
        <button id="new-wheel-button" onClick={handleOpen}>Create a new wheel</button>
        <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className="modal-container">
                <div className='new-wheel-title'>
                <div className="modal-title">
                    Create Your Own Wheel
                </div>
                <div className="empty">
                    <input id="input-text" type="text" placeholder='what is your wheel name?' value={title} onChange={e=>setTitle(e.target.value)} />
                </div>
                    <div className="add-button-container">
                        <button className="save-button" onClick={handleSaveWheel} >Save your new wheel</button>
                    </div>
                </div>
                    < NewSpinWheel setContents={setContents} /> 
                        {/* <div className="empty"> <input type="text" /> </div> */}
                        {/* <div className="empty"> <input type="text" /> </div> */}
            </div>
        </Modal>
        </>
    );
}
 
export default AddNewWheelModal;