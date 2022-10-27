import { Popover } from "@mui/material";
import { useState } from "react";
import { Button } from "@mui/material";
import './WheelIndexPage.css';
import { useDispatch } from "react-redux";
import { updateContents } from "../../store/contents";
import { createWheel } from "../../store/wheels";
import { useHistory } from "react-router-dom";



const ButtonContent = ({ randWheel }) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const dispatch = useDispatch();

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
                horizontal: 'left',
                }}
            >
            <div className="pop-up">
                <div className="pop-list">
                    {randWheel.contents.map(content => 
                        <li key={content} id="content-list">{content}</li>
                    )}
                </div>
                <div className="save-content-button">
                    <button onClick={handleSaveWheel}>Save this wheel</button>
                </div>
            </div>
            </Popover>
        </div>
    );
}
 
export default ButtonContent;