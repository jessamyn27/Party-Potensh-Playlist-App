import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logout from '../Logout';

const Nav = () => {
  return (
      <nav className = "navBar">
        <ul>
          <li><Link to = '/Logout'>Logout</Link></li>
          <li><Link to ='/register'>Register</Link></li>
          <li><Link to ='/login'>Login</Link></li>
          <li><Link to='/profile'>My Profile</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </nav>
    )
}

export default Nav;
