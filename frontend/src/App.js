
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import LoginPage from './components/SessionPage/LoginPage';
import SignUpPage from './components/SessionPage/SignUpPage';
import { getCurrentUser } from './store/session';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const signup = useRouteMatch("/signup");
  const login = useRouteMatch("/login");

  useEffect(() => {
    dispatch(getCurrentUser()).then(() => setLoaded(true));
  }, [dispatch]);

  return loaded && (
    <>
      { (!signup && !login) && <Header /> }
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route path="/profile" component={ProfilePage} />
      </Switch>
    </>
  );
}

export default App;