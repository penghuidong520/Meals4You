import AboutPage from '../AboutPage';
import MainPage from '../MainPage/MainPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import LoginPage from '../SessionPage/LoginPage';
import SignUpPage from '../SessionPage/SignUpPage';
import WheelIndexPage from '../WheelIndexPage/WheelIndexPage';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

const AnimatedRoutes = withRouter(({location}) => (
    <TransitionGroup>
        <CSSTransition key={location.key} classNames="animate-route" timeout={1000} >
            <Switch location={location}>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/signup" component={SignUpPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route path="/profile" component={ProfilePage} />
                <Route exact path="/about" component={AboutPage} />
                <Route path="/index" component={WheelIndexPage} />
            </Switch>
        </CSSTransition>
    </TransitionGroup>
));

export default AnimatedRoutes;