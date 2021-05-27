import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from './components/Home'
import { findAllSongs, findPopularSongs } from './store/songs'
import SongPage from './components/SongPage'
import UserPage from './components/UserPage'
import SongBlock from './components/SongBlock'
import LoginFormPage from './components/LoginFormPage'

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
      <div className='body__cont'>
        <div className='page__contents'>
          {isLoaded && (
            <Switch>
              <Route exact path="/login">
                <LoginFormPage />
              </Route>
              <Route exact path="/signup">
                <SignupFormPage />
              </Route>
              <Route exact path='/songs/:songId'>
                <SongPage all={all} />
              </Route>
              <Route exact path='/users/:userId'>
                <UserPage />
              </Route>
              <Route exact path='/'>
                <Home all={all} popular={popular} />
              </Route>
            </Switch>
          )}
        </div>
        <div className='song__sidebar__cont'>
          <div className='sidebare__title__cont'>
            <div id='sidebare__title'>All Songs</div>
          </div>
          {Object.values(all).map(song => {
            return (
              <SongBlock key={`${song.name}-`} song={song} />
            )
          })}
        </div>
      </div>
    </>
  );
}

export default App;
