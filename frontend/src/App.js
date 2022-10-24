
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import MainPage from './components/MainPage/MainPage';
import { getCurrentUser } from './store/session';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser()).then(() => setLoaded(true));
  }, [dispatch]);

  return loaded && (
    <>
      <NavBar />
      <Switch>
        <Route exact to="/" component={MainPage} />
      </Switch>
    </>
  );
}

export default App;