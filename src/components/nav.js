import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="nav">
        <div id="nav-bar">
          <div> Dartmouth Banner Student Information System </div>
          <Link to="/home"><i className="fa fa-home" aria-hidden="true" /></Link>

        </div>
      </div>
    );
  }
}

export default NavBar;
