import Modal from '@mui/material/Modal';
import { useState } from 'react';
import './NewWheelModal.css';
// import '../NewWheelModal/NewWheelModal.css';
import EditSpinWheel from '../SpinWheel/EditSpinWheel'
import { useDispatch } from 'react-redux';
import { updateWheel } from '../../store/wheels';
import { updateContents } from '../../store/contents';
import editIcon from "../../images/edit.png";
import CloseIcon from '@mui/icons-material/Close';


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

const EditWheelModal = ({wheel}) => {
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    const [contents, setContents] = useState(wheel.contents);
    const [title, setTitle] = useState(wheel.title);
    // console.log(wheel.contents);
    const handleSaveWheel = (e) => {
        e.preventDefault();
        if (!title) alert('Give your precious wheel a name');
        // console.log(title);
        if (!contents) alert('Add some food in your wheel');
        if (contents.length < 2) alert('You need at Least 2 items in wheel');
        dispatch(updateWheel({...wheel, title, contents}));
        dispatch(updateContents({title, contents}));
        // setTitle('');
        handleClose();

    }

    return (
        <>
        <button className='editButton' onClick={handleOpen}><img id="editIcon" src={editIcon} alt="" /></button>
        <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className="modal-container">
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
                        <input id="input-text" type="text" placeholder='what is your wheel name?' value={title} onChange={e=>setTitle(e.target.value)} />
                    <div className="add-button-container">
                        <button className="save-button" onClick={handleSaveWheel} >Save your new wheel</button>
                    </div>
                    </div>
                </div>
                    < EditSpinWheel setContents={setContents} contents={contents} /> 
                        {/* <div className="empty"> <input type="text" /> </div> */}
                        {/* <div className="empty"> <input type="text" /> </div> */}
            </div>
        </Modal>
        </>
    );
}
 
export default EditWheelModal;