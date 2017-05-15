import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Category from './components/category';
// import Modal from './Modal';
import Profile from './components/profile';

import * as firebasedb from './firebasedb';

import './style.scss';
// import { NewCategory } from './components/new_category';
import NewModal from './components/new_category_modal';
import NavBar from './components/nav';


// basics for this were taken from https://www.npmjs.com/package/react-modal website

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      link: 'Hello',
      // links: ['link1', 'link2', 'link3', 'link4'],
      links: [],
      isOpen: false,
    };
    this.switchMode = this.switchMode.bind(this);
    this.createCategory = this.createCategory.bind(this);
  }
  componentDidMount() {
    firebasedb.fetchAllLinks((links) => {
      this.setState({ links });
    });

    firebasedb.fetchCategories((cats) => {
      this.setState({ categories: cats });
    });
  }
  switchMode() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  createCategory(cat) {
    firebasedb.createCategory(cat);

    this.switchMode();
  }
  render() {
    return (
      <div>
        <NavBar />
        <Profile />
        <div id="checklist">
          <li>MY CHECKLIST</li>
          <li>Check in, spring 2017</li>
          <li>Fall Room Draw</li>
          <li>Course registration</li>
          <li>+ Add an item</li>
        </div>
        <div>
          <button id="modal-button" onClick={this.switchMode}>
            + Create a Category
          </button>
          <NewModal show={this.state.isOpen} links={this.state.links} create={this.createCategory} onClose={this.switchMode}> Stuff here </NewModal>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('main'));
