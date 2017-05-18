import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import CardItem from './card-item';
import CreditCardEdit from './edit-credit-card';
import NavBar from './nav';
import Modal from '../modal';
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
    this.state = {
      isOpen: false,
    };
    this.showDialog = this.showDialog.bind(this);
  }

  showDialog() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
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
          <div>
            <button id="pay-button" onClick={this.showDialog}>Complete transaction
                </button>
            <Modal show={this.state.isOpen}
              onClose={this.switch}
            >
              <div id="dialog-content">
                <div><i className="fa fa-check-circle-o" aria-hidden="true" /></div>
                <div>Thank you! Your payment is being processed. Please check your Dartmouth email for a confirmation receipt of your transaction. </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}


export default Payment;
