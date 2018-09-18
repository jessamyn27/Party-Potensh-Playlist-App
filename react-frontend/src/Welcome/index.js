import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import styled from 'styled-components';
import Body from '../Body';



class Welcome extends Component {
  constructor () {
    super();
    this.state= {
      playlistUri: '',
    }
  }

  textInputHandler = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    })
  }

  submitHandler = (e) => {
    e.preventDefault();
    // this.props.history.push(`/spotify?spotifyURI=${this.state.playlistUri}`)

    this.props.history.push({
      pathname: '/spotify',
      search: `?spotifyURI=${this.state.playlistUri}`,
      state: { detail: this.state.playlistUri }
    })


  }

  render() {
    console.log(this.state)
   return (
    <div>
      <h1>Welcome to Party Potensh!</h1>
      <br></br>
      <br></br>
      <h3> if you have a playlist URI code enter it below</h3>
      <form onSubmit={this.submitHandler}>
        <input type='text' placeholder='Playlist URI' name='playlistUri' value={this.state.playlistUri} onChange={this.textInputHandler}/>
        <input type='submit' value='submit' />
        <br></br>
        <br></br>
        <h4>don't have one?  <br></br><br></br>register to create your own profile and make a party playlist
        <br></br><br></br>check out one of my party playlists to get an idea! </h4>
        <a className = "a" href='http://localhost:3000/spotify?spotifyURI=spotify:user:classixxmusic:playlist:2GallY5JYoDz8PgZNbvaS2'>My Groovy Party</a>
      </form>

    </div>
    )
  }
}


export default Welcome;
