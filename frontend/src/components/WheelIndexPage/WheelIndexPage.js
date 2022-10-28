import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, getUsers } from '../../store/users';
import './WheelIndexPage.css';
import ButtonContent from './ButtonContent';
import { fetchRandomWheels, getRandWheels } from '../../store/randWheels';
import RefreshIcon from '@mui/icons-material/Refresh';
import { fetchUserWheels } from '../../store/wheels';
import { Alert } from '@mui/material';


const WheelIndexPage = () => {
    const dispatch = useDispatch();
    const [loadedWheels, setLoadedWheels] = useState(false);
    const randWheels = useSelector(getRandWheels);
    // const sessionUser = useSelector(state => state.session.user)
    const [showSaved, setShowSaved] = useState(false)


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


    return loadedWheels && (
        <>
            {showSaved ? <Alert severity="success" id="save-alert">This wheel has been saved into your wheel collection</Alert> : ""}
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
        </>
    );
}
 
export default WheelIndexPage;