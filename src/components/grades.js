import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NavBar from './nav';

class Grades extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div>
        <NavBar />
        <div>Grades for Winter 2017:</div>
        <div>COSC 50: A-</div>
        <div>COSC 70: B+</div>
        <div>MATH 22: A</div>
      </div>


    );
  }
}

export default withRouter(Grades);
