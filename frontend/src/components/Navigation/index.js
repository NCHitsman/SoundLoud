import React from 'react';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import SongUpload from '../SongUpload'
import { useHistory } from 'react-router-dom'

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory()

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className='sessionLinksContLoggedIn'>
        <SongUpload />
        <div className='nav__button__cont'>
          <ProfileButton user={sessionUser} />
        </div>
      </div>

    );
  } else {
    sessionLinks = (
      <>
        <div className='sessionLinksCont'>
          <div className='nav__button__cont'>
            <button className='nav__button' onClick={(e) => { history.push('/login') }}>Log In</button>
          </div>
          <div className='nav__button__cont'>
            <button className='nav__button' onClick={(e) => { history.push('/signup') }}>Sign Up</button>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className={'nav__cont'}>

      <div className='nav__button__cont'>
        <div className='nav__title' onClick={(e) => history.push('/')}>SoundLoud</div>
      </div>


      {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
