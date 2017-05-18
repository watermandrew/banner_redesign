import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import NavBar from './nav';
import '../style.scss';
import Modal from '../modal';


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePass = this.onChangePass.bind(this);
  }

  onChangeUsername(event) {
    this.setState({ username: event.target.value });
  }

  onChangePass(event) {
    this.setState({ password: event.target.value });
  }


  render() {
    return (
      <div>
        <NavBar />
        <div id="sign-in">
          <div>Login</div>
          <div id="fields">
            <div>Username: <input type="text" onChange={this.onChangeUsername} placeholder="e.g. username@dartmouth.edu" /></div>
            <div>Password: <input type="text" onChange={this.onChangePass} placeholder="must be 8 characters long" /></div>
          </div>
          <div>
            <Link to={'/home'}><button id="sign-in-butt">Sign In!</button></Link>
          </div>
        </div>
      </div>

    );
  }
}

export default withRouter(SignIn);
