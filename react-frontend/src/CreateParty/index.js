import React, {Component} from 'react';

class CreateParty extends Component {
  constructor(){
    super();
    this.state = {
      name:'',
      date:'',
      location: '',
      information: ''
    }
  }
  updateParty = (e) =>{
    //remember this syntax is called computed properties
    this.setState({[e.currentTarget.name]:e.currentTarget.value});
  }
  render(){
    return(
      <form onSubmit={this.props.addParty.bind(null,this.state)}>
        <label>
          <input type='text' name='name' placeholder='name' onChange={this.updateParty}/>
        </label>
        <label>
          <input type='text' name='date' placeholder='date' onChange={this.updateParty}/>
        </label>
        <label>
          <input type='text' name='location' placeholder='location' onChange={this.updateParty}/>
        </label><label>
          <input type='text' name='information' placeholder='information' onChange={this.updateParty}/>
        </label>
          <input type='Submit' value='Create Party'/>
      </form>
    )
  }
}

export default CreateParty;
