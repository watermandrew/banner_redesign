import React, { Component } from 'react';
// import * as firebasedb from '../firebasedb';

class NewCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      links: this.props.links,
      selectedLinks: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.createCategory = this.createCategory.bind(this);

    // this.onButtonClick = this.onButtonClick.bind(this);
  }
  // componentDidMount() {
  //   this.setState({ links: firebasedb.fetchAllLinks() });
  // }
  onInputChange(event) {
    this.setState({ title: event.target.value });
  }
  onButtonClick(selected) {
    console.log(selected);
    const newArray = this.state.selectedLinks;
    if (document.getElementById(selected).textContent === '+') {
      newArray.push(selected);
      this.setState({ selectedLinks: newArray });
      document.getElementById(selected).textContent = '-';
      console.log('selected links');
      console.log(this.state.selectedLinks);
    } else if (document.getElementById(selected).textContent === '-') {
      document.getElementById(selected).textContent = '+';
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

  render() {
    return (
      <div>
        <div id="new-category">
          <h2>Create a New Category</h2>
          <div>Title: <input type="text" name="My Category Name" placeholder="Type a new category name here" onChange={this.onInputChange} value={this.state.title} /></div>
          <hr />
          <div><i><b>Select from the alphabetized links below:</b></i></div>
          <br />
          {this.state.links.map((item) => {
            return (
              <div className="modal-links">
                <li>{item.name}</li>
                <div role="button" className="add-button" id={item.name} onClick={clicked => this.onButtonClick(item.name)}>+</div>
              </div>
            );
          })}
        </div>
        <div className="container">
          <button id="close-button" onClick={this.props.onClose}>Close</button>
        </div>
        <button id="creat-button" onClick={this.createCategory}>Create</button>
      </div>
    );
  }
}


export default NewCategory;
