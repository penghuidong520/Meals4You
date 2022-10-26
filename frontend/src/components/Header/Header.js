import React, { useEffect } from 'react';
import logo  from '../../images/logo-meals4u.png';
import './Header.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../../store/session';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HeaderProfile from '../HeaderProfile/HeaderProfile';

function Header() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)

    useEffect(()=>{

    }, [sessionUser]);

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    }

    const handleDemo = (e) => {
        e.preventDefault();
        dispatch(login( { email: "demo@user.io", password: "password" } ))
    }

    return (
        <div className='header'>
            <div className='header-logo-container'>
                    <Link to='/' >
                        <img id="header-logo" src={logo} alt="" />
                    </Link>
            </div>
            <div className="center-nav">
                <div className="home">
                    Home
                </div>
                <div className="about">
                    About
                </div>
                <div className="profile">
                    Profile
                </div>
            </div>
            <div className='header-button-container'>
                {sessionUser && <HeaderProfile sessionUser={sessionUser}/>}
                {!sessionUser && <Link className='header-button' to='/login'>
                    Log In
                </Link>}
                {!sessionUser && <Link className='header-button' to='/signup'>
                    Sign Up
                </Link>}
                {!sessionUser && <button className='header-button' onClick={handleDemo} > Demo User
                </button>}
                    {/* <button to='/'>Demo User</button> */}
            </div>
        </div>
    );
}


export default Header;