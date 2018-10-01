import React from "react";
import reactDOM from "react-dom";
import {Route, Link, Redirect, BrowserRouter as Router,} from 'react-router-dom';
import Signup from './Signup';
import Forgotpassword from './Forgotpassword';
import axios from 'axios';

class Login extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        isLoginOpen: true,
        redirectToPreviousRoute: false
      };
    }

    showLoginBox = () => {
        this.setState({isLoginOpen: true
        });
      }
      render() {

        return (
          <div className="root-container">
            <LoginBox/>
          </div>
        );
    
      }
    
    }
    
    const forgotPassword = () =>(
      <div>
        <Forgotpassword/>
      </div>
    );

    class LoginBox extends React.Component {

        constructor(props) {
          super(props);
          this.state = {
              "email":"",
              "password":""
          };
        }
        handleChange = (e) =>{
          this.setState({[e.target.name]:e.target.value})
         
        }
      
        submitLogin = (e) => {
          const login = {
            "email":this.state.email,
            "password":this.state.password
          }
          console.log(login)
          axios.post('http://localhost:8000/auth/signin',login).then((res)=>{
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
                  <label htmlFor="email">Email</label>
                  <input name="email" type="text"  placeholder="Email" onChange={this.handleChange}/>
                </div>
      
                <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={this.handleChange}/>
                </div>
      
                <button
                  type="button"
                  className="login-btn"
                  onClick={this.submitLogin}>Login</button>
              </div>
                <div>
                 
                    <li><Link to="/Forgotpassword">Forgotpassword</Link></li>
                    <Route path="/Forgotpassword" render={() => (<div> <Forgotpassword/></div>)}/>
                    {/* <Route path="/Forgotpassword" component={forgotPassword}/> */}
                  
                </div>
              <h5> </h5>
              <a href="/Sign up">create your account here</a> 
            </div> 
          );
        }
      
      }

export default Login;
