import React, {Component} from 'react';
import Login from '../Login';

class Logout extends Component{
  constructor(){
    super();
    this.state = {
      username:'',
      password:''
    }
  }
  handleClick = async (e) => {
    e.preventDefault();
const logoutResponse = await fetch('http://localhost:9000/auth/logout');

    const parsedResponse = await logoutResponse.json();

    console.log(parsedResponse);
    console.log(this.props,'this is props on handleClick');
    if(parsedResponse.data === 'Logout successful'){
      this.props.history.push('/Welcome');
      console.log('this is something');
     }
    }
  render() {
    console.log(this.props, 'Logout Props?????')
    return(
      <div>
      <a href='/Logout' onClick={this.handleClick}>Logout</a>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

     </div>
    )
  };
}

export default Logout;
