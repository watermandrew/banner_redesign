import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
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
        <div className="grades">
          <ul>
            <li id="title">Grades for Winter 2017</li>
            <div id="listitem">
              <div id="itm">
                <li>COSC 50: A-</li>
                <li>Median: A-</li>
              </div>
              <hr />
              <div id="itm">
                <li>COSC 70: B+</li>
                <li>Median: B+</li>
              </div>
              <hr />
              <div id="itm">
                <li>MATH 22: A</li>
                <li>Median: B+</li>
              </div>

            </div>
            <Link to={'/home'}><button id="sign-in-butt">Go back to home page</button></Link>
          </ul>
        </div>
      </div>


    );
  }
}

export default withRouter(Grades);
