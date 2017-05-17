import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import CardItem from './card-item';
import CreditCardEdit from './edit-credit-card';
import NavBar from './nav';
//
// const cardData = [
//   { cardName: 'Bob', cardNum: 'xxxx-xxxx-xxxx-1234' },
//   { cardName: 'Billy', cardNum: 'xxxx-xxxx-xxxx-4321' },
// // ];
//
// radio buttons https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_form_radio_inline&stacked=h


class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="newPost">
          <span><h2>You have a new statement. Current amount is <b>$127,000.48</b>.</h2></span>
          <div className="heading">
            <span id="card-span">Add a Payment Method:</span>
            <CreditCardEdit />
            <div id="or">-------------------------OR---------------------------</div>
            <span id="card-span">Choose an existing card:</span>
            <div className="cards">
              <div id="card-type">
                <input type="radio" id="r1" name="rr" />
                <label htmlFor="r1"><span /><i className="fa fa-cc-mastercard fa-2x" />xxxx-xxxx-xxxx-1234</label>
              </div>
              <p />
              <div id="card-type">
                <input type="radio" id="r2" name="rr" />
                <label htmlFor="r2"><span /><i className="fa fa-cc-visa fa-2x" aria-hidden="true" />xxxx-xxxx-xxxx-1027 </label>
              </div>
            </div>
          </div>
          <button id="pay-button">Complete Transaction</button>
        </div>
      </div>
    );
  }
}

export default Payment;
