import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Category from './components/category';
// import Modal from './Modal';

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
    this.chooseCat = this.chooseCat.bind(this);
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
  chooseCat(links) {
    console.log(links);
  }
  render() {
    return (
      <div>
        <NavBar />
        <div className="modal-pop-up">
          <button onClick={this.switchMode}>
            open me!!
          </button>
          <NewModal show={this.state.isOpen} links={this.state.links} create={this.createCategory}> Stuff here </NewModal>
        </div>
        <div className="categories">
          {this.state.categories.map((cat) => {
            console.log(cat);
            return (
              <div>
                <div className="cat">
                  <button onClick={clicked => this.chooseCat(cat.links)}>
                    {cat.title}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('main'));
