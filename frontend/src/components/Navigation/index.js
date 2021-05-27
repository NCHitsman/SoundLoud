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
      <div className='nav__button__cont'>
        <ProfileButton user={sessionUser} />
      </div>
    );
  } else {
    sessionLinks = (
      <>
        <div className='nav__button__cont'>
          <button className='nav__button' onClick={(e) => { history.push('/login') }}>Log In</button>
        </div>
        <div className='nav__button__cont'>
          <button className='nav__button' onClick={(e) => { history.push('/signup') }}>Sign Up</button>
        </div>
      </>
    );
  }

  return (
    <div className='nav__cont'>
      <div className='nav__button__cont'>
        <button className='nav__button' onClick={(e) => history.push('/')}>Home</button>
      </div>


      {sessionUser &&
        <div className='nav__button__cont'>
          <div className='user__upload__cont'>
            <SongUpload />
          </div>
        </div>
      }


      {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
