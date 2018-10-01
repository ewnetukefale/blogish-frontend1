import React, { Component } from 'react';
import {Route, Link, Redirect, BrowserRouter as Router,} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Forgotpassword from './Forgotpassword';
import Resetpassword from './Resetpassword';
import './App.css';

const AuthService = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  logout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
};

const SecretRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    AuthService.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/Login' />
  )} />
);

const Home = () => (
  <div>
    <h2>This is home page</h2>
    <p> this is where all the randomized blog post will be shown</p>
  </div>
);

const login = () => (
  <div>
    <Login/>
  </div>
);

const signUp = () => (
  <div>
    <Signup/>
  </div>
);

const catagories = ({match}) => (
  <div>
    <ul>
      <li><Link to={`${match.url}/Technology`}>Technology</Link></li>
      <li><Link to={`${match.url}/Business`}>Business</Link></li>
      <li><Link to={`${match.url}/Websites`}>Websites</Link></li>
    </ul>

    <Route exact path={`${match.path}/:catagories`} render={({match}) => (<div> This is {match.params.catagories} page</div>)}/>

  </div>
);

const dashboard = () => (
  <div> This is a dashboard page </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Login">Login</Link></li>
          <li><Link to="/Sign up">Sign Up</Link></li>
          <li><Link to="/Catagories">Catagories</Link></li>
          <li><Link to="/Dashboard">Dashboard</Link></li>

        </ul>

        <Route path="/" exact component={Home}/>
        <Route path="/Login" component={login}/>
        <Route path="/Sign up" component={signUp}/>
        <Route path="/Catagories" component={catagories}/>
        <SecretRoute path="/Dashboard" component={dashboard}/>
      </div>
    );
  }
}

export default App;
