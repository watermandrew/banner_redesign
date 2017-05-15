import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import CardItem from './card-item';
import CreditCardEdit from './edit-credit-card';
//
// const cardData = [
//   { cardName: 'Bob', cardNum: 'xxxx-xxxx-xxxx-1234' },
//   { cardName: 'Billy', cardNum: 'xxxx-xxxx-xxxx-4321' },
// // ];
//

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="newPost">
        <div className="heading">
          <span>Choose Payment Type</span>
          <CreditCardEdit />
        </div>
      </div>
    );
  }
}

export default Payment;
