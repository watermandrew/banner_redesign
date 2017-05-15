import React, { Component } from 'react';

// dumb component
class CreditCardEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Divya',
      number: '1234 5678 1234 4234',
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
      <div>
        <div className="inputs">
          <input value={this.state.name} onChange={this.onChangeName} placeholder="Name on Card" />
        </div>
        <div className="inputs">
          <input value={this.state.number} onChange={this.onChangeNumber} placeholder="Card Number" />
        </div>
        <button>Edit Card Info</button>
      </div>
    );
  }
}

export default CreditCardEdit;
