import React, {Component} from 'react';

class Register extends Component{
  constructor(){
    super();
    this.state = {
      username:'',
      password:''
    }
  }
  handleSubmit = async (e) => {
    e.preventDefault();
const registerResponse = await fetch('http://localhost:9000/auth/register', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(this.state),
      headers:{
        'Content-Type': 'application/json'
        }
    });

    const parsedResponse = await registerResponse.json();

    if(parsedResponse.data = 'register successful'){
      // this.props.history.push('/profile');
      window.location.assign('http://localhost:9000/spotify/login')
      
    }
}
  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value});
  }
  render() {
    console.log('this is the props for register',this.props);
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type='text' name='username' placeholder='username' onChange={this.handleChange}/>
        </label>
        <label>
          Password:
          <input type='password' name='password' placeholder='password' onChange={this.handleChange}/>
        </label>
        <input type='Submit' value='Register'/>
      </form>
    </div>
    )
  };
}

export default Register;
