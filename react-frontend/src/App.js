import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './Login';
import './App.css';
import About from './About';
import Edit from './Edit';
import Parties from './Parties';
import CreateParty from './CreateParty';
import Register from './Register';
import Nav from './Nav';
import Maincontainer from './Maincontainer';
import Logout from './Logout';
import Spotify from './Spotify'
import Welcome from './Welcome';

class App extends Component {
  render() {
    return (
      <div>
      <main>
      <Nav/>
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login}/>
        <Route exact path='/Logout' component={Logout}/>
        <Route exact path='/profile' component={Maincontainer}/>
        <Route exact path='/spotify' component={Spotify}/>
        <Route exact path='/about' component={About}/>
        <Route component={Welcome}/>       

      </Switch>
    </main>
      </div>
    );
  }
}

export default App;
