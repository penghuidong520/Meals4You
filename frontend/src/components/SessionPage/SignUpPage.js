import './SignUpPage.css';
import logo  from '../../images/logo-meals4u.png';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { useState, useEffect, useRef } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { signup, clearSessionErrors, login } from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';

const FnameField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'black',
    },
    // '& label': {
    //     color: 'blue',
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

const LnameField = styled(TextField)({
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

const EmailField = styled(TextField)({
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

const PasswordField = styled(TextField)({
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

const ConfirmField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'black',
    },
    // '& label': {
    //     color: 'grey',
    // },
    '& .MuiFormHelperText-root': {
      color: 'green',
    },
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


const SignUpPage = () => {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [fNameError, setFnameError] = useState(false);
    const [lNameError, setLnameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPwError, setConfirmPwError] = useState(false);
    const [confirmPwMsg, setConfirmPwMsg] = useState("");
    const fNameRef = useRef(null);
    const lNameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPwRef = useRef(null);
    const errors = useSelector(state => state.errors.session)
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();

    
    const isValidName = (name) => {
        return name.length > 0;
    }

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    }

    const isValidPassword = (password) => {
        return password.length > 5;
    }
    
    const handleFname = e => {
        if(isValidName(e.target.value)) {
            setFnameError(false);
        } else {
            setFnameError(true);
        }
        setFirstName(e.target.value);
    }

    const handleLname = e => {
        if(isValidName(e.target.value)) {
            setLnameError(false);
        } else {
            setLnameError(true);
        }
        setLastName(e.target.value);
    }

    const handleEmail = (e) => {
        if (!isValidEmail(e.target.value)) {
            setEmailError(true)
        } else {
            setEmailError(false);
        }
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        if (!isValidPassword(e.target.value)) {
            setPasswordError(true)
        } else {
            setPasswordError(false)
        }
        setPassword(e.target.value);
    }

    useEffect(() => {
      return () => {
        dispatch(clearSessionErrors());
      };
    }, [dispatch]);

    const handleConfirmPw = (e) => {
        if (((e.target.value) === password) && (password.length !== 0)) {
            setConfirmPwError(false)
            setConfirmPwMsg("Your passwords match!")
        } else {
            setConfirmPwError(true)
            setConfirmPwMsg("Passwords do not match.")
        }
        setConfirmPassword(e.target.value)
    }

    const handleRegister = (e) => {
      e.preventDefault();
      if (isValidName(firstName) && isValidName(lastName) &&
          isValidEmail(email) && isValidPassword(password)
      ) {
        dispatch(signup( { firstName: firstName, lastName: lastName, email: email, password: password } ))
      } else {
        if ((password !== confirmPassword) || (confirmPassword.length === 0)) {
          setConfirmPwError(true);
          confirmPwRef.current.focus();
        }
        if (!isValidPassword(password)) {
          setPasswordError(true);
          passwordRef.current.focus();
        }
        if (!isValidEmail(email)) {
          setEmailError(true);
          emailRef.current.focus();
        }
        if (!isValidName(lastName)) {
          setLnameError(true);
          lNameRef.current.focus();
        }
        if (!isValidName(firstName)) {
          setFnameError(true);
          fNameRef.current.focus();
        }
      }
    }

    const handleDemo = (e) => {
      e.preventDefault();
      dispatch(login( { email: "demo@user.io", password: "password" } )).then(() => (
        history.push("/profile")
      ))
    }

    if (sessionUser) return <Redirect to='/'/>


    return (
        <>
            <div className="sign-up-page">
                <div className="left-container">
                    <div className="logo-container">
                        <Link to="/">
                            <img src={logo} alt="" id="sign-up-logo" />
                        </Link>
                    </div>
                </div>
                <div className="right-container">
                    <div className="sign-up-container">
                        <div className="sign-up-title">
                            Sign Up
                        </div>
                        <div className="sign-up-errors">
                          {errors ? errors.email : ""}
                        </div>
                        <div className="sign-up-fname">
                            <FnameField 
                                id="sign-up-fname" 
                                label="First Name" 
                                value={firstName}
                                inputRef={fNameRef}
                                onChange={handleFname}
                                variant="outlined"
                                error={fNameError}
                                helperText={fNameError ? "Please enter your first name" : ""}
                            />
                        </div>
                        <div className="sign-up-lname">
                            <LnameField 
                                id="sign-up-lname" 
                                label="Last Name" 
                                value={lastName}
                                inputRef={lNameRef}
                                onChange={handleLname}
                                variant="outlined" 
                                error={lNameError}
                                helperText={lNameError ? "Please enter your last name" : ""}
                            />
                        </div>
                        <div className="sign-up-email">
                            <EmailField 
                                id="sign-up-email" 
                                label="Email" 
                                value={email}
                                inputRef={emailRef}
                                onChange={handleEmail}
                                variant="outlined" 
                                error={emailError}
                                helperText={emailError? "Please enter a valid email" : ""}
                            />
                        </div>
                        <div className="sign-up-password">
                            <PasswordField 
                                id="sign-up-password" 
                                label="Password" 
                                value={password}
                                inputRef={passwordRef}
                                onChange={handlePassword}
                                variant="outlined"
                                type="password"
                                error={passwordError}
                                helperText={passwordError ? "Please enter a password at lease 6 charaters" : ""}
                            />
                        </div>
                        <div className="sign-up-confirm-password">
                            <ConfirmField 
                                id="sign-up-confirm-password" 
                                label="Confirm Password" 
                                value={confirmPassword}
                                inputRef={confirmPwRef}
                                onChange={handleConfirmPw}
                                variant="outlined" 
                                type="password"
                                error={confirmPwError}
                                helperText={confirmPwMsg}
                            />
                        </div>
                        <div className="sign-up-button-container">
                            <button id="sign-up-button" onClick={handleRegister} >Register</button>
                        </div>
                        <div className="sign-up-button-container">
                            <button id="sign-up-button" onClick={handleDemo} >Demo User</button>
                        </div>
                        <div className="have-account">
                            You have an account with us? <Link id="log-in-link" to="/login">Log In</Link>!
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default SignUpPage;