import React, { useEffect } from 'react';
import logo  from '../../images/logo-meals4u.png';
import './Header.css';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../../store/session';
import HeaderProfile from '../HeaderProfile/HeaderProfile';

function Header() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const history = useHistory();

    useEffect(()=>{

    }, [sessionUser]);

    const handleDemo = (e) => {
        // e.preventDefault();
        dispatch(login( { email: "demo@user.io", password: "password" } )).then(() => (
            history.push("/profile")
        ))
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
                    <NavLink exact to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
                </div>
                <div className="about">
                    <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About</NavLink>   
                </div>
                <div className="profile">
                    <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>MyWheel</NavLink>
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
            </div>
        </div>
    );
}


export default Header;