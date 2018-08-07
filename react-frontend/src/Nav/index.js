import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

const Nav = () => {
  return (
      <nav>
        <ul>
          <li><Link to ='/'>Login</Link></li>
          <li><Link to='/profile'>My Profile</Link></li>
        </ul>
      </nav>
    )
}

export default Nav;
