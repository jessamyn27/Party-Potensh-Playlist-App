import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';
import './App.css';
import About from './About';
import Edit from './Edit';
import Parties from './Parties';
import CreateParty from './CreateParty';
import Register from './Register';
import Nav from './Nav';
import Maincontainer from './Maincontainer';
import Spotify from './Spotify'

class App extends Component {
  render() {
    return (
      <div>
      <main>
      <Nav/>
      <Maincontainer/>

      <Switch>
        <Route exact path='/' component={Login}/>
        {/* <Route exact path='/profile' component={Profile}/> */}
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
        <Spotify/>

      </div> */}
    );
  }
}

export default App;
