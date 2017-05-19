import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import NavBar from './nav';
import Modal from '../modal';
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
    this.showDialog = this.showDialog.bind(this);
  }

  showDialog() {
    this.setState({
      checkedin: !this.state.checkin,
    });
  }

  render() {
    return (
      <div>
        <NavBar />
        <div id="check-in-rem">
          <h2>Please update the details below to check in for Summer Term, 2017</h2>
          <h2><b>Reminder</b>: If you do not check in by June 18th, your account will be billed $50 for each week.</h2>
        </div>
        <div id="checkin">
          <div><b>Name:</b> <input type="text" placeholder="enter your full name" /></div>
          <div><b>Emergency Contact name:</b> <input type="text" placeholder="Enter contact's full name" /></div>
          <div><b>Relationship:</b> <input type="text" placeholder="e.g. Parent, Spouse" /></div>
          <div><b>Phone number:</b> <input type="text" placeholder="e.g. 1-209-222-3333" /></div>
          <div>
            <button id="pay-button" onClick={this.showDialog}>Check in
                </button>
            <Modal show={this.state.checkedin}
              onClose={this.switch}
            >
              <div id="dialog-content">
                <div><i className="fa fa-check-circle-o" aria-hidden="true" /></div>
                <div><b>Thank you! You are now enrolled for summer term, 2017.</b></div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    );
  }

}

export default withRouter(Checkin);
