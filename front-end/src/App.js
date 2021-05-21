import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from './components/Home'
import { findAllSongs, findPopularSongs } from './store/songs'
import SongPage from './components/SongPage'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  useEffect(() => {
    dispatch(findAllSongs())
  }, [dispatch])

  useEffect(() => {
    dispatch(findPopularSongs())
  }, [dispatch])

  const all = useSelector(state => state.music.songs)

  const popular = useSelector(state => state.music.popular)

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path='/songs/:songId'>
            <SongPage all={all} />
          </Route>
          <Route exact path='/'>
            <Home all={all} popular={popular} />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
