import { Popover } from "@mui/material";
import { useState } from "react";

const ButtonContent = (randWheel) => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const content = ["burger", "halal", "chinese", "ramen", "something", "something eles"]

    return (
        <>
            <button aria-describedby={id} 
                        variant="contained" 
                        onClick={handleClick}
                >
                    Some wheel's name
            </button>
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
            <div>
                {content.map(item => 
                    <li key={item}>{item}</li>
                )}
            </div>
            </Popover>
        </>
    );
}
 
export default ButtonContent;