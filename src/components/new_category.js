import React, { Component } from 'react';
import Immutable from 'immutable';
import Sure from './sure';
// import * as firebasedb from '../firebasedb';

class NewCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      links: this.props.links,
      selectedLinks: [],
      isOpenSure: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.createCategory = this.createCategory.bind(this);
    this.sureDialog = this.sureDialog.bind(this);

    // this.onButtonClick = this.onButtonClick.bind(this);
  }
  // componentDidMount() {
  //   this.setState({ links: firebasedb.fetchAllLinks() });
  // }
  onInputChange(event) {
    this.setState({ title: event.target.value });
  }
  onButtonClick(selected) {
    console.log(`selected is ${selected}`);
    const newArray = this.state.selectedLinks;
    if (document.getElementById(selected.name).textContent === '+') {
      newArray.push(selected);
      this.setState({ selectedLinks: newArray });
      document.getElementById(selected.name).textContent = '-';
      console.log('selected links');
      console.log(this.state.selectedLinks);
    } else if (document.getElementById(selected.name).textContent === '-') {
      document.getElementById(selected.name).textContent = '+';
      const index = newArray.indexOf(selected);
      if (index > -1) {
        newArray.splice(index, 1);
        this.setState({ selectedLinks: newArray });
        console.log(this.state.selectedLinks);
      }
    }
  }
  createCategory() {
    const cat = {
      title: this.state.title,
      links: this.state.selectedLinks,
    };
    this.props.create(cat);
  }
  showLinks() {
    // const myMap = Immutable.Map(this.state.links);
    // console.log(`map is ${myMap}`);
    console.log(`this.state.links is ${this.state.links}`);
    if (this.state.links) {
      return (
      this.state.links.map((item) => {
        return (
          <div className="modal-links">
            <li>{item.name}</li>
            <div role="button" className="add-button" id={item.name} onClick={clicked => this.onButtonClick(item)}>+</div>
          </div>
        );
      })
      );
    }
  }

  sureDialog() {
    this.setState({
      isOpenSure: !this.state.isOpenSure,
    });
  }


  render() {
    const isEnabled =
    this.state.selectedLinks.length > 0 &&
    this.state.title.length > 0;

    console.log(this.state.links);
    return (
      <div>
        <div id="new-category">
          <h2>Create a New Category</h2>
          <div>Title: <input type="text" name="My Category Name" placeholder="Type a new category name here" onChange={this.onInputChange} value={this.state.title} /></div>
          <hr />
          <div><i><b>Select from the alphabetized links below:</b></i></div>
          <br />
          {this.showLinks()}
        </div>
        <div className="container">
          <button id="close-button" onClick={this.sureDialog}>Cancel</button>

          <Sure show={this.state.isOpenSure}
            onClose={this.sureDialog}
          >
            <div id="dialog-content">
              <div><i className="fa fa-exclamation-circle fa-3x" aria-hidden="true" />
              </div>
              <div>Are you sure you want to exit? You have some unsaved changes. </div>
              <button onClick={this.props.onClose}>Yes, I am sure.</button>
            </div>
          </Sure>
          <button id="creat-button" disabled={!isEnabled} onClick={this.createCategory}>Create</button>
        </div>

      </div>
    );
  }
}


export default NewCategory;
