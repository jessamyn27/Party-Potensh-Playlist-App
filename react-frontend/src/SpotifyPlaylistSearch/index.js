import React, { Component } from 'react';
const spotifyUri = require('spotify-uri');
// this needs to be a 
class SpotifyPlaylistSearch extends Component {
  render () {

    return(
      <div>
        <form onSubmit={this.props.playlistSearchHandler}>
        <input type='text' name='playlistFind' placeholder='Spotify playlist Uri' value={this.props.playlistFind} onChange={this.props.textInputHandler}/>
        <input type='submit' value='find'/>
        </form>
      </div>
    )
  }

}

export default SpotifyPlaylistSearch;
