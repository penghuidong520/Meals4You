import './ProfilePage.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchUserDishes, getDishes } from '../../store/dishes';
import DishIndex from '../DishIndex';
import NewWheelModal from '../NewWheelModal/NewWheelModal';
import ProfileSpin from '../SpinWheel/ProfileSpin';
import SavedWheels from '../SavedWheels';
import { fetchUserWheels } from '../../store/wheels';
import { Link } from 'react-router-dom';


const ProfilePage = () => {
	const dispatch = useDispatch();
	const sessionUser = useSelector(state => state.session.user);
	const wheel = useSelector(state => state.wheel);

	useEffect(()=>{
		dispatch(fetchUserDishes(sessionUser?._id));
		dispatch(fetchUserWheels(sessionUser?._id));
	}, [dispatch, sessionUser])


	return (
	<>
		<div className="profile-page">
			<div className="save-wheels-container">
				<div className="save-wheels">
					<div className="save-wheel-title">
						Saved Wheels
					</div>
					<div className="wheel-list">
						<SavedWheels />
					</div>
				</div>
			</div>
			<div className="center-wheel-container">
				<div className="center-wheel">
					<ProfileSpin wheel={wheel} />
				</div>
			</div>
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

					<div className="save-dish-container">
							<DishIndex />
					</div>
				</div>
			</div>
		</div>
	</>
	);
}
 
export default ProfilePage;