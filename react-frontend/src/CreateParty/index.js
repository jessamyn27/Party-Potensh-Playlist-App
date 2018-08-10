import React, {Component} from 'react';

class CreateParty extends Component {
  constructor(){
    super();
    this.state = {
      name:'',
      date:'',
      location: '',
      zip:'',
      information: '',
      playlistID: ''
    }
  }
  updateParty = (e) =>{
    //remember this syntax is called computed properties
    this.setState({[e.currentTarget.name]:e.currentTarget.value});
  }
  render(){
    console.log(this, ' this is props for create party');
    return(
<div>
      <div>
        <h1 className="partyTitle">Create Your Party Here!</h1>
      </div>
      <div className="partyBackground">
      <div className="partyForm">
      <form onSubmit={this.props.addParty.bind(null,this.state)}>
        <label>
          <input type='text' name='name' placeholder='name' onChange={this.updateParty}/>
        </label>
        <label>
          <input type='date' name='date' placeholder='date' onChange={this.updateParty}/>
        </label>
        <label>
          <input type='text' name='location' placeholder='location' onChange={this.updateParty}/>
        </label>
        <label>
          <input type='text' name='zip' placeholder='Zip Code' onChange={this.updateParty}/>
        </label>
        <label>
          <input type='text' name='information' placeholder='information' onChange={this.updateParty}/>
        </label>
        <label>
          <input type='text' name='playlistID' placeholder='Spotify Playlist URI ' onChange={this.updateParty}/>
        </label>
          <input type='Submit' value='Create Party'/>
      </form>
    </div>
  </div>
  </div>
    )
  }
}

export default CreateParty;
