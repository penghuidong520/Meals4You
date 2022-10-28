import { Popover } from "@mui/material";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import './WheelIndexPage.css';
import { useDispatch, useSelector } from "react-redux";
import { updateContents } from "../../store/contents";
import { createWheel, fetchUserWheels } from "../../store/wheels";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';



const ButtonContent = ({ randWheel, handleMessage }) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const dispatch = useDispatch();
    const [ownWheel, setOwnWheel] = useState(false)
    const sessionUser = useSelector(state => state.session.user)
    const userWheel = useSelector(state => state.wheels)
    const [loadedUser, setLoadedUser] = useState(false)

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleSaveWheel = () => {
        dispatch(updateContents({title: randWheel.title, contents: randWheel.contents}))
        dispatch(createWheel({title: randWheel.title, contents: randWheel.contents}))
        setOwnWheel(true)
        handleMessage()
    }


    return (
        <div className="index-button-container">
            <Button aria-describedby={id} 
                        variant="contained" 
                        onClick={handleClick}
                        id="google-button"
            >
                {randWheel.title}
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
                }}
            >
            <div className="pop-up">
                <div className="pop-up-top-container">
                    <div className="pop-list">
                        {randWheel.contents.map(content => 
                            <li key={content} id="content-list">{content}</li>
                        )}
                    </div>
                    <div className="pop-up-own-mark">
                        {ownWheel ? <CheckCircleIcon /> : ""}
                    </div>
                </div>
                <div className="save-content-button">
                    <button onClick={handleSaveWheel} id='save-button'>Save this wheel</button>
                </div>
            </div>
            </Popover>
        </div>
    );
}
 
export default ButtonContent;