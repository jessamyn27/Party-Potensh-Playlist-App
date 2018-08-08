import React, {Component} from 'react';
import queryString from 'query-string';
import SpotifyPlaylistSearch from '../SpotifyPlaylistSearch';
import SearchForSong from '../SongSearch';

class Spotify extends Component {
  constructor() {
    super();
    this.state = {
      serverData: {},
      filterString: '',
      playlists: [],
      spotifyUserID: '',
      spotifyName: '',
      access_token: '',
    }
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
    }).then(response => response.json())
  
    .then(data => this.setState({
      // console.log(state, 'this is state');
      playlists: data.items.map((item) => {
        console.log(data, 'data in playlist')
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

    // *** THIS IS PRACTIVE API MANGLING FOR IMAGES
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
      <SpotifyPlaylistSearch access_token={this.state.access_token}/>
      <SearchForSong access_token={this.state.access_token}/>
    </div>
    )
  }
}

export default Spotify;
