import './SignUpPage.css';
import logo  from '../../images/logo-meals4u.png';

const SignUpPage = () => {
    return (
        <>
            <div className="sign-up-page">
                <div className="left-container">
                    <div className="logo-container">
                        <img src={logo} alt="" id="sign-up-logo" />
                    </div>
                </div>
                <div className="right-container">
                    <div className="sign-up-container">
                        <div className="sign-up-title">
                            Sign Up
                        </div>
                        <div className="sign-up-fname">
                            Your Fname please
                        </div>
                        <div className="sign-up-lname">
                            Your Lname please
                        </div>
                        <div className="sign-up-email">
                            Your email please
                        </div>
                        <div className="sign-up-password">
                            Your Password
                        </div>
                        <div className="sign-up-confirm-password">
                            Confirm your freaking password
                        </div>
                        <div className="sign-up-button-container">
                            <button>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default SignUpPage;