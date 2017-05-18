import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import NavBar from './nav';
//
// const cardData = [
//   { cardName: 'Bob', cardNum: 'xxxx-xxxx-xxxx-1234' },
//   { cardName: 'Billy', cardNum: 'xxxx-xxxx-xxxx-4321' },
// // ];
//
// radio buttons https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_form_radio_inline&stacked=h


class Checkin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedin: false,
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(event) {
    this.setState({ checkedin: true });
  }

  checkinStatus() {
    if (!this.state.checkedin) {
      return (
        <div>
          <NavBar />
          <div id="check-in-rem">
            <h2>Please update the details below to check in for Summer Term, 2017</h2>
            <h2><b>Reminder</b>: If you do not check in by June 18th, your account will be billed $50 for each week.</h2>
          </div>
          <div id="checkin">
            <div><b>Name:</b> <input type="text" placeholder="enter your full name" /></div>
            <div><b>Emergency Contact Information:</b> <input type="text" placeholder="Enter phone number" /></div>
            <div><b>Contact name:</b> <input type="text" placeholder="Enter contact's full name" /></div>
            <div><b>Relationship:</b> <input type="text" placeholder="e.g. Parent, Spouse" /></div>
            <div><b>Phone number:</b> <input type="text" placeholder="Enter phone number" /></div>
            <button id="pay-button" onClick={this.onButtonClick}>Check in!</button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <i className="fa fa-smile-o" aria-hidden="true" />
          <Link to={'/home'}>You have succesfully checked in!Click here to go to the main page!</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>{this.checkinStatus()}</div>

    );
  }
}

export default withRouter(Checkin);
