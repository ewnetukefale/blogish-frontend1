import React from "react";
import reactDOM from "react-dom";
import Login from './Login';
import axios from 'axios';

class Signup extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        isRegisterOpen: true
      };
    }
  
    showRegisterBox  = () => {
      this.setState({isRegisterOpen: true});
    }
  
    render() {
  
      return (
        <div className="root-container">
         <RegisterBox/>
        </div>
      );
  
    }
  
  }

  class RegisterBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        "username":"",
        "email":"",
        "password":""
    };
  }

  submitRegister = (e) => {
    const signup = {
      "username":this.state.username,
      "email":this.state.email,
      "password":this.state.password
    }
      console.log(signup)
      axios.post('http://localhost:8000/auth/sign_up',signup).then((res)=>{
        console.log(res)
      }).catch((e)=>{
        console.log(e)
      })
  }

  render() {
    return (
      <div className="inner-container">
        <div className="box">

          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"/>
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" className="login-input" placeholder="Email"/>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"/>
          </div>

          <button
            type="button"
            className="login-btn"
            onClick={this.submitRegister}>Register</button>

        </div>
        <a href="/Login">Login to your account</a>
      </div>

    );

  }

}

export default Signup;