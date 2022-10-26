import './ProfilePage.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchUserDishes, getDishes } from '../../store/dishes';
import DishIndex from '../DishIndex';
import NewWheelModal from '../NewWheelModal/NewWheelModal';
import SpinWheel from '../SpinWheel/SpinWheel';


const ProfilePage = () => {
	const dispatch = useDispatch();
	const sessionUser = useSelector(state => state.session.user);


	useEffect(()=>{
		dispatch(fetchUserDishes(sessionUser?._id))
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

					</div>
				</div>
			</div>
			<div className="center-wheel-container">
				<div className="center-wheel">
					<SpinWheel />
				</div>
			</div>
			<div className="edit-wheel-container">
				<div className="edit-wheel">
					<div className="new-wheel-button">
						<NewWheelModal />
					</div>
					<div className="explore-wheels">
						<button id="explore-wheels-button">No ideas? Explore more wheels.</button>
					</div>
					<div className="save-dish-container">
						<div className="save-dish-title">
						Saved Dishes
						</div>
						<DishIndex />
					</div>
				</div>
			</div>
		</div>
	</>
	);
}
 
export default ProfilePage;