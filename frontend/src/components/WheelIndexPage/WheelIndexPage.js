import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, getUsers } from '../../store/users';
import UserAccordion from '../UserAccordion/UserAccordion';
import './WheelIndexPage.css';


const WheelIndexPage = () => {
    const dispatch = useDispatch();
    const users = useSelector(getUsers)
    const [loadedUsers, setLoadedUsers] = useState(false);
    const [expanded, setExpanded] = useState("");

    useEffect(() => {
        dispatch(fetchUsers()).then(() => setLoadedUsers(true))
    },[dispatch])



    return loadedUsers && (
        <>
            <div className="index-page">
                <div className="index-title">
                    Check out our users's wheels.
                </div>
                <div className="index-container">
                    {users.map(user => <UserAccordion 
                        expanded={expanded === user._id} 
                        key={user._id} 
                        user={user}
                        // onChange={handleChange(user._id)}
                        />)
                    }
                </div>
            </div>
        </>
    );
}
 
export default WheelIndexPage;