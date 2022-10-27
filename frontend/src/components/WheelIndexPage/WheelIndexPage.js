import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, getUsers } from '../../store/users';
import UserAccordion from '../UserAccordion/UserAccordion';
import './WheelIndexPage.css';
import ButtonContent from './ButtonContent';
import { fetchRandomWheels, getRandWheels } from '../../store/randWheels';
import RefreshIcon from '@mui/icons-material/Refresh';


const WheelIndexPage = () => {
    const dispatch = useDispatch();
    const [loadedWheels, setLoadedWheels] = useState(false);
    const randWheels = useSelector(getRandWheels);


    useEffect(() => {
        dispatch(fetchRandomWheels()).then(() => 
        setLoadedWheels(true));
    },[dispatch])

    const handleRefresh = () => {
        dispatch(fetchRandomWheels())
    }


    return loadedWheels && (
        <>
            <div className="index-page">
                <div className="index-title">
                    Check out our users's wheels.
                </div>
                <div className="refresh-button">
                    <div className="refresh-message"> Don't really like these? Click to see more</div>
                    <button id='refresh-button' onClick={handleRefresh}><RefreshIcon /></button>
                </div>
                <div className="index-buttons">
                    {randWheels?.map(randWheel => 
                        (<ButtonContent key={randWheel._id} randWheel={randWheel}/>)
                    )}
                </div>
            </div>
        </>
    );
}
 
export default WheelIndexPage;