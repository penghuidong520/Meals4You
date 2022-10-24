import React from 'react';
import logo  from '../../images/logo-meals4u.png';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
        <div className='header-logo-container'>
                <Link to='/' >
                    <img id="header-logo" src={logo} alt="" />
                </Link>
        </div>
        <div className='header-button-container'>
            <Link className='header-button' to='/login'>
                Log In
            </Link>
            <Link className='header-button' to='/signup'>
                Sign Up
            </Link>
            <div className='header-button'> Demo User
                {/* <button to='/'>Demo User</button> */}
            </div>
        </div>
    </div>
  );
}

export default Header;