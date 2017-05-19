import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.switchM = this.switchM.bind(this);
  }

  switchM(event) {
    this.props.switchM();
  }

  render() {
    return (
      <button className="cat-button" onClick={this.switchM}>
        {this.props.title}
      </button>
    );
  }
}


export default Button;
