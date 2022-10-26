import logo  from '../../images/logo-meals4u.png';
import './LoginPage.css';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { login, clearSessionErrors } from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';

const LoginEmailField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'black',
    },
    // '& label': {
    //     color: 'grey',
    // },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'blue',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'light-gray',
      },
      '&:hover fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
    },
});

const LoginPasswordField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'black',
    },
    // '& label': {
    //     color: 'grey',
    // },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'blue',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'light-gray',
      },
      '&:hover fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
    },
});

const LoginPage = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const sessionUser = useSelector(state => state.session.user);

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    }

    const isValidPassword = (password) => {
        return password.length > 5;
    }

    const handleEmail = e => {
        if (!isValidEmail(e.target.value)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
        setEmail(e.target.value);
    }

    const handlePassword = e => {
        if (!isValidPassword(e.target.value)) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
        setPassword(e.target.value);
    }

    useEffect(() => {
        return () => {
          dispatch(clearSessionErrors());
        };
    }, [dispatch]);

    if (sessionUser) return <Redirect to='/'/>
    

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login({ email: email, password: password }));
    }

    const handleLoginDemo = (e) => {
        e.preventDefault();
        dispatch(login( { email: "demo@user.io", password: "password" } ))
    }

    return (
        <>
            <div className="log-in-page">
                <div className="left-container">
                    <div className="logo-container">
                        <Link to="/">
                            <img src={logo} alt="" id="log-in-logo" />
                        </Link>
                    </div>
                </div>
                <div className="right-container">
                    <div className="log-in-container">
                        <div className="log-in-title">
                            Log In
                        </div>
                        <div className="log-in-email">
                            <LoginEmailField 
                                id="log-in-email" 
                                label="Email" 
                                value={email}
                                onChange={handleEmail}
                                variant="outlined"
                                error={emailError}
                            />
                        </div>
                        <div className="log-in-password">
                            <LoginPasswordField 
                                id="log-in-password" 
                                label="Password" 
                                value={password}
                                onChange={handlePassword}
                                variant="outlined"
                                error={passwordError}
                                type="password"
                            />
                        </div>
                        <div className="log-in-button">
                            <button id="log-in-button" type="submit" onClick={handleLogin}>Log In</button>
                        </div>
                        <div className="log-in-button">
                            <button id="log-in-button" type="submit" onClick={handleLoginDemo}>Demo User</button>
                        </div>
                        <div className="create-acc">
                            Don't have an account? <Link id="sign-in-link" to="/signup">Sign Up</Link>!
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default LoginPage;