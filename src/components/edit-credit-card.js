import React, { Component } from 'react';

// dumb component
class CreditCardEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onChangeCVV = this.onChangeCVV.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
  }

  onChangeName(event) {
    this.setState({ name: event.target.value });
  }

  onChangeNumber(event) {
    this.setState({ number: event.target.value });
  }


  onChangeCVV(event) {
    this.setState({ cvv: event.target.value });
  }

  onChangeDate(event) {
    this.setState({ date: event.target.value });
  }

  render() {
    return (
      <div id="payment">
        <div className="inputs">
          <div>Name on Card: <input type="text" value={this.state.name} onChange={this.onChangeName} placeholder="e.g. Jane Doe" /></div>
        </div>
        <div className="inputs">
          <div> Card Number: <input type="text" value={this.state.number} onChange={this.onChangeNumber} placeholder="xxxx-xxxx-xxxx-xxxx" /></div>
        </div>
        <div className="inputs">
          <div> CVV Security code: <input type="text" value={this.state.cvv} onChange={this.onChangCVV} placeholder="cvv" /></div>
        </div>
        <div className="inputs">
          <div> Expiration Date: <input type="text" value={this.state.date} onChange={this.onChangeDate} placeholder="MM/YY, e.g. 01/21" /></div>
        </div>
      </div>
    );
  }
}

export default CreditCardEdit;
