import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';


import './App.css';
import Login from './Login';
import About from './About';
import Edit from './Edit';
import Parties from './Parties';
import CreateParty from './CreateParty';
import Register from './Register';
import Profile from './';


class App extends Component {
  render() {
    return (
      <main>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/profile' component={Profile}/>
      </Switch>
    </main>
      {/* <div className="App">
        {/* <Login /> */}
        // <About />
        {/* <Edit /> */}
        {/* <Parties /> */}
        {/* <CreateParty /> */}
        // <Register />
        {/* <Profile /> */}

      </div> */}

    );
  }
}

export default App;
