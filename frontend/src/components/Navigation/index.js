import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SignupFormModal from '../SignupFormModal';
import * as sessionActions from '../../store/session';
import DemoLogin from '../DemoLogin';


function Navigation(){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch()

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ul className="profile-dropdown">
        <li>{sessionUser.firstName}</li>
        <li>{sessionUser.email}</li>
        <li>
          <button onClick={logout}>Log Out</button>
        </li>
      </ul>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
        {/* <DemoLogin /> */}
      </>
    );
  }

  return (
    <ul>
      <div  id='session-Links'>
        {sessionLinks}
      </div>
      {/* <li>
        <NavLink exact to="/">Home</NavLink>
      </li> */}
    </ul>
  );
}

export default Navigation;