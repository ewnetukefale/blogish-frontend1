import React from "react";
import reactDOM from "react-dom";
import axios from 'axios';

class Resetpassword extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          isResetOpen: true
        };
      }
      showLoginBox = () => {
        this.setState({isResetOpen: true
        });
      }

      render(){
          return(
            <div className="root-container">
              <ResetBox/>
           </div> 
          );
      }
}

class ResetBox extends React.Component{
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    submitReset(e) {}
  
    render(){
      return(
        <div className="inner-container">
          <div className="input-group">
          <label htmlFor="password">New Password</label>
                  <input
                    type="password"
                    name="password"
                    className="login-input"
                    placeholder="New Password"/>
          </div>

          <div className="input-group">
          <label htmlFor="password">Repeat Password</label>
                  <input
                    type="password"
                    name="password"
                    className="login-input"
                    placeholder="Repeat Password"/>
          </div>
  
          <button
              type="button"
              className="Submit-btn"
              onClick={this.submitReset}>Submit</button>
        </div>
      );
    }
  }
  export default Resetpassword;