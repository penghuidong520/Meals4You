import './ProfilePage.css';
import { useSelector, useDispatch } from 'react-redux';
import { handleClick, useEffect, useState } from 'react';
import { fetchUserDishes, getDishes } from '../../store/dishes';
import DishIndex from '../DishIndex';
import NewWheelModal from '../NewWheelModal/NewWheelModal';
import ProfileSpin from '../SpinWheel/ProfileSpin';
import SavedWheels from '../SavedWheels';
import FavoratedWheels from '../FavoratedWheels';
import { fetchUserWheels } from '../../store/wheels';
import { fetchUserFavorites } from '../../store/favoriteWheel';
import { Link, useHistory } from 'react-router-dom';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


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
		dispatch(fetchUserFavorites());
	}, [dispatch, sessionUser])

	const TabPanel=(props)=>{
		const { children, value, index, ...other } = props;
		  return (
		    <div
		      role="tabpanel"
		      hidden={value !== index}
		      id={`simple-tabpanel-${index}`}
		      aria-labelledby={`simple-tab-${index}`}
		      {...other}
		    >
		      {value === index && (
		        <Box sx={{ p: 3 }}>
		          <Typography>{children}</Typography>
		        </Box>
		      )}
		    </div>
		  );
	}

	TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const a11yProps=(index)=> {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 

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
					{/* <div className="save-wheels">
						<div className='wheel-table'>
							<a className="save-wheel-title">
								Saved Wheels
							</a>
							<a className="favorate-wheel-title">
								Favorated Wheels
							</a>
						</div>
						<div className='wheelTableList'>
							<div className="saved-wheel-list">
								<SavedWheels />
							</div>
							<div className="favorate-wheel-list">
								<FavoratedWheels />
							</div>
						</div>
					</div> */}
				
				<Box className="save-wheels" sx={{ width: '100%' }}>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
							<Tab label="Saved Wheels" {...a11yProps(0)} />
							<Tab label="Favorated Wheels" {...a11yProps(1)} />
						</Tabs>
					</Box>
					<TabPanel value={value} index={0}>
						<SavedWheels />
					</TabPanel>
					<TabPanel value={value} index={1}>
						<FavoratedWheels />
					</TabPanel>
				</Box>

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