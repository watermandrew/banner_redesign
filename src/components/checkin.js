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
          <Link to={'/home'}><i className="fa fa-home fa-4x" aria-hidden="true" /></Link>
          <div>Hello Divya! Please enter the details below to check in!</div>
          <div>Name: <input /></div>
          <div>Emergency Contact Information: <input /></div>
          <button onClick={this.onButtonClick}>Check in!</button>
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
