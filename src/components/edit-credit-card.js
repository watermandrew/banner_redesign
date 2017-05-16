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
  }

  onChangeName(event) {
    this.setState({ name: event.target.value });
  }

  onChangeNumber(event) {
    this.setState({ number: event.target.value });
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
          <div> CVV Security code: <input type="text" value={this.state.number} onChange={this.onChangeNumber} placeholder="cvv" /></div>
        </div>
        <div className="inputs">
          <div> Expiration Date: <input type="text" value={this.state.number} onChange={this.onChangeNumber} placeholder="MM/YY, e.g. 01/21" /></div>
        </div>
      </div>
    );
  }
}

export default CreditCardEdit;
