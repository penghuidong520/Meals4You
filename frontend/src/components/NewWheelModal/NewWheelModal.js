import Modal from '@mui/material/Modal';
import { useState } from 'react';
import NewSpinWheel from '../SpinWheel/NewSpinWheel'
import { useDispatch } from 'react-redux';
import { createWheel } from '../../store/wheels';
import { updateContents } from '../../store/contents';
import CloseIcon from '@mui/icons-material/Close';
import './NewWheelModal.css';

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
    const [title, setTitle] = useState('');
    
    const handleSaveWheel = (e) => {
        // e.preventDefault();
        if (!title){alert('Give your precious wheel a name')
            handleOpen()}
        else if (contents.length === 0 || contents === []) {alert('Add some food in your wheel')
            handleOpen()}
        else if (contents.length < 2) {alert('You need to have at Least 2 items in your wheel')
            handleOpen()}
        else{
            dispatch(createWheel({title, contents}));
            dispatch(updateContents({title, contents}));
            setTitle('');
            handleClose()
        }
    }

    const handleKey = e =>{
        // e.preventDefault()
        let code = e.keyCode || e.which
        if (code === 13) {
          handleSaveWheel()
        }
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
            <div className="modal-container" >
                <div className='new-wheel-title'>
                    <div className="add-close-button">
                        <div className="modal-title">
                            Create Your Own Wheel
                        </div>
                        <div className="close-button" style={{display: "flex", alignSelf: "flex-end"}}>
                            <button onClick={handleClose} id="new-wheel-close-button"><CloseIcon/></button>
                        </div>
                    </div>
                    <div className="empty">
                        WheelName:<input id="input-text" type="text" 
                        placeholder=' what is your wheel name?' 
                        value={title} 
                        onChange={e=>setTitle(e.target.value)}
                        onKeyPress={handleKey} 
                        />
                        <div className="add-button-container">
                            <button className="save-button" onClick={handleSaveWheel} >Save new wheel</button>
                        </div>
                    </div>
                </div>
                    < NewSpinWheel setContents={setContents} /> 
            </div>
        </Modal>
        </>
    );
}
 
export default AddNewWheelModal;