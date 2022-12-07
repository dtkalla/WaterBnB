import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SignupFormModal from '../SignupFormModal';
import * as sessionActions from '../../store/session';
// import DemoLogin from '../DemoLogin';
// import { NavLink } from 'react-router-dom';
// import ProfileButton from './ProfileButton';


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
      <div className="logged-in-links">
        {/* <li>{sessionUser.firstName}</li>
        <li>{sessionUser.email}</li> */}
        <li>
          <div className='dropdown-menu-option' onClick={logout}><span id='logout'>Log Out</span></div>
        </li>
      </div>
    );
  } else {
    sessionLinks = (
      <div className='logged-out-links'>
        <ul>
          <li><LoginFormModal /></li>
          <li><SignupFormModal /></li>
        </ul>
      </div>
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