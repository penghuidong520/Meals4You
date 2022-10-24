
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import LoginPage from './components/SessionPage/LoginPage';
import SignUpPage from './components/SessionPage/SignUpPage';
import { getCurrentUser } from './store/session';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser()).then(() => setLoaded(true));
  }, [dispatch]);

  return loaded && (
    <>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </>
  );
}

export default App;