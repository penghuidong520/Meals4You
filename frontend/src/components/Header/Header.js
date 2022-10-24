import React from 'react';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
      <div className='signup'>
        <Link id='signup' to="/signup">Sign Up</Link>
      </div>
      <div className='login'>
        <Link id='login' to="/login">Log In</Link>
      </div>
      </>
    );
  }

  return (
    <>
      <div className='nav'>
        <div className='nav-left'>
          {/* <Link className='explore'>explore</Link> */}
            {/* <div>
              explore
            </div>
            <div>
              community
            </div>
            <div>
              saved
            </div>
            <div>
              shop
            </div> */}
        </div>
          <div className='logo'>
            <Link id="logo-link" to='/'>
              <img id='logo-img-home' src={logo2} alt="logo"></img> 
            </Link>
          </div>

          <div className='nav-right'>
              {sessionLinks}
          </div>
        </div>
      </>
  );
}

export default Navigation;