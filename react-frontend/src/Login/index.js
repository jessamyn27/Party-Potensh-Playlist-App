import React, {Component} from 'react';

class Login extends Component{
  constructor(){
    super();
    this.state = {
      username:'',
      password:''
    }
  }
  handleSubmit = async (e) => {
    e.preventDefault();
//we're trying to send this to the database
const loginResponse = await fetch('http://localhost:9000/auth/login', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(this.state),
      headers:{
        'Content-Type': 'application/json'
        }
    });

    const parsedResponse = await loginResponse.json();

    if(parsedResponse.data = 'login successful'){
      // switch our route
      //Programitically switch
      this.props.history.push('/profile');
    }
}
  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value});
  }
  render() {
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
        <input type='Submit' value='Login'/>
      </form>
    </div>
    )
  };
}

export default Login;
