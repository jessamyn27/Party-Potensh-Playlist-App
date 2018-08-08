import React, { Component } from 'react';


class AddToPlaylist extends Component {
  render () {
    // console.log(this.props, 'props for add to play')
    return (
      <div>
        <h1> Add to Playlist</h1>
        <form onSubmit={this.props.addSongHandler}>
        <input type='text' name='songAddedID' placeholder='Spotify song id' value={this.props.songAddedID} onChange={this.props.textInputHandler}/>
        <input type='submit' value='add'/>
        </form>
      </div>
    )
  }
}

export default AddToPlaylist;