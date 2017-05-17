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
          <div className="heading">
            <span> Your current bill statement is <b>$127000</b> </span>
            <span>Add a Payment Method</span>
            <CreditCardEdit />
            <div>
              <span>or choose an existing card</span>
              <div id="card-type">
                <input type="radio" id="r1" name="rr" />
                <label htmlFor="r1"><span /><i className="fa fa-cc-mastercard fa-3x" />Mastercard: xxxx-xxxx-xxxx-1234</label>
              </div>
              <p />
              <div id="card-type">
                <input type="radio" id="r2" name="rr" />
                <label htmlFor="r2"><span /><i className="fa fa-cc-visa fa-3x" aria-hidden="true" />Visa: xxxx-xxxx-xxxx-1027 </label>
              </div>
            </div>
          </div>
          <button>Pay</button>
        </div>
      </div>
    );
  }
}

export default Payment;
