import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonContent from './ButtonContent';
import { fetchRandomWheels, getRandWheels } from '../../store/randWheels';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Alert } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import './WheelIndexPage.css';

const WheelIndexPage = () => {
    const dispatch = useDispatch();
    const [loadedWheels, setLoadedWheels] = useState(false);
    const randWheels = useSelector(getRandWheels);
    const [showSaved, setShowSaved] = useState(false)
	const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    useEffect(() => {
        dispatch(fetchRandomWheels()).then(() => 
        setLoadedWheels(true));
    },[dispatch])

    const handleRefresh = () => {
        dispatch(fetchRandomWheels())
    }

    const handleMessage = () => {
        setShowSaved(true)
        setTimeout(() => {
            setShowSaved(false)
        }, 3500)
    }

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return loadedWheels && (
        <div className='explore-wrapper'>
            {showSaved ? <Alert severity="success" id="save-alert">This wheel has been saved into your wheel collection</Alert> : ""}
                    <div className="profile-dropdown">
                            <Button
                                id="profile-instruction-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <TouchAppIcon/>Instruction
                            </Button>
                            <Menu
                                id="profile-instruction-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}
                            >
                                <ul className='explore-instruction-content'>
                                    <li>1. Explore different wheels from other users and copy them as your own.</li>
                                    <li>2. Only 10 wheels will be displayed, update the list by clicking <RefreshIcon sx={{ fontSize: 20 }}/></li>
                                    <li>3. Explore the dishes in each wheel and save the wheel as your own by clicking <span>&nbsp;'Save this wheel'&nbsp;</span></li>
                                    <li>4. Learn more about instruction <Link to="/about">&nbsp;here</Link></li>
                                </ul>
                            </Menu>
                    </div>
                    <div className="index-page">
                        <div className="index-title">
                            Check out some of our users's wheels.
                        </div>
                        <div className="refresh-button">
                            <div className="refresh-message"> Don't really like these? Click to see others</div>
                            <button id='refresh-button' onClick={handleRefresh}><RefreshIcon /></button>
                        </div>
                        <div className="index-buttons">
                            {randWheels?.map(randWheel => 
                                (<ButtonContent key={randWheel._id} randWheel={randWheel} handleMessage={handleMessage}/>)
                            )}
                        </div>
                    </div>
        </div>
    );
}
 
export default WheelIndexPage;