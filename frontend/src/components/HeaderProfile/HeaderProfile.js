import './HeaderProfile.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';

const HeaderProfile = ({sessionUser}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleProfile = () => {
        setAnchorEl(null);
        history.push('/profile')
    };

    const handleLogout = () => {
        setAnchorEl(null);
        dispatch(logout());
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div className="header-profile-container">
                <div className="profile-message">
                    Welcome back,
                </div>
                <div className="profile-dropdown">
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                         {sessionUser.firstName}
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleProfile}>Profile</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </div>
            </div>
        </>
    );
}
 
export default HeaderProfile;