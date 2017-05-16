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
        <i className="fa fa-user" aria-hidden="true" />
        <div id="profile-info">
          <p>Name: {this.state.username}</p>
          <p>NET ID: {this.state.netID}</p>
          <p>Credits Remaining: {this.state.remCredits}</p>
          <hr />
        </div>
        <div className="vr">&nbsp;</div>
      </div>
    );
  }
}

export default Profile;
