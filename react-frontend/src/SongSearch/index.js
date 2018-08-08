import React, { Component } from 'react';
const spotifyUri = require('spotify-uri');

class SearchForSong extends Component {

    render(){
    return (
    <div>
       <form onSubmit={this.props.searchHandler}>
        <input type='text' name='searchTrackName' placeholder='Search Song Name' value={this.props.searchTrackName} onChange={this.props.textInputHandler}/>
        <input type='text' name='searchArtistName' placeholder='Search Artist' value={this.props.searchArtistName} onChange={this.props.textInputHandler}/>
        <input type='submit' value='find'/>
        </form>

        {searchRender}

    </div>
    )
  }
}

export default SearchForSong;
