import React from "react";
import reactDOM from "react-dom";
import axios from 'axios';

class Forgotpassword extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          isForgotOpen: true
        };
      }
      showLoginBox = () => {
        this.setState({isForgotOpen: true
        });
      }

      render(){
          return(
            <div className="root-container">
              <ForgotBox/>
           </div> 
          );
      }
}

class ForgotBox extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      "email":""
    };
  }

  submitForgot = (e)=> {
    const forgotpassword = {
      "email":this.state.email
    }
      console.log(forgotpassword)
      axios.post('http://localhost:8000/auth/forgot_password',forgotpassword).then((res)=>{
        console.log(res)
      }).catch((e)=>{
        console.log(e)
      })
  }

  render(){
    return(
      <div className="inner-container">
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" className="Forgot-input" placeholder="Email"/>
        </div>

        <button
            type="button"
            className="Send-btn"
            onClick={this.submitForgot}>Send</button>
      </div>
    );
  }
}
export default Forgotpassword;