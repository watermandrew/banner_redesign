import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import NavBar from './nav';
import '../style.scss';


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div>
        <NavBar />
        <div>Login Page</div>
        <div>Email: <input /></div>
        <div>Password: <input /></div>
        <div>
          <Link to={'/home'}><button>Sign In!</button></Link>
        </div>
      </div>

    );
  }
}

export default withRouter(SignIn);
