import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';


import './App.css';

class App extends Component {
  render() {
    return (
      <main>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/profile' component={Profile}/>
      </Switch>
    </main>
    );
  }
}

export default App;
