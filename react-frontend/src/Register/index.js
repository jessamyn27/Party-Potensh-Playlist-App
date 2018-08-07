import React, {Component} from 'react';

class Register extends Component{
  constructor(){
    super();
    this.state = {
      username:'',
      password:''
    }
  }
  updateRegister = (e) => {
    this.setState({[e.currentTarget.name]:e.currentTarget.value});
  }
  render() {
    return(
      <div>
      <form >
        {/* // onSubmit={this.props.addRegister.bind(null, this.state)}> */}
        <label>
          Create A Username:
          <input type='text' name='username' placeholder='username' onChange={this.updateRegister}/>
        </label>
        <label>
          Create A Password:
          <input type='password' name='password' placeholder='password' onChange={this.updateRegister}/>
        </label>
        <input type='Submit' value='Register'/>
      </form>
    </div>
    )
  };
}

export default Register;
