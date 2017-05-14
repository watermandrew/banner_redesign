import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Divya Kalidindi',
      netID: 'F001027',
      remCredits: '2',

    };
  }
  render() {
    return (
      <div id="profile">
        <h1>Profile </h1>
        <div id="profile-info">
          <p>Name: {this.state.username}</p>
          <p>NET ID: {this.state.netID}</p>
          <p>Credits Remaining: {this.state.remCredits}</p>
        </div>
      </div>
    );
  }
}

export default Profile;
