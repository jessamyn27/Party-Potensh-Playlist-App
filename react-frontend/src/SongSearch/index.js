import React, { Component } from 'react';
const spotifyUri = require('spotify-uri');

class SearchForSong extends Component {
  constructor () {
    super();
    this.state = {
      searchTrackName: '',
      searchArtistName: '',
      searchResults: [],
    }
  }

songSearchHandler = (e) => {
  this.setState({
    [e.currentTarget.name]: e.currentTarget.value,
  })
}

searchHandler = async(e) => {
  e.preventDefault();
  const artist = this.state.searchArtistName === '' ? '' : `artist:${this.state.searchArtistName}`;
  const track = this.state.searchTrackName === '' ? '' : `track:${this.state.searchTrackName}`;
  console.log(track, 'this is the track vari');
  //artist:${this.state.searchArtistName}
  const searchData = await fetch(`https://api.spotify.com/v1/search?q=${track} ${artist}&type=track&limit=10`, {
    headers: {'Authorization': 'Bearer ' + this.props.access_token, "Accept": "application/json","Content-Type": "application/json"
  }
  })
  const searchJson = await searchData.json();
  this.setState({ searchResults: searchJson.tracks.items })
}
  render(){
    const searchRender = this.state.searchResults.map((track, index) => {
      console.log(track);
        // console.log(track.artists[0].name);
        // console.log(track.song[0].name);


        const artistName = track.artists[0].name; //variable for your data rep.
        const songName = track.name;


//searchRender is getting all this data. THEN you will actually render this out on the last return. This return is for the mapped data. This is the new array.

        return (
          <div>
            <h3> {songName} by {artistName} </h3>
          </div>
        )

      })
      // })

      console.log(searchRender, ' this is searchRender');



//searchRender is the new array from map.
    return (
    <div>
       <form onSubmit={this.searchHandler}>
        <input type='text' name='searchTrackName' placeholder='Search Song Name' value={this.state.searchTrackName} onChange={this.songSearchHandler}/>
        <input type='text' name='searchArtistName' placeholder='Search Artist' value={this.state.searchArtistName} onChange={this.songSearchHandler}/>
        <input type='submit' value='find'/>
        </form>

        {searchRender}

    </div>
    )
  }
}

export default SearchForSong;
