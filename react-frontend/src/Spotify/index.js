import React, {Component} from 'react';
import queryString from 'query-string';
import SpotifyPlaylistSearch from '../SpotifyPlaylistSearch';
import SearchForSong from '../SongSearch';
import AddToPlaylist from '../AddToPlaylist';
const spotifyUri = require('spotify-uri');

class Spotify extends Component {
  constructor() {
    super();
    this.state = {
      serverData: {}, // currently not used
      allPlaylists: [], // all playlists attached to Spotify-user's account
      spotifyUserID: '', // Spotify User ID
      spotifyName: '', // Name on spotify 
      access_token: '', // access Token from spotify login
      playlistFind: '', // input text for playlist search 
      playlistAddID: '', // the Spotify-Id for playlist added
      partyPlaylists: [], // array to hold partyPlaylist data from Spotify
      songAddedID: '', // Tempt text-input handler for song ID submited for addtion to playlist
      searchTrackName: '', // Text Input for search tracking
      searchArtistName: '', // Text Input for search tracking
      searchResults: []

      
    }
  }

  textInputHandler = (e) => {
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
    const searchData = await fetch(`https://api.spotify.com/v1/search?q=${track} ${artist}&type=track`, {
      headers: {'Authorization': 'Bearer ' + this.props.access_token, "Accept": "application/json","Content-Type": "application/json"
    }
    })
    const searchJson = await searchData.json();
    console.log(searchJson,'search results');
    this.setState({
      searchResults: searchJson,
    })
  }

  playlistSearchHandler = async (e) => {
    e.preventDefault();
    const parsedUri = spotifyUri.parse(this.state.playlistFind)
    // console.log(this.state.playlistFind)
    // console.log(parsedUri);
    const user_id = parsedUri.user;
    const playlist_id = parsedUri.id;
    let PlaylistData = await fetch(`https://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}`, {
      headers: {'Authorization': 'Bearer ' + this.state.access_token, "Accept": "application/json","Content-Type": "application/json"
    }
    });
    const playlistJson = await PlaylistData.json();
    console.log(playlistJson, 'PLAYLISTJson');
    this.setState({
      playlistAddID: playlist_id,
      partyPlaylists: [...this.state.partyPlaylists, playlistJson]
    })
  }

  addSongHandler = async (e) => {
    e.preventDefault();
    
    const songAddedId = {"uris": [`spotify:track:${this.state.songAddedID}`]};
    let addSongData = await fetch(`https://api.spotify.com/v1/users/${this.state.spotifyUserID}/playlists/${this.state.playlistAddID}/tracks`, {
      method: 'POST',
      body: JSON.stringify(songAddedId),
      headers: {'Authorization': 'Bearer ' + this.state.access_token, "Accept": "application/json","Content-Type": "application/json"
    }
    });
    const addSongResponse = await addSongData.json();
    console.log(addSongResponse);
  }

  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;
    if (!accessToken)
      return;
    fetch('https://api.spotify.com/v1/me', {
      headers: {'Authorization': 'Bearer ' + accessToken}
    }).then(response => response.json())
    .then(data => {
      console.log(data, 'user data ME');
      return this.setState({
        spotifyUserID: data.id,
        spotifyName: data.displayName,
        access_token: accessToken,
    }) })

    fetch('https://api.spotify.com/v1/me/playlists', {
      headers: {'Authorization': 'Bearer ' + accessToken, "Accept": "application/json","Content-Type": "application/json"
    }
    }).then(response =>  response.json())
    .then(data => this.setState({
      allPlaylists: data.items.map(item => {
        // console.log(data, 'data in playlist')
        return {
          name: item.name,
          imageUrl: item.images.map((item)=>{
            return item;
          }), 
          songs: []
        }
    })
    })
  )

  } 
  render() {

    // *** THIS IS PRACTIVE API MANGLING 
    // console.log(this.state, 'this is the state')
    // const playlists = this.state.playlists.map((item)=> {
    //   console.log(item.imageUrl[0], 'this is an item')
    //   return item.imageUrl.map((item) => {
    //    console.log(item.url, 'imageURL map')
    //    if (item.url === undefined) {} else {
    //    return <img src={item.url}/> }
    //  })
    // })
    // console.log(playlists);
    console.log(this.state, 'this state')
    return (
    <div>
    <h1>Spotify Main Container</h1>
      <SpotifyPlaylistSearch playlistSearchHandler={this.playlistSearchHandler} textInputHandler={this.textInputHandler} access_token={this.state.access_token}
        playlistFind={this.state.playlistFind}
      />
      <SearchForSong access_token={this.state.access_token} textInputHandler={this.textInputHandler} searchArtistName={this.state.searchArtistName} searchResults={this.state.searchResults} searchTrackName={this.state.searchTrackName} searchHandler={this.searchHandler}/>

      <AddToPlaylist  addSongHandler={this.addSongHandler} access_token={this.state.access_token} spotifyUserID={this.state.spotifyUserID} partyPlaylists={this.state.partyPlaylists} playlistAddID={this.state.playlistAddID} textInputHandler={this.textInputHandler} songAddedID={this.state.songAddedID}/> 
      
    </div>
    )
  }
}

export default Spotify;