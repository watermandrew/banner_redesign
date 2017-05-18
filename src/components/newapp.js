import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import { withRouter } from 'react-router-dom';
// import Category from './components/category';
// import Modal from './Modal';
import Profile from './profile';
import * as firebasedb from '../firebasedb';


import '../style.scss';
// import { NewCategory } from './components/new_category';
import NewModal from './new_category_modal';
import CategoryModal from './category_modal';
import NavBar from './nav';
// import Payment from './payment';
import Checklist from './checklist';
import Button from './cat_button';

class NewApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: Immutable.Map(),
      selectedKey: '',
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
    this.switchChosen = this.switchChosen.bind(this);
    this.deleteCat = this.deleteCat.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateLinks = this.updateLinks.bind(this);
  }
  componentDidMount() {
    firebasedb.fetchAllLinks((items) => {
      const mapLinks = Immutable.Map(items);
      this.setState({ links: mapLinks });
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
  switchChosen() {
    this.setState({
      chosen: !this.state.chosen,
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
  chooseCat(key, cat) {
    this.setState({
      selectedCat: cat,
      selectedKey: key,
      chosen: true,
    });
  }
  deleteCat(id) {
    firebasedb.deleteCategory(id);
    this.setState({
      selectedCat: {
        title: '',
        links: [],
      },
      selectedKey: '',
      chosen: false,
    });
  }
  updateTitle(id, newTitle) {
    firebasedb.updateTitle(id, newTitle);
  }
  updateLinks(id, newLinks) {
    firebasedb.updateLinks(id, newLinks);
  }
  showCats() {
    if (this.state.categories) {
      return (
        <div id="categories">
          {
          this.state.categories.entrySeq().map(([id, cat]) => {
            return (

              <div className="many-cats">
                <div>
                  <button className="cat"onClick={(i, c) => this.chooseCat(id, cat)}>
                    {cat.title}
                  </button>
                  <br />
                </div>
              </div>
            );
          })
        }
        </div>
      );
    }
  }


  render() {
    return (
      <div>
        <NavBar />
        <div id="whole-enchilada">
          <div id="column">
            <Profile />
            <Checklist />
          </div>
          <div className="categories">
            <Button switchM={this.switchMode} />
            <NewModal show={this.state.isOpen} links={this.state.links} create={this.createCategory} onClose={this.switchMode}> Stuff here </NewModal>
            <CategoryModal id={this.state.selectedKey} cat={this.state.selectedCat} show={this.state.chosen} onClose={this.switchChosen} deleteCat={this.deleteCat} updateTitle={this.updateTitle} updateLinks={this.updateLinks}> Stuff here </CategoryModal>
            {this.showCats()}
          </div>
        </div>
      </div>

    );
  }
}


// export default NewApp;
export default withRouter(NewApp);
