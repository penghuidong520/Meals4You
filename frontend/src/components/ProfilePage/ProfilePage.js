import './ProfilePage.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchUserDishes, getDishes } from '../../store/dishes';
import DishIndex from '../DishIndex';
import NewWheelModal from '../NewWheelModal/NewWheelModal';
import ProfileSpin from '../SpinWheel/ProfileSpin';
import SavedWheels from '../SavedWheels';
import FavoratedWheels from '../FavoratedWheels';
import { fetchUserWheels } from '../../store/wheels';
import { Link, useHistory } from 'react-router-dom';


const ProfilePage = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const sessionUser = useSelector(state => state.session.user);
	const wheel = useSelector(state => state.wheel);
	const [selectedItem, setSelectedItem] = useState(null);
	
	if (!sessionUser) {history.push("/login")}

	useEffect(()=>{
		dispatch(fetchUserDishes(sessionUser?._id));
		dispatch(fetchUserWheels(sessionUser?._id));
	}, [dispatch, sessionUser])


	return (
	<>
		<div className="profile-page">
			<div className="edit-wheel-container">
				<div className="edit-wheel">
					<div className='profile-page-button'>
						<div className="new-wheel-button">
							<NewWheelModal />
						</div>
						<div className="explore-wheels">
							<Link id="explore-wheels-button" to='/index' >
								<button id="explore-wheels-button" >No ideas? Explore more wheels.</button>
							</Link>
						</div>
					</div>
					{/* <div className="save-dish-container"> */}
							{/* <DishIndex /> */}
					{/* </div> */}
				</div>
			</div>
			<div className='saved-wheel-and-wheel'>
				<div className="save-wheels-container">
					<div className="save-wheels">
						<div className='wheel-table'>
							<button className="save-wheel-title">
								Saved Wheels
							</button>
							<button className="favorate-wheel-title">
								Favorated Wheels
							</button>
						</div>
						<div className='wheelTableList'>
							<div className="saved-wheel-list">
								<SavedWheels />
							</div>
							<div className="favorate-wheel-list">
								<FavoratedWheels />
							</div>
						</div>
					</div>
				</div>
				<div className="center-wheel-container">
					<div className="center-wheel">
						<ProfileSpin wheel={wheel} />
					</div>
				</div>
			</div>
		</div>
	</>
	);
}
 
export default ProfilePage;