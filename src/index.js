import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Category from './components/category';
// import Modal from './Modal';
import Profile from './components/profile';
import Immutable from 'immutable';

import * as firebasedb from './firebasedb';

import './style.scss';
// import { NewCategory } from './components/new_category';
import NewModal from './components/new_category_modal';
import CategoryModal from './components/category_modal';
import NavBar from './components/nav';
import Payment from './components/payment';


// basics for this were taken from https://www.npmjs.com/package/react-modal website

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: Immutable.Map(),
      selectedCat: {
        title: '',
        links: [],
      },
      link: 'Hello',
      // links: ['link1', 'link2', 'link3', 'link4'],
      links: [],
      isOpen: false,
      chosen: false,
    };
    this.switchMode = this.switchMode.bind(this);
    this.createCategory = this.createCategory.bind(this);
    this.chooseCat = this.chooseCat.bind(this);
  }
  componentDidMount() {
    firebasedb.fetchAllLinks((links) => {
      this.setState({ links });
    });

    firebasedb.fetchCategories((cats) => {
      const allCats = Immutable.Map(cats);

      this.setState({ categories: allCats });
    });
  }
  switchMode() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  wantsToCancel() {
    this.setState({
      wantsCancel: true,
    });
  }
  createCategory(cat) {
    firebasedb.createCategory(cat);

    this.switchMode();
  }
  chooseCat(cat) {
    this.setState({
      selectedCat: cat,
      chosen: true,
    });
  }
  showCats() {
    if (this.state.categories) {
      return (
        <div>
          {
          this.state.categories.entrySeq().map(([key, cat]) => {
            return (
              <div>
                <div className="cat">
                  <button onClick={clicked => this.chooseCat(cat)}>
                    {cat.title}
                  </button>
                </div>
              </div>
            );
          })
        }
        </div>);
    }
  }
  showChosen() {
          // <CategoryModal cat={this.state.selectedCat} show={this.state.chosen} onClose={this.switchMode}> Stuff here </CategoryModal>

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
          <Payment />
          <NewModal show={this.state.isOpen} links={this.state.links} create={this.createCategory} onClose={this.switchMode}> Stuff here </NewModal>
          <CategoryModal cat={this.state.selectedCat} show={this.state.chosen}> Stuff here </CategoryModal>
        </div>
        <div className="categories">
          {this.showCats()}
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('main'));
