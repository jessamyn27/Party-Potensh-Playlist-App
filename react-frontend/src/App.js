import React, { Component } from 'react';
import logo from './logo.svg';
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
      <div className="App">
        {/* <Login /> */}
        <About />
        {/* <Edit /> */}
        {/* <Parties /> */}
        {/* <CreateParty /> */}
        <Register />
        {/* <Profile /> */}

      </div>
    );
  }
}

export default App;
