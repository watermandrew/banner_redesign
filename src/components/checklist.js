import React, { Component } from 'react';

class Checklist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="checklist">
        <li>MY CHECKLIST</li>
        <li>Check in, spring 2017</li>
        <li>Fall Room Draw</li>
        <li>Course registration</li>
        <li>+ Add an item</li>
      </div>
    );
  }
}


export default Checklist;
