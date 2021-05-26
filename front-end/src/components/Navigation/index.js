import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SongUpload from '../SongUpload'

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className='nav__cont'>
      <NavLink exact to="/">Home</NavLink>
      {sessionUser && <div className='user__upload__cont'>
        <div>Upload A Song:</div>
        <SongUpload />
      </div>}
      {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
