import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

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
      <h1>Welcome to the site</h1>
      <h4> If you have the playlist uri from your party organizer then simply submit below</h4>
      <form onSubmit={this.submitHandler}>
        <input type='text' placeholder='Playlist URI' name='playlistUri' value={this.state.playlistUri} onChange={this.textInputHandler}/>
        <input type='submit' value='submit' />
      </form>

    </div>
    )
  }
}


export default Welcome;