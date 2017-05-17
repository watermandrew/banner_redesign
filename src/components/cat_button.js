import React, { Component } from 'react';

class CatButton extends Component {
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
      <button id="cat-button" onClick={this.switchM}>
      + Create a Category
      </button>
    );
  }
}


export default CatButton;
