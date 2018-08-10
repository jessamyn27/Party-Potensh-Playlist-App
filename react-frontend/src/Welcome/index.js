import React, { Component } from 'react';

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
    console.log(e.currentTarget);
    window.location.assign(`/spotify?spotifyURI=${this.state.playlistUri}`)
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